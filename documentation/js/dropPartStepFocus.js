const dropParts = document.querySelectorAll('.dropPart')
const stepsContainer = document.querySelectorAll('.steps-container')
const part01 = document.getElementById('part01')
let partFocused = true
let stepsFocused = false
let hideAllDropParts = false
let windowWidth


addEventListener('DOMContentLoaded', e => {
    windowWidth = innerWidth
    console.log(windowWidth)
    if(windowWidth < 600){
        hideAllDropParts = true
    } else {
        hideAllDropParts = false
    }
})
addEventListener('resize', e => {
    windowWidth = innerWidth
    console.log(windowWidth)
    if(windowWidth < 600){
        hideAllDropParts = true
    } else {
        hideAllDropParts = false
    }
})


function hideParts(){
    dropParts.forEach(part => {
        const parent = part.parentElement
        const stepsContainer = parent.querySelector('.steps-container')
        stepsContainer.classList.add('hide')
        
    })
}
hideParts()

function partFocus(key){
    dropParts.forEach(part => {
        const h2 = part.querySelector('h2')
        if(key === h2.innerText[5] && partFocused && !stepsFocused){
            part.focus()
            partFocused = true
        }
    })
}
function toggleStepsContainer(e){
    const parent = getPartContainer(e.target.parentElement)
    const stepsContainer = parent.querySelector('.steps-container')
    if(stepsContainer.classList.contains('show')){
        stepsContainer.classList.remove('show')
        stepsContainer.classList.add('hide')
    } else if (!stepsContainer.classList.contains('hide')){
        stepsContainer.classList.add('hide')
    } else {
        stepsContainer.classList.remove('hide')
        
    }
}   
function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
    } else {
        return null
    }
}
dropParts.forEach(part => {
    part.addEventListener('click', e => {
        e.preventDefault()
        if(hideAllDropParts){
            hideParts()
            toggleStepsContainer(e)
        } else {
            
            toggleStepsContainer(e)
        }
        console.log(hideAllDropParts)
    })
    part.addEventListener('focus', e => {
        partFocused = true
        stepsFocused = false
    })
})

stepsContainer.forEach(stepsContainer => {
    const steps = stepsContainer.querySelectorAll('.step-txt')
    steps.forEach(step => {
        step.addEventListener('focus', e => {
            stepsFocused = true
            // console.log('stepsFocused',stepsFocused)
        })
    })
})

addEventListener('keydown', e => {
    let key = e.key
    partFocus(key)

    if(stepsFocused){
        stepsFocus(key)
        
    } else {
        if(key === 'p' || key === 'P'){
            // part01.focus()
        }
    }
})

function stepsFocus(key){
    stepsContainer.forEach(stepsContainer => {
        const steps = stepsContainer.querySelectorAll('.step-txt')
        steps.forEach(step => {
            // const part = step.parentElement.parentElement.parentElement
            const h3s = step.querySelectorAll('h3')
            h3s.forEach(h3 => {
                if(key === h3.innerText[1]){
                    step.focus()
                }
            })
            step.addEventListener('keydown', e => {
                let key = e.key
                if(key === 'p' || key === 'P'){
                    const part = step.parentElement.parentElement.parentElement
                    const dropPart = part.querySelector('.dropPart')
                    console.log(dropPart)
                    dropPart.focus()
                }
            })
        })
    })
}