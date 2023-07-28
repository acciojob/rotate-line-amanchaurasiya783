const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const line = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 200,
  height: 2,
  angle: 0,
  speed: 2
};

function drawLine() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.save();
  ctx.translate(line.x, line.y);
  ctx.rotate(line.angle * Math.PI / 180);
  ctx.fillStyle = "black";
  ctx.fillRect(-line.width / 2, -line.height / 2, line.width, line.height);
  ctx.restore();
  
  line.angle += line.speed;
  
  requestAnimationFrame(drawLine);
}

drawLine();