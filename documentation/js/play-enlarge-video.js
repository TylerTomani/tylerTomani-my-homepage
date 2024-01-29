const playVidClicks = document.querySelectorAll('.playVid-click')
import { getStepContainer } from "./img-enlarge-v1.js"
import { getStepColContainer } from "./img-enlarge-v1.js"
let currentVid 
let playing = false
let vidEnlarged = false

playVidClicks.forEach(playVidClick => {
    
    playVidClick.addEventListener('click', e => {
        e.preventDefault()  
        let parent = getStepContainer(e.target)
        let vid = playVidClick.querySelector('.step-vid > video')
        currentVid = vid
        console.log(vid)
        if(vid){
            playVid(vid)
            vid.play()
        }
    })
    playVidClick.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            let parent = getStepContainer(e.target)
            // console.log(e.target)
            let vid = parent.querySelector('.step-vid > video')
            currentVid = vid
            if(vid){
                playVid(vid)
                scrollToVid(vid)
                vid.play()
            } else {
                vid.pause()
            }
        }
    })
    playVidClick.addEventListener('focusout', e => {          
            let parent = getStepContainer(e.target)
            let vid = parent.querySelector('.step-vid > video')            
            vid.pause()
            vid.currentTime = 0
    })
})
export function playVid(vid){
    if(!playing){
        vid.play()
        vid.currentTime = '0'
    } else {
        vid.pause()
        // vid.currentTime = '0'
    }
    playing = !playing
}

addEventListener('keydown', e => {
    let key = e.keyCode
    if(key === 32){
        e.preventDefault()
        console.log(currentVid)
        playVid(currentVid)
    }
})


function scrollToVid(vid){
    // let parent = vid.parentElement.parentElement
    // let vid = parent.querySelector()
    console.log(vid)
    // if(parent){
        // console.log(img)
        // if(parent.classList.contains('step-col')){   
    console.log(vidEnlarged)
            if(!vidEnlarged ){
                vid.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                vidEnlarged  = true
                
            } else {
                vid.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                // vid.scrollIntoView({ behavior: "smooth", });
                vidEnlarged  = false
                
            }
        // }
    // }
    
}