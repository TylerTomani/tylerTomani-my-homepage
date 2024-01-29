import { dropSections } from "./injectDrop-htmlSections.js"
import { addTabs } from "./injectDrop-htmlSections.js";
import { currentSection } from "./injectDrop-htmlSections.js";
import { getSection } from "./injectDrop-htmlSections.js";
const allLiAs = document.querySelectorAll('li a')
const lessons = document.querySelectorAll('.section > ul > li > a')
const subLessons = document.querySelectorAll('.section > ul > li > ul > li > a')
let sectionsFocused = true;
let lessonsFocused = false 

const mainTargetDivContainer = document.getElementById('mainTargetDivContainer')
let lessonClicked = false
let currentLesson
let shiftTab =[]

const allElements = document.querySelectorAll('body > * ')
allLiAs.forEach(el => {
    if(el.hasAttribute('autofocus')){
        let href = el.getAttribute('href')
        fetchLessonHref(el.href)
        // mainTargetDivContainer.innerHTML = href.innerHTML
    }
})
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
    el.addEventListener('click', e => {
        e.preventDefault()
        fetchLessonHref(e.target.href)
        toggleUls(e.target.parent)
    })
})

function toggleUls(parent){
    console.log(parent)
}

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
            if(key == el.innerText[8]){
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
        lessonClicked = false
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        fetchLessonHref(e.target.href) 
        if(lessonClicked){
            mainTargetDivContainer.focus()
            lessonClicked = false
            currentLesson = e.target
        }
        lessonClicked = true
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode


        if(key === 13){
            e.stopPropagation()
            fetchLessonHref(e.target.href) 
            if(lessonClicked){
                mainTargetDivContainer.focus()
                lessonClicked = false
                currentLesson = e.target
            }
            lessonClicked = true
            currentLesson = e.target
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
        document.getElementById('mainTargetDivContainer').innerHTML = html;
    })
    .catch(error => console.error('Error fetching content.html:', error));
}

mainTargetDivContainer.addEventListener('focus', e => {

})
mainTargetDivContainer.addEventListener('keydown', e => {
    let key = e.keyCode
    shiftTab.push(key)
    // if(key == 9){
        //     currentLesson.focus()
        // }
        if(shiftTab.length > 2){
            shiftTab.shift()
        }
        if(shiftTab[0] == 16 && shiftTab[1] == 9){
            currentLesson.focus()
        }
        console.log(currentLesson)

})

