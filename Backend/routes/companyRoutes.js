import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { deleteCompany, getCompanies, getCompanyById, getCompanyJobListing, getCompanyProfile, register, signIn, updateCompanyProfile } from '../controllers/companyController.js';
import userAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

//ip rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

//Register
router.post('/register', limiter, register);

//Login
router.post('/login', limiter, signIn);

//Get Data
router.post('/get-company-profile', userAuth, getCompanyProfile);
router.post("/get-company-joblisting", userAuth, getCompanyJobListing);
router.get("/", getCompanies);
router.get("/get-company/:id", userAuth, getCompanyById);

//Update data
router.put("/update-company", userAuth, updateCompanyProfile);

//Delete data
router.put("/delete-company", userAuth, deleteCompany);
export default router;