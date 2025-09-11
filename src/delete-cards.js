export function deleteThisTaskFromLocalStorage(taskId) {
    const task = localStorage.getItem(taskId)
    localStorage.removeItem(taskId)
}

export function clearThisTaskFromTheScreen(taskFormWrapper, newTaskForm) {
    taskFormWrapper.removeChild(newTaskForm);    
} 

export function deleteThisProjectFromLocalStorage(projectId) {
    const project = localStorage.getItem(projectId)
    localStorage.removeItem(projectId)
}

export function clearThisProjectFromTheScreen(projectFormWrapper, newProjectForm) {
    projectFormWrapper.removeChild(newProjectForm);
}