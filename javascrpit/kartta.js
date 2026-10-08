const container = document.getElementById("imageWindow");
const image = document.getElementById("image");
let x = 0;
let y = 0;
let startX = 0;
let startY = 0;
let startImageX = 0;
let startImageY = 0;
let dragging = false;
container.addEventListener("pointerdown", function (e) {
  dragging = true;
  startX = e.clientX;
  startY = e.clientY;
  startImageX = x;
  startImageY = y;
  container.setPointerCapture(e.pointerId);
});
container.addEventListener("pointermove", function (e) {
  if (!dragging) {
    return;
  }
  let newX = startImageX + (e.clientX - startX);
  let newY = startImageY + (e.clientY - startY);
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;
  const minX = containerWidth - imageWidth;
  const maxX = 0;
  const minY = containerHeight - imageHeight;
  const maxY = 0;
  newX = Math.max(minX, Math.min(newX, maxX));
  newY = Math.max(minY, Math.min(newY, maxY));
  x = newX;
  y = newY;
  image.style.left = x + "px";
  image.style.top = y + "px";
});
container.addEventListener("pointerup", function (e) {
  dragging = false;
  container.releasePointerCapture(e.pointerId);
});
container.addEventListener("pointercancel", function () {
  dragging = false;
});
