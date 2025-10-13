let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let score = 0;
let ball = { x: 200, y: 200, radius: 20 };

function startGame() {
    score = 0;
    document.getElementById("score").innerText = `Score: ${score}`;
    document.addEventListener("click", catchBall);
    drawBall();
}

function catchBall(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (Math.sqrt((mouseX - ball.x) ** 2 + (mouseY - ball.y) ** 2) < ball.radius) {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
        resetBall();
        drawBall();
    }
}

function resetBall() {
    ball.x = Math.random() * 380 + 20;
    ball.y = Math.random() * 380 + 20;
}

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#007BFF";
    ctx.fill();
    ctx.closePath();
}
