(function(){
    const stepsContainers = document.querySelectorAll('.steps-container')
    stepsContainers.forEach(stepsContainer => {
        if(stepsContainer.classList.contains('show')){
            stepsContainer.classList.remove('hide')
        }
    })
}())