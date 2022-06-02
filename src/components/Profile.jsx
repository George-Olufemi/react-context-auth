import React from "react";
import { useAuth } from './auth';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }
  return (
      <div>
        <div>Welcome {auth.user} </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
  )
}