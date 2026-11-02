import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import './Dashboard.css';

const initialTasks = [
  {
    id: 1,
    title: 'Complete DBMS Assignment',
    dueDate: 'Nov 02, 2026',
    priority: 'High',
    status: 'In Progress',
    category: 'Study',
  },
  {
    id: 2,
    title: 'Prepare React Project',
    dueDate: 'Oct 30, 2026',
    priority: 'High',
    status: 'To Do',
    category: 'Development',
  },
  {
    id: 3,
    title: 'Review Interview Questions',
    dueDate: 'Nov 04, 2026',
    priority: 'Medium',
    status: 'In Progress',
    category: 'Career',
  },
  {
    id: 4,
    title: 'Complete Python Practice',
    dueDate: 'Oct 27, 2026',
    priority: 'Low',
    status: 'Completed',
    category: 'Coding',
  },
];

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('taskflow-tasks');

      if (savedTasks !== null) {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
          return parsedTasks;
        }
      }
    } catch (error) {
      console.error('Unable to load saved tasks:', error);
    }

    return initialTasks;
  });

  const [showTaskForm, setShowTaskForm] = useState(false);

  // Save tasks whenever the task list changes.
  useEffect(() => {
    try {
      localStorage.setItem('taskflow-tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Unable to save tasks:', error);
    }
  }, [tasks]);

  // Add a new task.
  const handleAddTask = (newTask) => {
    let formattedDate = newTask.dueDate;

    if (newTask.dueDate && newTask.dueDate !== 'No deadline') {
      const date = new Date(`${newTask.dueDate}T00:00:00`);

      formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });
    } else {
      formattedDate = 'No deadline';
    }

    setTasks((previousTasks) => [
      {
        ...newTask,
        dueDate: formattedDate,
      },
      ...previousTasks,
    ]);
  };

  // Calculate dashboard statistics.
  const totalTasks = tasks.length;

  const todoTasks = tasks.filter(
    (task) => task.status === 'To Do'
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === 'In Progress'
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  ).length;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header onAddTask={() => setShowTaskForm(true)} />

        <section className="summary-grid">
          <SummaryCard
            title="Total Tasks"
            count={totalTasks}
            icon="▤"
            color="purple"
            description="All your tasks"
          />

          <SummaryCard
            title="To Do"
            count={todoTasks}
            icon="◷"
            color="blue"
            description="Tasks waiting to start"
          />

          <SummaryCard
            title="In Progress"
            count={inProgressTasks}
            icon="↻"
            color="orange"
            description="Currently working"
          />

          <SummaryCard
            title="Completed"
            count={completedTasks}
            icon="✓"
            color="green"
            description="Tasks finished"
          />
        </section>

        <section className="tasks-section">
          <div className="section-heading">
            <div>
              <h2>Recent Tasks</h2>
              <p>Keep track of your latest activities.</p>
            </div>

            <button
              type="button"
              className="add-task-button"
              onClick={() => setShowTaskForm(true)}
            >
              + Add Task
            </button>
          </div>

          <div className="task-list">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                dueDate={task.dueDate}
                priority={task.priority}
                status={task.status}
                category={task.category}
              />
            ))}

            {tasks.length === 0 && (
              <div className="empty-state">
                <h3>No tasks yet</h3>
                <p>Create your first task to get started.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {showTaskForm && (
        <TaskForm
          onAddTask={handleAddTask}
          onClose={() => setShowTaskForm(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;