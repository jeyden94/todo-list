import { createFormFromTask } from "./show-task-as-form"

// View buttons

export const showAllTasksButton = document.querySelector(".show-all")
export const showKanbanViewButton = document.querySelector(".show-kanban")
export const showCalendarViewButton = document.querySelector(".show-calendar")

const taskViewWrapperParent = document.querySelector(".task-view")
showAllTasksButton.addEventListener("click", showAllTasks)

// Helper function to clear screen

function removeAllChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

export function showAllTasks() {

    removeAllChildNodes(taskViewWrapperParent)

    const source = "all" // Should be only hard-coded element

    const allTaskViewFormWrapper = document.createElement("div")
    allTaskViewFormWrapper.classList.add(`task-form-wrapper-${source}`)

    taskViewWrapperParent.appendChild(allTaskViewFormWrapper)

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)

        if (key === "debug") { continue }

        console.log(key)

        let selectedTask = JSON.parse(localStorage.getItem(key))

        createFormFromTask(selectedTask, source)

    }

}

