import ciel from '../images/ciel-nocturne.png';
import soucoupe from '../images/flyingSaucer-petit.png';
import tir from '../assets/images/tir.png';
import vaisseau from '../assets/images/vaisseau-ballon-petit.png';

//import StarShip from './StarShip.js';
import Saucer from './Saucer.js';
import Shoot from './Shoot.js';


var randInt=function(a,b) {
  return Math.floor(Math.random()*(b-a)+a);
}

export default class Game {
  constructor(canvas,width,height) {
      this.x=0;
      this.y=0;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this.starship = new StarShip(40,height/2);
      this.tabSoucoupe = new Array;
      this.tabTir = new Array;
      this.tabSoucoupeFall = new Array;
      this.score =0;
      this.context = this.canvas.getContext("2d");
  }

    getHeight(){
        return this.height;
    }

    getWidth(){
        return this.width;
    }

  addSoucoupe(){
      this.tabSoucoupe.push(new Saucer(this.width,randInt(0,this.height-50)));
  }

  removeSoucoupe(soucoupe){
      const index = this.tabSoucoupe.indexOf(soucoupe);
      if (index > -1) {
          this.tabSoucoupe.splice(index, 1);
      }
  }

  addSoucoupeTombe(soucoupe){
      this.tabSoucoupeFall.push(soucoupe);
  }

  removeSoucoupeTombe(soucoupe){
      const index = this.tabSoucoupeFall.indexOf(soucoupe);
      if (index > -1) {
          this.tabSoucoupeFall.splice(index, 1);
      }
  }

  addTir(){
      this.tabTir.push(new Shoot(this.starship.x,this.starship.y));
  }

  removeTir(tir){
      const index = this.tabTir.indexOf(tir);
      if (index > -1) {
          this.tabTir.splice(index, 1);
      }
  }

  modifyScore(score){
      this.score +=score;
      document.getElementById("score").innerHTML=this.score;
  }

  moveAndDraw(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const test = this;
  //  this.starship.draw(test.context);
    this.tabSoucoupe.forEach(function(soucoupe){
        const souc = soucoupe.move(test);
        if(souc == true){
          test.removeSoucoupe(soucoupe);
          test.modifyScore(-1000);
        }
        soucoupe.draw(test.context);
    });
    this.tabSoucoupeFall.forEach(function(soucoupe){
        const souc = soucoupe.move(test);
        if(souc == true){
          test.removeSoucoupeTombe(soucoupe);
        }
        soucoupe.draw(test.context);
    });
    this.tabTir.forEach(function(tir){
      const ti = tir.move(test);
      if(ti == true){
        test.removeTir(tir);
      }
      tir.draw(test.context);

      const touche =tir.collisionWithSaucer(test.tabSoucoupe);

      if(touche.touche == true){
        touche.soucoup.deltaX = 0;
        touche.soucoup.deltaY = 3;
        test.removeTir(touche.tir);
        test.modifyScore(touche.score);
        test.addSoucoupeTombe(touche.soucoup);
        test.removeSoucoupe(touche.soucoup);
      }

    });
    this.requete = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }

  keyDownActionHandler(event) {
  switch (event.key) {
        case "ArrowUp":
        case "Up":
            this.starship.moveUp();
            this.starship.move(this);
            break;
        case "ArrowDown":
        case "Down":
            this.starship.moveDown();
            this.starship.move(this);
            break;
        default: return;
    }
    event.preventDefault();
  }

  keyUpActionHandler(event) {
    switch (event.key) {
        case "ArrowUp":
        case "Up":
        case "ArrowDown":
        case "Down":
            this.starship.stopMoving();
            break;
        case " ":
            this.addTir();
            break;
        default: return;
    }
    event.preventDefault();
  }

};
