import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Posts = () => {
  const [posts ,setPosts] = useState([]);
  useEffect(()=>{ // it is always called after initial rendering
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{
        setPosts(res.data)
      })
  },[posts])
  return (
    <ul>
      {posts.map(item=>{
        return <li>{item.title}</li>
      })}
    </ul>
  )
}

export default Posts
