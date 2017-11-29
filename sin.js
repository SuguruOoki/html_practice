window.addEventListener("load", init, false);

function init()
{
    var theCanvas = document.getElementById("canvas");
    var offsetX = (theCanvas.currentStyle || document.defaultView.getComputedStyle(theCanvas,'')).width;
    offsetX = Number(offsetX.replace('px',''));
    offsetX =  offsetX / 2;
    var offsetY = (theCanvas.currentStyle || document.defaultView.getComputedStyle(theCanvas,'')).height;
    offsetY = Number(offsetY.replace('px',''));
    offsetY =  offsetY / 2;

    var ctx = theCanvas.getContext("2d");
    var radian = 0;
    var range = 100;
    var xspeed = 0.79;
    var yspeed = 0.05;
    var centerY = 150;
    var xpos = 0;
    var ypos = 0;

    draw();

    function animation()
    {
        ctx.clearRect(0,0,300,300);
        if(xpos>300)
        {
            ctx.closePath();
            ctx.clearRect(0,0,300,300);
            draw();
            xpos=0;
            radian=0;
            ctx.moveTo(0, centerY);
        }
        xpos += xspeed;
        radian += yspeed;
        ypos = centerY + Math.sin(radian)*range;
        ctx.lineTo(xpos, ypos);
        ctx.stroke();
    }
    var _animation = setInterval(animation,1000/60);

    function draw()
    {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
    }
}
