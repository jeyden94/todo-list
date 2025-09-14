import { Task } from "./task-class.js"
import { formattedDate } from "./dates.js"
import { createFormFromTask } from "./show-task-as-form.js"

export const newTaskBtn = document.getElementById("new-task-btn")
export const createNewTask = newTaskBtn.addEventListener("click", createBlankTask)

const source = "new"

function createBlankTask() {
    const newTask = new Task("Task...", "Details...", "", formattedDate);
    console.log(newTask.uniqueTaskId)
    createFormFromTask(newTask, source)
}
