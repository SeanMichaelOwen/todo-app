// src/pages/AddTask.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/tasks', { title, description });
    router.push('/');
  };

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
