import express from "express";
import authRoute from "./authRoutes.js";
import candidateRoute from "./candidateRoutes.js";
import companyRoute from "./companyRoutes.js";


const router = express.Router();

const path = "/v1/";

router.use(`${path}auth`, authRoute)
router.use(`${path}candidates`, candidateRoute);
router.use(`${path}companies`, companyRoute);


export default router;

