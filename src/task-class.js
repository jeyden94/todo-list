export class Task {

    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.uniqueTaskId = crypto.randomUUID();
    }

    storeLocally() {
        localStorage.setItem(`${this.uniqueTaskId}`, `${JSON.stringify(this)}`);
    }

    getFromStorage() {
        console.log(JSON.parse(localStorage.getItem(`${this.uniqueTaskId}`)))
    }

}