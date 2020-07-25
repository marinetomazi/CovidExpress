function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }

//-------------------------------------------------------------------------------Définitions des masques 
//constructor avec 2 types

class Masque {
  constructor (){

    const imgM = document.createElement('img');
    imgM.onload = () => {
      this.imgM = imgM;

      const imgMRatio = imgM.naturalWidth/imgM.naturalHeight;
      this.w = random(W/11, 1/11*W); // between 1/5 and 4/5 of W ;
      this.x = random(0, W-this.w);
      this.h = this.w/imgMRatio;
      this.y = -this.h;
        }
    imgM.src = "images/gel main bouteil 01.png";
  }

  draw(){
    if (!this.imgM) return; // si `this.imgV` n'est pas encore chargée => ne pas dessiner
        ctx.drawImage(this.imgM, this.x, this.y, this.w, this.h);
   
  }
  
  hit(hero){
      return (
          (hero.x+hero.w >= this.x && hero.x <= this.x+this.w) 
          &&
          (hero.y <= this.y+this.h && hero.y+hero.h >= this.y));
  }
}