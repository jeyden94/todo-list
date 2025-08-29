export function assignDOMElements() {
    const createTaskBtn = document.getElementById("new-task-btn")
    const openTaskForm = createTaskBtn.addEventListener("click", openNewTaskForm)

    return {
        openTaskForm
    }
}

function openNewTaskForm() {

    const formWrapper = document.querySelector(".form-wrapper")

    console.log("hi")
    
    const newTask = document.createElement("form")

    newTask.innerHTML = `
    <label for="title">Title</label>
    <input type="text" id="title">
    <label for="description">Description</label>
    <input type="text" id="description">
    <label for="due-date">Due Date</label>
    <input type="date" id="due-date">
    <label for="priority">Priority</label>
    <select id="priority" name="priority">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Priority Level</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    <label for="project">Project</label>
    <select id="project" name="project">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Project</option>
        <option value="test-project">Test</option>
    </select>
    <input id="submit-task" type="submit" value="Submit">`

    formWrapper.appendChild(newTask)



}