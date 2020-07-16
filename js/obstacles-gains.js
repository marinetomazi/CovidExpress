function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }

//Création des virus 

class Virus {
    constructor (){

          this.x = Math.floor(Math.random()*700);
          this.y = 0;
          this.w = random(30,500);
          this.h = 20;
          this.color = "blue";
    }

    draw(){
        ctx.fillRect(this.x,this.y,this.w,this.h);
        ctx.fillStyle = this.color;
    }
    
    hit(hero){
        return (
            this.w > hero.y && this.w < hero.y
            &&
            this.h> hero.x && this.h < hero.x
          )
          console.log("touchhhhhé")
      }
}






