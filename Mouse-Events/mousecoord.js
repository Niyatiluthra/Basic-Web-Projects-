var input=document.getElementById("input");
var body=document.getElementById("body");
input.onmousemove=function(event)
{
    span1.innerHTML=event.y;
    span2.innerHTML=event.x;
};
body.onmousemove=function(event)
{
    div1.innerHTML=event.pageX;
    div2.innerHTML=event.pageY;
};
input.onmouseover=function(e)
{
    input.setAttribute("class","input1");
    console.log(e);
};
input.onmouseout=function(e)
{
    input.setAttribute("class","input");
    console.log(e);
};
