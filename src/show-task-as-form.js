import { createDeleteTaskBtn, createUpdateTaskBtn } from "./screen-button-controller.js";
import { formattedDate } from "./dates.js";

export function createFormFromTask(newTask, source) {

    const taskId = newTask.uniqueTaskId;

    const taskFormParent = document.querySelector(`.task-form-wrapper-${source}`)

    const taskFormWrapper = document.createElement(`div`)
    taskFormWrapper.classList.add(`task-form-wrapper-${taskId}`)

    const newTaskForm = document.createElement("form")
    
    newTaskForm.setAttribute(`data-task-id-${source}`, `${taskId}`)

    newTaskForm.innerHTML = `

    <label for="title">Title</label>
    <input type="text" id="title-${taskId}" value="${newTask.title}">

    <label for="description">Task Description</label>
    <textarea id="description-${taskId}" value="${newTask.description}"></textarea>

    <label for="due-date">Due Date</label>
    <input type="date" id="due-date-${taskId}">

    <label for="priority">Priority</label>
    <select id="priority-${taskId}" name="priority">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Priority Level</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>

    <label for="project">Project</label>
    <select id="project-${taskId}" name="project">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Project</option>
        <option value="test-project">Test</option>
    </select>

    <input data-task-id-btn-${source}="${taskId}" class="update-task-btn" type="button" value="Update Task">
    <input data-task-id-btn-delete-${source}="${taskId}" class="delete-task-btn" type="button" value="Delete">`

    taskFormWrapper.appendChild(newTaskForm)
    taskFormParent.appendChild(taskFormWrapper)

    createUpdateTaskBtn(newTask, source)
    createDeleteTaskBtn(newTask, source)
}

