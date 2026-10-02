import express from 'express';
import Appointment from '../models/Appointment.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// POST /api/appointments — Create a new appointment (authenticated)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const {
      patientName, gender, age, phoneNumber, altPhoneNumber,
      email, appointmentDate, issue, service, visitedBefore,
      preferredDoctor, receiveUpdates,
    } = req.body;

    const appointment = new Appointment({
      user: req.user.id,
      patientName,
      gender,
      age,
      phoneNumber,
      altPhoneNumber,
      email,
      appointmentDate,
      issue,
      service,
      visitedBefore,
      preferredDoctor,
      receiveUpdates,
    });

    await appointment.save();

    res.status(201).json({
      message: 'Appointment booked successfully!',
      appointment,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/appointments/my — Get current user's appointments (authenticated)
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
