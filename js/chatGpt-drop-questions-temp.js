(function(){

 function addTabIndex(els){
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}

const allCopyCodes = document.querySelectorAll(' .copy-code')
const questionCopyCodes = document.querySelectorAll('.the-chatgpt-question > .copy-code')
const questionsChatGpt = document.querySelectorAll('.chatgpt-question')
const answerStepTxts = document.querySelectorAll('.answer-txt > .step > .step-txt')
const answerStepColTxts = document.querySelectorAll('.answer-txt > .step-col > .step-txt')
const chatGptAnswers = document.querySelectorAll('.chatgpt-question-container > .answer')
const allImgs = document.querySelectorAll('img')

let questionsFocused = false
let stepsFocused = false

questionCopyCodes.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            let parent = getChatQuestionContainer(e.target.parentElement) 
            let answer = parent.querySelector('.answer')
            if(answer.classList.contains('hide')){
                answer.classList.remove('hide')
                const answerStepTxts = answer.querySelectorAll('.answer-txt > .step > .step-txt')
                addTabIndex(answerStepTxts)
            }
        }
        
    })
})

function hideAnswers(){
    chatGptAnswers.forEach(answer => {
        if(!answer.classList.contains('hide') && !answer.classList.contains('show')){
            answer.classList.add('hide')
        }
    })
}
hideAnswers()

function removeAllCopyCodes(){
    allCopyCodes.forEach(el => {
        el.removeAttribute('tabindex')
    })
}
function removeQuestionCopyCodesTabs(){
    questionCopyCodes.forEach(el => {
        el.removeAttribute('tabindex')
    })
}
function removeStepTxtTabs(){
    answerStepTxts.forEach(el => {
        el.removeAttribute('tabindex')
        el.setAttribute('tabindex','-1')
    })
    answerStepColTxts.forEach(el => {
        el.removeAttribute('tabindex')
        el.setAttribute('tabindex','-1')
    })
}
questionsChatGpt.forEach(question => {   
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
    question.addEventListener('focus', e => {
        removeQuestionCopyCodesTabs()
        questionsFocused = true
    })
})

answerStepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('focus', e => {
        stepsFocused = true
        questionsFocused = false
    })
    stepTxt.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        let questionContainer = getChatQuestionContainer(e.target.parentElement)
        let parentQuestion = questionContainer.querySelector('.chatgpt-question')
        if(key == 0){
            parentQuestion.focus()
        }
    });
})
answerStepColTxts.forEach(stepTxt => {
    stepTxt.addEventListener('focus', e => {
        stepsFocused = true
        questionsFocused = false
    })
    stepTxt.addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        let questionContainer = getChatQuestionContainer(e.target.parentElement)
        let parentQuestion = questionContainer.querySelector('.chatgpt-question')
        if(key == 0){
            parentQuestion.focus()
        }
    });
})
function toggleAnswer(e){
    if(e.target.classList.contains('copy-code')){
        return
    }
    const parent = getChatQuestionContainer(e.target.parentElement)
    const questionCopyCode = parent.querySelector('.step-txt > .chatgpt-question-txt > h5 > .copy-code')
    questionCopyCode.setAttribute('tabindex','1')
    const answer = parent.querySelector('.answer')
    const answerStepTxts = answer.querySelectorAll('.answer-txt > .step > .step-txt')
        if(answer.classList.contains('hide')){
            hideAnswers()
            answer.classList.remove('hide')   
            addTabIndex(answerStepTxts)
        } else {
            answer.classList.add('hide')
        }    
}
function getChatQuestion(parent){
    if(parent.classList.contains('chatgpt-question')){
        return parent
    } else if(parent.parentElement){
        return getChatQuestion(parent.parentElement)
    } else { 
        return null 
    }
}
function getChatQuestionContainer(parent){
    if(parent.classList.contains('chatgpt-question-container')){
        return parent
    } else if(parent.parentElement){
        return getChatQuestionContainer(parent.parentElement)
    } else {
        return null
    }
}
addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(stepsFocused){
        answerStepTxts.forEach(el => {
            if(key == 'p'){
                let parent =  getChatQuestion(el.parentElement)
                removeAllCopyCodes()
                removeQuestionCopyCodesTabs()
                removeStepTxtTabs()
            }
            let h4 = el.querySelector('h4')
            if(h4){              
                if(key == h4.innerText[h4.innerText.length - 1]){
                    el.focus()
                }
            }          
        })
    }
})
}())