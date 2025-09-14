export function updateThisTaskInLocalStorage(taskId, taskTitle, taskDescription, taskDueDate, taskPriority) {

    let selectedTask = JSON.parse(localStorage.getItem(taskId))
    
    selectedTask.title = taskTitle;
    selectedTask.description = taskDescription;
    selectedTask.dueDate = taskDueDate;
    selectedTask.priority = taskPriority;

    const updatedTaskObject = JSON.stringify(selectedTask)
    localStorage.setItem(taskId, updatedTaskObject)
}