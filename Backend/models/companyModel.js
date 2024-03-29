import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const companySchema = new Schema({
  name: {
    type: String,
    required: [true, "Company Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least"],
    select: true,
  },
  contact: { type: String },
  address: { type: String },
  location: { type: String },
  description: { type: String },
  linkedin: { type: String },
  website: { type: String },
  logo: { type: String },
  introVideo: { type: String },
  jobPosts: [{ 
    type: Schema.Types.ObjectId, 
    ref: "Jobs" 
  }],
  companyStatus: {
    type: String,
    default: "active",
  },
  appliedCandidates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  }],
  postedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Events",
  }]
});

// middlewares
companySchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
companySchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//JSON WEB TOKEN
companySchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

const Companies = mongoose.model("Companies", companySchema);

export default Companies;