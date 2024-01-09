import { stepTxts } from "./img-enlarge-v1.js";
import { denlargeAllImgVids } from "./img-enlarge-v1.js";
import { getStepColContainer } from "./img-enlarge-v1.js";

const asStepTxt = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.copy-code')
let tabsAdded = false 
const part01 = document.getElementById('part01')
const parts = document.querySelectorAll('.part')
let partFocus = true

let stepColText = document.querySelectorAll('.step-col > .step-txt ')

function removeAllTabIndexes(){
    asStepTxt.forEach(a => {
        a.setAttribute('tabindex','-1')
    })
    copyCodes.forEach(el => {
        // el.removeAttribute('tabindex')
        el.setAttribute('tabindex','-1')
    })
}
removeAllTabIndexes()
asStepTxt.forEach(a => {
    a.addEventListener('focus', e => {
        denlargeAllImgVids()
    })
})
copyCodes.forEach(el => {
    el.addEventListener('focus', e => {
        denlargeAllImgVids()
    })
})


stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('focus', e => {
        denlargeAllImgVids()
        removeAllTabIndexes()
        tabsAdded = false
    })
    stepTxt.addEventListener('focusin', e => {
        partFocus = false
    })
    

    stepTxt.addEventListener('click', e => {
        e.preventDefault()
        // let stepTxt = getStepTxt(e.target.parentElement)
        let as = e.target.querySelectorAll('a')
        let copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
        if(!tabsAdded){
            addTabs(as)
            addTabs(copyCodes)
        } else {
            removeAllTabIndexes()
        }
        tabsAdded = !tabsAdded
    })
    stepTxt.addEventListener('keydown', e => {
        // e.preventDefault()
        let key = e.key.toLowerCase()
        let keyCode = e.keyCode
        if(keyCode === 13){
            let as = e.target.querySelectorAll('a')
            let copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
            if(!tabsAdded){
                addTabs(as)
                addTabs(copyCodes)
            } else {
                removeAllTabIndexes()
            }
            tabsAdded = !tabsAdded
        }
        if(!partFocus){
            if(key === 'p'){
                let part = getPartContainerFocus(e.target.parentElement)
                part.focus()
            }
        }
        
    })
})

stepColText.forEach(stepColText => {
    stepColText.addEventListener('click', e => {
        console.log(e.target)
    })
    stepColText.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){   
            console.log(e.target)
            let parent = e.target.parentElement
            let copyCodes = parent.querySelectorAll('.code-container > .copy-code')
            addTabs(copyCodes)
        }
    })

})


function getStepTxt(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if(parent.parentElement){
        return getStepTxt(parent.parentElement)
    } else {
        return null
    }
}

function addTabs(els){
    els.forEach(el => {
        console.log(el)
        el.setAttribute('tabindex','1')
    })
}

function getPartContainerFocus(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if(parent.parentElement){
        return getPartContainerFocus(parent.parentElement)
    } else {
        return null
    }
}

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(partFocus){
            if(key === 'p'){
                part01.focus()
        }
    }

})