import ciel from '../images/ciel-nocturne.png';
import soucoupe from '../images/flyingSaucer-petit.png';
import tir from '../assets/images/tir.png';
import vaisseau from '../assets/images/vaisseau-ballon-petit.png';

import Mobile from './Mobile.js';
import MoveState from './MoveState.js';

export default class StarShip extends Mobile {
  constructor(x,y,dx=0,dy=8,src = vaisseau,dimx=48,dimy=39) {
      super(x,y,dx,dy,vaisseau,dimx,dimy);
      this.moving;
  }

  getMovingUp(){
      return (this.moving === MoveState.UP);
  }

  getMovingDown(){
      return (this.moving === MoveState.DOWN);
  }

  move(theGame){
      if((this.y + this.deltaY < theGame.y) == false && (this.y + this.deltaY > theGame.getHeight() - 46) == false){
          this.y += this.deltaY;
      }
  }

  moveUp(){
    if(this.getMovingUp() == false){
      this.moving = MoveState.UP;
      this.deltaY = -Math.abs(this.deltaY);
    }
  }

  moveDown(){
    if(this.getMovingDown() == false){
      this.moving = MoveState.DOWN;
      this.deltaY = Math.abs(this.deltaY);
    }
  }

  stopMoving(){
    this.moving = MoveState.STUN;
  }

};
