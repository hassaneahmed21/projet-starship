import ciel from '../images/ciel-nocturne.png';
import soucoupe from '../images/flyingSaucer-petit.png';
import tir from '../assets/images/tir.png';
import vaisseau from '../assets/images/vaisseau-ballon-petit.png';

import Game from './Game.js';

var randInt=function(a,b) {
  return Math.floor(Math.random()*(b-a)+a);
}

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    const canvas=document.getElementById("stars");
    const ctx=canvas.getContext("2d");
    const bouton_add_one = document.getElementById("nouvelleSoucoupe");
    const bouton_add_infini = document.getElementById("flotteSoucoupes");
    const theGame = new Game(canvas,canvas.width,canvas.height);

    bouton_add_one.addEventListener("click", function(){
        theGame.addSoucoupe();
    });

    let jeuxID;
    let jeux = false;

    bouton_add_infini.addEventListener("click", function(){
        if(jeux == false){
        	jeuxID = setInterval(random,750);
        	jeux = true;
        }else{
        	clearInterval(jeuxID);
        	jeux = false;
        }
    });

    function random(){
    	if(randInt(0,2) == 1){
    		theGame.addSoucoupe();
    	}

    }

    theGame.moveAndDraw();


    window.addEventListener('keydown',theGame.keyDownActionHandler.bind(theGame));
    window.addEventListener('keyup',theGame.keyUpActionHandler.bind(theGame));

}

window.addEventListener("load",init);


//
console.log('le bundle a été généré');
