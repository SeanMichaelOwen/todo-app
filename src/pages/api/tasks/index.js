// src/pages/api/tasks/index.js
import dbConnect from '../../../utils/dbConnect';
import Task from '../../../models/Task';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
