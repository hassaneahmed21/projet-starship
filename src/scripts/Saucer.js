import ciel from '../images/ciel-nocturne.png';
import soucoupe from '../images/flyingSaucer-petit.png';
import tir from '../assets/images/tir.png';
import vaisseau from '../assets/images/vaisseau-ballon-petit.png';

import Mobile from './Mobile.js';

export default class Saucer extends Mobile {
  constructor(x,y,dx=-3,dy=0,src =soucoupe,dimx=48,dimy=36) {
      super(x,y,dx,dy,src,dimx,dimy);
  }

  move(theGame){
      if((this.x + this.deltaX < theGame.x) == false  && (this.y + this.deltaY > theGame.getHeight() - 46) == false){
          this.x += this.deltaX;
          this.y += this.deltaY;
      }else{
          return true;
      }
      return false;
  }
};
