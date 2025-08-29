import "./styles.css";
import { addNewTask } from "./create-task.js"
import { loadTasksFromStorage, clearLocalStorage } from "./use-local-storage.js"

addNewTask("Dinner","Cook spaghetti for dinner tonight", "Today", "High", "Personal")

let allTasks = loadTasksFromStorage()

console.log(allTasks.tasks)

window.clear = clearLocalStorage

