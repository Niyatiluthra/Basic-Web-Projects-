var input=document.getElementById("input");
var body=document.getElementById("body");
var division=document.getElementById("division");
division.onmousemove=function(event)
{
    move.setAttribute("style","position:absolute ; left:"+event.x+"px; top:"+event.y+"px");
};