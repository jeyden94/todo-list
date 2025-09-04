import "./styles.css";
import { Task } from "./task-controller.js"
import { enableNewTaskForm } from "./create-task-form.js"
import { enableNewProjectForm } from "./create-project-form.js"
import { formattedDate } from "./dates.js"

// const task1 = new Task("Make Dinner", "cook spaghetti for dinner", 2, formattedDate, "Personal");

enableNewTaskForm()
enableNewProjectForm()