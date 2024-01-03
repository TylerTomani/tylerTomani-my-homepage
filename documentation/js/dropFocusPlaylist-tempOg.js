const playlistContainersHeaders = document.querySelectorAll('.playlist-container > header')
const playlistTutorialContainers = document.querySelectorAll('.playlist-tutorials-container')

const tutorialContainerTutorials = document.querySelectorAll('.tutorials-container >.tutorial-container > h3 > .tutorial ')
let numFocus = false
let pListTutorials = []
function hidePlaylistTutorialsContainers(){
    playlistTutorialContainers.forEach(playlistTutorialContainers => {
        playlistTutorialContainers.classList.add('hide')
    })
}
hidePlaylistTutorialsContainers()

// numFocus in togglePlistTutorialContainer()
function togglePlistTutorialContainer(container){
    if(container.classList.contains('hide')){
        hidePlaylistTutorialsContainers()
        container.classList.remove('hide')
        numFocus = true
    } else {
        container.classList.add('hide')
        numFocus = false

    }
}

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
// function queryPlaylistTutorial()

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    // console.log(e.target)
    // console.log(numFocus)
    if(numFocus){
        tutorialsContainer
    } else {
        playlistContainersHeaders.forEach(playlistContainersHeader => {
            const plistHeaderH2 = playlistContainersHeader.querySelector(' h2')
            const idPlist = plistHeaderH2.innerText[0]
            if(key === idPlist[0]){
                playlistContainersHeader.focus()
            }
        })
        tutorialContainerTutorials.forEach((tutorialContainerTutorial,i,arr) => {
                // const tutorialContainer = getTutorialContainer(e.target.parentElement)              
                console.log(tutorialContainerTutorial.parentElement)
                // const tutorialH3 = tutorialContainerTutorial.querySelector('tutorial')
                // const tutorialNum = tutorialH3.innerText[0]
                // console.log(tutorialContainerTutorial)
                if(key === tutorialContainerTutorial.innerText[0]){
                    tutorialContainerTutorial.focus()
                    console.log(tutorialContainerTutorial)
                }
                // console.log(tutn)
                // if(tutorialNum){
                //     confirm.log(tutorialNum)
                // }
                // console.log(tutorialContainerTutorial)
                // if(key === 's'){
                    // tutorialContainerTutorial.focus()
                // }
        })      
        
    }
})