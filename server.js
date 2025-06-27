const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('MongoDB connection error:', err));


// Define the Schema
const reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  person: String,
  reservationDate: Date,
  time: String,
  message: String,
});
// const subscriptionSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   subscribedAt: { type: Date, default: Date.now },
// });

// const Subscription = mongoose.model('Subscription', subscriptionSchema);

const Reservation = mongoose.model('Reservation', reservationSchema);

// API Endpoint to handle form submission
app.post('/reserve', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send({ message: 'Reservation saved successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to save reservation' });
  }
});

// app.post('/subscribe', async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Validate input
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       return res.status(400).send({ error: 'Invalid email address' });
//     }

//     // Save subscription to the database
//     const subscription = new Subscription({ email });
//     await subscription.save();

//     res.status(201).send({ message: 'Subscription saved successfully!' });
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(400).send({ error: 'Email is already subscribed' });
//     } else {
//       console.error('Error saving subscription:', error);
//       res.status(500).send({ error: 'Failed to save subscription' });
//     }
//   }
// });

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
