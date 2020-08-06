import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <p>logo</p>
      <ul className="navMenu">
        <li>
          <Link to="/issue">ISSUES</Link>
        </li>
        <li>
          <Link to="/topics">TOPICS</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <li>
          <Link to="/newsletter">NEWSLETTER</Link>
        </li>
        <li>
          <Link to="/facebook">f</Link>
        </li>
        <li>
          <Link to="/twitter">twitter</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/login">SUBSCRIBE</Link>
        </li>
      </ul>
    </div>
  );
}
