export function loadTasksFromStorage() {
    
    let tasks = []

    let allTaskKeys = Object.keys(localStorage)

    for (let key in allTaskKeys) {
        tasks.push(JSON.parse(localStorage.getItem(`${allTaskKeys[key]}`)))
    }

    return {
        tasks
    }
}

export function clearLocalStorage() {
    localStorage.clear()
}

export function storeInLocalStorage(task) {
    let taskDetails = JSON.stringify(task)
    let taskId = crypto.randomUUID()

    localStorage.setItem(taskId, taskDetails)

    return {
        taskId
    }
}