export function storeInLocalStorage(task) {
    let string = JSON.stringify(task)

    localStorage.setItem("test", string)

    return {
        string
    }
}

export function getFromLocalStorage(storageKey) {
    let tasks = JSON.parse(localStorage.getItem(storageKey))

    return {
        tasks
    }
}

export function clearLocalStorage() {
    localStorage.clear()
}