const Blog = require('../models/blog.model');

// Create a new blog (POST)
exports.createBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const blog = new Blog({ title, author, content });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a blog' });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blogs' });
  }
};

// Get a specific blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the blog' });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, author, content },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the blog' });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the blog' });
  }
};
