const theseProjects = document.querySelectorAll('.step-txt > p > a')
const tutorials = document.querySelectorAll('.tutorial')
theseProjects.forEach(project => {
    project.addEventListener('click', e => {
        e.preventDefault()
        loadpage(e)
    })
    project.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            console.log('jkdjfjhjsdjfh')
            e.preventDefault()
            loadpage(e)
        }
    })
})

// variable tutorials is located in numFocus.js
if(tutorials){
    tutorials.forEach(tutorial => {
        tutorial.addEventListener('click', e => {
            e.preventDefault()
            loadpage(e)
        })
        tutorial.addEventListener('keydown', e => {
            if(e.keyCode === 13){
                e.preventDefault()
                loadpage(e)
            }
        })
    })
}
function loadpage(e){
    let tutorial = getTutorialContainer(e.target)
    const pageLink = tutorial.querySelector("a")
    open(pageLink.href,'_blank')
}

function getTutorialContainer(tutorial){
    if(tutorial.classList.contains('tutorial')){
        return tutorial
    } else if (tutorial.classList.contains('project')){
        return tutorial
    }
    return tutorial.parentElement
}

