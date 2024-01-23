(function() {
    const stepTxt = document.querySelectorAll('.step-txt')
    const chatGptAnswers = document.querySelectorAll('.chatgpt-question-container > .answer')
    stepTxts.forEach(stepTxt => {
        const as = stepTxt.querySelectorAll('a')
        

        as.forEach(a => {
            a.addEventListener('click', e => {
                // open(e.target.href,'_blank')
            })
        })
        stepTxt.addEventListener('keydown', e => {
            let key = e.keyCode
            if(e.keyCode === 13){
                addTabIndexAs(e)
            }
        })
        stepTxt.addEventListener('click', e => {
            e.preventDefault()
            addTabIndexAs(e)
        })
        stepTxt.addEventListener('focus', e => {
            removeAsTabIndex(e)

            chatGptAnswers.forEach(answer => {
                answer.addEventListener('focusout', e => {
                    // console.log('focusout',e.target)
                })
            })
        })
    })
    
    function addTabIndexAs(e){
        console.log(e.target)
        const as = e.target.querySelectorAll('a')
        const copyCodes = e.target.querySelectorAll('.code-container > .copy-code')
        as.forEach(a => {
            a.setAttribute('tabindex','1')
            a.addEventListener('click', e => {
                open(e.target.href,'_blank')
            })
        })
        as.forEach(a => {  
            a.addEventListener('click', e => {
                console.log(e.target.href)
                open(e.target.href,'_blank')
            })
        })
        copyCodes.forEach(copyCode => {
            copyCode.setAttribute('tabindex','1')
            console.log(copyCode)
            console.log(copyCode)
        })
        as.forEach(a => {  
            a.addEventListener('click', e => {
                console.log(e.target.href)
                open(e.target.href,'_blank')
            })
        })
    }
    
    function removeAsTabIndex(e){
        const copyCodes = document.querySelectorAll('.code-container > .copy-code')
        stepTxts.forEach(stepTxt => {
            const allAs = stepTxt.querySelectorAll('a')
            allAs.forEach(a => {
                a.removeAttribute('tabindex')
            })
        })
        copyCodes.forEach(copyCode => {
            copyCode.removeAttribute('tabindex')
        })
    }
}())