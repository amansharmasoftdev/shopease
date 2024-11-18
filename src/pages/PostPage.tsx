import React from "react";
import "./PostPage.css";

const PostPage: React.FC = () => {
  return (
    <div className="post-page">
      <h1 className="page-title">Post Comments</h1>

      {/* Dropdown to choose postId */}
      <div className="dropdown-container">
        <label htmlFor="post-dropdown" className="dropdown-label">
          Select Post ID:
        </label>
        <select id="post-dropdown" className="dropdown">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
            <option key={id} value={id}>
              Post {id}
            </option>
          ))}
        </select>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h2 className="comments-title">Comments</h2>
        <div className="comments-container">
          {/* Replace this placeholder with dynamic content */}
          <div className="comment-card">
            <h3 className="comment-name">Name: John Doe</h3>
            <p className="comment-email">Email: johndoe@example.com</p>
            <p className="comment-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula metus ut dui ultrices, at efficitur felis aliquam.
            </p>
          </div>
          <div className="comment-card">
            <h3 className="comment-name">Name: Jane Doe</h3>
            <p className="comment-email">Email: janedoe@example.com</p>
            <p className="comment-body">
              Quisque non augue mollis, congue justo ac, dapibus nisi. Morbi
              faucibus tortor et urna vestibulum, et tincidunt justo sodales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
