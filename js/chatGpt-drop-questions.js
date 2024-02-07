(function() {
    const questionsChatGpt = document.querySelectorAll('.chatgpt-question')
    const chatGptAnswers = document.querySelectorAll('.chatgpt-question-container > .answer')
    const allImgs = document.querySelectorAll('img')

    function hideAnswers(){
        chatGptAnswers.forEach(answer => {
            if(!answer.classList.contains('hide') && !answer.classList.contains('show')){
                answer.classList.add('hide')
            }
        })
    }
    hideAnswers()

    questionsChatGpt.forEach(question => {
        const children = question.querySelectorAll('*')
        children.forEach(child => {
            child.addEventListener('click', e => {
                getChatQuestion(e.target.parentElement)
            })
        })
        question.addEventListener('click', e => {
            e.preventDefault()
            toggleAnswer(e)
        })
        question.addEventListener('keydown', e => {
            let key = e.keyCode 
            if(e.keyCode === 13){
                toggleAnswer(e)
            }
        })
        question.addEventListener('focusout', e => {
            allImgs.forEach(img => {
                img.classList.remove('enlarge')
            })

        })
    })

 

    function toggleAnswer(e){
        const parent = e.target.parentElement
        const answer = parent.querySelector('.answer')
        getChatQuestionContainer(e.target.parentElement)
        if(answer.classList.contains('show') ){
            answer.classList.remove('show')
        } else if(answer.classList.contains('hide')){
            answer.classList.remove('hide')   
        } else {
            answer.classList.add('hide')
            
        }    
    }

    function getChatQuestion(parent){
        if(parent.classList.contains('chatgpt-question')){
            parent.click()
            return
        } else if(parent.parentElement){
            return getChatQuestion(parent.parentElement)
        }
    }
    function getChatQuestionContainer(parent){
        if(parent.classList.contains('chatgpt-question-container')){
            parent.click()
            let codes= parent.querySelectorAll('.answer > .answer-txt >  .code-container > .copy-code')
            codes.forEach(code => {
                code.setAttribute('tabindex','1')
                console.log(code)
            })
            return
        } else if(parent.parentElement){
            return getChatQuestion(parent.parentElement)
        }
        
    }
    
}())