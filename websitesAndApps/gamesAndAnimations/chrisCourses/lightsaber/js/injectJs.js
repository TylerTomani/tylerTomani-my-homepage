const segCode = document.getElementById('segCode')
const segmentsPreSection = document.getElementById('segments-pre-section')
const fullCode = document.getElementById('fullCode')
let focusItem = segCode.querySelector('.focus-item')
let shiftEnterArr = []
let index = 0
addEventListener('DOMContentLoaded', e => {
    const fullCodeLoad = fullCode.textContent
    let load = new Function(fullCodeLoad)
    load()
    segCode.innerHTML = fullCode.innerHTML


})
// addEventListener('DOMContentLoaded', e => {
//     seg00()
//     segCode.innerHTML = segHTML00
// })
segCode.addEventListener('click', e => {

})
segCode.addEventListener('keydown', e => {
    let key = e.keyCode
    shiftEnterArr.unshift(key)
    shiftEnter(key)
    changeSement(key)
    
})

function shiftEnter(key){
    if(shiftEnterArr[0] == 13 && shiftEnterArr[1] == 16){
        index++
    }
   
}
function changeSement(key){
    if(shiftEnterArr.length >= 2 ){
        shiftEnterArr.pop()
    }
    // 00-Basic Setup & Player Gravity
    if(index === 0 && key === 13){
        seg00()
        segCode.innerHTML = segHTML00

    }
    // 01-Player Movement - Up
//** Add text to explain to hit the y button, every time y is hit, velocity code get bigger in segCode > pre */
    if(index === 1  && key === 13){
        segCode.innerHTML = segHTML01
        let focusItem = segCode.querySelector('.focus-item')
        let segCodeOffset = segCode.offsetTop
        let focsuItemOffset = focusItem.offsetTop

        let offset = focusItem.offsetTop;
        console.log(offset)
        segCode.scroll(0,offset);  
        seg01()
    }
    // 02-Player Movement - Right & Left
    if(index === 2  && key === 13){
        segCode.innerHTML = segHTML02
        let focusItem = segCode.querySelector('.focus-item')
        let segCodeOffset = segCode.offsetTop
        let focsuItemOffset = focusItem.offsetTop
        let offset = focusItem.offsetTop;
        console.log(offset)
        segCode.scroll(0,offset - 400);  
        seg02()
    }
    // 03- Ceiling Collision
    if(index === 3  && key === 13){
        segCode.innerHTML = segHTML03
        let focusItem = segCode.querySelector('.focus-item')
        let segCodeOffset = segCode.offsetTop
        let focsuItemOffset = focusItem.offsetTop
        let offset = focusItem.offsetTop;
        console.log(offset)
        segCode.scroll(0,offset - 200);  
        seg03()
    }
    // 04- Platform Collision
    if(index === 4  && key === 13){
        segCode.innerHTML = segHTML04
        let focusItem = segCode.querySelector('.focus-item')
        let segCodeOffset = segCode.offsetTop
        let focsuItemOffset = focusItem.offsetTop
        let offset = focusItem.offsetTop;
        console.log(offset)
        segCode.scroll(0,offset - 200);  
        seg04()
    }
    // 05- stop player & move background
    if(index === 5  && key === 13){
        segCode.innerHTML = segHTML05
        let focusItem = segCode.querySelector('.focus-item')
        let segCodeOffset = segCode.offsetTop
        let focsuItemOffset = focusItem.offsetTop
        let offset = focusItem.offsetTop;
        console.log(offset)
        segCode.scroll(0,offset - 200);  
        seg05()
    }
    
    if(index > 5){
        index = -1
    }
    console.log(index)
}