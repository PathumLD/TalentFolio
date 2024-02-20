import multer from "multer";
import path from 'path';
import Candidates from "../models/candidateModel.js";

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads')); // Specify the destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Use a unique filename
    },
});

const uploadPDF = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('application/pdf')) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed.'), false);
        }
    },
}).array('files', 5);

export default uploadPDF;