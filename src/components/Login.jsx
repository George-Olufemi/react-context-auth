import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./auth";

export default function Login() {
    const [user, setUser, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(user)
        navigate('/', {replace: true})
    }
  return (  
      <div className="app">
        <div className="">
        <label>username:</label><br />
        <input type="text" onChange={e => setUser(e.target.value)} /><br /><br />
        <label>password:</label><br />
        <input type="password" onChange={e => setPassword(e.target.value)} /><br /><br />
        <button onClick={handleLogin}>Submit</button>
        </div><br />
        <Link to="/">Go Back</Link> 
      </div>
  );
}
