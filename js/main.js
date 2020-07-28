let hero;
let obstacles;
let gains;
let gameover;
let malus;
let bonus;
let startAt;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// ------------------------------------------------------------------------------CANVAS

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// -----------------------------------------------------------------------------DRAWING x 1

// téléchargment l'image du metro
const metro = new Image();
metro.src = "./images/metro NB.jpg" 

// états d'enfoncement des touches
const pressed = {
  space: false,
  arrowleft: false,
  arrowright: false,
  }

  document.onkeydown = function (e) {
  switch (e.keyCode) {

      // SPACE
      case 32:
      if (hero.y + hero.h < H) return; // STOP si touche déja enfoncée
      pressed.up = true;
  
      hero.jump(); // jump hero 🦘
      break;

      // LEFT
      case 37:
      if (pressed.arrowleft) return; // STOP si touche déja enfoncée
      pressed.arrowleft = true;
  
      hero.backward(); // GO back
      break;

      // RIGHT
      case 39:
      if (pressed.arrowright) return; // STOP si touche déja enfoncée
      pressed.right = true;
  
      hero.forward(); // GO ahead hero !!
      break;
      }
  }

  document.onkeyup = function (e) {
  switch (e.keyCode) {
      // SPACE
       case 32:
      // on "libère" l'etat d'enfoncement de la touche
      pressed.space = false; 
      break;
      // ARROWLEFT
      case 37:
      // on "libère" l'etat d'enfoncement de la touche
      pressed.arrowleft = false; 

      // ARROWRIGHT
      case 39:
      // on "libère" l'etat d'enfoncement de la touche
      pressed.arrowright = false;

      }
  }

// télécharger l'image winner
const win = new Image();
win.src = "./images/winner.png"

// télécharger l'image du looser 
const lose = new Image();
lose.src ="./images/loser.png"

//-----------------------------------------------------------------------------DRAWING x toutes les 16milisec

function draw(){
  
  ctx.clearRect(0,0,W,H); // eponge

  //----------------------------------------METRO & HERO
  ctx.drawImage(metro, 0, 0, W,H);
  hero.update();
  hero.paint();

  //----------------------------------------VIRUS 1
  if (frames % 210 === 0) {
    if (obstacles.length < 30) {
      const obst = new Virus();
      obstacles.push(obst); 
    }
  }

  obstacles.forEach(element => {
    element.y +=5;
    element.x -=2;
    element.draw(); 
  });

  //----------------------------------------VIRUS 2
  if (frames % 190 === 0) {
    if (obstacles.length < 30) {
      const obst2 = new Virus2();
      obstacles.push(obst2); 
    }
  }

  obstacles.forEach(element => {
    element.y +=2;
    element.x +=4;
    element.draw(); 
  });

  //----------------------------------------GEL 
  if (frames % 200 === 0) {
    if (gains.length < 50) {
      const gain = new Gel();
      gains.push(gain);
    }
  }

  gains.forEach(el => {
    el.y +=5;
    el.x +=2;
    el.draw(); 
  });

    //----------------------------------------MASQUE
    if (frames % 220 === 0) {
      if (gains.length < 50) {
        const gain2 = new Masque();
        gains.push(gain2);
      }
    }
  
    gains.forEach(el => {
      el.y +=4;
      el.x -=4;
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
 
  ctx.beginPath();
  ctx.arc(925, 70, 50, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(222, 51, 82)"; 
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
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
  ctx.beginPath();
  ctx.arc(100, 70, 50, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(133, 200, 62)"; 
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.textAlign = "right";
  ctx.fillText(`${bonus} pts`, 135, 80);

  //----------------------------------------STOP GAME MESSAGE
  checkElaspedtime();
  if (gameover) {
    result();
    
    ctx.font = "100px Concert One";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(`Game Over`, W-500, 150);
    
    ctx.font = "70px Concert One";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(`Final Score : ${bonus += malus} pts`, W-500, 800);
    
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

  // game-presentation -> display:none
  var element = document.querySelector(".game-presentation");
  element.style.display = "none";

  // game-board -> display:block
  var element = document.querySelector('#game-board');
  element.style.display = "block";

}
//---------------------------------------------------------------------------TIME KEEPER and STOP GAME

  function checkElaspedtime(){
    let elapsedTime = new Date().getTime() - startAt; 
    if (elapsedTime > 20000){
      gameover = true;
    }
  }
//-----------------------------------------------------------------------------RESET

function reset () {
  if (gameover = true ){
    var element = document.querySelector('#restart-button');
    element.style.visibility = "visible";
  }
}
//----------------------------------------------------------------------------WINNER/LOOSER

function result() {
	if (bonus + malus <= 0) {
		console.log("you lose");
		ctx.clearRect(0, 0, W, H);
    ctx.drawImage(lose, 250, 225, W - 500, H - 450);
    reset();
    var element = document.querySelector('#loser-gif');
    element.style.visibility = "visible";
	}
	if (bonus + malus > 0) {
		console.log("you win");
		ctx.clearRect(0, 0, W, H);
    ctx.drawImage(win, 250, 225, W - 500, H - 450);
    reset();
    var element = document.querySelector('#winner-gif');
    element.style.visibility = "visible";
	}
}

  //Relance du jeu au click
  document.getElementById("restart-button").onclick = function() {
    startGame();

    var element = document.querySelector('#restart-button');
    element.style.visibility = "hidden";

    var element = document.querySelector('#winner-gif');
    element.style.visibility = "hidden";

    var element = document.querySelector('#loser-gif');
    element.style.visibility = "hidden";

  }



 //ajouter une page de lancement OK
// fonction reset ok
// image winner looser ok
// saut du hero ok quand je reste enfoncé sur la touche left il ne bouge pas 
//styliser les pages nok 
// des animations quand loser un virus se balade quand winner un masque se balade
//Ajouter du son = balise audio