import "./styles.css";
import { createTask } from "./create-task.js"
import { storeInLocalStorage } from "./use-local-storage.js"
import { updateTaskArray } from "./update-task-array.js"


function test() {
    // Initialize task array
    let allTasks = []

    // New Task


    let testTask1 = createTask("Dinner","Cook spaghetti for dinner tonight", "Today", "High", "Personal")
    let testTask2 = createTask("Breakfast","Cook eggs for breakfast", "Today", "High", "Personal")

    updateTaskArray(allTasks, testTask1)

    console.log(allTasks)

    updateTaskArray(allTasks, testTask2)

    console.log(allTasks)


    let testString = storeInLocalStorage(allTasks)
    console.log(testString)

}

window.test = test

