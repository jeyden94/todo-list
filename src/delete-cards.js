export function deleteThisTask() {

}

export function deleteThisProjectFromLocalStorage(ProjectId) {
    console.log(ProjectId)
    const project = localStorage.getItem(ProjectId)
    console.log(project)
    localStorage.removeItem(ProjectId)
}

export function clearThisProjectFromTheScreen(projectFormWrapper, newProjectForm) {
    projectFormWrapper.removeChild(newProjectForm);
}