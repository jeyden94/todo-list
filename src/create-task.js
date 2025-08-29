import { storeInLocalStorage } from "./use-local-storage.js"

export function addNewTask(title, description, dueDate, priority, project) {
    
    let newTask = createTaskObject(title, description, dueDate, priority, project)
    
    let taskId = storeInLocalStorage(newTask)

    return {
        newTask,
        taskId
    }
}

function createTaskObject(title, description, dueDate, priority, project) {
    
    return {
        title,
        description,
        dueDate,
        priority,
        project
    }
}