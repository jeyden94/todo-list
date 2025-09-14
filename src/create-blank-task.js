import { Task } from "./task-class.js"
import { deleteThisTaskFromLocalStorage, clearThisTaskFromTheScreen } from "./delete-cards.js"
import { updateThisTaskInLocalStorage, updateThisTaskOnTheScreen } from "./update-cards.js"
import { formattedDate } from "./dates.js"
import { createFormFromTask } from "./show-task-as-form.js"

export const newTaskBtn = document.getElementById("new-task-btn")
export const createNewTask = newTaskBtn.addEventListener("click", createBlankTask)

function createBlankTask() {
    const newTask = new Task("", "", "", formattedDate, "");
    newTask.storeLocally()
    createFormFromTask(newTask.uniqueTaskId)
}
