import React, { useState } from "react";

import PostList from "./components/PostList";

import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Ruby", body: "Ruby - язык программирования" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(event) {
    event.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: "", body: "" })
  }

  return (
    <div className="App">
      <form>
        <MyInput
          placeholder="Название поста"
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
        />
        <MyInput
          placeholder="Описание поста"
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList listTitle="Список постов" posts={posts} />
    </div>
  );
}
