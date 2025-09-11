import { Project } from "./project-class.js"
import { deleteThisProjectFromLocalStorage, clearThisProjectFromTheScreen } from "./delete-cards.js"

export function enableNewProjectForm() {
    const createProjectBtn = document.getElementById("new-project-btn")
    const openProjectForm = createProjectBtn.addEventListener("click", openNewProjectForm)
}

function openNewProjectForm() {

    const projectFormWrapper = document.querySelector(".project-form-wrapper")

    const newProject = new Project("", "");
    
    newProject.storeLocally()

    const newProjectForm = document.createElement("form")

    newProjectForm.setAttribute("data-project-id", `${newProject.uniqueProjectId}`)

    newProjectForm.innerHTML = `

    <label for="title">Title</label>
    <input type="text" id="title" placeholder="What's the project?">

    <label for="color">Color</label>
    <select id="color" name="color">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <option value="">Select Project Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
    </select>
    
    <input data-project-id-btn="${newProject.uniqueProjectId}" class="update-project-btn" type="button" value="Update Project">
    <input data-project-id-btn-delete="${newProject.uniqueProjectId}" class="delete-project-btn" type="button" value="Delete">`

    projectFormWrapper.appendChild(newProjectForm)

    let updateProjectBtn = document.querySelector(`[data-project-id-btn="${newProject.uniqueProjectId}"]`)
    updateProjectBtn.addEventListener("click", () => {
        console.log(`Update Project with Id: ${newProject.uniqueProjectId}`)
        // Create functionality to route changes to the project form to local storage AND update the DOM
    })

    let deleteProjectBtn = document.querySelector(`[data-project-id-btn-delete="${newProject.uniqueProjectId}"]`)
    deleteProjectBtn.addEventListener("click", () => {
        console.log(`Delete Project with Id: ${newProject.uniqueProjectId}`)
        deleteThisProjectFromLocalStorage(newProject.uniqueProjectId)
        clearThisProjectFromTheScreen(projectFormWrapper, newProjectForm)
    })
}