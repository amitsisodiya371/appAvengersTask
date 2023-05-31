// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Blog = mongoose.model('Blog', blogSchema);

// module.exports = Blog;


const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


