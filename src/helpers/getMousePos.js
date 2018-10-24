export function getMousePos(e) {
  let posx = 0;
  let posy = 0;
  // if (!e) var e = window.event;
  if (e.touches) {
    posx = e.touches.item(0).clientX;
    posy = e.touches.item(0).clientY;
  } else if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
}
