import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
    eventTitle: {
        type: String,
        required: [true, "Title is required"],
    },
    date: {
        type: String,
        required: [true, "Phone is required"],
    },
    location: {
        type: String,
        required: [true, "Skills are required"],
    },
    time: {
        type: String,
        required: [true, "Experience is required"],
    },
    description: {
        type: String,
        required: [true, "Education is required"],
    },
    image: {
        type: String,
    },
    eventStatus: {
        type: String,
        default: "active",
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Companies",
    },
    registeredUsers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
});

const event = mongoose.model("Events", eventSchema);
export default event;
