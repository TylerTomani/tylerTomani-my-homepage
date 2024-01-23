// 00-Basic Setup & Player Gravity
const segHTML00 = `//00-Basic Setup & Player Gravity
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.style.height = '80vh'
const <span class="gr">gravity</span> = <span class="gr">.15</span>
<span class="m">class</span> <span class="dc">Player</span>{
    constructor(){
        this.position = {
            x: 20,
            y: 20
        };
        this.width = 80;
        this.height = 10;
        this.<span class="b">velocity</span> = {
            x: 0,
            y: 4
        }
    }
    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()
        this.position.y += this.<span class="b">velocity</span>.y
        if(this.position.y + this.height + this.<span class="b">velocity</span>.y &lt; canvas.height ){
            this.<span class="b">velocity</span>.y += <span class="gr">gravity</span>
        } else this.<span class="b">velocity</span>.y = 0
    }
}
const player = new Player()

function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
}
animate()  
`
// 01-Player Movement - Up
//** Add text to explain to hit the y button, every time y is hit, velocity code get bigger in segCode > pre */
const segHTML01 = `//01-Player Movement - Up
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.style.height = '80vh'
const gravity = .15
class Player{
    constructor(){
        this.position = {
            x: 20,
            y: 20
        };
        this.width = 80;
        this.height = 10;
        this.velocity = {
            x: 0,
            y: 4
        }
    }
    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.<span class='b'>velocity</span>.y < canvas.height ){
            this.<span class='b'>velocity</span>.y += gravity
        } else this.velocity.y = 0
    }
}
const player = new Player()

function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
}
animate()  

addEventListener('keydown', ({ keyCode }) => {
    <span class="focus-item gr">switch (keyCode){
        case 87:
            console.log('up',keyCode)
            player.<span class='b'>velocity</span>.y -= 4
    }
})</span>
`
// 02-Player Movement - Right & Left
const segHTML02 = `//02-Player Movement - Right & Left
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.style.height = '80vh'
const gravity = .15
class Player{
    constructor(){
        this.position = {
            x: 50,
            y: 20
        };
        this.width = 80;
        this.height = 10;
        this.velocity = {
            x: 0,
            y: 4
        }
    }
    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height ){
            this.velocity.y += gravity
        } else this.velocity.y = 0
       
       
    }
}
const player = new Player()
const <span class="gr">keys</span> = {
    <span class="gr">right</span>: {
        <span class="gr">pressed</span>: false
    },
    <span class="gr">left</span>: {
        <span class="gr">pressed</span>: false  
    }
}
function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    <span autofocus class="gr focus-item">if(keys.right.pressed){
        player.velocity.x = 25
    } else if(keys.left.pressed){
        player.velocity.x = -25
    } else player.velocity.x = 0  
    </span>
}
animate()  
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode){
        case 87:
            console.log('up')
            player.velocity.y -= 4
            break;
        case 68:
            console.log('right')
            keys.right.pressed = true
            break;
        case 83:
            console.log('down')
            break;
        case 65:
            console.log('left')
            keys.left.pressed = true
            break;
    }
    console.log(keys.right.pressed)
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode){
        case 87: // Up
            break;
        case 68:
            keys.right.pressed = false
            break;
        case 83: // Down
            break;
        case 65:
            keys.left.pressed = false
            break;
    }
})

`

// 03- Ceiling Collision
const segHTML03 = `//03-Ceiling Collision
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.style.height = '80vh'
const gravity = .15
class Player{
    constructor(){
        this.position = {
            x: 50,
            y: 20
        };
        this.width = 80;
        this.height = 10;
        this.velocity = {
            x: 0,
            y: 8
        }
    }
    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height ){
            this.velocity.y += gravity
        } else this.velocity.y = 0
    
    
    }
}
const player = new Player()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false  
    }
}
function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    if(keys.right.pressed){
        player.velocity.x = 25
    } else if(keys.left.pressed){
        player.velocity.x = -25
    } else player.velocity.x = 0  

    <span class="dg focus-item"> if(player.position.y <= 0){
        player.velocity.y = 8
    }</span>
    
}
animate()  
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode){
        case 87:
            console.log('up')
            player.velocity.y -= 8
            break;
        case 68:
            console.log('right')
            keys.right.pressed = true
            break;
        case 83:
            console.log('down')
            break;
        case 65:
            console.log('left')
            keys.left.pressed = true
            break;
    }
    console.log(keys.right.pressed)
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode){
        case 87: // Up
            break;
        case 68:
            keys.right.pressed = false
            break;
        case 83: // Down
            break;
        case 65:
            keys.left.pressed = false
            break;
    }
})


`
// 04- Platform Collision
const segHTML04 = `// 04- Platform Collision
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.style.height = '80vh'
const gravity = .15
class Player{
    constructor(){
        this.position = {
            x: 50,
            y: 20
        };
        this.width = 80;
        this.height = 10;
        this.velocity = {
            x: 0,
            y: 8
        }
    }
    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height ){
            this.velocity.y += gravity
        } else this.velocity.y = 0
    
    
    }
}
<span class='gr'> class Platform{
    constructor(){
        this.position = {
            x: 412,
            y: 72
        }
        this.height = 10
        this.width = 512
    }
    draw(){
        c.fill = 'blue'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
</span>
const player = new Player()
const platform = new Platform()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false  
    }
}
function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    if(keys.right.pressed){
        player.velocity.x = 25
    } else if(keys.left.pressed){
        player.velocity.x = -25
    } else player.velocity.x = 0  

    if(player.position.y <= 0){
        player.velocity.y = 12
    }
    <span class="gr focus-item">
    platform.draw()
    if(player.position.y - platform.height <= 
        platform.position.y && 
        player.position.y + player.height + player.velocity.y >=
        platform.position.y && 
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
        ){
        player.velocity.y = 0
    }
    </span>
    
}
animate()  
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode){
        case 87:
            console.log('up')
            player.velocity.y -= 12
            break;
        case 68:
            console.log('right')
            keys.right.pressed = true
            break;
        case 83:
            console.log('down')
            break;
        case 65:
            console.log('left')
            keys.left.pressed = true
            break;
    }
    console.log(keys.right.pressed)
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode){
        case 87: // Up
            break;
        case 68:
            keys.right.pressed = false
            break;
        case 83: // Down
            break;
        case 65:
            keys.left.pressed = false
            break;
    }
})



`
// 05- stop player & move background
const segHTML05 = `// 05- stop player & move background
// 04- Platform Collision
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.style.height = '80vh'
const gravity = .15
class Player{
    constructor(){
        this.position = {
            x: 50,
            y: 20
        };
        this.width = 80;
        this.height = 10;
        this.velocity = {
            x: 0,
            y: 8
        }
    }
    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height ){
            this.velocity.y += gravity
        } else this.velocity.y = 0
    
    
    }
}
 class Platform{
    constructor(){
        this.position = {
            x: 412,
            y: 72
        }
        this.height = 10
        this.width = 512
    }
    draw(){
        c.fill = 'blue'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

const player = new Player()
const platform = new Platform()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false  
    }
}
function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle = 'black'
    player.update()
    // Stops player at 800 pixes to the right... i think it's pixels 
    if(keys.right.pressed && player.position.x < 800){
        player.velocity.x = 25
    } else if(keys.left.pressed && player.position.x > 100){
        player.velocity.x = -25
    } else {
        player.velocity.x = 0  
        <span class="gr focus-item">if(keys.right.pressed){
            platform.position.x -= 10
        } else if(keys.left.pressed){
            platform.position.x += 10
        }</span
    }

   
    if(player.position.y <= 0){
        player.velocity.y = 12
    }
    c.fillStyle = 'blue'
    platform.draw()
    if(player.position.y - platform.height <= 
        platform.position.y && 
        player.position.y + player.height + player.velocity.y >=
        platform.position.y && 
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
        ){
        player.velocity.y = 0
    }
    
    
}
animate()  
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode){
        case 87:// Up
            player.velocity.y -= 12
            break;
        case 68:
            keys.right.pressed = true
            break;
        case 83: // Down
            break;
        case 65:
            keys.left.pressed = true
            break;
    }
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode){
        case 87: // Up
            break;
        case 68:
            keys.right.pressed = false
            break;
        case 83: // Down
            break;
        case 65:
            keys.left.pressed = false
            break;
    }
})
`