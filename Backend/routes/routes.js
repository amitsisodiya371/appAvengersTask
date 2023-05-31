// const express = require('express');
// const router = express.Router();
// const blogController = require('../controllers/blog.controller');

// // Create a new blog
// router.post('/', blogController.createBlog);

// // Get all blogs
// router.get('/', blogController.getAllBlogs);

// // Get a specific blog by ID
// router.get('/:id', blogController.getBlogById);

// // Update a blog
// router.put('/:id', blogController.updateBlog);

// // Delete a blog
// router.delete('/:id', blogController.deleteBlog);

// module.exports = router;

const express = require('express');
const projectController = require('../controllers/project.controller');

const router = express.Router();

// Autosave project data
router.post('/autosave', projectController.autosave);

module.exports = router;

