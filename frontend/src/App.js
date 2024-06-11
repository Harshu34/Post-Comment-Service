// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPostTitle, setNewPostTitle] = useState("");
//   const [newPostContent, setNewPostContent] = useState("");
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = () => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error("Error fetching posts:", error));
//   };

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/posts", {
//         title: newPostTitle,
//         content: newPostContent,
//       })
//       .then((response) => {
//         setPosts([...posts, response.data]);
//         setNewPostTitle("");
//         setNewPostContent("");
//       })
//       .catch((error) => console.error("Error creating post:", error));
//   };

//   const handleCommentSubmit = (e, postId) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/comments", { content, postId })
//       .then((response) => {
//         const updatedPosts = posts.map((post) => {
//           if (post._id === postId) {
//             return { ...post, comments: [...post.comments, response.data] };
//           }
//           return post;
//         });
//         setPosts(updatedPosts);
//         setContent("");
//       })
//       .catch((error) => console.error("Error creating comment:", error));
//   };

//   return (
//     <div className="App">
//       <h1>Post-Comments Service</h1>

//       {/* Form for creating new posts */}
//       <form onSubmit={handlePostSubmit}>
//         <input
//           type="text"
//           value={newPostTitle}
//           onChange={(e) => setNewPostTitle(e.target.value)}
//           placeholder="Enter post title"
//           required
//         />
//         <textarea
//           value={newPostContent}
//           onChange={(e) => setNewPostContent(e.target.value)}
//           placeholder="Enter post content"
//           required
//         ></textarea>
//         <button type="submit">Create Post</button>
//       </form>

//       {/* Display existing posts and their comments */}
//       {posts.map((post) => (
//         <div key={post._id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <h3>Comments</h3>
//           {post.comments.map((comment) => (
//             <p key={comment._id}>{comment.content}</p>
//           ))}
//           {/* Form for adding comments */}
//           <form onSubmit={(e) => handleCommentSubmit(e, post._id)}>
//             <input
//               type="text"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               placeholder="Add a comment"
//               required
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css"; // Example for global styles if needed
// import PostForm from "./components/PostForm";
// import CommentForm from "./components/CommentForm";

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = () => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error("Error fetching posts:", error));
//   };

//   const handlePostSubmit = (newPost) => {
//     axios
//       .post("http://localhost:5000/api/posts", newPost)
//       .then((response) => {
//         fetchPosts(); // Refresh posts after creating a new one
//       })
//       .catch((error) => console.error("Error creating post:", error));
//   };

//   return (
//     <div className="App">
//       <h1>Post-Comments Service</h1>

//       {/* PostForm component for creating new posts */}
//       <PostForm handlePostSubmit={handlePostSubmit} />

//       {/* Display existing posts and their comments */}
//       {posts.map((post) => (
//         <div key={post._id} className="post-container">
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <h3>Comments</h3>
//           {post.comments.map((comment) => (
//             <p key={comment._id}>{comment.content}</p>
//           ))}
//           {/* CommentForm component for adding comments */}
//           <CommentForm postId={post._id} fetchPosts={fetchPosts} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css"; // Import your CSS file for global styles
// import PostForm from "./components/PostForm";
// import CommentForm from "./components/CommentForm";

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = () => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error("Error fetching posts:", error));
//   };

//   const handlePostSubmit = (newPost) => {
//     axios
//       .post("http://localhost:5000/api/posts", newPost)
//       .then((response) => {
//         fetchPosts(); // Refresh posts after creating a new one
//       })
//       .catch((error) => console.error("Error creating post:", error));
//   };

//   return (
//     <div className="App">
//       <h1>Post-Comments Service</h1>

//       {/* PostForm component for creating new posts */}
//       <PostForm handlePostSubmit={handlePostSubmit} />

//       {/* Display existing posts and their comments */}
//       {posts.map((post) => (
//         <div key={post._id} className="post-card">
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <div className="comments-section">
//             <h3>Comments</h3>
//             {post.comments.map((comment) => (
//               <div key={comment._id} className="comment">
//                 <p>{comment.content}</p>
//               </div>
//             ))}
//             {/* CommentForm component for adding comments */}
//             <CommentForm postId={post._id} fetchPosts={fetchPosts} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import CommentForm from "./components/CommentForm";

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPostTitle, setNewPostTitle] = useState("");
//   const [newPostContent, setNewPostContent] = useState("");

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = () => {
//     axios
//       .get("http://localhost:5000/api/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error("Error fetching posts:", error));
//   };

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     const newPost = { title: newPostTitle, content: newPostContent };
//     axios
//       .post("http://localhost:5000/api/posts", newPost)
//       .then((response) => {
//         setPosts([...posts, response.data]); // Update state immediately with new post
//         setNewPostTitle(""); // Clear input fields after submission
//         setNewPostContent("");
//       })
//       .catch((error) => console.error("Error creating post:", error));
//   };

//   const handleCommentSubmit = (content, postId) => {
//     axios
//       .post("http://localhost:5000/api/comments", { content, postId })
//       .then((response) => {
//         const updatedPosts = posts.map((post) => {
//           if (post._id === postId) {
//             return { ...post, comments: [...post.comments, response.data] };
//           }
//           return post;
//         });
//         setPosts(updatedPosts); // Update state immediately with new comment
//       })
//       .catch((error) => console.error("Error creating comment:", error));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Post-Comments Service</h1>

//         {/* Navbar-like structure for creating new posts */}
//         <nav>
//           <form onSubmit={handlePostSubmit}>
//             <input
//               type="text"
//               placeholder="Enter post title"
//               value={newPostTitle}
//               onChange={(e) => setNewPostTitle(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Enter post content"
//               value={newPostContent}
//               onChange={(e) => setNewPostContent(e.target.value)}
//               required
//             />
//             <button type="submit">Create Post</button>
//           </form>
//         </nav>
//       </header>

//       {/* Display existing posts and their comments */}
//       <main>
//         {posts.map((post) => (
//           <div key={post._id} className="post-card">
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <div className="comments-section">
//               <h3>Comments</h3>
//               {post.comments.map((comment) => (
//                 <div key={comment._id} className="comment">
//                   <p>{comment.content}</p>
//                 </div>
//               ))}
//               {/* CommentForm component for adding comments */}
//               <CommentForm
//                 postId={post._id}
//                 handleCommentSubmit={handleCommentSubmit}
//               />
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CommentForm from "./components/CommentForm";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = { title: newPostTitle, content: newPostContent };
    axios
      .post("http://localhost:5000/api/posts", newPost)
      .then((response) => {
        setPosts([...posts, response.data]); // Update state immediately with new post
        setNewPostTitle(""); // Clear input fields after submission
        setNewPostContent("");
      })
      .catch((error) => console.error("Error creating post:", error));
  };

  const handleCommentSubmit = (content, postId) => {
    axios
      .post("http://localhost:5000/api/comments", { content, postId })
      .then((response) => {
        // Update the posts state immediately with the new comment
        const updatedPosts = posts.map((post) => {
          if (post._id === postId) {
            return { ...post, comments: [...post.comments, response.data] };
          }
          return post;
        });
        setPosts(updatedPosts); // Update the state here
      })
      .catch((error) => console.error("Error creating comment:", error));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Post-Comments Service</h1>

        {/* Navigation bar-like structure for creating new posts */}
        <nav className="navbar">
          <form className="post-form" onSubmit={handlePostSubmit}>
            <input
              type="text"
              placeholder="Enter post title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter post content"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              required
            />
            <button type="submit">Create Post</button>
          </form>
        </nav>
      </header>

      {/* Display existing posts and their comments */}
      <main className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="comments-section">
              <h3>Comments</h3>
              {post.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <p>{comment.content}</p>
                </div>
              ))}
              {/* CommentForm component for adding comments */}
              <CommentForm
                postId={post._id}
                handleCommentSubmit={handleCommentSubmit}
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
