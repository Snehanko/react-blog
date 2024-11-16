import React from 'react'

const posts = [
    { id: 1, title: "First Post", summary: "This is the first blog post." },
    { id: 2, title: "Second Post", summary: "This is the second blog post." },
  ];

function Home() {
  return (
    <div>
        <h2>Blog Posts</h2>
        {
            posts.map(post=>
                (<div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                </div>)
            )
        }
    </div>
  )
}

export default Home