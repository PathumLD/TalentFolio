import mongoose from "mongoose";
import Candidates from "../models/candidateModel.js";


    //Update Candidate
export const updateCandidate = async (req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        contact,
        location,
        profileUrl,
        jobTitle,
        about,
      } = req.body;
    
      try {
        if (!firstname || !lastname || !email || !contact || !jobTitle || !about) {
          next("Please provide all required fields");
        }
    
        const id = req.body.candidate.candidateId;
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).send(`No Candidate with id: ${id}`);
        }
    
        const updateCandidate = {
          firstname,
          lastname,
          email,
          contact,
          location,
          profileUrl,
          jobTitle,
          about,
          _id: id,
        };
    
        const candidate = await Candidates.findByIdAndUpdate(id, updateCandidate, { new: true });
    
        const token = candidate.createJWT();
    
        candidate.password = undefined;
    
        res.status(200).json({
          sucess: true,
          message: "Candidate updated successfully",
          candidate,
          token,
        });
      } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
      }
};



    //Get Candidate
export const getCandidate = async (req, res, next) => {

    try {
        
        const id = req.body.candidate.candidateId;

        const candidate = await Candidates.findById({_id:id});

        if(!candidate) {
            return res.status(404).send({
                success: false,
                message: "Candidate not found",
            });
        }

        candidate.password = undefined;
        res.status(200.).send({
            success: true,
            candidate: candidate,
            message: "Candidate fetched successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "auth error",
            error: error.message,
        })
    }
};



    //Delete Candidate
export const deleteCandidate = async (req, res, next) => {
    const {status} = req.body;

    try {
        const id = req.body.candidate.candidateId;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Candidate with id: ${id}`);
        }

        const deleteUser = {
            status,
            _id: id,
        };

        const candidate = await Candidates.findByIdAndUpdate(id, deleteUser, { new: true });
        const token = candidate.createJWT();
        candidate.password = undefined;
        res.status(200).send({
            success: true,
            message: "Candidate deleted successfully",
            candidate,
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "auth error",
            error: error.message,
        })
    }
};



    //Get All Candidates
export const getAllCandidates = async (req, res, next) => {
    try {
        
        const {search, sort,jobTitle, jobType} = req.query;

        //conditions for searching filters
        const queryObject ={};

        if (search) {
            queryObject.name = {$regex: search, $options: "i"};
        }
        if (jobTitle) {
            queryObject.jobTitle = { $regex: jobTitle, $options: "i" };
        }
        if (jobType) {
            queryObject.jobType = { $regex: jobType, $options: "i" };
        }

        let queryResult = Candidates.find(queryObject).select("-password");

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
        const skip = (page - 1) * limit;

        //records count
        const total= await Candidates.countDocuments(queryObject);

        const noOfPage = Math.ceil(total / limit);

        //next page
        // queryResult = queryResult.skip(skip).limit(limit);

        //show more instead of next page
        queryResult = queryResult.limit(limit * page);

        const candidates = await queryResult;
        res.status(200).json({
            success: true,
            total,
            noOfPage,
            data: candidates,
            page,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching all candidates",
            error: error.message,
        });
    }
};