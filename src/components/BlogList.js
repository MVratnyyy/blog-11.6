import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogList.module.css';

const BlogList = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
