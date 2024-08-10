import React from "react";
import { Link } from "react-router-dom";
import '../styles/postlist.css'; 

function PostList() {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      author: "John Doe",
      timestamp: "2024-08-10T12:00:00Z",
      content:
        "This is the content of the first blog post. It's just a placeholder for design.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      author: "Jane Smith",
      timestamp: "2024-08-09T14:30:00Z",
      content:
        "This is the content of the second blog post. It looks just as interesting as the first one!",
    },
    {
      id: 3,
      title: "Third Blog Post",
      author: "Jane Smith",
      timestamp: "2024-08-09T14:30:00Z",
      content:
        "This is the content of the third blog post. It’s packed with great insights!",
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      author: "Jane Smith",
      timestamp: "2024-08-09T14:30:00Z",
      content:
        "This is the content of the fourth blog post. Another interesting read!",
    },
  ];

  return (
    <div className="post-list-container">
      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow navbar-custom">
        <div className="container">
          <h1 className="navbar-brand mb-0">Blog Management</h1>
          <div className="ml-auto">
            <Link to="/login" className="btn btn-outline-primary mr-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container shadow mt-4 content-container">
        <div className="text-right mb-3">
          <Link to="/create-post" className="btn btn-primary">
            Create Post
          </Link>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-6 mb-4" key={post.id}>
              <div className="card shadow card-custom">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    by {post.author} on{" "}
                    {new Date(post.timestamp).toLocaleDateString()}
                  </h6>
                  <p className="card-text">{post.content}</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/post/${post.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      View Post
                    </Link>
                    <Link
                      to={`/post/${post.id}/comments`}
                      className="btn btn-info btn-sm"
                    >
                      <i className="fas fa-comment"></i> Comment
                    </Link>
                  </div>
                  <div className="mt-3 d-flex justify-content-between">
                    <Link
                      to={`/edit-post/${post.id}`}
                      className="btn btn-warning btn-sm"
                    >
                      <i className="fas fa-edit"></i> Edit
                    </Link>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-light text-center py-3 mt-4">
        <p className="mb-0">
          &copy; 2024 Blog Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default PostList;
