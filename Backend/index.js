const express = require('express');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());

// Routes
app.use('/api/blogs', blogRoutes);

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server listing on port ${port}`);
});
