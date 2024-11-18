import React, { useEffect, useState } from "react";
import "./PostPage.css";
import { useDispatch, useSelector } from "react-redux";
import { commentTypes } from "../store/types/commentType";
import { RootState } from "../store/store";

const PostPage: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number>(1);
  const dispatch = useDispatch();

  const { loading, error, comments } = useSelector(
    (state: RootState) => state.comments
  );

  const handlePostSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const postId = parseInt(event.target.value, 10);
    setSelectedPostId(postId);

    dispatch({
      type: commentTypes.FETCH_COMMENTS_REQUEST,
      payload: postId,
    });
  };
  useEffect(() => {
    dispatch({
      type: commentTypes.FETCH_COMMENTS_REQUEST,
      payload: 1,
    });
  }, [dispatch]);
  return (
    <div className="post-page">
      <h1 className="page-title">Post Comments</h1>

      {/* Dropdown to choose postId */}
      <div className="dropdown-container">
        <label htmlFor="post-dropdown" className="dropdown-label">
          Select Post ID:
        </label>
        <select
          id="post-dropdown"
          className="dropdown"
          value={selectedPostId}
          onChange={handlePostSelection}
        >
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
        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p className="error-message">Error: {error}</p>
        ) : comments && comments.length > 0 ? (
          <div className="comments-container">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <h3 className="comment-name">Name: {comment.name}</h3>
                <p className="comment-email">Email: {comment.email}</p>
                <p className="comment-body">{comment.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments found for this post.</p>
        )}
      </div>
    </div>
  );
};

export default PostPage;
