import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts.js";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal.tsx";
import MyButton from "./components/UI/button/MyButton.jsx";

import "./styles/App.css";
import PostService from "./api/PostService.js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []); 

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        listTitle="Список постов"
        posts={sortedAndSearchedPosts}
      />
    </div>
  );
}
