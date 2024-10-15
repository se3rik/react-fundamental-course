import React, { useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.css";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Ruby", body: "Ruby - язык программирования" },
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} listTitle="Список постов" posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          Посты не найдены
        </h1>
      )}
    </div>
  );
}
