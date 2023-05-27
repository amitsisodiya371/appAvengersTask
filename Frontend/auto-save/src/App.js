import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import BlogList from "./components/BlogList";
import AddBlogForm from "./components/AddBlogForm";
// import BlogComponent from "./components/BlogComponent";
function App() {
  const [Count,setCount] = useState(0);
  return (
    <div className="App">
      <h1>Content Blog</h1>
      <AddBlogForm Count={Count} setCount={setCount}/>

      <BlogList  Count={Count} setCount={setCount}/>
      {/* <BlogComponent/> */}
    </div>
  );
}
export default App;
