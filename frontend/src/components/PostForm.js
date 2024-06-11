// import React, { useState } from "react";
// import axios from "axios";

// const PostForm = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`${process.env.REACT_APP_API_URL}/posts`, { title, content })
//       .then((response) => {
//         console.log("Post created:", response.data); // Debugging statement
//         setTitle("");
//         setContent("");
//         window.location.reload(); // Reload to fetch new posts
//       })
//       .catch((error) => {
//         console.error("Error creating post:", error); // Debugging statement
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//       />
//       <button type="submit">Create Post</button>
//     </form>
//   );
// };

// export default PostForm;





import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ fetchPosts }) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/posts", {
        title: newPostTitle,
        content: newPostContent,
      })
      .then((response) => {
        fetchPosts(); // Refresh posts after creating a new one
        setNewPostTitle("");
        setNewPostContent("");
      })
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div className="post-form-container">
      <h2>Create a Post</h2>
      <form onSubmit={handlePostSubmit} className="post-form">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Enter post title"
          required
          className="post-input"
        />
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Enter post content"
          required
          className="post-input"
        ></textarea>
        <button type="submit" className="post-btn">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
