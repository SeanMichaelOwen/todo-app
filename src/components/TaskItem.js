// src/components/TaskItem.js
import Link from 'next/link';

const TaskItem = ({ task, onDelete }) => {
  return (
    <li>
      <Link href={`/EditTask?id=${task._id}`} legacyBehavior>
        <a>{task.title}</a>
      </Link>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
