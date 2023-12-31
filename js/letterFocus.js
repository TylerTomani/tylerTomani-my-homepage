const allEls = document.querySelectorAll('body *')

addEventListener('keydown', e => {
    let key = e.key.toLowerCase()

    allEls.forEach(el => {
        if(el.hasAttribute('id')){
            id = el.getAttribute('id')
            if(key === id[0]){
                el.focus()
            }
        }
    })  
})