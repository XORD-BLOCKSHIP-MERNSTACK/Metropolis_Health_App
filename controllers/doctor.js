import DoctorModel from '../models/doctorDetails.js';
import TreatmentModel from '../models/treatmentModel.js';
import { UserTypes } from '../models/userModel.js';

export const createEntry = async (req, res, next) => {
  const { speciality, toDay, fromDay } = req.body;

  if (Boolean(req.user) && req.user.userType === UserTypes.Doctor) {
    if (!(speciality && toDay && fromDay)) {
      return res.status(400).json({ Message: 'Invalid Values' });
    }

    const entry = await DoctorModel.create({
      doctorId: req.user._id,
      speciality,
      fromDay,
      toDay,
    });

    return res.status(200).json({ Message: 'Entry Created', data: entry });
  }

  return res.status(400).json({ Message: 'Not Authorized' });
};

export const entryListing = async (req, res, next) => {
  const entries = await DoctorModel.find();

  return res.status(200).json({ data: entries });
};

export const createTreatment = async (req, res, next) => {
  if (req.user.userType !== UserTypes.Doctor) {
    return res.status(400).json({ Message: 'Not Authorized' });
  }

  const { patientId, appointmentId, date, perscription } = req.body;

  if (!(patientId && appointmentId && date, perscription)) {
    return res.status(400).json({ Message: 'Invalid Values' });
  }

  const treatment = await TreatmentModel.create({
    doctorId: req.user._id,
    patientId,
    appointmentId,
    date,
    perscription,
  });

  return res
    .status(200)
    .json({ Message: 'Treatment Created', data: treatment });
};

export const treatmentListing = async (req, res, next) => {
  if (req.user.userType !== UserTypes.Doctor) {
    return res.status(400).json({ Message: 'Not Authorized' });
  }

  const entries = await TreatmentModel.find({ doctorId: req.user._id });
  return res.status(400).json({ data: entries });
};
