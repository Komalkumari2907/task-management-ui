import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask, onClose }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Development');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert('Please enter a task title.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category,
      priority,
      dueDate: dueDate || 'No deadline',
      status,
    };

    onAddTask(newTask);
    onClose();
  };

  return (
    <div className="task-form-overlay">
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form-header">
          <h2>Create New Task</h2>

          <button
            type="button"
            className="close-button"
            onClick={onClose}
            aria-label="Close form"
          >
            ×
          </button>
        </div>

        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="task-category">Category</label>
        <select
          id="task-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Development</option>
          <option>Study</option>
          <option>Coding</option>
          <option>Career</option>
          <option>Personal</option>
        </select>

        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label htmlFor="task-date">Due Date</label>
        <input
          id="task-date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        <label htmlFor="task-status">Status</label>
        <select
          id="task-status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <div className="task-form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit" className="submit-button">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;