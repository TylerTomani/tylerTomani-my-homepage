const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight 
canvas.style.background = "grey"

const mouse = {
    x : innerWidth / 2,
    y: innerHeight / 2
}
const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}
let angle = 0

addEventListener('mousemove', (e) => {
    mouse.x =  e.clientX - canvas.width / 2, 
    mouse.y = e.clientY - canvas.height / 2
    angle = Math.atan2(mouse.y,mouse.x)
    // console.log(angle)
    console.log(mouse)
})

addEventListener('resize', () => {
    canvas.width = innerWidth 
    canvas.height = innerHeight 
    init()
})

class Particle {
    constructor(x,y,radius,color,distanceFromCenter){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.distanceFromCenter = distanceFromCenter
    }
    draw() {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
    update(){
        this.draw()
        this.x = center.x + this.distanceFromCenter * Math.cos(angle)
        this.y = center.y + this.distanceFromCenter * Math.sin(angle)
    }
}

let particles 
function init() {
    particles = []
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `rgb(${r},${g},${b})`
    console.log(rgb)
    for(let i = 0; i < 400; i++){
        const x = canvas.width / 2 + i * Math.cos(Math.PI)
        const y = canvas.height / 2 + i * Math.sin(-Math.PI)
        particles.push(new Particle(x,y,5,rgb,i))
    }
}
init()

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    particles.forEach(particle => {
        particle.update()
    })

}
animate()