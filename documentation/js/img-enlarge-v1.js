export const stepTxts = document.querySelectorAll('.step-txt')
import { playVid } from "./play-enlarge-video.js"
const allImages = document.querySelectorAll('img') 
const allVideos = document.querySelectorAll('video') 
let stepColCodeContainers = document.querySelectorAll('.step-col > .img-2-container > .code-container > .copy-code')
let imgEnlarged = false



stepColCodeContainers.forEach(el => {
    el.addEventListener('click', e => {

    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            let parent = e.target.parentElement.parentElement 
            console.log(parent.parentElement)
            let img = parent.querySelector('.step-img > img')
            console.log(img)
            if(img){
                imgEnlarged(img)
            }
        }
        
    })
})



export function denlargeAllImgVids(){
    imgEnlarged = false
    allImages.forEach(img => {
        img.classList.remove('sm-enlarged')
        img.classList.remove('lg-enlarged')
        img.classList.remove('xlg-enlarged')
        img.classList.remove('enlarge')
    })
    allVideos.forEach(vid => {
        vid.classList.remove('sm-enlarged')
        vid.classList.remove('lg-enlarged')
        vid.classList.remove('xlg-enlarged')
        vid.classList.remove('enlarge')
    })
}
stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click' , e => {
        e.preventDefault()
        const stepContainer = getStepContainer(e.target.parentElement)
        const img = stepContainer.querySelector('.step-img > img') ? stepContainer.querySelector('.step-img > img') : stepContainer.querySelector('.step-vid > video')
        console.log(img)
        if(img){
            toggleStepImg(img) 
            const children = e.target.querySelectorAll("*")
            children.forEach(child => {
                child.addEventListener('click', e => {
                    e.preventDefault()
                    const stepContainer = getStepContainer(e.target.parentElement)
                    const img = stepContainer.querySelector('.step-img > img')
                    toggleStepImg(img) 
                })
            })
        }

        
    })

    stepTxt.addEventListener('keydown', e => {
        let key = e.keyCode  
        if(key === 13){
            const stepContainer = getStepContainer(e.target.parentElement)
            if(stepContainer){
                const img = stepContainer.querySelector('.step-img > img') ? stepContainer.querySelector('.step-img > img') : stepContainer.querySelector('.step-vid > video')
                if(img){
                    
                    toggleStepImg(img) 
                }
            }

        }
        
    })
})

function toggleStepImg(img){
    if(img){
        let currentClass = img.classList[0]
        if(!imgEnlarged){
            switch(currentClass){
                case 'sm-enlarge':
                    img.classList.add('sm-enlarged')
                    break
                case 'lg-enlarge':
                    img.classList.add('lg-enlarged')
                    break
                case 'xlg-enlarge':
                    img.classList.add('xlg-enlarged')
                    break
                default :
                    img.classList.add('enlarge')
                    break
            }
        } else {
            img.classList.remove('sm-enlarged')
            img.classList.remove('lg-enlarged')
            img.classList.remove('xlg-enlarged')
            img.classList.remove('enlarge')
        }
        imgEnlarged = !imgEnlarged
    }
}

export function getStepContainer(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if(parent.parentElement){
        return getStepContainer(parent.parentElement)
    } else {
        return null
    }
}
export function getStepColContainer(parent){
    if(parent.classList.contains('step-col')){
        return parent
    } else if(parent.parentElement){
        return getStepColContainer(parent.parentElement)
    } else {
        return null
    }
}


allImages.forEach(img => {
    img.addEventListener('click', e => {
        e.preventDefault()
        toggleStepImg(img)
    })  
})
allVideos.forEach(img => {
    img.addEventListener('click', e => {
        e.preventDefault()
        toggleStepImg(img)
        playVid(img)
    })  
})
