import React, { useState, useEffect } from 'react';

const AddBlogForm = ({Count,setCount}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
        await fetch('http://localhost:3030/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, content }),
      });

      setCount(prev=>prev+1)
      setTitle('');
      setAuthor('');
      setContent('');
    } catch (error) {
      console.error('Error creating blog', error);
    }
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit} style={{display:"block",border:"1px solid red",width:"20%", padding:"20px",margin:"auto",boxShadow:"0 0 10px red"}}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} /><br /><br />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br /> <br />
        <div><button type="submit">Add Blog</button></div>
      </form>
    </div>
  );
};

export default AddBlogForm;
