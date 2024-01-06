import { stepTxts } from "./img-enlarge-v1.js";
import { denlargeAllImgVids } from "./img-enlarge-v1.js";
const asStepTxt = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.copy-code')
let tabsAdded = false 
const part01 = document.getElementById('part01')
const parts = document.querySelectorAll('.part')
let partFocus = true


function removeAllTabIndexes(){
    asStepTxt.forEach(a => {
        a.removeAttribute('tabindex')
    })
    copyCodes.forEach(el => {
        el.removeAttribute('tabindex')
    })
}

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
    })
    stepTxt.addEventListener('focusin', e => {
        partFocus = false
    })
    

    stepTxt.addEventListener('click', e => {
        e.preventDefault()
        // let stepTxt = getStepTxt(e.target.parentElement)
        console.log(e.target)
        let as = e.target.querySelectorAll('a')
        let copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
        addTabs(as)
        console.log(stepTxt)
        addTabs(copyCodes)

    })
    stepTxt.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        let keyCode = e.keyCode
        if(keyCode === 13){
            let as = e.target.querySelectorAll('a')
            let copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
            addTabs(as)
            console.log(stepTxt)
            addTabs(copyCodes)
        }
        if(!partFocus){

            if(key === 'p'){
                let part = getPartContainerFocus(e.target.parentElement)
                console.log(part)
                part.focus()
            }
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
    console.log(partFocus)
    if(partFocus){
        if(key === 'p'){
            part01.focus()
        }
    }
})