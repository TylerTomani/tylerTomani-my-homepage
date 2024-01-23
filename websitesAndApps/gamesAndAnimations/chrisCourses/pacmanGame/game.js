const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

canvas.style.background = 'black'

class Boundary {
    static width = 40
    static height = 40
    constructor({position}){
        this.position = position
        this.width = 40
        this.height = 40
    }
    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)

    }
}
class Player {
    constructor({position, velocity } ){
        this.position = position
        this.velocity = velocity
        this.radius = 10
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x,this.position.y,this.radius,this.radius, 0 , Math.PI * 2)
        c.fillStyle = 'yellow'
        c.fill()
        c.closePath()
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const map = [
    ['-','-','-','-','-','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-',' ','-','-',' ','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-','-','-','-','-','-']
]

const boundaries = []

map.forEach((row,i) => {
    row.forEach((symbol,j) => {
        switch (symbol){
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: 40 * j,
                            y: 40  * i
                        }
                    })
                )
            break;

        }
    })
})
boundaries.forEach(boundary => {
    boundary.draw()
})
const player = new Player({
    position: {
        x: Boundary.width + Boundary.width  * .5,
        y: Boundary.height + Boundary.height * .5
    },
    velocity: {
        x: 0,
        y: 0
    }
})


addEventListener('keydown', ( { key } ) => {
    console.log(key)
    switch (key) {
        case "d":
            player.velocity.x = 5
            break;
        case "a":
            player.velocity.x = -5
            break;
        case "w":
            player.velocity.y = -5
            break;
        case "s":
            player.velocity.y = 5
            
            break;
    }
    console.log(player.position)
})

function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    
}
animate()