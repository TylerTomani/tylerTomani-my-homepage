import { dropSections } from "./injectDrop-htmlSections.js"
import { addTabs } from "./injectDrop-htmlSections.js";
import { currentSection } from "./injectDrop-htmlSections.js";
import { getSection } from "./injectDrop-htmlSections.js";
const allLiAs = document.querySelectorAll('ul li a')

const lessons = document.querySelectorAll('.section > ul > li > a')
const subLessons = document.querySelectorAll('.section > ul > li > ul > li > a')
let sectionsFocused = true;
let lessonsFocused = false 

function removeAllLessonTabs(){
    allLiAs.forEach(el => {
        el.removeAttribute('tabindex')
    })
}
dropSections.forEach(el => {
    el.addEventListener('focus', e => {
        lessonsFocused = false
        sectionsFocused = true
        removeAllLessonTabs()
    })
})


addEventListener('keydown', e=> {
    let key = e.key.toLowerCase()
    // I don't need this code right now the sections are working really nice, you just need to double click 
    // to get focus back to lesson
// Go back add add section for sub-lessons when you encounter them when doing free code camp
    // let keyCode = e.keyCode
    // if(keyCode === 13){
    //     if(e.target == currentSection){
    //         lessonsFocused = true
    //         sectionsFocused = false
    //         let section = getSection(e.target.parentElement)
    //         let sectionUl = section.querySelector('ul')
    //         let lessons = section.querySelectorAll('ul li a')
    //         console.log(sectionUl)
    //             // sectionUl.classList.remove('hide')
    //         // console.log('yes')
    //         // if(sectionUl.classList.contains('hide')){
    //         // }
    //         // addTabs(lessons)
            
    //     }
    // }
    if(sectionsFocused){
        dropSections.forEach(el => {
            if(key == el.innerText[el.innerText.length - 1]){
                el.focus()
            }
        })
    }
    if(lessonsFocused){
        lessons.forEach(el => {
            if(key == el.innerText[0]){
                el.focus()
            }
        })
    }
})

lessons.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = false
        lessonsFocused = true
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
            fetchLessonHref(e.target.href) 
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            e.stopPropagation()
            fetchLessonHref(e.target.href) 
        }      
        if(lessonsFocused){
            let letter = e.key.toLowerCase()
            if(letter === 'p'){
                const section = getSection(e.target.parentElement)
                const dropSection = section.querySelector('.dropSection')
                dropSection.focus()
                lessonsFocused = true
                sectionsFocused = false
                // console.log(section)
            }
        }
    });
})
subLessons.forEach(el => {
    el.addEventListener('focus', e => {
        sectionsFocused = false
        lessonsFocused = true
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
            fetchLessonHref(e.target.href) 
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            e.stopPropagation()
            fetchLessonHref(e.target.href) 
        }
        if(lessonsFocused){
            let letter = e.key.toLowerCase()
            if(letter === 'p'){
                const section = getSection(e.target.parentElement)
                const dropSection = section.querySelector('.dropSection')
                dropSection.focus()
                lessonsFocused = true
                sectionsFocused = false
                // console.log(section)
            }
        }
    });
})
function fetchLessonHref(href){
    fetch(href)
    .then(response => response.text())
    .then(html => {
        // Inject the retrieved HTML into the target div
        document.getElementById('targetDivContainer').innerHTML = html;
    })
    .catch(error => console.error('Error fetching content.html:', error));
}