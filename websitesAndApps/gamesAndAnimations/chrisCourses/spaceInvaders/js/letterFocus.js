const allEls = document.querySelectorAll('body *')
const homeLink = document.getElementById('home')
const canvasEl = document.getElementById('canvas')
const scriptsPrevBnt = document.getElementById('prevBtn')
let canvasFocused = false
let cmdArr = []
addEventListener('keydown', e => {
    let key = e.key
    let keyCode = e.keyCode
    cmdArr.unshift(keyCode)
    if(cmdArr.length >= 2){
        cmdArr.pop()
    }
    if(cmdArr[0] === 224){
        canvasFocused = true
    }
    if(!canvasFocused){
        if(key === 's' || key === 'S' || key === 'p' || key  === 'P'){
            scriptsPrevBnt.focus()
        } else if(key === 'h' || key === 'H'){
            homeLink.focus()
        } else if (key === 'c' || key === 'C'){
            console.log(cmdArr[1])
            canvasEl.focus()
        }
    }
})

canvasEl.addEventListener('focus', e => {
    canvasFocused = true
    // console.log("focusin")
})
addEventListener('focusout', e => {
    canvasFocused = false
    // console.log("focusin")
})