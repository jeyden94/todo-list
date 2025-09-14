import { updateThisTaskInLocalStorage } from "./update-cards.js"

export function createUpdateTaskBtn(taskId) {

    const thisTask = JSON.parse(localStorage.getItem(taskId));

    let updateTaskBtn = document.querySelector(`[data-task-id-btn="${taskId}"]`)
    
    updateTaskBtn.addEventListener("click", () => {
        let taskTitle = document.getElementById("title").value;
        let taskDescription = document.getElementById("description").value;
        let taskDueDate = document.getElementById("due-date").value;
        let taskPriority = document.getElementById("priority").value;
        let taskProject = document.getElementById("project").value;

        updateThisTaskInLocalStorage(taskId, taskTitle, taskDescription, taskDueDate, taskPriority, taskProject)
        
        // Create functionality to route changes to the tasks form to local storage AND update the DOM
    })
}

export function createDeleteTaskBtn(taskId) {

    let deleteTaskBtn = document.querySelector(`[data-task-id-btn-delete="${taskId}"]`)

    deleteTaskBtn.addEventListener("click", () => {
        deleteThisTaskFromLocalStorage(taskId)
        clearThisTaskFromTheScreen(taskFormWrapper, newTaskForm)        
    })

}