import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, listTitle, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{listTitle}</h1>
      {posts.length !== 0 &&
        posts.map((post, index) => (
          <PostItem
            remove={remove}
            number={index++}
            post={post}
            key={post.id}
          />
        ))}
    </div>
  );
}
