function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }

//-------------------------------------------------------------------------------Définitions des masques et gel 
//constructor avec 2 types

/*class Masque {
  constructor (){
        this.h = 50;
        this.w = random(W/3, 2/3*W); // between 1/3 and 2/3 of W
        this.x = random(5, W-this.w);
        this.y =-this.h;
  }

  draw(){
      console.log('draw gel', this.x, this.y)

      ctx.beginPath();
      ctx.arc(this.x,this.y,75, 0, Math.PI*2)
      ctx.strokeStyle = 'green'; 
      ctx.stroke();
      ctx.closePath();
  }
  
  hit(hero){
      return (
          (hero.x+hero.w >= this.x && hero.x <= this.x+this.w) 
          &&
          (hero.y <= this.y+this.h && hero.y+hero.h >= this.y));
  }
}*/