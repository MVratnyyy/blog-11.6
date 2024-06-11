import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {!user && <li><Link to="/login">Login</Link></li>}
          {user && <li><Link to="/create-post">Create Post</Link></li>}
          {user && <li><button onClick={handleLogout}>Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
