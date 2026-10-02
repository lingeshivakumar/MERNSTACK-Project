import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required'],
  },
  patientName: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [1, 'Age must be at least 1'],
    max: [150, 'Age must be at most 150'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  altPhoneNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required'],
  },
  issue: {
    type: String,
    trim: true,
  },
  service: {
    type: String,
    trim: true,
  },
  visitedBefore: {
    type: String,
    enum: ['yes', 'no'],
  },
  preferredDoctor: {
    type: String,
    trim: true,
  },
  receiveUpdates: {
    type: String,
    enum: ['yes', 'no'],
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
