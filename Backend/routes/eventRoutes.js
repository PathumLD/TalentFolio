import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { createEvent, deleteEvent, getAllEvents, getEventById, updateEvent } from '../controllers/eventController.js';

const router = express.Router();

router.post("/create-event", userAuth, createEvent);
router.put("/update-event/:eventId", userAuth, updateEvent);

//Get All Events Route
router.get("/find-events", getAllEvents);
//Get Event By Id
router.get("/get-event/:id", getEventById);
//Delete Event
router.put("/delete-event/:id", userAuth, deleteEvent);






export default router;