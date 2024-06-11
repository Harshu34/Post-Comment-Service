// import React, { useState } from "react";
// import axios from "axios";

// const CommentForm = ({ postId }) => {
//   const [content, setContent] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("/api/comments", { content, postId })
//       .then((response) => {
//         setContent("");
//         window.location.reload();
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         placeholder="Add a comment"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//       />
//       <button type="submit">Comment</button>
//     </form>
//   );
// };

// export default CommentForm;







import React, { useState } from "react";
import axios from "axios";

const CommentForm = ({ postId, fetchPosts }) => {
  const [content, setContent] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/comments", { content, postId })
      .then((response) => {
        fetchPosts(); // Refresh posts after adding a new comment
        setContent("");
      })
      .catch((error) => console.error("Error creating comment:", error));
  };

  return (
    <div className="comment-form-container">
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment"
          required
          className="comment-input"
        />
        <button type="submit" className="comment-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

