export const stepTxts = document.querySelectorAll('.step-txt')
const allImages = document.querySelectorAll('img') 
const allVideos = document.querySelectorAll('video') 
let imgEnlarged = false

export function denlargeAllImgVids(){
    imgEnlarged = false
    allImages.forEach(img => {
        img.classList.remove('sm-enlarged')
        img.classList.remove('lg-enlarged')
        img.classList.remove('enlarge')
    })
    allVideos.forEach(vid => {
        vid.classList.remove('sm-enlarged')
        vid.classList.remove('lg-enlarged')
        vid.classList.remove('enlarge')
    })
}
stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click' , e => {
        e.preventDefault()
        const stepContainer = getStepContainer(e.target.parentElement)
        const img = stepContainer.querySelector('.step-img > img')
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
    })

    stepTxt.addEventListener('keydown', e => {
        let key = e.keyCode  
        if(key === 13){
            const stepContainer = getStepContainer(e.target.parentElement)
            const img = stepContainer.querySelector('.step-img > img')
            toggleStepImg(img) 
        }
        
    })
})

function toggleStepImg(img){
    let currentClass = img.classList[0]
    if(!imgEnlarged){
        switch(currentClass){
            case 'sm-enlarge':
                img.classList.add('sm-enlarged')
                break
            case 'lg-enlarge':
                img.classList.add('lg-enlarged')
                break
            default :
                img.classList.add('enlarge')
                break
        }
    } else {
        img.classList.remove('sm-enlarged')
        img.classList.remove('lg-enlarged')
        img.classList.remove('enlarge')
    }
    imgEnlarged = !imgEnlarged
    
}

function getStepContainer(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if(parent.parentElement){
        return getStepContainer(parent.parentElement)
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