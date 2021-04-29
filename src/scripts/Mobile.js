import ciel from '../images/ciel-nocturne.png';
import soucoupe from '../images/flyingSaucer-petit.png';
import tir from '../assets/images/tir.png';
import vaisseau from '../assets/images/vaisseau-ballon-petit.png';

export default class Mobile {
  constructor(x,y,dx = 0,dy = 0,src = soucoupe,dimx,dimy) {
    this.x = x;
    this.y = y;
    this.dimx = dimx;
    this.dimy = dimy;
    this.deltaX = dx;
    this.deltaY = dy;
    this.image = new Image(dimx,dimy);
    this.image.src = src;

  }

  draw(context){
      context.drawImage(this.image,this.x,this.y);
  }

  move(theGame){
      this.x += this.deltaX;
      this.y += this.deltaY;
  }
};
