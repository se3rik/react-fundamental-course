import React from "react";
import PostItem from "./PostItem";

export default function PostList({posts, listTitle}) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{listTitle}</h1>
      {posts.length !== 0 &&
        posts.map((post) => <PostItem key={post.id} post={post} />)}
      ;
    </div>
  );
}
