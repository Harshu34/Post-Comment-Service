import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/comments/${postId}`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
