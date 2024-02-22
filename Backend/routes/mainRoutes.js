import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import companyRoute from "./companyRoutes.js";
import jobsRoute from "./jobsRoutes.js";


const router = express.Router();

const path = "/v1/";

router.use(`${path}auth`, authRoute)
router.use(`${path}candidates`, userRoute);
router.use(`${path}companies`, companyRoute);
router.use(`${path}jobs`, jobsRoute);


export default router;

