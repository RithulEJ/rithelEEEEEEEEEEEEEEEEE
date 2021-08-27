var canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
color ="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    var mousex=e.clientX-canvas.offsetLeft;
    var mousey=e.clientY-canvas.offsetTop;
    console.log("x= "+mousex+"y= "+mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke(); 
}
function cleararea(){
    ctx.cleaRect(0,0,canvas.width,canvas.hieght);
}


function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

function mymousedown(e){
    color = document.getElementById("color").value;
    mouseEvent="mousedown";
}