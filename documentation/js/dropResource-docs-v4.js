const dropTopics = document.querySelectorAll('.dropTopic')
const dropResources = document.querySelectorAll('.dropResource')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')
const resourceContainers = document.querySelectorAll('.resource-container')

function hideSubResourcesContainer(){
    subResourcesContainers.forEach(el => {
    if(!el.classList.contains('hide')){
        el.classList.add('hide')
    }
    })
}
function hideResourceContainers(){
    resourceContainers.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
hideSubResourcesContainer()
hideResourceContainers()

dropResources.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        const resourceContainer = getResourceContainer(e.target.parentElement)
        let subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')
        toggleSubResourcesContainer(subResourcesContainer)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            const resourceContainer = getResourceContainer(e.target.parentElement)
            let subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')
            toggleSubResourcesContainer(subResourcesContainer)
        }
    })
})

dropTopics.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        const topicContainer = getTopicContainer(e.target.parentElement)
        let resourceContainer = topicContainer.querySelector('.resource-container') ?
                                topicContainer.querySelector('.resource-container') :
                                topicContainer.querySelector('.sub-resources-container')
        console.log(resourceContainer)
        toggleTopic(resourceContainer)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            const topicContainer = getTopicContainer(e.target.parentElement)
            let resourceContainer = topicContainer.querySelector('.resource-container') ?
                                    topicContainer.querySelector('.resource-container') :
                                    topicContainer.querySelector('.sub-resources-container')
            console.log(resourceContainer)
            toggleTopic(resourceContainer)
        }
    })
})

function toggleSubResourcesContainer(el){
    if(el.classList.contains('hide')){
        hideSubResourcesContainer()
        el.classList.remove('hide')
    } else {
        el.classList.add('hide')
    }
}
function toggleTopic(el){
    if(el.classList.contains('hide')){
        hideResourceContainers()
        hideSubResourcesContainer()
        el.classList.remove('hide')
    } else {
        el.classList.add('hide')
    }
}

function getTopicContainer(parent){
    if(parent.classList.contains('topic-container')){
        return parent
    } else if (parent.parentElement){
        return getTopicContainer(parent.parentElement)
    } else {
        return null
    }
}
function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent    
    } else if (parent.parentElement){
        return getResourceContainer(parent.parentElement)
    } else {
        return null
    }
}