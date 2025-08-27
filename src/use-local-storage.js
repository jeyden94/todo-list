export function storeInLocalStorage(task) {
    let string = JSON.stringify(task)

    localStorage.setItem("test", string)

    return {
        string
    }
}