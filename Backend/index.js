// const express = require('express');
const cors = require('cors');
// const connectDB = require('./config/db');
// const blogRoutes = require('./routes/blogRoutes');

// const app = express();
// const port = 3030;

// app.use(cors());
// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/blogs', blogRoutes);

// // Connect to the database
// connectDB();

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listing on port ${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/routes');

const app = express();
const port = 3030;

app.use(bodyParser.json());



app.use(cors());
// Routes
app.use('/api/project', projectRoutes);

// Connect to the database
connectDB();
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
