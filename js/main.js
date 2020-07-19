let hero;
let obstacles;
let gameover;
let malus;
let time;
let startcounter;


// ------------------------------------------------------------------------------CANVAS

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// -----------------------------------------------------------------------------DRAWING

const metro = new Image();
metro.src = "./images/metro NB.jpg" // telechargement

// mouvements du hero en réponse aux touches
document.onkeydown = function (e) {
  if (!hero) return; // si hero est undefined STOP
  switch (e.keyCode) {
    case 37: hero.moveLeft();  console.log('left',  hero); break;
    case 39: hero.moveRight(); console.log('right', hero); break;
    case 38: hero.moveUp(); console.log('right', hero); break;
    case 40: hero.moveDown(); console.log('right', hero); break;
  }
}
function draw(){

  // appelee toutes les 16ms
  ctx.clearRect(0,0,W,H); // eponge

  //----------------------------------------METRO & HERO
  ctx.drawImage(metro, 0, 0, W,H);
  hero.draw();

  //----------------------------------------VIRUS
  if (frames % 150 === 0) {
    if (obstacles.length < 30) {
      const obst = new Virus();
      obstacles.push(obst);
      //console.log("coucou");
    }
  }

  obstacles.forEach(element => {
    element.y +=5;
    element.draw(); 
  });

  //--------------------------------------COLLISIONS 

  for (const obst of obstacles) {
    if (obst.hit(hero)) {
      console.log("-2 points");
      //gameover = true;
      malus -= 2;
      obstacles.splice(0,obst.hit(hero));
    }
  }

  ctx.font = "50px Arial";
  ctx.textAlign = "right";
  ctx.fillStyle = "red";
  ctx.fillText(`${malus} pts`, W-50, 100);

//----------------------------------------TIME KEEPER
  function counter () {
time--;
} 

startcounter = setInterval(counter, 5000);

ctx.font = "50px Arial";
ctx.textAlign = "left";
ctx.fillStyle = "black";
ctx.fillText(`${time} seconds`, W-600, 100);

}

// ----------------------------------------------------------------------------START GAME
let raf;
let frames = 0;

// boucle d'animation
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    raf = requestAnimationFrame(animLoop); // continuation de la boucle d 'anim
  }
}
// lancement du jeu

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  
  time = 10;
  malus = 0;
  gameover = false; //au lancement game over = faux
  hero = new Hero(); // création d'un hero
  obstacles = []; // création d'un tableau pour insertion des virus
  animLoop(); // démarre la boucle d'animation
}

//Lancement du jeu au click
document.getElementById("start-button").onclick = function() {
  startGame();
}

//----------------------------------------------------------------------------SCORE

/*function scoreVirus(){
  return point;*/
//}