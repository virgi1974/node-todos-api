import { Router } from "express";
import Task from "../models/Task";
const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  const taskSaved = await newTask.save();
  console.log(taskSaved);
  res.json(taskSaved);
  // console.log("new task created");
});

export default router;
