
const stepTxts = document.querySelectorAll('.step-txt')
const stepTxtsPAs = document.querySelectorAll('.step-txt > p > a')
const copycodesTabs = document.querySelectorAll('.code-container > .copy-code')
const stepColImgs = document.querySelectorAll('.step-col > .img-2-container > .step-img > img')
const imgs = document.querySelectorAll('img')
const videos = document.querySelectorAll('video')

stepColImgs.forEach(stepColImg => {
    console.log(stepColImg)
    stepColImg.addEventListener('focusout', e => {
        denlargeAllImgs()
        console.log('foucs out')
        console.log(e.target)
    })
})


stepTxtsPAs.forEach(a => {
    a.addEventListener('click', e =>{
        open(e.target.href,'_blank')
    })
});

let stepTabsAdded = false

function removeAsTabIndex(){
    stepTxtsPAs.forEach(a => {
        a.removeAttribute('tabindex')
    })
}   
function removeCopyCodeTabIndex(){
    copycodesTabs.forEach(copycode => {
        copycode.removeAttribute('tabindex')
    })
}   
function removeImgsTabIndex(){
    imgs.forEach(img => {
        img.removeAttribute('tabindex')
    })
 }   
 
function getStepParent(parent){
    if(parent.classList.contains('step') || parent.classList.contains('step-col')){
        return parent
    } else if (parent.parentElement){
        return getStepParent(parent.parentElement)
    } else {
        return null
    }
}

stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        e.preventDefault()
        addTabIndex(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            addTabIndex(e);
        }
    })
    stepTxt.addEventListener('focus', e => {
        removeAsTabIndex()
        removeImgsTabIndex()
        denlargeAllImgs()
        removeCopyCodeTabIndex()
    })
    

    
    stepTxt.addEventListener('focusout', e => {
        stepTabsAdded = false
    })
})

copycodesTabs.forEach(copycodesTab => {
    copycodesTab.addEventListener('focus', e => {
        // removeImgsTabIndex()
        denlargeAllImgs()
    })    
    copycodesTab.addEventListener('focusout', e => {
        stepTabsAdded = false
    })
})

function addTabIndex(e){
    const parent = getStepParent(e.target.parentElement)
    const as = parent.querySelectorAll('a')
    const copyCodes = parent.querySelectorAll('.copy-code')
    if(parent.classList.contains('step-col')){
        console.log('step col')
        const imgs = parent.querySelectorAll('img')
        aTabIndexAdd(as)
        imgTabIndexAdd(imgs)
            
        
    
        stepTabsAdded = !stepTabsAdded
    } 
    
    if(parent.classList.contains('step')){
        const vidImg = parent.querySelector('.step-img > img') ? parent.querySelector('.step-img > img') : parent.querySelector('.step-vid > video') 
        if(vidImg && !stepTabsAdded){
            console.log(vidImg)
            vidImg.classList.add('enlarge')
            if(vidImg.parentElement.classList.contains('step-vid')){
                vidImg.play()
                vidImg.currentTime = 0
            }
        } else {
            
            if(vidImg.parentElement.classList.contains('step-vid')){
                vidImg.pause()
                vidImg.currentTime = 0
            }
            vidImg.classList.remove('enlarge')
        }
        stepTabsAdded = !stepTabsAdded
        
    }
    
}

function aTabIndexAdd(as){
    as.forEach(a => {
        a.setAttribute('tabindex','1')
    })
}
function copyCodeTabIndexAdd(copyCodes){
    copyCodes.forEach(copyCode => {
        copyCode.setAttribute('tabindex','1')
    })
}

function imgTabIndexAdd(imgs){
    if(imgs){
        imgs.forEach(img => {
            img.setAttribute('tabindex','1')
        });
    }
}

function enlargeImg(img){
    if(img.classList.contains('denlarge')){
        img.classList.remove('denlarge')
        img.classList.add('enlarge')
        
    }
    img.classList.add('enlarge')

}

function denlargeAllImgs(){
    imgs.forEach(img =>{
        img.classList.remove('enlarge')
        
    })
 
    videos.forEach(vid =>{
        vid.classList.remove('enlarge')
        
    })
    stepColImgs.forEach(stepColImg => {
        stepColImg.classList.remove('enlarge')
        stepColImg.classList.remove('r-enlarge')
        stepColImg.classList.remove('l-enlarge')

    })
}

stepTxtsPAs.forEach(a =>{
    a.addEventListener('focus', e => {
        denlargeAllImgs()
    })
})

imgs.forEach(img => {
    img.addEventListener('click', e => {
        toggleImgSize(e.target)
    })
    img.addEventListener('keydown', e => {
        let key = e.keyCode
        if(e.keyCode === 13){
            toggleImgSize(e.target)
       }
        
    })
    img.addEventListener('focus', e => {
        denlargeAllImgs()
    })
})

function toggleImgSize(img){
    if(img.classList.contains('img-l')){

        if(img.classList.contains('denlarge')){
            img.classList.remove('denlarge')
            img.classList.add('l-enlarge')
        } else if (!img.classList.contains('l-enlarge')){
            img.classList.add('l-enlarge')
        }
        else if (img.classList.contains('l-enlarge')) {
            img.classList.add('denlarge')
            img.classList.remove('l-enlarge')
            
        } 
    } 

    if(img.classList.contains('img-r') && img.classList.contains('denlarge')){
        img.classList.remove('denlarge')
        img.classList.add('r-enlarge')
    } else if (!img.classList.contains('r-enlarge')){
        img.classList.add('r-enlarge')
    }
     else if (img.classList.contains('r-enlarge')) {
        img.classList.add('denlarge')
        img.classList.remove('r-enlarge')
        
    }
}