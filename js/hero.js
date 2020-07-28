const gravity = 2;

class Hero {
    constructor(){

    //Définir mon héro avec une image
        const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.x = 400 ;
      this.y = 500;
      this.w = 250 ;
      this.h = this.w/imgRatio;

      this.vy = 0; // vitesse verticale
    }
    img.src = "images/kid01.png";
    }
    
    //definition des bougés du hero vers le haut
    jump() {
        this.vy = -30;
      }

    forward() {
        if(this.x <= 800){
            this.x += 50;
    } 
      }

    backward() {
        if(this.x >=50){
            this.x -= 50;
        }
      }

    update() {
        // on met a jour la position via les vitesses
        this.y += this.vy;
    
        // on empeche d'aller plus bas que le sol
        if (this.y > H - this.h) this.y = H - this.h;
        
        // la gravité s'applique
        this.vy += gravity;
      }

    paint() {
        if (!this.img) return; // si `this.img` n'est pas encore chargée => ne pas dessiner
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      }   
   
}



