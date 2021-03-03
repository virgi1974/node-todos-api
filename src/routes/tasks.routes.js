import { Router } from "express";
import Task from "../models/Task";
const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

export default router;
