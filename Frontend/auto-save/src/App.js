import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { BlogProvider } from './ContextApi/BlogContext';
import AddBlogForm from './components/AddBlogForm';
import BlogList from './components/BlogList';

const App = () => {
  return (
    <BlogProvider>
      <div className="App">
        <h2>Add Blog</h2>
        <AddBlogForm />
        <BlogList />
      </div>
    </BlogProvider>
  );
};

export default App;
