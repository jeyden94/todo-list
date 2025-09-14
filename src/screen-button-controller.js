import { updateThisTaskInLocalStorage } from "./update-cards.js"
import { deleteThisTaskFromLocalStorage, clearThisTaskFromTheScreen } from "./delete-cards.js"


export function createUpdateTaskBtn(newTask, source) {

    // const thisTask = JSON.parse(localStorage.getItem(taskId));


    let updateTaskBtn = document.querySelector(`[data-task-id-btn="${newTask.uniqueTaskId}"]`)
    
    updateTaskBtn.addEventListener("click", () => {
        let taskTitle = document.getElementById(`title-${newTask.uniqueTaskId}`).value;
        let taskDescription = document.getElementById(`description-${newTask.uniqueTaskId}`).value;
        let taskDueDate = document.getElementById(`due-date-${newTask.uniqueTaskId}`).value;
        let taskPriority = document.getElementById(`priority-${newTask.uniqueTaskId}`).value;
        let taskProject = document.getElementById(`project-${newTask.uniqueTaskId}`).value;

        if (source === "new") {
            newTask.storeLocally()
            clearThisTaskFromTheScreen(newTask)        
        } else {
            updateThisTaskInLocalStorage(newTask.uniqueTaskId, taskTitle, taskDescription, taskDueDate, taskPriority, taskProject)
        }

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