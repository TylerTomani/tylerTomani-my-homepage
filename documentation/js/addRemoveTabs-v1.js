import { allImages, stepTxts } from "./img-enlarge-v1.js";
import { denlargeAllImgVids } from "./img-enlarge-v1.js";
import { getStepColContainer } from "./img-enlarge-v1.js";
import { img2StepTxts } from "./img-enlarge-v1.js";
const asStepTxt = document.querySelectorAll('.step-txt > p > a')
const copyCodes = document.querySelectorAll('.copy-code')
let tabsAdded = false 
const part01 = document.getElementById('part01')
const parts = document.querySelectorAll('.part')
let partFocus = true

let stepColTexts = document.querySelectorAll('.step-col > .step-txt ')

let img4Containers = document.querySelectorAll('.img-4-container')
img4Containers.forEach(el => {
    let parent = el.parentElement
    let stepTxt = parent.querySelector('.step-txt')
    stepTxt.addEventListener('keydown', e => {
        let key = e.keyCode
        console.log(tabsAdded)
        if(key === 13 && !tabsAdded){   
            tabsAdded = true
            let parent = e.target.parentElement
            let images = parent.querySelectorAll('.img-4-container > .step-img > img')
            images.forEach(img => {
                img.addEventListener('focus', e => {
                    denlargeAllImgVids()
                })
            })
            addTabs(images)
        } else if(key === 13 && tabsAdded){
            let parent = e.target.parentElement
            let images = parent.querySelectorAll('.img-4-container > .step-img > img')
            images.forEach(img => {
                console.log(imgs)
                img.setAttribute('tabindex','-1')
            })
            removeAllTabIndexes()
        }
        tabsAdded = !tabsAdded
    })
    stepTxt.addEventListener('focus' , e => {
        tabsAdded = false
        let parent = e.target.parentElement
        let images = parent.querySelectorAll('.img-4-container > .step-img > img')
        images.forEach(img => {
            console.log(img)
            
            img.setAttribute('tabindex','-1')
        })
        removeAllTabIndexes()
    })
    
})
img2StepTxts.forEach(el => {
    let parent = el.parentElement
    let stepTxt = parent.querySelector('.step-txt')
    stepTxt.addEventListener('keydown', e => {
        let key = e.keyCode
        console.log(tabsAdded)
        if(key === 13 && !tabsAdded){   
            tabsAdded = true
            let parent = e.target.parentElement
            let images = parent.querySelectorAll('.img-2-container > .step-img > img') && parent.querySelectorAll('.img-2-container > .step-vid > video')
            images.forEach(img => {
                img.addEventListener('focus', e => {
                    denlargeAllImgVids()
                })
            })
            addTabs(images)
        } else if(key === 13 && tabsAdded){
            let parent = e.target.parentElement
            let images = parent.querySelectorAll('.img-4-container > .step-img > img')
            images.forEach(img => {
                console.log(imgs)
                img.setAttribute('tabindex','-1')
            })
            removeAllTabIndexes()
        }
        tabsAdded = !tabsAdded
    })
    stepTxt.addEventListener('focus' , e => {
        tabsAdded = false
        let parent = e.target.parentElement
        let images = parent.querySelectorAll('.img-4-container > .step-img > img')
        images.forEach(img => {
            console.log(img)
            
            img.setAttribute('tabindex','-1')
        })
        removeAllTabIndexes()
    })
    
})

function removeAllTabIndexes(){
    asStepTxt.forEach(a => {
        a.setAttribute('tabindex','-1')
    })
    copyCodes.forEach(el => {
        // el.removeAttribute('tabindex')
        el.setAttribute('tabindex','-1')
    })
    allImages.forEach(el => {
        // el.removeAttribute('tabindex')
        el.setAttribute('tabindex','-1')
    })
}
// removeAllTabIndexes()
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
        console.log("focus")
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

stepColTexts.forEach(stepColText => {
    stepColText.addEventListener('click', e => {
        e.preventDefault()
        let parent = e.target.parentElement
        let copyCodes = parent.querySelectorAll('.code-container > .copy-code')
        let as = parent.querySelectorAll('p > a')
        // addTabs(a)
        addTabs(copyCodes)
        tabsAdded = !tabsAdded
    })
    stepColText.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13 && !tabsAdded){   
            let parent = e.target.parentElement
            let copyCodes = parent.querySelectorAll('.code-container > .copy-code')
            let as = e.target.querySelectorAll(' a')
            let images = parent.querySelectorAll('.step-img > img')
            images.forEach(img => {
                img.addEventListener('focus', e => {
                    denlargeAllImgVids()
                    // removeAllTabIndexes()
                })
            })
            addTabs(images)
            // denlargeAllImgVids()
            addTabs(as)
            addTabs(copyCodes)
            // tabsAdded = true
        } else if(key === 13 && tabsAdded){
            removeAllTabIndexes()   
            // tabsAdded = false
        }
        tabsAdded = !tabsAdded
    })
    stepColText.addEventListener('focus', e => {
        tabsAdded = false
        removeAllTabIndexes()

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