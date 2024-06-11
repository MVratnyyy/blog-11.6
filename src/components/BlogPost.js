import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts, addComment }) => {
  const { postId } = useParams();
  const post = posts.find(post => post.id === parseInt(postId));
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    addComment(post.id, comment);
    setComment('');
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <h3>Comments</h3>
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default BlogPost;
