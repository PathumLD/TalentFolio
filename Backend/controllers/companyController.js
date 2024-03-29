import mongoose from "mongoose";
import Companies from "../models/companyModel.js";

    //Company Register
export const register = async (req, res, next) => {
    const { name, email, password } =req.body;

    // Validate fields

    if(!name) {
        next("Company name is required!");
        return;
    }
    if(!email) {
        next("Email address is required!");
        return;
    }
    if(!password) {
        next("Password is required and must be greater than 6 characters!");
        return;
    }

    try {

        const accountExist = await Companies.findOne({ email });

        if (accountExist) {
            next("Email is already registered. Please login")
            return;
        }

        //Create a new account

        const company = await Companies.create({
            name,
            email,
            password,
        });

        //Company token
        const token = company.createJWT();

        res.status(201).json({ 
            success: true, 
            message: "Company account created successfully",
            user: {
                _id: company._id,
                name: company.name,
                email: company.email,
            },
            token,
        });
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ 
            success: false,
            message: error.message
        });
    }
};


    //Company Login
export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      //validation
      if (!email || !password) {
        next("Please Provide AUser Credentials");
        return;
      }
  
      const company = await Companies.findOne({ email }).select("+password");
  
      if (!company) {
        next("Invalid email or Password");
        return;
      }
  
      //compare password
      const isMatch = await company.comparePassword(password);
      if (!isMatch) {
        next("Invalid email or Password");
        return;
      }
      company.password = undefined;
  
      const token = company.createJWT();
  
      res.status(200).json({
        success: true,
        message: "Login Successfully",
        user: company,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
    }
  };


    //Update Company
export const updateCompanyProfile =async (req, res, next) => {
    const { name, contact, address, logo, description } =req.body;

    
    try {
        // Validation
        // if(!name || !contact || !address || !logo || !description ) {
        //     next("Complete all required fields!");
        //     return;
        // }

            const id = req.body.user.userId;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).send(`No Company with id: ${id}`);
            }

            const updateCompany = {
                name,
                email,
                contact,
                address,
                location,
                description,
                linkedin,
                website,
                logo,
                introVideo,
                companyStatus,
                _id: id,
            };

            const company = await Companies.findByIdAndUpdate(id, updateCompany, { 
                new: true 
            });

            const token = company.createJWT();

            company.password = undefined;

            res.status(200).json({
                success: true,
                message: "Profile updated successfully",
                user: company,
                token,
            });
            
        
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};


    //Get company Profile
export const getCompanyProfile =async (req, res, next) => {

    try {
        const id = req.body.user.userId;
        console.log(id);

        const company = await Companies.findById({_id:id});

        if(!company){
            return res.status(404).send({
                success: false, 
                message:"Company not found"
            });
        }

        company.password = undefined;
        res.status(404).send({
            success: true, 
            data: company,
        });



    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
        
    }
};


        //Get all companies
export const getCompanies =async (req, res, next) => {

    try {
        
        const {search, sort, location } = req.query;

        //conditions for searching filters
        const queryObject ={};

        if (search) {
            queryObject.name = {$regex: search, $options: "i"};
        }
        if (location) {
            queryObject.location = {$regex: location, $options: "i"};
        }

        let queryResult = Companies.find(queryObject).select("-password");

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
        const total= await Companies.countDocuments(queryObject);

        const noOfPage = Math.ceil(total / limit);

        //next page
        // queryResult = queryResult.skip(skip).limit(limit);

        //show more instead of next page
        queryResult = queryResult.limit(limit * page);

        const companies = await queryResult;
        res.status(200).json({
            success: true,
            total,
            noOfPage,
            data: companies,
            page,
        })


    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};


    // Get company jobs
export const getCompanyJobListing =async (req, res, next) => {

    const {search, sort }  = req.query;
    const id = req.body.user.userId;

    try {
        
        const queryObject ={};

        if (search) {
            queryObject.name = {$regex: search, $options: "i"};
        }

        let sorting;
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

        let queryResult = await Companies.findById({ _id:id }).populate({
            path: "jobPosts",
            options: { sort: sorting },
        });
        const companies = await queryResult;

        res.status(200).json({
            success: true,
            data: companies,
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};


    //Get company by ID
export const getCompanyById =async (req, res, next) => {

    try {
        const {id} = req.params;

        const company = await Companies.findById({_id:id}).populate({
            path: "jobPosts",
            options: {
                sort: "_id",
            },
        });

        if(!company){
            return res.status(404).send({
                success: false, 
                message:"Company not found"
            });
        }

        company.password = undefined;
        response.status(200).send({
            success:true,
            data: company,
        });


    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};


    //Delete Company

export const deleteCompany =async (req, res, next) => {
    const {companyStatus} = req.body;

    try {
        const id = req.body.user.userId;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No user with id: ${id}`);
        }

        const deleteCompany = {
             companyStatus,
            _id: id,
        };

        const company = await Companies.findByIdAndUpdate(id, deleteCompany, { new: true });
        const token = company.createJWT();
        company.password = undefined;
        res.status(200).send({
            success: true,
            message: "Company deleted successfully",
            company,
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