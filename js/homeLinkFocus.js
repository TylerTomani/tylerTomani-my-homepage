const homeLink = document.querySelector('#homelink')
const tutorialLink = document.querySelector('#tutorialLink')

addEventListener('keydown',e =>{
    let key = e.key.toLowerCase()
    if(key === 'h'){
        if(homeLink){
            homeLink.focus()
        }
    }
    if(key === 't'){
        if(tutorialLink){
            tutorialLink.focus()
        }
    }
})