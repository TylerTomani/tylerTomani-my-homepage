import { topics } from "./toggle-topics-docs.js"



topics.forEach(topic => {
    topic.addEventListener('click', e => {
        let a = topic.querySelector('a')
        open(a.href)
    })
    topic.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            let a = topic.querySelector('a')
            open(a.href,'_self')
        }
    })
})