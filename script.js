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
  ctx.fillStyle = " #E4E7E0";
  ctx.lineWidth = 5;
  ctx.clneCap = "round";

  //   draw clock face border

  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#000";
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
    if (i % 5 != 0) {
      ctx.beginPath();

      ctx.moveTo(115, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }

  ctx.restore();

  //   get corrent time

  const hr = now.getHours() % 12;
  const mins = now.getMinutes();
  const sec = now.getSeconds();

  //   Draw hours hand

  ctx.save();
  ctx.lineWidth = 14;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#800000";
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * mins + (Math.PI / 21600) * sec
  );
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  //   Draw mins hand

  ctx.save();
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#800000";
  ctx.rotate((Math.PI / 30) * mins + (Math.PI / 1800) * sec);
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  //   Draw sec hand

  ctx.save();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#000";
  ctx.rotate((sec * Math.PI) / 30);
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 12, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore default satate

  requestAnimationFrame(clock);
};

requestAnimationFrame(clock);
