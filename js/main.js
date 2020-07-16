let hero;
let obstacle = [];

// ------------------------------------------------------------------------------CANVAS

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// -----------------------------------------------------------------------------DRAWING

function draw(){

// dessiner la rame de metro
const metro = new Image();
metro.src = "../images/road.png"
ctx.drawImage(metro, 0, 0, W, H);

// dessiner le hero

hero.draw()

// dessiner les virus

if (frames % 250 === 0) {
    const obst = new Virus()
    obstacle.push(obst)
  }

  obstacles.forEach(element => {
    element.draw();
    element.y += 1; 
  });

}

// ----------------------------------------------------------------------------START GAME
let raf;
let frames = 0;

function animLoop() {
    frames++;
  
    draw();
  
    if (!gameover) {
      raf = requestAnimationFrame(animLoop);
    }
  }

function startGame() {
    if (raf) {
        cancelAnimationFrame(raf);
      }

    hero = new Hero()
    obstacle = new Virus()

    animLoop();
}

// evenement au click du bouton Let's go

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();