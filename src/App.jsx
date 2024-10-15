import React, { useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.css";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Ruby", body: "Ruby - язык программирования" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPosts(sortValue) {
    setSelectedSort(sortValue);
    setPosts(
      [...posts].sort((a, b) => a[sortValue].localeCompare(b[sortValue]))
    );
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0px" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { name: "По названию", value: "title" },
            { name: "По описанию", value: "body" },
          ]}
        />
      </div>
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
