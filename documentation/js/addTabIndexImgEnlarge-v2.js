
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
        let parent = e.target.parentElement
        let img = parent.querySelector('.step-img > img ')
        if(img){
            enlargeImg(img)
            console.log(img)

        }
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            addTabIndex(e);
            let parent = e.target.parentElement
            let img = parent.querySelector('.step-img > img ')
            if(img){
                // enlargeImg(img)
                console.log(img)
        
            }

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
    const imgs = parent.querySelectorAll('img')
    aTabIndexAdd(as)
    if(parent.classList.contains('step-col')){
        console.log('step col')
        const imgs = parent.querySelectorAll('img')
        aTabIndexAdd(as)
        imgTabIndexAdd(imgs)
            
        
    
        
    } else
    if(parent.classList.contains('step')){
        const vidImg = parent.querySelector('.step-img > img') ? parent.querySelector('.step-img > img') : parent.querySelector('.step-vid > video') 
        enlargeImg(vidImg)
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
// I can't this to work for different class, I need it to do different actions based on if img has class list 
// sm-enlarge and lg-enlarge, spent two hours on this, need to move on
function enlargeImg(img) {
    if(!img.classList.contains('enlarge')){
        img.classList.add('enlarge')
    } else {
        denlargeAllImgs()
    }
    
    console.log(img);
}


function denlargeAllImgs(){
    imgs.forEach(img =>{
        img.classList.remove('enlarge')
        img.classList.remove('enlarged-sm')
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


// This is for step-col images only, (This code is really messy, clean up later)
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