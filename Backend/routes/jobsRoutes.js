import express from 'express';
import { createJob, deleteJobPost, getJobById, getJobPosts, updateJob } from '../controllers/jobController.js';
import userAuth from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post("/upload-job", userAuth, createJob);

router.put("/update-job/:jobId", userAuth, updateJob);


router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);

router.put("/delete-job/:id", userAuth, deleteJobPost);


export default router;