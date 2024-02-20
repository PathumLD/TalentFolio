import express from 'express';
import candidateAuth from '../middlewares/authMiddleware.js';
import uploadPDF from '../middlewares/fileUploadMiddleware.js';
import { deleteCandidate, getAllCandidates, getCandidate, updateCandidate } from '../controllers/candidateController.js';
import { uploadCV } from '../controllers/fileUploadController.js';


const router = express.Router();


//Get Candidate
router.post("/get-candidate", candidateAuth, getCandidate);
//Update Candidate
router.put("/update-candidate", candidateAuth, updateCandidate);
//Delete Candidate
router.put("/delete-candidate", candidateAuth, deleteCandidate);
//Get All Candidates
router.get("/get-all-candidates", getAllCandidates);

//Upload CVs
router.post("/upload-cv", candidateAuth, uploadPDF,  uploadCV);



export default router;