export function updateThisTaskInLocalStorage(taskId, taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {

    let selectedTask = JSON.parse(localStorage.getItem(taskId))
    
    selectedTask.title = taskTitle;
    selectedTask.description = taskDescription;
    selectedTask.dueDate = taskDueDate;
    selectedTask.priority = taskPriority;
    selectedTask.project = taskProject;

    const updatedTaskObject = JSON.stringify(selectedTask)
    localStorage.setItem(taskId, updatedTaskObject)
}

export function updateThisTaskOnTheScreen() {
    // taskFormWrapper.removeChild(newTaskForm);    
} 

export function updateThisProjectInLocalStorage(projectId) {
    console.log(projectId)
    const project = localStorage.getItem(projectId)
    console.log(project)
    localStorage.removeItem(projectId)
}

export function updateThisProjectOnTheScreen(projectFormWrapper, newProjectForm) {
    projectFormWrapper.removeChild(newProjectForm);
}