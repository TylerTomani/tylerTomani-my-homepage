const resources = document.querySelectorAll('.resource');

let shiftEnter = [];

resources.forEach(resource => {
    resource.addEventListener('click', e => {
        e.preventDefault(); // Prevent the default behavior of the click event
        let a = resource.querySelector('a');
        window.open(a.href, 'self');
    });

    resource.addEventListener('keydown', e => {
        e.preventDefault()
        let key = e.keyCode;
        shiftEnter.push(key);
        let a = resource.querySelector('a');
        if (shiftEnter.length > 2) {
            shiftEnter.shift();
        }
        if (shiftEnter[0] == 16 && shiftEnter[1] == 13) {
            a.setAttribute('target', '_blank');
            a.click();
            console.log(a);
        }
        if(shiftEnter[0] == 13 && shiftEnter.length == 1 || (shiftEnter[0] === 13 && shiftEnter[1] === 13)){
            open(a,'_self')
        }
        console.log(shiftEnter);
    });
});
