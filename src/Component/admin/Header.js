import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Header() {
    return (
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" data-widget="pushmenu" to="#"  role="button"><i className="fas fa-bars" /></Link>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/" className="nav-link">Home</a>
    </li>
  </ul>
 
</nav>
    )
}
