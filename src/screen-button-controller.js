import { updateThisTaskInLocalStorage } from "./update-cards.js"
import { deleteThisTaskFromLocalStorage, clearThisTaskFromTheScreen } from "./delete-cards.js"
import { currentView, showAllTasks } from "./task-view-controller.js"

export function createUpdateTaskBtn(newTask, source) {

    let updateTaskBtn = document.querySelector(`[data-task-id-btn-${source}="${newTask.uniqueTaskId}"]`)
    
    updateTaskBtn.addEventListener("click", () => {
        let taskTitle = document.getElementById(`title-${newTask.uniqueTaskId}`).value;
        let taskDescription = document.getElementById(`description-${newTask.uniqueTaskId}`).value;
        let taskDueDate = document.getElementById(`due-date-${newTask.uniqueTaskId}`).value;
        let taskPriority = document.getElementById(`priority-${newTask.uniqueTaskId}`).value;
        let taskProject = document.getElementById(`project-${newTask.uniqueTaskId}`).value;

        if (source === "new") {
            newTask.storeLocally()
            updateThisTaskInLocalStorage(newTask.uniqueTaskId, taskTitle, taskDescription, taskDueDate, taskPriority, taskProject)
            clearThisTaskFromTheScreen(newTask, source)        
        } else {
            updateThisTaskInLocalStorage(newTask.uniqueTaskId, taskTitle, taskDescription, taskDueDate, taskPriority, taskProject)
        }

        if (currentView === "" || currentView === "all") {
            showAllTasks()
        }

    })
}

export function createDeleteTaskBtn(newTask, source) {

    const deleteTaskBtn = document.querySelector(`[data-task-id-btn-delete-${source}="${newTask.uniqueTaskId}"]`);
    deleteTaskBtn.addEventListener("click", () => {
        deleteThisTaskFromLocalStorage(newTask.uniqueTaskId)
        clearThisTaskFromTheScreen(newTask, source)       
    });

}