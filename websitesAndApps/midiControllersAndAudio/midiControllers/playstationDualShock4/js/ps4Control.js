const btnValDisplay = document.querySelector('.btn-pressed-value > h3')
// Check for gamepad support
if ("getGamepads" in navigator) {
    // Function to update the HTML elements based on controller input
    function updateElements() {
        const gamepads = navigator.getGamepads();
        if (gamepads[0]) {
            const xBtn = gamepads[0].buttons[0].pressed;
            const oBtn = gamepads[0].buttons[1].pressed;
            const squareBtn = gamepads[0].buttons[2].pressed;
            const triangleBtn = gamepads[0].buttons[3].pressed;
            const l1Btn = gamepads[0].buttons[4].pressed;
            const r1Btn = gamepads[0].buttons[5].pressed;
            const l2Btn = gamepads[0].buttons[6].pressed;
            const r2Btn = gamepads[0].buttons[7].pressed;
            // const sharteBtn = gamepads[0].buttons[8].pressed;
            // const optionsBtn = gamepads[0].buttons[9].pressed;
            const leftJoyPressed = gamepads[0].buttons[10].pressed;
            const rightJoyPressed = gamepads[0].buttons[11].pressed;
            const upPad = gamepads[0].buttons[12].pressed;
            const downPad = gamepads[0].buttons[13].pressed;
            const leftPad = gamepads[0].buttons[14].pressed;
            const rightPad = gamepads[0].buttons[15].pressed;
            ps4CntrlDisplay(xBtn,oBtn,squareBtn,triangleBtn,l1Btn,r1Btn,l2Btn,r2Btn,leftJoyPressed,rightJoyPressed,
                upPad,downPad,leftPad,rightPad)
            // Update HTML elements based on controller input
        }
        update(updateElements);
    }
    

    // Start listening for controller input
    update(updateElements);
}
function update(func){
    window.requestAnimationFrame(func)
}
// display btns pressed
function ps4CntrlDisplay(...args){
    
    args.forEach((arg,i) => {
        if(args[0]){
            document.getElementById('xBtn-display').style.background = 'lime'
            btnValDisplay.innerText = "x : True"
        } else {
            document.getElementById('xBtn-display').style.background = 'white'
            btnValDisplay.innerText = "Button : Value"
        }
        if(args[1]){
            document.getElementById('oBtn-display').style.background = 'lime'
            btnValDisplay.innerText = "o : True"
        } else {
            document.getElementById('oBtn-display').style.background = 'white'
        }
        if(args[2]){
            document.getElementById('squareBtn-display').style.background = 'lime'
            btnValDisplay.innerHTML = "<span style=\"font-size: 2rem;\">&square;</span> : True"
        } else {
            document.getElementById('squareBtn-display').style.background = 'white'
        }
        if(args[3]){
            document.getElementById('triangleBtn-display').style.background = 'lime'
            btnValDisplay.innerHTML = "<span style=\"font-size: 2rem;\">&triangle;</span> : True"
        } else {
            document.getElementById('triangleBtn-display').style.background = 'white'
        }
        
        if(args[4]){
            document.getElementById('l1-display').style.background = 'lime'
            btnValDisplay.innerText = "L1 : True"
            
        } else {
            document.getElementById('l1-display').style.background = 'white'
        }
        if(args[5]){
            document.getElementById('r1-display').style.background = 'lime'
            btnValDisplay.innerText = "R1 : True"
        } else {
            document.getElementById('r1-display').style.background = 'white'
        }
        if(args[6]){
            document.getElementById('l2-display').style.background = 'lime'
            btnValDisplay.innerText = "L2 : True"
        } else {
            document.getElementById('l2-display').style.background = 'white'
        }
        if(args[7]){
            document.getElementById('r2-display').style.background = 'lime'
            btnValDisplay.innerText = "R2 : True"
        } else {
            document.getElementById('r2-display').style.background = 'white'
        }
        if(args[10]){
            document.getElementById('upPad-display').style.background = 'lime'
            btnValDisplay.innerHTML = "<span style=\"font-size: 2rem;\">&uarr;</span> : True"
        } else {
            document.getElementById('upPad-display').style.background = 'white'
        }
        if(args[11]){
            document.getElementById('downPad-display').style.background = 'lime'
            btnValDisplay.innerHTML = "<span style=\"font-size: 2rem;\">&darr;</span> : True"
        } else {
            document.getElementById('downPad-display').style.background = 'white'
        }
        if(args[12]){
            document.getElementById('leftPad-display').style.background = 'lime'
            btnValDisplay.innerHTML = "<span style=\"font-size: 2rem;\">&larr;;</span> : True"
        } else {
            document.getElementById('leftPad-display').style.background = 'white'
        }
        if(args[13]){
            document.getElementById('rightPad-display').style.background = 'lime'
            btnValDisplay.innerHTML = "<span style=\"font-size: 2rem;\">&rarr;</span> : True"
        } else {
            document.getElementById('rightPad-display').style.background = 'white'
        }

    })
}

// Function to update joystick values
function updateJoystick() {
    const gamepads = navigator.getGamepads();
        if (gamepads[0]) { // Assuming the PS4 controller is the first gamepad
            const lJoystickX = gamepads[0].axes[0]; // X-axis of the left joystick
            const lJoystickY = gamepads[0].axes[1]; // Y-axis of the left joystick
            const rJoystickX = gamepads[0].axes[2]; // X-axis of the right joystick
            const rJoystickY = gamepads[0].axes[3]; // Y-axis of the right joystick

            console.log(`RightJoystick X: ${rJoystickX},Right Joystick Y: ${rJoystickY}`);
            btnValDisplay.innerHTML = `Right Joystick X: ${rJoystickX},Right Joystick Y: ${rJoystickY}`
            
        
            btnValDisplay.innerHTML = `Joystick X: ${lJoystickX}, Joystick Y: ${lJoystickY}`
            
            // Do something with the joystick values
            console.log(`Left Joystick X: ${lJoystickX},Left Joystick Y: ${lJoystickY}`);
        }

    update(updateJoystick);
    }

// Start listening for gamepad input
updateJoystick(updateJoystick);

                        