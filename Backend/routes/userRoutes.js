import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import uploadPDF from '../middlewares/fileUploadMiddleware.js';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js';
import { uploadCV } from '../controllers/fileUploadController.js';


const router = express.Router();


//Get Candidate
router.post("/get-candidate", userAuth, getUser);
//Update Candidate
router.put("/update-candidate", userAuth, updateUser);
//Delete Candidate
router.put("/delete-candidate", userAuth, deleteUser);
//Get All Candidates
router.get("/get-all-candidates", getAllUsers);

//Upload CVs
router.post("/upload-cv", userAuth, uploadPDF,  uploadCV);



export default router;