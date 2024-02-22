import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema({

    jobTitle: {
        type: String,
        required: [true, "Job title is required"],
    },
    jobType: {
        type: String,
        required: [true, "Job type is required"],
    },
    location: {
        type: String,
        required: [true, "Job location is required"],
    },
    salary: {
        type: String,
        required: [true, "Job salary is required"],
    },
    vacancies: {
        type: Number,
    },
    experience: {
        type: String,
        default: 0,
    },
    details: [{
       desc: {type: String,},
       requirements: {type: String,},
    }],
    company :{
        type:Schema.Types.ObjectId, 
        ref:"Companies"
    },
    applicants : [{
        type: Schema.Types.ObjectId, 
        ref: "Users"
    }],
});

const Jobs = mongoose.model("Jobs", jobSchema);
export default Jobs;