import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
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
    profileImage: {
        type: String,
    },
    cv: [{
        type: String,
        field: "files"
    }],
    userStatus: {
        type: String,
        default: "active"
    },
    appliedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs'
      }]
},
    {
        timestamps: true
    },
    
);

//Middleware
userSchema.pre("save", async function () {
    if (!this.isModified) return;
    
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
});

//Compare Password
userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);

    return isMatch;
};

//JWT token
userSchema.methods.createJWT =  function () {
    return Jwt.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, { 
        expiresIn: "1d" ,
    });
};

const Users = mongoose.model("Users", userSchema);

export default Users;