import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { postContext } from "../App";

const Post = () => {
  const {posts}= useContext(postContext);
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className='post-container'>
      <h3 className='post-title'>{post.title}</h3>
      <p className='post-author'>- by {post.author}</p>
      <p className='post-breif'>{post.summary}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Post;
