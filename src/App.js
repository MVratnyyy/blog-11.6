import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import UserProvider from './context/UserContext';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1, comments: [] }]);
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  return (
    <UserProvider>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<BlogList posts={posts} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-post" element={<CreatePost addPost={addPost} />} />
              <Route path="/posts/:postId" element={<BlogPost posts={posts} addComment={addComment} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
