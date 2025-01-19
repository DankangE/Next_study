"use client";
// Post.tsx
import React from "react";

interface PostProps {
  post: {
    title: string;
    content: string;
    author: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>작성자: {post.author}</p>
      <hr />
    </div>
  );
};

export default Post;
