export function createTask(title, description, dueDate, priority, project) {
    
    

    return {
        title,
        description,
        dueDate,
        priority,
        project
    }
}

function updateTaskArray(arr, task) {

    arr.push(task)

    return {
        arr
    }
}