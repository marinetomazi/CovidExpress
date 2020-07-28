function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }

  //let images= []

//function  randomindex ()// doit me sorti un nombre entre 0 et la length

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
    imgV.src = "images/cartoon-virus-051.png";
    //imgV.src = images[randomIndex]
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

class Virus2 {
  constructor (){
  
  const imgV2 = document.createElement('img');

  imgV2.onload = () => {
    this.imgV2 = imgV2;

    const imgV2Ratio = imgV2.naturalWidth/imgV2.naturalHeight;
    this.w = random(W/11, 1/11*W); // between 1/5 and 4/5 of W ;
    this.x = random(0, W-this.w);
    this.h = this.w/imgV2Ratio;
    this.y = -this.h;
      }
  imgV2.src = "images/cartoon-virus-081.png";
  //imgV.src = images[randomIndex]
  }

  draw(){
      if (!this.imgV2) return; // si `this.imgV` n'est pas encore chargée => ne pas dessiner
      ctx.drawImage(this.imgV2, this.x, this.y, this.w, this.h);
  }
 
  
  hit(hero){
      return (
          (hero.x+hero.w >= this.x && hero.x <= this.x+this.w) 
          &&
          (hero.y <= this.y+this.h && hero.y+hero.h >= this.y));
  }
}





