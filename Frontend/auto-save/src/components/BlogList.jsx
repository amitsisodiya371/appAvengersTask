import React, { useContext, useEffect } from 'react';
import { BlogContext } from './redux/BlogContext';

const BlogList = () => {
  const { blogs, fetchBlogs } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.reverse().map((blog) => (
        <div key={blog._id} style={{textAlign:"left",margin:"0px 10px 10px 10px",boxShadow:"0 0 10px green",padding:"20px",borderRadius:"15px"}}>
          <h3 style={{textAlign:"left",width:"10%"}}>{blog.title}</h3> 
          <p>{blog.content}</p>
          <p style={{textAlign:"right"}}>By: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
