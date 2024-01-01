(function(){
    const changeFlexBtn = document.getElementById('changeFlexBtn')
    let shiftCarray = []
    addEventListener('keydown', e => {
        let key = e.key.toLowerCase()
        shiftCarray.push(key)
        if(shiftCarray.length > 2){
            shiftCarray.shift()
        }
        if(shiftCarray[0] === 'shift' && shiftCarray[1] === 'c'){
            changeFlexDirection()
        }
    })
    changeFlexBtn.addEventListener('click', e => {
        changeFlexDirection()
    })
    function changeFlexDirection(){
        let resourcesContainer = document.querySelector('.resources-container')
        if(!resourcesContainer.classList.contains('flex-col')){
            resourcesContainer.classList.add('flex-col')
        } else {
            resourcesContainer.classList.remove('flex-col')
        }
        console.log(resourcesContainer)
    }
}())