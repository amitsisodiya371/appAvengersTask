const mongoose = require('mongoose');

// Set up MongoDB connection URL
const mongoURI = 'mongodb://127.0.0.1:27017/';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

module.exports = connectDB;
