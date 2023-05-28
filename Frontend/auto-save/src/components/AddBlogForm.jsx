import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../redux/action';

const AddBlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog({ title, author, content }));
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"block",border:"1px solid red",width:"200px", padding:"20px",margin:"auto",boxShadow:"0 0 10px red"}}> 
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} /><br /><br />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br /> <br />
      <div><button type="submit">Add Blog</button></div>
      </form> 
    </div>
  );
};
export default AddBlogForm;
