import mongoose from "mongoose";
import Users from "../models/usersModel.js";


    //Update Candidate
export const updateUser = async (req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        bio,
        contact,
        address,
        linkedin,
        github,
        website,
        workplace,
        degree,
        university,
        profileImage,
        jobTitle,
      } = req.body;
    
      try {
        // if (!firstname || !lastname || !email || !contact || !jobTitle || !about) {
        //   next("Please provide all required fields");
        // }
    
        const id = req.body.user.userId;
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).send(`No user with id: ${id}`);
        }
    
        const updateUser = {
            firstname,
            lastname,
            email,
            bio,
            contact,
            address,
            linkedin,
            github,
            website,
            workplace,
            degree,
            university,
            profileImage,
            jobTitle,
          _id: id,
        };
    
        const user = await Users.findByIdAndUpdate(id, updateUser, { new: true });
    
        const token = user.createJWT();
    
        user.password = undefined;
    
        res.status(200).json({
          success: true,
          message: "User updated successfully",
          user,
          token,
        });
      } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
      }
};



    //Get Candidate
export const getUser = async (req, res, next) => {

    try {
        
        const id = req.body.user.userId;

        const user = await Users.findById({_id:id});

        if(!user) {
            return res.status(404).send({
                success: false,
                message: "user not found",
            });
        }

        user.password = undefined;
        res.status(200.).send({
            success: true,
            user: user,
            message: "User fetched successfully",
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
export const deleteUser = async (req, res, next) => {
    const {status} = req.body;

    try {
        const id = req.body.user.userId;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No user with id: ${id}`);
        }

        const deleteUser = {
            status,
            _id: id,
        };

        const user = await Users.findByIdAndUpdate(id, deleteUser, { new: true });
        const token = user.createJWT();
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "User deleted successfully",
            user,
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
export const getAllUsers = async (req, res, next) => {
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

        let queryResult = Users.find(queryObject).select("-password");

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
        const total= await Users.countDocuments(queryObject);

        const noOfPage = Math.ceil(total / limit);

        //next page
        // queryResult = queryResult.skip(skip).limit(limit);

        //show more instead of next page
        queryResult = queryResult.limit(limit * page);

        const users = await queryResult;
        res.status(200).json({
            success: true,
            total,
            noOfPage,
            data: users,
            page,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching all users",
            error: error.message,
        });
    }
};