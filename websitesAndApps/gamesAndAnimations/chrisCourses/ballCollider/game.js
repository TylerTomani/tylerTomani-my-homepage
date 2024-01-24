const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

////////////////////////////////////////////////////////
//////////////////// Classes ///////////////////////////
class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill()
    }
}
class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}
class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}
////////////////////////////////////////////////////////
//////////////////// Game Animation ////////////////////
let x = canvas.width / 2;
let y = canvas.height / 2;
const player = new Player(x, y, 25, "blue")
// player.draw();

const projectiles = [];
const enemies = [];

function spawnEnemies() {
    setInterval(() => {
        let radius = Math.random() * (30 - 7.5) + 7.5;
        let x;
        let y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        } else {
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
            x = Math.random() * canvas.width;

        }
        const color = "green";
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000)

}
let animationID;
function animate() {
    animationID = requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.draw();

    projectiles.forEach(projectile => {
        projectile.update();
    })


    enemies.forEach((enemy, index) => {
        enemy.update();

        // End Game
        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (distance - enemy.radius - player.radius < 1) {
            cancelAnimationFrame(animationID);
        }

        projectiles.forEach((projectile, projectileIndex) => {
            const distance = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
            if (distance - enemy.radius - projectile.radius < 1) {
                setTimeout(() => {
                    enemies.splice(index, 1);
                    projectiles.splice(projectileIndex, 1)
                }, 0);
            }
        })
    })

}
addEventListener("click", (e) => {
    const angle = Math.atan2(e.clientY - y, e.clientX - x);
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    projectiles.push(new Projectile(x, y, 5, "red", velocity
    ))


})
animate();
spawnEnemies();