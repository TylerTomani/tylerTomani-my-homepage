import { navMain } from "./script.js";
import { asideMain } from "./script.js";

navMain.addEventListener('click', e => {
    e.preventDefault()
    toggleMenu(asideMain)
})
navMain.addEventListener('keydown', e => {
    let key = e.keyCode
    if(key === 13){   
        toggleAsideBar(asideMain)
    }
})


function toggleAsideBar(el){
    let main = getMain(el.parentElement)
    let mainContainer = main.querySelector('.main-container')
    let targetDivContainer = mainContainer.querySelector('.target-div-container')
    console.log(el)
    if(!el.classList.contains('hide-aside')){
        el.classList.add('hide-aside')
    } else if(el.classList.contains('hide-aside') || el.classList.contains('show-aside')){
        el.classList.remove('hide-aside')
        el.classList.remove('show-aside')
    } else {
        el.classList.add('show-aside')
        setTimeout(()=> {
            el.classList.remove('hide-aside')
            el.classList.add('show-aside')
        },350)
    }
}   


function getMain(parent){
    if(parent.classList.contains('main')){
        return parent
    } else if (parent.parentElement){
        return getMain(parent.parentElement)
    } else {
        return null
    }
}

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(key == 'a' || key == 's'){
        if(asideMain.classList.contains('hide-aside')){
            asideMain.classList.remove('hide-aside')
        }
    }
});