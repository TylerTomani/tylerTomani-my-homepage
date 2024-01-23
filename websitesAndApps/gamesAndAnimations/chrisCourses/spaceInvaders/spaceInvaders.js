const speed = 5
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
class Player{
constructor(){
    this.velocity = {
        x: 0,
        y: 0,
    }        
    const image = new Image()
    image.src = ('sprites/spaceship.png')
    image.onload = () => {
        const scale = .2
        this.image = image
        this.width = image.width * scale
        this.height = image.height * scale
        this.position = {
                x: canvas.width * .5 - (this.width * .5),
                y: canvas.height * .82
                }
            }
        }
    draw(){
        if(this.image){

            c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
        }
    }
    update(){
        if(this.image){
            this.position.x += this.velocity.x
            this.draw()
        }
    }
    

}

const player = new Player()
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed:false
    }
}

function animate(){
    requestAnimationFrame(animate)
    c.fill = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()

    if(keys.a.pressed){
        player.velocity.x = -speed
        console.log('left')
    } else if (keys.d.pressed){
        player.velocity.x = speed
    }
     else {
        player.velocity.x = 0
    }
}
animate()

canvas.addEventListener('keydown', e => {
    let key = e.key
    switch (key ){
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})
canvas.addEventListener('keyup', e => {
    let key = e.key
    switch (key ){
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        
    }
})