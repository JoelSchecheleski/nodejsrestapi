const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
const categoryController = require("./controllers/CategoryController");
const entryController = require("./controllers/EntryController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ENDPOINTS TASKS ------------------------------------------
app
    .route("/tasks")
    .get(taskController.listAllTasks)
    .post(taskController.createNewTask);
app
    .route("/tasks/:taskid")
    .get(taskController.readTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

// ENDPOINTS CATEGORY ---------------------------------------
app
    .route("/categorys")
    .get(categoryController.listAllCategorys)
    .post(categoryController.createNewCategory);
app
    .route("/categorys/:categoryid")
    .get(categoryController.readCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

// ENDPOINT ENTRY ------------------------------------------
app
    .route("/entrys")
    .get(entryController.listAllEntrys)
    .post(entryController.createNewEntry);
app
    .route("/entrys/:entryid")
    .get(entryController.readEntry)
    .put(entryController.updateEntry)
    .delete(entryController.deleteEntry);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
