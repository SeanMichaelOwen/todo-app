// src/pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from '../components/TaskItem';
import Link from 'next/link';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      setTasks(response.data.data);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div>
      <h1>Task List</h1>
      <Link href="/AddTask" legacyBehavior>
        <a> Add New Task </a>
      </Link>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
