import AppointmentModel from "../models/appointmentModel.js";
import { UserTypes } from "../models/userModel.js";

export const createAppointment = async (req, res, next) => {
  const { doctorId, date, title, description } = req.body;

  if (Boolean(req.user) && req.user.userType === UserTypes.Patient) {
    if (!(doctorId && date && title && description)) {
      return res.status(400).json({ Message: "Invalid Values" });
    }

    const appointment = await AppointmentModel.create({
      patientId: req.user._id,
      doctorId,
      date,
      title,
      description,
    });

    return res
      .status(400)
      .json({ Message: "Appointment Created", data: appointment });
  }

  return res.status(400).json({ Message: "Not Authorized" });
};

export const appointmentListing = async (req, res, next) => {
  let entries;

  if (req.user.userType === UserTypes.Patient) {
    entries = await AppointmentModel.find({ patientId: req.user._id });
  } else if (req.user.userType === UserTypes.Doctor) {
    entries = await AppointmentModel.find({ doctorId: req.user._id });
  }

  return res.status(400).json({ data: entries });
};
