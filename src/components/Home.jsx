import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from "./auth";

export default function Home() {
    const auth = useAuth();
return (
    <div>
        <nav className="navbar">
            <div>
                <h3>Logo</h3>
            </div>
            <div>
                <ul className="nav__links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                    <Link to="/profile"><li>Profile</li></Link>
                    {
                        !auth.user && (<Link to="/login"><li>Login</li></Link>)
                    }
                </ul>
            </div>
        </nav>
        <div>Home Content</div>
    </div>
);
}
