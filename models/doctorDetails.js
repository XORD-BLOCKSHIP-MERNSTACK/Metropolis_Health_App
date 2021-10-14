import mongoose from "mongoose";

const DoctorSchema = mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  speciality: {
    type: String,
    required: [true, "Please provide a special"],
  },

  toDay: {
    type: String,
    required: [true, "Please provide ans appointment Timing"],
  },

  fromDay: {
    type: String,
    required: [true, "Please provide an appointment Timing"],
  },
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

export default Doctor;
