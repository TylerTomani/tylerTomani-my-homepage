const pres = document.querySelectorAll('.seg-code')
// when enter is hit run the semented code and inject the pre tag's code into a function
let preContentCode
// shift + enter goes to the next segment
let enterArr = []
pres.forEach(pre => {
    pre.addEventListener('click', e => {
        preContentCode = e.target.textContent
        const inject = new Function(preContentCode)
        inject()
        // console.log(preContentCode)
        console.log(e.target)
        
    })

    pre.addEventListener('keydown', e => {
        if(e.keyCode == 13){
            preContentCode = e.target.textContent
            let inject = new Function(preContentCode)
            inject()

        }
        // console.log(e.keyCode)
        
    })
    pre.addEventListener('focusin', e => {
        preContentCode = e.target.textContent
        let inject = new Function(preContentCode)
        inject()
        changeSegment(e.target)        
        changeSegment(preContentCode)        
        }
    )
})
function hidePres(){
    pres.forEach(pre => {
        // console.log(pre)
        pre.classList.add('hide')
        if(!(pre.classList.contains('hide'))){
            // console.log(pre.classList)
        }
    })
}

function changeSegment(key){
    enterArr.unshift(key)
    if(enterArr[0] === 13 && enterArr[1] === 16){
        // hidePres()
        console.log('shift enter')
    }
    if(enterArr.length > 2){
        enterArr.pop()
    }
    
}