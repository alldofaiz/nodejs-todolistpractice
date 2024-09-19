// controllers/taskController.js
const { Task } = require("../config/db");

exports.readAllTasks = async () => {
  try {
    console.log("Fetching all tasks...");
    const tasks = await Task.findAll();
    console.log("Tasks fetched:", tasks);
    return tasks;
  } catch (error) {
    console.error("Error fetching all tasks:", error);
    throw new Error("Error fetching all tasks: " + error.message);
  }
};

exports.readTask = async (id) => {
  try {
    return await Task.findOne({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Error fetching task:", error);
    throw new Error("Error fetching task: " + error.message);
  }
};

exports.createTask = async (data) => {
  try {
    return await Task.create(data);
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Error creating task: " + error.message);
  }
};

exports.updateTask = async (id, data) => {
  try {
    const [updated] = await Task.update(data, {
      where: {
        id: id,
      },
    });
    return updated;
  } catch (error) {
    console.error("Error updating task:", error);
    throw new Error("Error updating task: " + error.message);
  }
};

exports.deleteTask = async (id) => {
  try {
    const deleted = await Task.destroy({
      where: {
        id: id,
      },
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw new Error("Error deleting task: " + error.message);
  }
};
