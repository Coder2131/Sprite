const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 320;
const height = canvas.height = 480;
const frameWidth = 64;
const frameHeight = 100;
const xPos = 130;
const yPos = 160;
const scale = 1;
const fps = 60;
const secondsToUpdate = 1 = fps;
let count = 0;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

const spriteSheet = new Image();
spriteSheet.src = "https://i.ibb.co/jfBgnvz/Sprite.png";

function animate() {
  context.drawImage(
    spriteSheet,
    0,
    0,
    frameWidth,
    frameHeight,
    xPos,
    yPos,
    frameWidth * scale,
    frameHeight * scale
  );
}

function frame() {
  context.clearRect(0, 0, width, height);
  animate();
  requestAnimationFrame(frame);
}