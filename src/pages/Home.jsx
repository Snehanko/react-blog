import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AddPost from "./AddPost";
import { postContext } from '../App';

// const posts = [
//     { id: 1, title: "First Post", summary: "This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.",author:"John doe" },
//     { id: 2, title: "Second Post", summary: "This is the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.", author:"Petter Kint" },
//   ];

function Home() {

  const {posts,setPost} =useContext(postContext);

  return (
    <div>
        <h2>Blog Posts</h2>
            <button><Link to="/AddPost" element={<AddPost/>}>Click Here to Add</Link></button>
        {
            posts.map(post=>
                (<div key={post.id} className='post-container'>
                    <h3 className='post-title'>{post.title}</h3>
                    <p className='post-breif'>{post.summary}</p>
                    <p className='post-author'>- by {post.author}</p>
                    <Link to={`/post/${post.id}`}>Read more</Link>
                </div>)
            )
        }
    </div>
  )
}

export default Home