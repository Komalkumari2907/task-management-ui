import React from 'react';
import './TaskCard.css';

function TaskCard({ title, dueDate, priority, status, category }) {
const priorityClass = priority.toLowerCase();
const statusClass = status.toLowerCase().replace(/\s+/g, '-');

return (
<div className="task-card">
<div className="task-card-main">
<div className="task-checkbox">
{status === 'Completed' ? '✓' : ''}
</div>

    <div className="task-details">
      <h3 className={status === 'Completed' ? 'task-completed' : ''}>
        {title}
      </h3>

      <div className="task-meta">
        <span className="task-category">{category}</span>
        <span className="task-due-date">Due {dueDate}</span>
      </div>
    </div>
  </div>

  <div className="task-card-badges">
    <span className={`priority-badge ${priorityClass}`}>
      {priority}
    </span>

    <span className={`status-badge ${statusClass}`}>
      {status}
    </span>
  </div>
</div>

);
}

export default TaskCard;