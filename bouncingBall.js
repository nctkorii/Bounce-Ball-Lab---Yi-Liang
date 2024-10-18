const canvas = document.getElementById("myCanvas");
   const ctx = canvas.getContext("2d");
   const gravity = 0.5
   const ball2Gravity = 1;

   // Ball properties
   let x = 200; // Initial x position
   let y = 150; // Initial y position
   let dx = 2;  // Horizontal speed
   let dy = 2;  // Vertical speed
   let ballRadius = 15; // Radius of the ball

   //ball 2 properties
   let x2 = 120;
   let y2 = 80;
   let dx2 = 2;
   let dy2 = 2;

   function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBall();

    // Update the ball's position
    x += dx;
    dy += gravity;
    y += dy;

    x2 += dx2;
    dy2 += gravity;
    y2 += dy2;

    // Check for collisions with the walls
    if (y + ballRadius > canvas.height || y - ballRadius < 0) {
      dy = -dy * 0.7; // Reverse the vertical direction
      y = canvas.height - ballRadius;
    }

    if (x + ballRadius > canvas.width || x - ballRadius < 0) {
      dx = -dx; // Reverse the horizontal direction
      
    }

    if(y2 + ballRadius > canvas.height){
        dy2 = -dy2 * 1;
        y2 = canvas.height - ballRadius;
    }

    if (x2 + ballRadius > canvas.width || x2 - ballRadius < 0){
        dx2 = -dx2;
    }
}

  setInterval(update, 20);  