import React, { useState } from "react";
import PostList from "./components/PostList";

import "./styles/App.css";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Ruby", body: "Ruby - язык программирования" },
  ]);

  return (
    <div className="App">
      <PostList listTitle="Список постов" posts={posts} />
    </div>
  );
}
