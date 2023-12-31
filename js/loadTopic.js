const topics = document.querySelectorAll('.topic')

topics.forEach(topic => {
    topic.addEventListener('click', e => {
        let a = topic.querySelector('a')
        open(a.href)
    })
    topic.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            let a = topic.querySelector('a')
            window.location(a.href,'_self')
            
        }
    })
})