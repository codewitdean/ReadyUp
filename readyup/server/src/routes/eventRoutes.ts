import express from "express";
import {
  completeEvent,
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/eventController";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.patch("/:id/complete", completeEvent);

export default router;