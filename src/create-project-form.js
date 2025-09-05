import { Project } from "./project-controller.js"
import { deleteThisProjectFromLocalStorage, clearThisProjectFromTheScreen } from "./delete-cards.js"
import { formattedDate } from "./dates.js"

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

    <p>${newProject.uniqueProjectId}</p>
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
    updateProjectBtn.addEventListener("click", (e) => console.log(`Update Project with Id: ${newProject.uniqueProjectId}`))

    let deleteProjectBtn = document.querySelector(`[data-project-id-btn-delete="${newProject.uniqueProjectId}"]`)
    deleteProjectBtn.addEventListener("click", () => {
        console.log(`Delete Project with Id: ${newProject.uniqueProjectId}`)
        deleteThisProjectFromLocalStorage(newProject.uniqueProjectId)

        // now, delete the dom element
        clearThisProjectFromTheScreen(projectFormWrapper, newProjectForm)
    })
}