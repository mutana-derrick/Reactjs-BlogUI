import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <body>
      <div>
        <h2>Posts</h2>
        {localStorage.getItem("token") && (
          <Link to="/create-post">Create Post</Link>
        )}
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              {localStorage.getItem("token") && (
                <>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                  <Link to={`/edit-post/${post.id}`}>Edit</Link>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}

export default PostList;
