import { createDeleteTaskBtn, createUpdateTaskBtn } from "./screen-button-controller.js";

export function createFormFromTask(newTask, source) {

    const taskId = newTask.uniqueTaskId;

    const taskFormParent = document.querySelector(`.task-form-wrapper-${source}`)

    const taskFormWrapper = document.createElement(`div`)
    taskFormWrapper.classList.add(`task-form-wrapper-${taskId}`)

    const newTaskForm = document.createElement("form")
    
    newTaskForm.setAttribute(`data-task-id-${source}`, `${taskId}`)

    newTaskForm.innerHTML = `

    <input type="text" id="title-${taskId}" value="${newTask.title}">

    <textarea id="description-${taskId}" value="${newTask.description}"></textarea>

    <input type="date" id="due-date-${taskId}" value="${newTask.dueDate}">

    <select id="priority-${taskId}" name="priority">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option class="default-priority" value="">Select Priority Level</option>
        <option class="low-priority" value="low">Low</option>
        <option class="medium-priority" value="medium">Medium</option>
        <option class="high-priority" value="high">High</option>
    </select>`

    if (source === "new") {
        newTaskForm.innerHTML += `
        <input data-task-id-btn-${source}="${taskId}" class="update-task-btn" type="button" value="Create">
        <input data-task-id-btn-delete-${source}="${taskId}" class="delete-task-btn" type="button" value="Delete">`
    } else {
        newTaskForm.innerHTML += `
        <input data-task-id-btn-${source}="${taskId}" class="update-task-btn" type="button" value="Update">
        <input data-task-id-btn-delete-${source}="${taskId}" class="delete-task-btn" type="button" value="Delete">
        <input data-task-id-btn-complete-${source}="${taskId}" class="complete-task-btn" type="button" value="Complete">`
    }

    taskFormWrapper.appendChild(newTaskForm)
    taskFormParent.appendChild(taskFormWrapper)

    createUpdateTaskBtn(newTask, source)
    createDeleteTaskBtn(newTask, source)
}

