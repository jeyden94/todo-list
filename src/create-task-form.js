import { Task } from "./task-class.js"
import { deleteThisTaskFromLocalStorage, clearThisTaskFromTheScreen } from "./delete-cards.js"
import { updateThisTaskInLocalStorage, updateThisTaskOnTheScreen } from "./update-cards.js"
import { formattedDate } from "./dates.js"

export function enableNewTaskForm() {
    const createTaskBtn = document.getElementById("new-task-btn")
    const openTaskForm = createTaskBtn.addEventListener("click", openNewTaskForm)
}

function openNewTaskForm() {

    const taskFormWrapper = document.querySelector(".task-form-wrapper")

    const newTask = new Task("", "", "", formattedDate, "");
    
    newTask.storeLocally()

    const newTaskForm = document.createElement("form")

    newTaskForm.setAttribute("data-task-id", `${newTask.uniqueTaskId}`)

    newTaskForm.innerHTML = `

    <label for="title">Title</label>
    <input type="text" id="title" placeholder="What do you need to get done?">

    <label for="description">Task Description</label>
    <textarea id="description"></textarea>

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

    // Create element references for form inputs to pass values to local storage
    // let taskTitle = document.getElementById("title").value;
    // let taskDescription = document.getElementById("description").value;
    // let taskDueDate = document.getElementById("due-date").value;
    // let taskPriority = document.getElementById("priority").value;
    // let taskProject = document.getElementById("project").value;

    let updateTaskBtn = document.querySelector(`[data-task-id-btn="${newTask.uniqueTaskId}"]`)
    
    updateTaskBtn.addEventListener("click", () => {
        let taskTitle = document.getElementById("title").value;
        let taskDescription = document.getElementById("description").value;
        let taskDueDate = document.getElementById("due-date").value;
        let taskPriority = document.getElementById("priority").value;
        let taskProject = document.getElementById("project").value;

        console.log(`Update Task with...
        Id: ${newTask.uniqueTaskId}
        Title: ${newTask.title}
        Description: ${newTask.description}
        Due Date: ${newTask.dueDate}
        Priority: ${newTask.priority}
        Project: ${newTask.project}
    
        To this new info...
        Title: ${taskTitle}
        Description: ${taskDescription}
        Due Date: ${taskDueDate}
        Priority: ${taskPriority}
        Project: ${taskProject}`)

        updateThisTaskInLocalStorage(newTask.uniqueTaskId, taskTitle, taskDescription, taskDueDate, taskPriority, taskProject)
        updateThisTaskOnTheScreen()
        // Create functionality to route changes to the tasks form to local storage AND update the DOM
    })

    let deleteTaskBtn = document.querySelector(`[data-task-id-btn-delete="${newTask.uniqueTaskId}"]`)
    deleteTaskBtn.addEventListener("click", () => {
        deleteThisTaskFromLocalStorage(newTask.uniqueTaskId)
        clearThisTaskFromTheScreen(taskFormWrapper, newTaskForm)        
    })
}