import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import PostItem from "./PostItem";

export default function PostList({ posts, listTitle, remove }) {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Посты не найдены
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{listTitle}</h1>
      <TransitionGroup>
        {posts.length !== 0 &&
          posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} className="post">
              <PostItem remove={remove} number={index++} post={post} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
}
