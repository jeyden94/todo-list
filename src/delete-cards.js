export function deleteThisTaskFromLocalStorage(taskId) {
    console.log(taskId)
    const task = localStorage.getItem(taskId)
    console.log(task)
    localStorage.removeItem(taskId)
}

export function clearThisTaskFromTheScreen(taskFormWrapper, newTaskForm) {
    taskFormWrapper.removeChild(newTaskForm);    
} 

export function deleteThisProjectFromLocalStorage(projectId) {
    console.log(projectId)
    const project = localStorage.getItem(projectId)
    console.log(project)
    localStorage.removeItem(projectId)
}

export function clearThisProjectFromTheScreen(projectFormWrapper, newProjectForm) {
    projectFormWrapper.removeChild(newProjectForm);
}