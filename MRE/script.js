const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ~@#|&é'(-è_çà)=}]^\`[{¤$£^¨*µù%!§:/;.,?";
const charactersArray = characters.split("");

const fontSize = 16;
const speed = 3;

const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / fontSize);
const rows = Math.floor(canvas.height / fontSize);

const matrix = [];
for (let i = 0; i < columns; i++) {
  matrix[i] = 1;
}

function drawMatrix() {
  context.fillStyle = "rgba(0, 10, 10, 0.03)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgba(0, 255, 0, 1)";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < matrix.length; i++) {
    const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    context.fillText(text, i * fontSize, matrix[i] * fontSize);

    if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrix[i] = 0;
    }

    matrix[i]++;
  }
}

function animateMatrix() {
  drawMatrix();
  requestAnimationFrame(animateMatrix);
}

animateMatrix();
