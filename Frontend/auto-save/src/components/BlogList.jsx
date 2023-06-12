import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../ContextApi/BlogContext';

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
          <h2 style={{textAlign:"left",width:"10%"}}>{blog.title}</h2> 
          <p style={{color:"gray", fontFamily:"sans-serif", fontSize:"14px",}}>{blog.content}</p>
          <p style={{textAlign:"right", fontSize:"12px",fontStyle:"italic"}}>By: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
