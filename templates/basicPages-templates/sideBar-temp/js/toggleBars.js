import { navMain } from "./script.js";
import { asideMain } from "./script.js";

navMain.addEventListener('click', e => {
    e.preventDefault()
    toggleMenu(asideMain)
})
navMain.addEventListener('keydown', e => {
    let key = e.keyCode
    if(key === 13){   
        toggleMenu(asideMain)
    }
})


function toggleMenu(el){
    if(!el.classList.contains('hide')){
        el.classList.add('hide')
        
    } else {
        el.classList.remove('hide')
    }
}   