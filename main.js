mouseEvent = "empty";
var lastPositionX, lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius=document.getElementById("radius").value;
mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_mouse_X=e.clientX-canvas.offsetLeft;
current_mouse_Y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of X="+lastPositionX+"Y="+lastPositionY);
  
console.log("current position of X="+current_mouse_X+"Y="+current_mouse_Y);
ctx.arc(current_mouse_X,current_mouse_Y,radius,0,2*Math.PI);
ctx.stroke();

}
lastPositionX=current_mouse_X;
lastPositionY=current_mouse_Y;
}
function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}