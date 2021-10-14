import mongoose from "mongoose";

export const AppointmentStatus = Object.freeze({
  Pending: 1,
  Completed: 2,
  Cancelled: 3,
});

const AppointmentSchema = mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  date: {
    type: String,
    required: [true, "Please provide an appointment Timing"],
  },

  title: {
    type: String,
    required: [true, "Please provide a title"],
  },

  description: {
    type: String,
    required: [true, "Please provide an appointment Timing"],
  },

  status: {
    enum: Object.values(AppointmentStatus),
    default: AppointmentStatus.Pending,
    type: Number,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
