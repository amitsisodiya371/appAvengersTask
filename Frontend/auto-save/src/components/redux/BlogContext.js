import React, { createContext, useEffect, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:3030/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs', error);
    }
  };

  const values = {
    blogs,
    fetchBlogs, // Update: Include fetchBlogs in the values object
  };

  return (
    <BlogContext.Provider value={values}>{children}</BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
