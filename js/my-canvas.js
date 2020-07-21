let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50,50);
ctx.fillStyle = "red";
ctx.fill();    // если указываем ctx.fill(), то ctx.stroke() не нужно писать
// ctx.stroke();

ctx.strokeStyle = "red";
ctx.lineWidth = "3";
ctx.strokeRect(200, 50, 100, 100); // прямоугольник 

ctx.fillRect(350, 50, 100, 100); // закрашенный прямоугольник

ctx.rect(500, 50, 100, 100);
ctx.fillStyle = "green";
ctx.fill();
ctx.clearRect(533, 83, 33, 33);