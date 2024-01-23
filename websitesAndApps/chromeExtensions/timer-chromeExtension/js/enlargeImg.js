(function() {
    const allImages = document.querySelectorAll('img')
    const stepTxt = document.querySelectorAll('.step-txt')
    const copyCodes = document.querySelectorAll('.copy-code')
    // stepTxt in stepFocus.js
stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        enlargeImg(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            enlargeImg(e)
        }        
    })
    stepTxt.addEventListener('focusout', e => {
        allImages.forEach(img => {
          img.classList.remove('enlargeImg')
        //   console.log(img)
        })
    })
})
copyCodes.forEach(copyCode => {
    copyCode.addEventListener('click', e => {
        enlargeImg(e)
    })
    copyCode.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            enlargeImg(e)
        }        
    })
    copyCode.addEventListener('focus', e => {
        allImages.forEach(img => {
          img.classList.remove('enlargeImg')
        //   console.log(img)
        })
    })
})

function enlargeImg(e){
    const parent = getStepContainer(e.target.parentElement)
    const img = parent.querySelector('.step-img > img')
    if(img){
        if(!img.classList.contains('enlargeImg') && img.classList.contains('delargeImg')){
            img.classList.add('enlargeImg')
            img.classList.remove('delargeImg')
        } else if (!img.classList.contains('enlargeImg')){
            img.classList.add('enlargeImg')
        } else {
            img.classList.remove('enlargeImg')
        }
    }

}
function delargeImg(e){

    const parent = getStepContainer(e.target.parentElement)
    const img = parent.querySelector('.step-img > img') 
    if(img){
        img.classList.remove('enlargeImg')   
    }
    const vid = parent.querySelector('.step-vid > video') ? parent.querySelector('.step-vid > video') : null
    if(vid){
        vid.classList.remove('enlargeImg')   
    }
}

function getStepContainer(parent){
    if(parent.classList.contains('step') || parent.classList.contains('step-col')){
        return parent 
    } else if (parent.parentElement){
        return getStepContainer(parent.parentElement)
    } else {
        return null
    }
}
}())