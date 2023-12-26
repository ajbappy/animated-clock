const clock = () => {
  const now = new Date();
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //   set up my canvas

  ctx.save(); // save default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(200, 200); // set clock in the middle of canvas
  ctx.rotate(-Math.PI / 2); // rotate clock -90 deg

  // set up style

  ctx.strokeStyle = "#000";
  ctx.fillStyle = " #3296FF";
  ctx.lineWidth = 5;
  ctx.clneCap = "round";

  //   draw clock face border

  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#141319";
  ctx.arc(0, 0, 140, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  //   Draw clock hour line

  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }

  ctx.restore();

  //   Draw clock mins line

  ctx.save();
  ctx.lineWidth = 2;
  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 30);
    ctx.moveTo(115, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }

  ctx.restore();

  ctx.restore(); // restore default satate
};

clock();
