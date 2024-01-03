const playlistContainers = document.querySelectorAll('.playlist-container')
const playlistTutorialContainers = document.querySelectorAll('.playlist-tutorials-container')

// const tutorialContainerTutorials = document.querySelectorAll('.tutorial-container > h3 > .tutorial ')
let tutorials = []
let numFocus = false

function hidePlaylistTutorialsContainers(){

    playlistTutorialContainers.forEach(playlistTutorialContainers => {
        playlistTutorialContainers.classList.add('hide')
    })
}
hidePlaylistTutorialsContainers()

playlistContainers.forEach(playlistContainer => {
    playlistContainer.addEventListener('click', e => {
        const tutorialsContainer = e.target.querySelector('.playlist-tutorials-container')
        togglePlistTutorialContainer(tutorialsContainer)
        console.log(tutorialsContainer)
    })
    playlistContainer.addEventListener('keydown', e => {
        const tutorialsContainer = e.target.querySelector('.playlist-tutorials-container')
        let key = e.keyCode 
        if(key === 13){
            togglePlistTutorialContainer(tutorialsContainer)
        }
    })
})
// numFocus in togglePlistTutorialContainer()
function togglePlistTutorialContainer(container){
    if(container.classList.contains('hide')){
        hidePlaylistTutorialsContainers()
        container.classList.remove('hide')
        getPlaylistTutorials(container)
        numFocus = true
    } else {
        container.classList.add('hide')
        numFocus = false

    }
}

function getPlaylistTutorials(container){
    // console.log(container)
    tutorials = container.querySelectorAll('.tutorial ')
}

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    console.log(key)
    console.log(numFocus)
    if(numFocus){
        tutorials.forEach((tutorial,i) => {
            console.log(tutorial.innerText[0])
        })
    } else {
        playlistContainers.forEach(plistContainer => {
            console.log(plistContainer)
            const plistHeaderH2 = plistContainer.querySelector('header > h2')
            const idPlist = plistHeaderH2.innerText[0]
            if(key === idPlist[0]){
                plistContainer.focus()
            }
        })
        // tutorialContainerTutorials.forEach(tutorialContainerTutorial => {
            // const plistHeaderH2 = plistContainer.querySelector('header > h2')
            // const idPlist = plistHeaderH2.innerText[0]
            // if(key === idPlist[0]){
            //     plistContainer.focus()
            // }
        // })
    }

})
