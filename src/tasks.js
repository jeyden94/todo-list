export class Task {

    constructor(title, description, priority, dueDate, project) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = project;
        this.uniqueTaskId = crypto.randomUUID();
    }

    pullFromStorage() {
        return JSON.parse(localStorage.getItem(`${this.uniqueTaskId}`));
    }

}

export function storeLocally(task) {
    localStorage.setItem(`${task.uniqueTaskId}`, `Title: ${JSON.stringify(task)}`);
}
