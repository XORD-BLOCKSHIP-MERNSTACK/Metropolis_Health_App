import express from "express";

// Controllers
import { createEntry, entryListing } from "../controllers/doctor.js";

import protect from "../middleware/auth.js";

const router = express.Router();

// Routes
router.route("/createEntry").post(protect, createEntry);
router.route("/entryListing").get(protect, entryListing);

export default router;
