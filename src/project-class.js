export class Project {

    constructor(title,color) {
        this.title = title;
        this.color = color;
        this.uniqueProjectId = crypto.randomUUID();
    }

    storeLocally() {
        localStorage.setItem(`${this.uniqueProjectId}`, `${JSON.stringify(this)}`);
    }

    getFromStorage() {
        console.log(JSON.parse(localStorage.getItem(`${this.uniqueProjectId}`)))
    }

}