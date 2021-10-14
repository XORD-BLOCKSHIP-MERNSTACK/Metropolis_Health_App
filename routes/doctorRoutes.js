import express from 'express';

// Controllers
import {
  createEntry,
  entryListing,
  createTreatment,
  treatmentListing,
} from '../controllers/doctor.js';

import protect from '../middleware/auth.js';

const router = express.Router();

// Routes
router.route('/createEntry').post(protect, createEntry);
router.route('/entryListing').get(protect, entryListing);
router.route('/createTreatment').post(protect, createTreatment);
router.route('/treatments').get(protect, treatmentListing);

export default router;
