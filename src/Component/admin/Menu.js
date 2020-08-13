import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
    return (
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="/admin" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Admin Control</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview">
          <Link  className="nav-link" to="#">
            <i className="nav-icon fas fa-edit" />
            <p>
              Group
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
          <li className="nav-item">
              <Link to="/admin/addgroup" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add</p>
                </Link>
          </li>
            <li className="nav-item">
            <Link to="/admin/editdeletegroup" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Edit/Delete</p>
                </Link>
            </li>
          </ul>
        </li>
       
      
        <li className="nav-item has-treeview">
          <Link className="nav-link" to="#">
            <i className="nav-icon fas fa-edit" />
            <p>
              Article
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
          <li className="nav-item">
              <Link to="/admin/addarticle" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add</p>
                </Link>
          </li>
            <li className="nav-item">
            <Link to="/admin/editdeletearticle" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Edit/Delete</p>
                </Link>
            </li>
          </ul>
        </li>
      
     
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    )
}
