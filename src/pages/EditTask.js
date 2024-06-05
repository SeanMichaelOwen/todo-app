// src/pages/EditTask.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        const response = await axios.get(`/api/tasks/${id}`);
        const task = response.data.data;
        setTitle(task.title);
        setDescription(task.description);
      };

      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await axios.put(`/api/tasks/${id}`, { title, description });
    }

    router.push('/');
  };

  return (
    <div>
      <h1>Edit Task</h1>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
