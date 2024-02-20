import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "./dbConfig/dbConfig.js";
//import router from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import router from "./routes/mainRoutes.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//Mongodb connection
dbConnection();


//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xss());
app.use(mongoSanitize());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(router)

// Error Middleware
app.use(errorMiddleware);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});