import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Post", summary: "This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.",author:"John doe" },
  { id: 2, title: "Second Post", summary: "This is the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.", author:"Petter Kint" },
];

const Post = () => {
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
