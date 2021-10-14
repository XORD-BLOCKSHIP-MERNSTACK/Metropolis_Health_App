import DoctorModel from "../models/doctorDetails.js";
import { UserTypes } from "../models/userModel.js";

export const createEntry = async (req, res, next) => {
  const { speciality, toDay, fromDay } = req.body;

  if (Boolean(req.user) && req.user.userType === UserTypes.Doctor) {
    if (!(speciality && toDay && fromDay)) {
      return res.status(400).json({ Message: "Invalid Values" });
    }

    const entry = await DoctorModel.create({
      doctorId: req.user._id,
      speciality,
      fromDay,
      toDay,
    });

    return res.status(400).json({ Message: "Entry Created", data: entry });
  }

  return res.status(400).json({ Message: "Not Authorized" });
};

export const entryListing = async (req, res, next) => {
  const entries = await DoctorModel.find();

  return res.status(400).json({ data: entries });
};
