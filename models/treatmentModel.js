import mongoose from 'mongoose';

const TreatmentSchema = mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
  },

  date: {
    type: String,
    required: [true, 'Please provide an appointment Timing'],
  },

  perscription: {
    type: String,
    required: [true, 'Please provide a title'],
  },
});

const Treatment = mongoose.model('Treatment', TreatmentSchema);

export default Treatment;
