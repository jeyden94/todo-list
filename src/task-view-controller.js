import { toDate } from "date-fns/fp";
import { createFormFromTask } from "./show-task-as-form"
import { format, add } from 'date-fns';

// View buttons

export const showAllTasksButton = document.querySelector(".show-all-btn")
export const showKanbanViewButton = document.querySelector(".show-kanban-btn")
export const showCalendarViewButton = document.querySelector(".show-calendar-btn")

export let currentView = "";

const taskViewWrapperParent = document.querySelector(".task-view")

showAllTasksButton.addEventListener("click", showAllTasks)
showKanbanViewButton.addEventListener("click", showKanbanView)

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

    currentView = source;

}

export function showKanbanView() {

    removeAllChildNodes(taskViewWrapperParent)

    let source = "kanban" // Should be only hard-coded element

    const kanbanViewFormWrapper = document.createElement("div")
    kanbanViewFormWrapper.classList.add(`kanban-view-wrapper`)
    // kanbanViewFormWrapper.classList.add(`task-form-wrapper-${source}`)

    taskViewWrapperParent.appendChild(kanbanViewFormWrapper)

    // Create 7 Kanban Cards with date attributes
    for (let i = 0; i < 7; i++) {
        const kanbanCardWrapper = document.createElement("div")

        // kanbanCardWrapper.classList.add(`task-form-wrapper-${source}`)
        // kanbanCardWrapper.classList.add(`kanban-card-wrapper`)

        const now = new Date();
        const screenDateFormat = "eeee";
        const localStorageDateFormat = "yyyy-MM-dd"

        const screenDate = format(add((now), {days: i}), screenDateFormat);
        const htmlDate = format(add((now), {days: i}), localStorageDateFormat)

        source += `-${htmlDate}`
        console.log(source)
        kanbanCardWrapper.classList.add(`task-form-wrapper-${source}`)

        kanbanCardWrapper.setAttribute(`date`, `${htmlDate}`)

        kanbanViewFormWrapper.appendChild(kanbanCardWrapper)

        const kanbandCardTitle = document.createElement("h1")
        kanbandCardTitle.textContent = `${screenDate}`
        kanbanCardWrapper.appendChild(kanbandCardTitle)

        for (let j = 0; j < localStorage.length; j++) {
            const key = localStorage.key(j)

            if (key === "debug") { continue }

            let selectedTask = JSON.parse(localStorage.getItem(key))
            
            if (selectedTask.dueDate === format(add((now), {days: i}), localStorageDateFormat)) {
                
                console.log(format(add((now), {days: i}), localStorageDateFormat))
                createFormFromTask(selectedTask, source)
            }
        }
        source = "kanban";
    }

    currentView = source;
}