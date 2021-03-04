import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong retrieving the tasks",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({
      message: "Content can't be empty",
    });
  }

  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await newTask.save();
    console.log(taskSaved);
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};

export const findOneTask = async (req, res) => {
  const { id } = req.params;

  // #### ERROR HANDLING 1
  try {
    const task = await Task.findById(id);

    if (!task)
      return res
        .status(404)
        .send({ message: `task with id ${id} does not exist` });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrievingtask with id ${id}`,
    });
  }

  // #### ERROR HANDLING 2
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
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    res.json({ message: `deleted task with id -> ${id}` });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error deleting task with id ${id}`,
    });
  }
};

export const findAllDoneTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedTask);
};
