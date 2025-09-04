import "./styles.css";
import { Task } from "./task-controller.js"
import { formattedDate } from "./dates.js"

const task1 = new Task("Make Dinner", "cook spaghetti for dinner", 2, formattedDate, "Personal");

console.log(task1)

task1.storeLocally()

const testTask = task1.getFromStorage()

console.log(testTask)
