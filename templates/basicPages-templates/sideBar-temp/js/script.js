const hlink = document.querySelector('#homelink')
const header = document.querySelector('body > header')
export const navMain = document.querySelector('#navMain')
export const asideMain = document.querySelector('#asideMain')
export const targetDivContainer = document.querySelector('#targetDivContainer')

hlink.addEventListener('focus', e => {
    window.scroll(0,0)
})
navMain.addEventListener('focus', e => {
    window.scroll(0,0)
})
header.addEventListener('mouseenter', e => {
    if(asideMain.classList.contains('hide')){
        asideMain.classList.remove('hide')
    }
})
navMain.addEventListener('mouseenter', e => {
    if(asideMain.classList.contains('hide')){
        asideMain.classList.remove('hide')
    }
})
asideMain.addEventListener('focus', e => {
    window.scroll(0,0)
})
targetDivContainer.addEventListener('focus', e => {
    window.scroll(0,0)
})