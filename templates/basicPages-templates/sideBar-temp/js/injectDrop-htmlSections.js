export const dropSections = document.querySelectorAll('.dropSection')
export let currentSection 
const sectionsUls = document.querySelectorAll('.section > ul')
function hideSections(){
    sectionsUls.forEach(ul => {
        ul.classList.add('hide')
    })
}
hideSections()

dropSections.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        toggleSection(e.target)
    })
    el.addEventListener('keydow', e => {
        let key = e.keyCode
        if(key === 13){   
            toggleSection(e.target)
        }
    })
})

function toggleSection(el){
    currentSection = el
    const section = getSection(el.parentElement)
    let ul = section.querySelector('ul')
    let lessons = section.querySelectorAll('ul > li > a')
    if(ul.classList.contains('hide')){
        hideSections()
        ul.classList.remove('hide')
        addTabs(lessons)
    } else {
        ul.classList.add('hide')
    }
}

export function addTabs(els){
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}

function getSection(parent){
    if(parent.classList.contains('section')){
        return parent
    } else if (parent.parentElement){
        return getSection(parent.parentElement)
    } else {
        return null
    }
}
// From chat gpt
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content.html file
    fetch('main-placeholder.htm')
        .then(response => response.text())
        .then(html => {
            // Inject the retrieved HTML into the target div
            document.getElementById('targetDivContainer').innerHTML = html;
        })
        .catch(error => console.error('Error fetching content.html:', error));
});
