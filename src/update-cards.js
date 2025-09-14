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


// Update button needs to do different things depending on where the task is showing up
// the screen (using "source"). If it's in the create section, updating should:

// 1 - route it to local storage for the first time (it should not already be in local
// storage)

// 2 - remove it from the screen

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