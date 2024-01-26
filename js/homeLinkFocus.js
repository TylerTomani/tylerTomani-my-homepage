const homeLink = document.querySelector('#homelink')

addEventListener('keydown',e =>{
    let key = e.key.toLowerCase()
    if(key === 'h'){
        homeLink.focus()
    }
})