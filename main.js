var mouseEvent="empty";
var color="red";
var width=5;
var last_x,last_y;
var radius=7;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
     currentx=e.clientX-canvas.offsetLeft;
     currenty=e.clientY-canvas.offsetTop;
     canvas.addEventListener("mousemove", mymousemove);
    if(mouseEvent=="mousedown"){
        console.log("Current position of X and Y coordinates=");
        console.log("x="+currentx+"y="+currenty);
        ctx.lineTo(currentx,currenty);
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentx,currenty,radius,0,2* Math.PI);
        ctx.stroke();
    }
    last_x=currentx;
    last_y=currenty;
    }