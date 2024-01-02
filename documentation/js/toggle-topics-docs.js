const resources = document.querySelectorAll('.resource')
const resourceHeaders = document.querySelectorAll('.resource > header')
const topicsContainers = document.querySelectorAll('.topics-container')
export const topics = document.querySelectorAll('.topic')

export let resourceFocus = true
export let topicFocus = false
let resourceClicked = false

topicsContainers.forEach(topicsContainer => {

})
function hideTopics(){
    topicsContainers.forEach(topicsContainer => {
        if(!topicsContainer.classList.contains('show')){
            topicsContainer.classList.add('hide')
        }
    })
}
hideTopics()

addEventListener('DOMContentLoaded', e => {
    resourceFocus = true
    topicFocus = false
})

resourceHeaders.forEach(resourceheader => {
    resourceheader.addEventListener('click', e => {
        e.preventDefault()
        const parent = getResource(e.target.parentElement)
        const topicsContainer = queryTopicsContainer(parent)
        toggleTopicsContainer(topicsContainer)
        resourceClicked = true
    })
    resourceheader.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            e.preventDefault()
            const parent = getResource(e.target.parentElement)
            const topicsContainer = queryTopicsContainer(parent)
            toggleTopicsContainer(topicsContainer)
            resourceClicked = true
        }
    })
    resourceheader.addEventListener('focus', e => {
        resourceClicked = false
        topicFocus = false
        resourceFocus = true
    })
    resourceheader.addEventListener('focusin', e => {
        resourceClicked = false
        topicFocus = false
        resourceFocus = true
    })
})
function toggleTopicsContainer(container){
    if(!container.classList.contains('hide')){
        container.classList.add('hide')
    } else if(container.classList.contains('hide')){
        hideTopics()
        container.classList.remove('hide')
    }
}
function getResource(parent){
    if(parent.classList.contains('resource')){
        return parent 
    } else if (parent.parentElement){
        return getResource(parent.parentElement)
    } else {
        return null
    }
} 
function queryTopicsContainer(parent){
    const topicsContainer = parent.querySelector('.topics-container')
    return topicsContainer
}


topics.forEach(topic => {
    topic.addEventListener('focus', e => {
        topicFocus = true
        resourceFocus = false
    })
    topic.addEventListener('focusin', e => {
        topicFocus = true
        resourceClicked = true
        resourceFocus = false
    })
    topic.addEventListener('focusout', e => {
        topicFocus = false
        resourceClicked = false
        resourceFocus = true
    })
})

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    
    topics.forEach(topic => {
        // topic.setAttribute('tabindex','1')
        if(key === topic.classList[1][0]){
            console.log('hide')
            topic.focus()
        }       
    })
})



topicsContainers.forEach(topicsContainer => {
    topicsContainer.addEventListener('focus', e=>{
        addTabResource()
    })
})
function addTabResource(){
    resources.forEach(resource => {
        resource.setAttribute('tabindex','1')
    })
}