import mongoose from "mongoose";
import Events from "../models/eventsModel.js";
import Companies from "../models/companyModel.js";


    //Create Event
export const createEvent = async (req, res, next) => {
    try {
        const {
            eventTitle,
            date,
            location,
            time,
            description,
            image,
        } = req.body;

        if(
            !eventTitle ||
            !date ||
            !location ||
            !time ||
            !description
        ) {
            next("Please Provide All Required Fields");
            return;
        }

        const id = req.body.user.userId;

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No Company with id: ${id}`);

        const eventPost = {
            eventTitle,
            date,
            location,
            time,
            description,
            image,
            company: id
        };

        const event = new Events(eventPost);
        await event.save();

        //update the company information with event id
        const company = await Companies.findById(id);

        if(!company) {
            return res.status(404).send({
                success: false,
                message: "Company not found",
                error: error.message
            });
          }

          // Ensure that the postedEvents array is initialized
            if (!company.postedEvents) {
                company.postedEvents = [];
            }

        company.postedEvents.push(event._id);
        const updateCompany = await Companies.findByIdAndUpdate(id, company, {
            new: true,
        });

        res.status(201).json({ 
            success: true,
            message: "Event created successfully",
            event,
        });
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};


    //Update Event
export const updateEvent = async (req, res, next) => {
    try {
        const {
            eventTitle,
            date,
            location,
            time,
            description,
            image,
        } = req.body;
        const { eventId } = req.params;

        if (
            !eventTitle ||
            !date ||
            !location ||
            !time ||
            !description
        ) {
            next("Please provide all required fields");
            return;
        }
        const id = req.body.user.userId;
        if (!mongoose.Types.ObjectId.isValid(id)) 
            return res.status(404).send(`No user with id: ${id}`);

            const eventPost = {
                eventTitle,
                date,
                location,
                time,
                description,
                image,
                company: id,
            };

            const event = await Events.findByIdAndUpdate(eventId, eventPost, {
                new: true,
            });

            res.status(200).json({
                success: true,
                message: "Event Updated Successfully",
                event,
            });
        
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};


    //Get All Events
export const getAllEvents = async (req, res, next) => {
    try {
        const { search, sort, location, company } = req.query;
        const types = company?.split(",");

        let queryObject = {};

        if (location) {
            queryObject.location = { $regex: location, $options: "i" };
        }

        if (company) {
            queryObject.company = { $in: types };
        }

        if (search) {
            const searchQuery = {
                $or: [
                    { jobTitle: { $regex: search, $options: "i" } },
                    { jobType: { $regex: search, $options: "i" } },
                    { tags: { $regex: search, $options: "i" } },
                ],
            };
            queryObject = { ...queryObject, ...searchQuery };
        }

        let queryResult = Events.find(queryObject).populate({
            path: "company",
            select: "-password",
        });

        //Sorting

        if (sort === "Newest") {
            queryResult = queryResult.sort("-createdAt");
        }
        if (sort === "Newest") {
            queryResult = queryResult.sort("-createdAt");
        }
        if (sort === "A-Z") {
            queryResult = queryResult.sort("name");
        }
        if (sort === "Z-A") {
            queryResult = queryResult.sort("-name");
        }

        //Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;

        //Record counts
        const totalEvents = await Events.countDocuments(queryObject);
        const numOfPage = Math.ceil(totalEvents / limit);

        queryResult = queryResult.limit(limit*page);

        const events = await queryResult;

        res.status(200).json({
            success: true,
            totalEvents,
            numOfPage,
            data: events,
            page,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};


    //Get Event
export const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const event = await Events.findById({ _id: id }).populate({
            path: "company",
            select: "-password",
        });

        if (!event) {
            return res.status(404).json({
                message: "Event Post Not Found",
                success: false,
            });
        }

        // GET SIMILAR Event POST
        const searchQuery = {
            $or: [
                { eventTitle: { $regex: event.eventTitle || "", $options: "i" } },
                { eventType: { $regex: event.eventType || "", $options: "i" } },
            ],
        };

        let queryResult = Events.find(searchQuery)
            .populate({
                path: "company",
                select: "-password",
            })
            .sort({ _id: -1 });

        queryResult = queryResult.limit(6);
        const similarEvents = await queryResult;

        res.status(200).json({
            success: true,
            data: event,
            similarEvents,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
    
    
    //Delete Event
export const deleteEvent = async (req, res, next) => {
    const { eventStatus } = req.body;
    console.log(eventStatus);

    try {
        const id = req.params.id; // Use req.params.id to get the event id from the URL

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No event with id: ${id}`);
        }

        // Find and update the event
        const event = await Events.findByIdAndUpdate(
            id,
            { eventStatus },
            { new: true }
        );

        // Check if the event was not found
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Ensure the event has a createJWT method before calling it
        if (event.createJWT) {
            const token = event.createJWT();
            event.password = undefined;

            res.status(200).json({
                success: true,
                message: "Event deleted successfully",
                event,
                token,
            });
        } else {
            // Log a warning and send a response without the token
            console.warn("createJWT method not found on event");
            res.status(200).json({
                success: true,
                message: "Event deleted successfully",
                event,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
    
    
    
    
    