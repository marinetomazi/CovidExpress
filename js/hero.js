class Hero {
    constructor(){
    //Définir mon héro avec une image
        const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.x = 400 ;
      this.y = 980;
      this.w = 500 ;
      this.h = this.w/imgRatio;
    }
    img.src = "images/cartoon-kid-png-5-transparent.png";
    }
    
    //faire apparaitre le hero dans le canvas
    draw(){
        if (!this.img) return; // si `this.img` n'est pas encore chargée => ne pas dessiner
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    //faire bouger le hero à gauche 
    moveLeft(){
        if(this.x >=0){
            this.x -= 5;
        }
    }
    //faire bouger le hero à droite 
    moveRight(){
        if(this.x <= 500){
           this.x += 5;
        } 
    }

    //faire bouger le hero vers le haut
    moveUp(){
        this.y -= 10;
    }

    //faire bouger le hero vers le bas
    moveDown(){
        this.y += 10;
        }
}



