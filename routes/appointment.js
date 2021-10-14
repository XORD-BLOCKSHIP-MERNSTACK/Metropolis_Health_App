import express from "express";

// Controllers
import {
  createAppointment,
  appointmentListing,
} from "../controllers/appointment.js";

import protect from "../middleware/auth.js";

const router = express.Router();

// Routes
router.route("/createAppointment").post(protect, createAppointment);
router.route("/appointmentListing").get(protect, appointmentListing);

export default router;
