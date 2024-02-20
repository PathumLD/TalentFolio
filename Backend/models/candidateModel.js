import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";


const candidateSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [6, "Password should be more than 6 characters"],
        select: true,
    },

    accountType: {
        type: String,
        
    },
    bio: {
        type: String,
    },
    contact: {
        type: String,
    },
    address: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    website: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    jobType: {
        type: String,
    },
    workplace: {
        type: String,
    },
    degree: {
        type: String,
    },
    university: {
        type: String,
    },
    skills: {
        type: String,
    },
    cv: [{
        type: String,
        field: "files"
    }],
    status: {
        type: String,
    },
},
    {
        timestamps: true
    },
    
);

//Middleware
candidateSchema.pre("save", async function () {
    if (!this.isModified) return;
    
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
});

//Compare Password
candidateSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);

    return isMatch;
};

//JWT token
candidateSchema.methods.createJWT =  function () {
    return Jwt.sign({ candidateId: this._id }, process.env.JWT_SECRET_KEY, { 
        expiresIn: "1d" ,
    });
};

const Candidates = mongoose.model("Candidates", candidateSchema);

export default Candidates;