import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  // console.log(req.body);
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false,
  });
  const taskSaved = await newTask.save();
  console.log(taskSaved);
  res.json(taskSaved);
  // console.log("new task created");
};

export const findOneTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  res.json(task);

  // Task.findById(id)
  //   .exec()
  //   .then(function (task) {
  //     res.json(task);
  //     console.log(task);
  //   })
  //   .catch(function (error) {
  //     res.json({ message: "error dude!!!!" });
  //     console.log("Error getting the task");
  //   });
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);
  res.json({ message: `deleted task with id -> ${id}` });
};

export const findAllDoneTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedTask);
};
