
const allElements = document.querySelectorAll('body *')

addEventListener('keydown',e =>{
    let key = e.key.toLowerCase()
    allElements.forEach(el => {
        if(el.hasAttribute('id')){
            let id = el.getAttribute('id')
            if(key === id[0]){
                el.focus()
            }
        }
    })
})