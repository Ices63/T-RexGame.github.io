const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const ptero = document.getElementById("ptero");
const game = document.getElementById("game");

setInterval(function () {
  Cactus();
}, 6000);

setInterval(function () {
  Ptero();
}, 6000);

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 1000);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 60 && cactusLeft > 5 && dinoTop >= 180) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});


/* INVOKE */
function Cactus() {
  cactus.classList.add("moveCactus");
  setTimeout(function () {
    cactus.classList.remove("moveCactus");
  }, 3000);
}

function Ptero() {
  ptero.classList.add("movePtero");
  setTimeout(function () {
    ptero.classList.remove("movePtero");
  }, 3000);
}
