const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const port = 3030;

app.use(cors());
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
