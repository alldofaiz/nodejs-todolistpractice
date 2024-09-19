// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await taskController.readAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

// Get a task by ID
router.get("/:id", async (req, res) => {
  try {
    const task = await taskController.readTask(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error fetching task" });
  }
});

// Create a new task
router.post("/", async (req, res) => {
  try {
    const newTask = await taskController.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Error creating task" });
  }
});

// Update a task by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await taskController.updateTask(req.params.id, req.body);
    if (updated) {
      res.status(200).json({ message: "Task updated successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error updating task" });
  }
});

// Delete a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await taskController.deleteTask(req.params.id);
    if (deleted) {
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error deleting task" });
  }
});

module.exports = router;
