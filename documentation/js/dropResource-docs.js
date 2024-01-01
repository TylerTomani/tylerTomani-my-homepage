const resources = document.querySelectorAll('.resource')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')

subResourcesContainers.forEach(subResourcesContainer => {
    subResourcesContainer.classList.add('hide')
})

resources.forEach(resource => {
    resource.addEventListener('click', e => {
        console.log('kljd')
    })
    resource.addEventListener('keydown', e => {
        let key = e.keyCode 
        if(key === 13){
            let resourceContainer = getResourceContainer(e.target.parentElement)
            console.log(resourceContainer)
            const subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')            

            toggleSubResourcesContainer(subResourcesContainer)
        }
        
    })
})
// domu shortcut for 'dom up' get container
function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if (parent.parentElement){
        return ResgetResourceContainer(parent.parentElement)
    } else {
        return null
    }
}

function toggleSubResourcesContainer(container){
    if(container){
        if(container.classList.contains('hide')){
            container.classList.remove('hide')
        }else {
            container.classList.add('hide')
        }
    }
}