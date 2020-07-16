class Hero {
    constructor(){
        //mettre image du hero
        const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.x = 400 ;
      this.y = 1400;
      this.w = 500 ;
      this.h = this.w/imgRatio;
    }
    img.src = "images/image011.jpg";
    }
    
    //faire apparaitre le hero dans le canvas
    displayHero(){
        if (!this.img) return; // si `this.img` n'est pas encore chargée => ne pas dessiner
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    //faire bouger le hero à gauche 
    moveLeft(){
        if(this.x >= 50){
            this.x -= 10;}
    }
    //faire bouger le hero à gauche 
    moveRight(){
        if(this.x <= 50){
            this.x += 10;
          }
    }
}

