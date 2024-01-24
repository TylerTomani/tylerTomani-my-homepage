const parts = document.querySelectorAll('.dropPart')
const stepsContainers = document.querySelectorAll('.steps-container')

let partsFocus = true
let partsToggleNum = 0

function hideStepsContainers(){
    stepsContainers.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
hideStepsContainers()

function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
    } else {
        return null
    }
}
addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(partsFocus){
        partFocus(key)
    }
})
function partFocus(key){
    parts.forEach(el => {
        if(key === el.innerText[5]){
            el.focus()
        }
    })
}

parts.forEach(el => {
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            toggleParts(e.target)
        }
    })
    el.addEventListener('focusout', e => {
        console.log('focusout')
        // partsToggleNum = 2
    })
    el.addEventListener('focus', e => {
        console.log('focus')
        partsToggleNum = 0
    })
})
function toggleParts(el){
    console.log(partsToggleNum)      
    switch (partsToggleNum){
        case 0:
            hideStepsContainers()
            showStepsContainer(el)
            break;        
        case 1:
            // hideStepsContainers()
            partsFocus = false
            break;        
        case 2:
            hideStepsContainers()
            partsFocus = true
            break;        
    }
    partsToggleNum += 1
    if(partsToggleNum > 2){
        partsToggleNum = 0
    }       
}
function showStepsContainer(el){
    // console.log(el)
    const part  = getPartContainer(el)
    const stepsContainer = part.querySelector('.steps-container')
    if(stepsContainer.classList.contains('hide')){
        stepsContainer.classList.remove('hide')
    }
}