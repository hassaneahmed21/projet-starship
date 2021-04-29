import ciel from '../images/ciel-nocturne.png';
import soucoupe from '../images/flyingSaucer-petit.png';
import tir from '../assets/images/tir.png';
import vaisseau from '../assets/images/vaisseau-ballon-petit.png';

import Mobile from './Mobile.js';

export default class Shoot extends Mobile {
  constructor(x,y,dx=8,dy=0,src =tir,dimx=32,dimy=8) {
      super(x+48,y+16,dx,dy,src,dimx,dimy);
  }

  collisionWith(obs){
      let rectX1 = obs.x;
      let rectY1 = obs.y;
      let rectX2 = obs.x+obs.dimx;
      let rectY2 = obs.y+obs.dimy;

      let tirX1 = this.x;
      let tirY1 = this.y;
      let tirX2 = this.x+this.dimx;
      let tirY2 = this.y+this.dimy;

      let pX1 = Math.max(rectX1,tirX1);
      let pY1 = Math.max(rectY1,tirY1);
      let pX2 = Math.min(rectX2,tirX2);
      let pY2 = Math.min(rectY2,tirY2);

      if((pX1 < pX2) && (pY1 < pY2)){
          return true;
      }
      else{
          return false;
      }
  }

  collisionWithSaucer(saucer){
    const tir = this;
    const retourne = {touche : false};
    saucer.forEach(function(soucoupe){
      if(tir.collisionWith(soucoupe) == true){
        retourne.touche = true;
        retourne.tir = tir;
        retourne.soucoup = soucoupe;
        retourne.score = 200;
      }

    });

    return retourne;
  }

  move(theGame){
      if((this.x + this.deltaX > theGame.width) == false ){
          this.x += this.deltaX;
      }else{
          return true;
      }
      return false;
  }

};
