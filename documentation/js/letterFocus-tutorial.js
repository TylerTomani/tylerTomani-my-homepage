(function(){
    const allEls =document.querySelectorAll('body *')
    const changeFlexBtnId = document.getElementById('changeFlexBtn')
    const jupyterShortcuts = document.getElementById('jupyterShortcuts')
    const homeLink = document.getElementById('homeLink')
    const tutorialLink = document.getElementById('tutorialLink')
    const parts = document.querySelectorAll('.dropPart')
    const fullScript = document.getElementById('fullScript')
    let partFocus = true    
    



    let shiftCarray2 = []
    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        shiftCarray2.push(key)
        if(shiftCarray2.length > 2){
            shiftCarray2.shift()
        }
        if(shiftCarray2[0] === 'c'){
            if(changeFlexBtnId){
                changeFlexBtnId.focus()
            }
        }
    })

    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()

        if(key === 'h'){
            homeLink.focus()
        }
        if(key === 't'){
            tutorialLink.focus()
        }
        if(key === 'j'){
            jupyterShortcuts.focus()
        }
        if(key === 'f'){
            fullScript.focus()
        }


        
    })
}())