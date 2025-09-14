export function deleteThisTaskFromLocalStorage(taskId) {
    const task = localStorage.getItem(taskId)
    localStorage.removeItem(taskId)
}

export function clearThisTaskFromTheScreen(newTask, source) {
    const taskFormWrapper = document.querySelector(`.task-form-wrapper-${newTask.uniqueTaskId}`)
    const newTaskForm = document.querySelector(`[data-task-id-${source}="${newTask.uniqueTaskId}"]`)
    taskFormWrapper.removeChild(newTaskForm);    
} 

export function deleteThisProjectFromLocalStorage(projectId) {
    const project = localStorage.getItem(projectId)
    localStorage.removeItem(projectId)
}

export function clearThisProjectFromTheScreen(projectFormWrapper, newProjectForm) {
    projectFormWrapper.removeChild(newProjectForm);
}