import { Task } from "./task-controller.js"
import { deleteThisTaskFromLocalStorage, clearThisTaskFromTheScreen } from "./delete-cards.js"
import { formattedDate } from "./dates.js"

export function enableNewTaskForm() {
    const createTaskBtn = document.getElementById("new-task-btn")
    const openTaskForm = createTaskBtn.addEventListener("click", openNewTaskForm)

    return {
        openTaskForm
    }
}

function openNewTaskForm() {

    const taskFormWrapper = document.querySelector(".task-form-wrapper")

    const newTask = new Task("", "", "", formattedDate, "");
    
    newTask.storeLocally()

    const newTaskForm = document.createElement("form")

    newTaskForm.setAttribute("data-task-id", `${newTask.uniqueTaskId}`)

    newTaskForm.innerHTML = `

    <p>${newTask.uniqueTaskId}</p>
    <label for="title">Title</label>
    <input type="text" id="title" placeholder="What do you need to get done?">

    <label for="description">Task Description</label>
    <textarea id="description" placeholder="What else do you need remember?">
    </textarea>

    <label for="due-date">Due Date</label>
    <input type="date" id="due-date">

    <label for="priority">Priority</label>
    <select id="priority" name="priority">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Priority Level</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>

    <label for="project">Project</label>
    <select id="project" name="project">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Project</option>
        <option value="test-project">Test</option>
    </select>

    <input data-task-id-btn="${newTask.uniqueTaskId}" class="update-task-btn" type="button" value="Update Task">
    <input data-task-id-btn-delete="${newTask.uniqueTaskId}" class="delete-task-btn" type="button" value="Delete">`

    taskFormWrapper.appendChild(newTaskForm)
    
    let updateTaskBtn = document.querySelector(`[data-task-id-btn="${newTask.uniqueTaskId}"]`)
    updateTaskBtn.addEventListener("click", (e) => console.log(`Update Task with Id: ${newTask.uniqueTaskId}`))

    let deleteTaskBtn = document.querySelector(`[data-task-id-btn-delete="${newTask.uniqueTaskId}"]`)
    deleteTaskBtn.addEventListener("click", () => {
        console.log(`Delete Task with Id: ${newTask.uniqueTaskId}`)
        deleteThisTaskFromLocalStorage(newTask.uniqueTaskId)

        // now, delete the dom element
        clearThisTaskFromTheScreen(taskFormWrapper, newTaskForm)        
    })
}