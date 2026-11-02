import React from 'react';
import './Sidebar.css';

function Sidebar() {
return (
<aside className="sidebar">
<div className="sidebar-logo">
<div className="logo-icon">T</div>
<h2>TaskFlow</h2>
</div>

  <div className="sidebar-section">
    <p className="sidebar-label">MENU</p>

    <nav className="sidebar-nav">
      <a href="#dashboard" className="sidebar-link active">
        <span>▦</span>
        <span>Dashboard</span>
      </a>

      <a href="#tasks" className="sidebar-link">
        <span>☷</span>
        <span>All Tasks</span>
      </a>

      <a href="#completed" className="sidebar-link">
        <span>✓</span>
        <span>Completed</span>
      </a>

      <a href="#settings" className="sidebar-link">
        <span>⚙</span>
        <span>Settings</span>
      </a>
    </nav>
  </div>

  <div className="sidebar-footer">
    <div className="user-avatar">AS</div>

    <div className="user-info">
      <h4>My Workspace</h4>
      <p>Personal Account</p>
    </div>
  </div>
</aside>

);
}

export default Sidebar;