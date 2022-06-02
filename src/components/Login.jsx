import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (  
      <div className="app">
        <div className="">
        <label>username:</label><br />
        <input type="text" /><br /><br />
        <label>password:</label><br />
        <input type="password" /><br /><br />
        <button>Submit</button>
        </div>
        <Link to="/">Go Back</Link> 
      </div>
  );
}
