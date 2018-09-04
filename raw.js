var Object = {};
var x_pre, y_pre;
(function(){
  Object.xdes = 0;
  Object.ydes = 0;
  Object.x = 0;
  Object.y = 0;
  Object.canvas = document.getElementById("display");
  Object.ctx = Object.canvas.getContext("2d");
  Object.ctx.fillStyle = "#FF0000";
  Object.ctx.fillRect(Object.x,Object.y,150,75);

  Object.redraw = function(){
    Object.ctx.clearRect(0, 0, 1000, 700);
    Object.ctx.fillStyle = '#00FF00';
    Object.ctx.fillRect(Object.x,Object.y,150,75);

  }
})();

function onmove(e){
  var x_now = e.x;
  var y_now = e.y;

  Object.xdes = Object.xdes + x_now - x_pre;
  Object.ydes = Object.ydes + y_now - y_pre;

  Object.x = x_now - x_pre;
  Object.y = y_now - y_pre;
}

function ondown(e){
  console.log(e);
  x_pre1 = e.x;
  y_pre1 = e.y;

  x_pre = e.x - Object.x;
  y_pre = e.y - Object.y;
  if((e.x >= Object.x)&&(e.x <= (Object.x + 150))&&
     (e.y >= Object.y)&&(e.y <= (Object.y + 75))){
    console.log('drap');
    Object.canvas.onmousemove = onmove;
  }
  else {
    Object.canvas.onmousemove = 0;
  }
}

function removeclick(e){
  Object.canvas.onmousemove = 0;
}

Object.canvas.onmousedown = ondown;
Object.canvas.onmouseup = removeclick;

setInterval(Object.redraw, 1);
