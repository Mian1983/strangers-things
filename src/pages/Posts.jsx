import { useState, useEffect } from "react"
import { fetchPosts } from "../API"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // 👇️ only runs once
    console.log('useEffect ran');
    async function fetchData() {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    fetchData()
  }, []);

  return (
      <div>
          <h1>Posts</h1>
          {
            posts.map(({id, title, author, description, price, location}) => (
              <div className="post" key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Created by: {author.username}</p>
                <p>Location: {location}</p>
              </div>
            ))
          }
      </div>
  )
}

export default Posts;