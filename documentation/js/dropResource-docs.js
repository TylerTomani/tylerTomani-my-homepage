const resources = document.querySelectorAll('.resource')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')

function hideSubResources(){
    subResourcesContainers.forEach(subResourcesContainer => {
    if(!subResourcesContainer.classList.contains('show')){
        subResourcesContainer.classList.add('hide')
    } 
    if(subResourcesContainer.classList.contains('show')){
        subResourcesContainer.classList.remove('show')
    }
})
}
hideSubResources()
resources.forEach(resource => {
    resource.addEventListener('click', e => {
        console.log('kljd')
        e.preventDefault()
        let resourceContainer = getResourceContainer(e.target.parentElement)
        console.log(resourceContainer)
        window.open(e.target.href,'_self')

        const subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')            
        toggleSubResourcesContainer(subResourcesContainer)
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
        return getResourceContainer(parent.parentElement)
    } else {
        return null
    }
}

function toggleSubResourcesContainer(container){
    if(container){
        if(container.classList.contains('hide')){
            hideSubResources()
            container.classList.remove('hide')
            container.classList.remove('show')
        }
        // else if (container.classList.contains('show')){
        //     container.classList.remove('show')
        //     container.classList.add('hide')
        // }
        else {
            hideSubResources()
            container.classList.remove('show')
            container.classList.add('hide')
        }
    }
}