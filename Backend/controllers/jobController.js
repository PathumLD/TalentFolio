import mongoose from "mongoose";
import Jobs from "../models/jobsModel.js";
import Companies from "../models/companyModel.js";


  //Create Job
export const createJob = async (req, res, next) => {
    try {
      const {
        jobTitle,
        jobType,
        location,
        salary,
        vacancies,
        experience,
        desc,
        requirements,
      } = req.body;
  
      if (
        !jobTitle ||
        !jobType ||
        !location ||
        !salary ||
        !requirements ||
        !desc
      ) {
        next("Please Provide All Required Fields");
        return;
      }
  
      const id = req.body.user.userId;
  
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No Company with id: ${id}`);
  
      const jobPost = {
        jobTitle,
        jobType,
        location,
        salary,
        vacancies,
        experience,
        detail: { desc, requirements },
        company: id,
      };
  
      const job = new Jobs(jobPost);
      await job.save();
  
      //update the company information with job id
      const company = await Companies.findById(id);
  
      company.jobPosts.push(job._id);
      const updateCompany = await Companies.findByIdAndUpdate(id, company, {
        new: true,
      });
  
      res.status(200).json({
        success: true,
        message: "Job Posted SUccessfully",
        job,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
    }
};


    //Update Job
export const updateJob = async (req, res) => {
      try {
          const {
              jobTitle,
              jobType,
              location,
              salary,
              vacancies,
              experience,
              desc,
              requirements,
          } = req.body;
          const { jobId } = req.params;

  
          if (
              !jobTitle ||
              !jobType ||
              !location ||
              !salary ||
              !requirements ||
              !desc
          ) {
              return res.status(400).json({
                  success: false,
                  message: "Please provide all required fields",
              });
          }
  
          const id = req.body.user.userId;
  
          if (!mongoose.Types.ObjectId.isValid(id)) 
              return res.status(404).send(`No user with id: ${id}`);
  
          // Verify the existence of the job before updating
          const existingJob = await Jobs.findById(jobId);
  
          if (!existingJob) {
              return res.status(404).json({
                  success: false,
                  message: "Job not found",
              });
          }
  
          const jobPost = {
              jobTitle,
              jobType,
              location,
              salary,
              vacancies,
              experience,
              'detail.desc': desc,
              'detail.requirements': requirements,
              company: id,
          };
  
          const updatedJob = await Jobs.findByIdAndUpdate(jobId, jobPost, { 
              new: true 
          });
  
          res.status(200).json({
              success: true,
              message: "Job updated successfully",
              updatedJob,
          });
  
      } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
      }
};
  


  //Get Job Posts
export const getJobPosts = async (req, res) => {
    try {
        const { search, sort, location, jtype, exp } = req.query;
        const types = jtype?.split(",");
        const experiences = exp?.split("-");

        let queryObject = {};

        if (location) {
            queryObject.location = { $regex: location, $options: "i" };
        }

        if (jtype) {
            queryObject.jobType = { $in: types };
        }

        if (exp) {
            queryObject.experience = {
                $gte: experiences[0],
                $lte: experiences[1],
            };
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

        let queryResult = Jobs.find(queryObject).populate({
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
        const totalJobs = await Jobs.countDocuments(queryObject);
        const numOfPage = Math.ceil(totalJobs / limit);

        queryResult = queryResult.limit(limit*page);

        const jobs = await queryResult;

        res.status(200).json({
            success: true,
            totalJobs,
            numOfPage,
            data: jobs,
            page,
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
};


  //Get Job

  export const getJobById = async (req, res, next) => {
      try {
          const { id } = req.params;
  
          const job = await Jobs.findById({ _id: id }).populate({
              path: "company",
              select: "-password",
          });
  
          if (!job) {
              return res.status(404).json({
                  success: false,
                  message: "Job Post Not Found",
              });
          }
  
          // GET SIMILAR JOB POST
          const searchQuery = {
              $or: [
                  { jobTitle: { $regex: job?.jobTitle, $options: "i" } },
                  { jobType: { $regex: job?.jobType, $options: "i" } },
              ],
          };
  
          let queryResult = Jobs.find(searchQuery)
              .populate({
                  path: "company",
                  select: "-password",
              })
              .sort({ _id: -1 });
  
          queryResult = queryResult.limit(6);
          const similarJobs = await queryResult;
  
          res.status(200).json({
              success: true,
              data: job,
              similarJobs,
          });
      } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
      }
  };
  


  //Delete Job Post
  export const deleteJobPost = async (req, res, next) => {
    const { jobStatus } = req.body;
    console.log(jobStatus);

    try {
        const id = req.params.id; // Use req.params.id to get the job id from the URL

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No job with id: ${id}`);
        }

        // Find and update the job
        const job = await Jobs.findByIdAndUpdate(
            id,
            { jobStatus },
            { new: true }
        );

        // Check if the job was not found
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "job not found",
            });
        }

        // Ensure the job has a createJWT method before calling it
        if (job.createJWT) {
            const token = job.createJWT();
            job.password = undefined;

            res.status(200).json({
                success: true,
                message: "job deleted successfully",
                job,
                token,
            });
        } else {
            // Log a warning and send a response without the token
            console.warn("createJWT method not found on job");
            res.status(200).json({
                success: true,
                message: "job deleted successfully",
                job,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


