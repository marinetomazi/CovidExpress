function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }

//----------------------------------------------------------------------------------Définition des virus

class Virus {
    constructor (){
    
    const imgV = document.createElement('img');

    imgV.onload = () => {
      this.imgV = imgV;

      const imgVRatio = imgV.naturalWidth/imgV.naturalHeight;
      this.w = random(W/11, 1/11*W); // between 1/5 and 4/5 of W ;
      this.x = random(0, W-this.w);
      this.h = this.w/imgVRatio;
      this.y = -this.h;
        }
    imgV.src = "images/cartoon-virus-081.png";
    }

    draw(){
        if (!this.imgV) return; // si `this.imgV` n'est pas encore chargée => ne pas dessiner
        ctx.drawImage(this.imgV, this.x, this.y, this.w, this.h);
    }
   
    
    hit(hero){
        return (
            (hero.x+hero.w >= this.x && hero.x <= this.x+this.w) 
            &&
            (hero.y <= this.y+this.h && hero.y+hero.h >= this.y));
    }
}




