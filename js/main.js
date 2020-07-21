let hero;
let obstacles;
let gains;
let gameover;
let malus;
let bonus;
let startAt;

// ------------------------------------------------------------------------------CANVAS

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// -----------------------------------------------------------------------------DRAWING x 1

// téléchargment de l'image
const metro = new Image();
metro.src = "./images/metro NB.jpg" 

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

//-----------------------------------------------------------------------------DRAWING x toutes les 16milisec

function draw(){
  
 
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

  //----------------------------------------MASQUE 
  if (frames % 140 === 0) {
    if (gains.length < 30) {
      const gain = new Masque();
      gains.push(gain);
      //console.log("coucou");
    }
  }

  gains.forEach(el => {
    el.y +=5;
    el.draw(); 
  });

  //--------------------------------------COLLISIONS OSBTACLES

  for (const obst of obstacles) {
    if (obst.hit(hero)) {
      console.log("-1 points");
      malus -= 1;
      obstacles.splice(0,obst.hit(hero));
    }
  }
  ctx.fillStyle = "rgb(227, 36, 36)";
  ctx.fillRect(800, 0, 200,130);
  ctx.fillStyle = "black";
  ctx.font = "50px Arial";
  ctx.textAlign = "right";
  ctx.fillText(`${malus} pts`, W-40, 80);

 //----------------------------------------COLLISIONS GAINS
 for (const gain of gains) {
  if (gain.hit(hero)) {
    console.log("+1 point");
    bonus += 1;
    gains.splice(0,gain.hit(hero));
  }
}
  ctx.fillStyle = "rgb(62, 220, 45)";
  ctx.fillRect(0, 0, 200,130);
  ctx.fillStyle = "black";
  ctx.font = "50px Arial";
  ctx.textAlign = "right";
  ctx.fillText(`${bonus} pts`, 160, 80);

  //----------------------------------------STOP GAME MESSAGE
  checkElaspedtime();
  if (gameover) {
    ctx.font = "200px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(`It's over!!`, W-500, 750);
    
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(`Final Score : ${bonus += malus} points`, W-500, 900);
    
    result();
  }
 
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
 
  startAt = new Date().getTime();
  malus = 0;
  bonus = 0;
  gameover = false; //au lancement game over = faux
  hero = new Hero(); // création d'un hero 
  gains = [];// Création d'un tableau pour insertion des masques
  obstacles = []; // création d'un tableau pour insertion des virus
  animLoop(); // démarre la boucle d'animation
}

//Lancement du jeu au click
document.getElementById("start-button").onclick = function() {
  startGame();
}

  //---------------------------------------------------------------------------TIME KEEPER and STOP GAME

  function checkElaspedtime(){
    let elapsedTime = new Date().getTime() - startAt; 
    if (elapsedTime > 20000){
      gameover = true;
    }
  }

//----------------------------------------------------------------------------WINNER/LOOSER

function result(){
  if (bonus+=malus > 0){
    console.log("you win");
  } else{
    console.log("you loose");
  }
}

//ajouter des gif = image et du son = balise audio
//ajouter une page de lancement 
//ajouter des type de gains 
//resoudre le probleme de collision sur la bordure de l'image et pas sur le centre de l'image