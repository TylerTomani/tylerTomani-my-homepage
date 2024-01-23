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
        if(keys.right.pressed){

            platform.position.x -= 10
        } else if(keys.left.pressed){
            platform.position.x += 10
        }
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



