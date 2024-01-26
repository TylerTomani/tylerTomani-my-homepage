const playlistContainersHeaders = document.querySelectorAll('.playlist-container > header')
const playlistTutorialContainers = document.querySelectorAll('.playlist-tutorials-container')


const tutorialContainerTutorials = document.querySelectorAll('.tutorials-container >.tutorial-container > h3 > .tutorial ')
let numFocus = false
let currentPlistTutorials
function hidePlaylistTutorialsContainers(){
    playlistTutorialContainers.forEach(playlistTutorialContainer => {
        if(!playlistTutorialContainer.classList.contains('show')){
            playlistTutorialContainer.classList.add('hide')
            // currentPlistTutorials
            
        }else
        if(playlistTutorialContainer.classList.contains('show')){
            currentPlistTutorials = playlistTutorialContainer.querySelector('.tutorial-container > h3 > .tutorial')
            console.log(playlistTutorialContainer)
            playlistTutorialContainer.click()
        }
    })
}
hidePlaylistTutorialsContainers()

// numFocus in togglePlistTutorialContainer()
function togglePlistTutorialContainer(container){
    if(container.classList.contains('show')){
        container.classList.remove('show')
    }
    if(container.classList.contains('hide')){
        hidePlaylistTutorialsContainers()
        container.classList.remove('hide')
        queryPlaylistTutorials(container)
        numFocus = true
    } else {
        container.classList.add('hide')
        numFocus = false

    }
}
playlistTutorialContainers.forEach(playlistTutorialContainer => {
    playlistTutorialContainer.addEventListener('focusout', e => {
        numFocus = false
    })
    playlistTutorialContainer.addEventListener('focusin', e => {
        numFocus = true
    })
})
playlistContainersHeaders.forEach(playlistContainersHeader => {
    playlistContainersHeader.addEventListener('click', e => {
        e.preventDefault()
        const playlistContainer = getPlaylistContainer(e.target)
        console.log(playlistContainer)
        const tutorialsContainer = playlistContainer.querySelector('.playlist-tutorials-container')
        togglePlistTutorialContainer(tutorialsContainer)
    })
    playlistContainersHeader.addEventListener('keydown', e => {
        const playlistContainer = getPlaylistContainer(e.target)
        const tutorialsContainer = playlistContainer.querySelector('.playlist-tutorials-container')
        let key = e.keyCode 
        if(key === 13){
            togglePlistTutorialContainer(tutorialsContainer)
        }
    })
    playlistContainersHeader.addEventListener('focus', e => {
        // console.log('focus')
        numFocus = false
    })
})
function getPlaylistContainer(parent){
    if(parent.classList.contains('playlist-container')){
        return parent
    } else if(parent.parentElement){
        return getPlaylistContainer(parent.parentElement)
    } else {
        return null
    }
}
function getTutorialContainer(parent){
    if(parent.classList.contains('tutorial-container')){
        return parent
    }else if(parent.parentElement){
        return getTutorialContainer(parent.parentElement)
    } else {
        return null
    }
}
function queryPlaylistTutorials(container){
    currentPlistTutorials = container.querySelectorAll('.tutorial-container > h3 > .tutorial')
}

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(numFocus){
        // tutorialsContainer
        currentPlistTutorials.forEach(tutorial => {
            if(key === tutorial.innerText[0]){
                tutorial.focus()
            }
            if(key === 'p'){
                const playlistContainer = getPlaylistContainer(tutorial.parentElement)
                const playlistContainerHeader = playlistContainer.querySelector('header')
                playlistContainerHeader.focus()
            }
        })
    } else {
        playlistContainersHeaders.forEach(playlistContainersHeader => {
            const plistHeaderH2 = playlistContainersHeader.querySelector(' h2')
            const idPlist = plistHeaderH2.innerText[0]
            if(key === idPlist[0]){
                playlistContainersHeader.focus()
            }
        })
        tutorialContainerTutorials.forEach((tutorialContainerTutorial) => {
            if(key === tutorialContainerTutorial.innerText[0]){
                tutorialContainerTutorial.focus()
                // console.log(tutorialContainerTutorial)
            }
                
        })            
    }
})