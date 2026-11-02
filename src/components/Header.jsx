import React from 'react';
import './Header.css';

function Header({ onAddTask }) {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your task overview.</p>
      </div>

      <div className="header-right">
        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />

          <span className="search-shortcut">⌘ K</span>
        </div>

        <button
          type="button"
          className="notification-button"
          aria-label="Notifications"
          title="Notifications"
        >
          ♧
          <span className="notification-dot"></span>
        </button>

        <button
          type="button"
          className="add-task-button"
          onClick={onAddTask}
        >
          <span>+</span> Add Task
        </button>
      </div>
    </header>
  );
}

export default Header;