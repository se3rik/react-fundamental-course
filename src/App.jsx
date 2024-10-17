import React, { useEffect, useState } from "react";

import { usePosts } from "./hooks/usePosts.js";
import { useFetching } from "./hooks/useFetching.js";
import { getPageCount } from "./utils/pages.js";
import PostService from "./api/PostService.js";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal.tsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyLoader from "./components/UI/loader/MyLoader.jsx";
import MyPagination from "./components/UI/pagination/MyPagination.jsx";

import "./styles/App.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function changePage(page) {
    setPage(page);
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <MyLoader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          listTitle="Список постов"
          posts={sortedAndSearchedPosts}
        />
      )}
      <MyPagination
        totalPages={totalPages}
        changePage={changePage}
        page={page}
      />
    </div>
  );
}
