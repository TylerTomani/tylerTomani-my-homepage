(function(){
    const parts = document.querySelectorAll('.part')
const dropParts = document.querySelectorAll(".dropPart")
const documentation = document.getElementById('documentation')
const chatGptQuestions = document.querySelector('.chatGpt-link ')
const linkedinLearning = document.querySelector('.linkedinLearning')
const stepsContainers = document.querySelectorAll('.steps-container')
const stepTxts = document.querySelectorAll('.step-txt') 
let partFocused = false
let stepsFocused = false
let stepsContainerFocused = false
dropParts.forEach(dropPart => {
    dropPart.addEventListener('click', e => {
        // console.log(e.target)
        removeAllStepTxtTabIndex()
        stepsFocused = false
    })
    dropPart.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            // addStepTxtTabIndex(e.target)
        }   
    })
    dropPart.addEventListener('focusin', e => {
        stepsFocused = false
    })
})

stepsContainers.forEach(stepsContainer => {
    const stepColTxts = stepsContainer.querySelectorAll('.step-col > .step-txt')
    const stepTxts = stepsContainer.querySelectorAll('.step > .step-txt')
    stepColTxts.forEach(stepTxt => {
        stepTxtFocus(stepTxt)
    })
    stepTxts.forEach(stepTxt => {
        stepTxtFocus(stepTxt)
    })
})

function stepTxtFocus(step){
    step.addEventListener('focus', e => {
        stepsFocused = true
        let stepId 
        const stepsContainer = getStepsContainer(e.target.parentElement)
        const stepColTxts = stepsContainer.querySelectorAll('.step-col > .step-txt')
        const stepTxts = stepsContainer.querySelectorAll('.step > .step-txt')
        addEventListener('keydown', e => {
            key = e.key
            stepColTxts.forEach(stepTxt => {
                if(stepTxt.hasAttribute('id')){
                    stepId = stepTxt.getAttribute('id')
                }
                if(stepId){
                    if(key === stepId[stepId.length - 1]){
                        stepTxt.focus()
                    } else {
                        return 
                    }
                }
            })
            stepTxts.forEach(stepTxt => {
                if(stepTxt.hasAttribute('id')){
                    stepId = stepTxt.getAttribute('id')
                }
                if(stepId){
                    if(key === stepId[stepId.length - 1]){
                        stepTxt.focus()
                    } else {
                        return
                    }
                }
            })
        })

        
    })
}

// Part Focus events
addEventListener('keydown', e => {
    let key = e.key
    let dropPartId
    if(key === 'd' || key === 'D'){
        documentation.focus()
        window.scrollTo(0,0)
    }
    if(key === 'g' || key === 'G'){
        chatGptQuestions.focus()
        window.scrollTo(0,0)
    }

    if(key === 'l' || key === 'L'){
        linkedinLearning.focus()
        window.scrollTo(0,0)
    }
    if(key === 'p' || key === 'P'){
        window.scrollTo(0,0)
    }
    if(stepsFocused){
        dropParts.forEach(dropPart => {
            if(dropPart.hasAttribute('id')){
                dropPartId = dropPart.getAttribute('id')
            }
            if(key === dropPartId[0]){
                dropPart.focus()
            }
        })

    } else {
        dropParts.forEach(dropPart => {
            if(dropPart.hasAttribute('id')){
                dropPartId = dropPart.getAttribute('id')
            }
            if(key === dropPartId[dropPartId.length - 1] || key === dropPartId[0]){
                dropPart.focus()
            }
        })
        
    }
})
//////// We have to clean up the code above


function removeAllStepTxtTabIndex(){
    stepTxts.forEach(stepTxt => {
        stepTxt.removeAttribute('tabindex')
    })
}


function toggleStepsContainer(e){
    const part = getPartContainer(e.target.parentElement)
    const stepsContainer = part.querySelector('.steps-container')
    if(stepsContainer.classList.contains('show')){
        stepsContainer.classList.remove('show')
        stepsContainer.classList.add('hide')
    } else if(stepsContainer.classList.contains('hide')){
        stepsContainer.classList.remove('hide')
    } else {
        stepsContainer.classList.add('hide')
    }
}


// Hide, Toggle, and Focus Steps

function hideSteps(){
    parts.forEach(part => {
        const stepsContainer = part.querySelector('.steps-container')
        if(stepsContainer){
            if(!stepsContainer.classList.contains('show')){
                stepsContainer.classList.add('hide')
            }
        }
    })
}
hideSteps()

dropParts.forEach(dropPart => {
    dropPart.addEventListener('keydown', e => {
        let key = e.key
        if(e.keyCode === 13){
            e.preventDefault()
            toggleStepsContainer(e)
        }
        
    })
    dropPart.addEventListener('click', e => {
        e.preventDefault()
        toggleStepsContainer(e)
    })
})



// Hide & Toggle Documentation
function hideDocumetation(){
    const topic = documentation.querySelector('.topic')
    if(!topic.classList.contains('show')){
        topic.classList.add('hide')
    }
}
hideDocumetation()
documentation.addEventListener('keydown', e => {
    let key = e.key
    if(e.keyCode === 13){
        toggleDocumentation()
    }
    
})
documentation.addEventListener('click', e => {
    toggleDocumentation()
    
})
function toggleDocumentation(){
    const topic = documentation.querySelector('.topic')
    const as = topic.querySelectorAll('.documentation > .doc > ul > li a')
    as.forEach(a => {
        a.setAttribute('tabindex','1')
    })
    if (topic.classList.contains('hide')){
        topic.classList.remove('hide')
    } else if (topic.classList.contains('show')){
        topic.classList.remove('show')
        topic.classList.add('hide')
    } else {
        topic.classList.add('hide')
    }
}
documentation.addEventListener('focus', e => {
    const as = e.target.querySelectorAll('.documentation > .doc > ul > li > a')
    as.forEach(a => {
        a.removeAttribute('tabindex')
    })
})
// Get parent Containers
function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
    }else {
        return null
    }
}
function getStepsContainer(parent){
    if(parent.classList.contains('steps-container')){
        return parent
    } else if (parent.parentElement){
        return getStepsContainer(parent.parentElement)
    }else {
        return null
    }
}
function getStepColContainer(parent){
    if(parent.classList.contains('step-col')){
        return parent
    } else if (parent.parentElement){
        return getStepColContainer(parent.parentElement)
    }else {
        return null
    }
}
function getStepContainer(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if (parent.parentElement){
        return getStepColContainer(parent.parentElement)
    }else {
        return null
    }
}

}())