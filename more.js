const cactus = document.getElementById("cactus");
const game = document.getElementById("game");
const cactusDiv = '<div id="cactus" class="moveCactus"></div>';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
nbCactus = Math.random(getRandomInt(2));
/*
with (game) {
    game.append(cactusDiv)
}
*/