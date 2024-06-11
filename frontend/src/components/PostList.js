import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((response) => {
        console.log("Fetched Posts:", response.data); // Debugging statement
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error); // Debugging statement
      });
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentList postId={post._id} />
            <CommentForm postId={post._id} />
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default PostList;
