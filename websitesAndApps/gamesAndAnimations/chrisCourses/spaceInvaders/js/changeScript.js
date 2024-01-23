const scripts = document.querySelectorAll('.script')
const arrScripts = Array.from(scripts)
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
let currentIndex = 0
scripts.forEach(script => {
    if(!script.classList.contains('show')){
        script.classList.add('hide')
    }
})
function hideScripts(){
    scripts.forEach(script => {
        if(script.classList.contains('show')){
            script.classList.remove('show')
            script.classList.add('hide')
        } else {
            script.classList.add('hide')
        }
    })
}

prevBtn.addEventListener('click', e => {
    // arrScripts[currentIndex].classList.remove('show')
    hideScripts()
    if(currentIndex > 0){
        currentIndex -= 1
    }

    // arrScripts[currentIndex].classList.add('show')
});
nextBtn.addEventListener('click', e => {
    arrScripts[currentIndex].classList.remove('show')
    hideScripts()
    currentIndex += 1
    if(currentIndex >= arrScripts.length){
        currentIndex = 0
    }
    console.log(currentIndex)
    arrScripts[currentIndex].classList.add('show')
})
function changeScript(){
}

arrScripts.forEach((script,i) => {  
    if(script.classList.contains('show')){
        currentIndex = i
        console.log(currentIndex)
    }
})