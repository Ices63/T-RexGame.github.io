const dino = document.getElementById("dino");
const game = document.getElementById("game");
const scoreBoardTitle = document.getElementById("scoreBoardTitle");
const panel = document.getElementById("panel");
const mobs1 = document.getElementById("mobs1");
const mobs2 = document.getElementById("mobs2");
const mobs3 = document.getElementById("mobs3");

const points = document.getElementById("points");
let pts = 0;
let pointsHtml = toString('<p>'+pts+'</p>');

const pteroHtmlId = '<div id="ptero"';
let ptero, pteroClass, pteroAnimDuration, pteroRnd, pteroLeft;

let cactus1, cactus2, cactus3, cactusLeft1, cactusLeft2, cactusLeft3;
const cactusHtml = '<div id="cactus1" class="moveCactus"></div>';

let mobRng2, mobRng3, mobRnd;

let panelPos = true;


scoreBoardTitle.addEventListener("click", function() {
  if (panelPos) {
    panel.classList.remove("hide");
    //panel.classList.add("deploy");
    //setTimeout(function () { 
      //panel.classList.remove("deploy");
      panel.classList.add("show");
     //}, 3000);
    panelPos = false;
  } else {
    panel.classList.remove("show");
    //panel.classList.add("retract");
    //setTimeout(function () { 
      //panel.classList.remove("retract");
      panel.classList.add("hide");
     //}, 3000);
    panelPos = true;
  }
});


//lance l'apparition de mobs la première fois
mobSpawn()

//interval de l'apparation des mobs
setInterval(function () { mobSpawn(); }, 6000);


let isAlive = setInterval(function () {
//get Object Position----------                                                          ---------------xyz
  // get current dino Y position --------------
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //réactualisation des élements cactus 1 à 3
  cactus1 = document.getElementById("cactus1");
  if (cactus1) { //vérification de l'existance du CACTUS
      // get current cactus X position ----------------
    cactusLeft1 = parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"));

      // Collide Object -----------------------
    if (cactusLeft1 < 60 && cactusLeft1 > 5 && dinoTop >= 180) {
      over();
    }
  }
  
  //même qu'au dessus en plus comprésser
  cactus2 = document.getElementById("cactus2");
  if (cactus2) { cactusLeft2 = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
  if (cactusLeft2 < 60 && cactusLeft2 > 5 && dinoTop >= 180) { over(); } }

  cactus3 = document.getElementById("cactus3");
  if (cactus3) { cactusLeft3 = parseInt(window.getComputedStyle(cactus3).getPropertyValue("left"));
  if (cactusLeft3 < 60 && cactusLeft3 > 5 && dinoTop >= 180) { over(); } }

  ptero = document.getElementById("ptero");
  if (ptero) { pteroLeft = parseInt(window.getComputedStyle(ptero).getPropertyValue("left"));
  if (pteroLeft < 60 && pteroLeft > 5 && dinoTop <= 100) { over(); } }

  //actualisation de l'affichage des points
  pts += 5;  pointsHtml = '<p>'+pts+'</p>';  points.innerHTML = pointsHtml;
}, 10);

function over() {
  pts = 0;
  console.log("Game Over!");
}


// JUMP *********************                                                   *********** JUMP
// écoute lorsqu'une touche est appuyer
document.addEventListener("keydown", function (event) {  jump(); });

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    // supprime la classe JUMP de dino après 1s
    setTimeout(function () { dino.classList.remove("jump"); }, 1000);
  }
}


// INVOKE ++++++++++++++++++                                                ++++++++++++++++++ INVOKE
function mobSpawn() {
  //détermine le nombre de mobs
  spawn1(); spawn2(); spawn3(); spawnPtero();

  /*
  mobRnd = Math.floor((Math.random()*5)+1);

  switch (mobRnd) {
    case 1: spawn1();
      break;

    case 2: spawn1(); spawn2();
      break;

    case 3: spawn1(); spawn2(); spawn3();
      break;

    case 4: spawn1(); spawnPtero();
      break;

    case 5: spawn1(); spawn2(); spawnPtero();
      break;
  
    default: spawn1();
      break;
  }*/
}

function spawn1() {
  // add mobs1 v
  mobs1.innerHTML = cactusHtml;
  // remove mobs1 v
  setTimeout(function () {mobs1.innerHTML = "";}, 3000);
}

function spawn2() {
  //détermine les espacements de temps entre les mobs
  mobRng2=Math.floor((Math.random()*1000)+2000);

  setTimeout(function () {mobs2.innerHTML = cactusHtml;}, mobRng2);
  setTimeout(function () {mobs2.innerHTML = "";}, 3000 + mobRng2);
}

function spawn3() {
  mobRng3=Math.floor((Math.random()*1000)+4000);
  setTimeout(function () {mobs3.innerHTML = cactusHtml;}, mobRng3);
  setTimeout(function () {mobs3.innerHTML = "";}, 3000 + mobRng3);
}

function spawnPtero() {
  pteroRnd = Math.floor((Math.random()*1000));
  pteroSpeed = Math.floor((Math.random()*3)+1);

  switch (pteroSpeed) {
    case 1:
      pteroHtmlClass = 'class="Ptero flySlow"></div>';
      pteroAnimDuration = 6000;
      break;

    case 2:
      pteroHtmlClass = 'class="Ptero fly"></div>';
      pteroAnimDuration = 4000;
      break;

    case 3:
      pteroHtmlClass = 'class="Ptero flyFast"></div>';
      pteroAnimDuration = 2000;
      break;
  
    default:
      pteroHtmlClass = 'class="Ptero"></div>';
      break;
  }

  setTimeout(function () {mobs4.innerHTML = pteroHtmlId+pteroHtmlClass;}, 1000 + pteroRnd);
  setTimeout(function () {mobs4.innerHTML = "";}, pteroAnimDuration + 1000 + pteroRnd);
}
