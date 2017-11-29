
function sinCurvedraw() {
  var canvas = document.getElementById('MyCanvas');
  var context = canvas.getContext('2d');
  var start_point = 1;
  context.beginPath();
  context.lineWidth=2;
  context.moveTo(start_point, start_point+100);
  for (var i = start_point+3; i <= start_point+627; i += 4) {
    context.lineTo(i + 1, 101 - 100 * Math.sin(0.01 * i));
  }
  context.stroke();
}

function circleMoveStart(){
    SRC=HREF="./infiniteslide-master/img/1.jpg";
    r=200; //半径px
    x=document.body.clientWidth/2-400; //中心x座標px
    y=document.body.clientHeight/2+300; //中心y座標px
    n=8; //写真数
    speed=1/100 //回転速度
    intar=50; //時間間隔

    t=0;
    k=2*3.1415/n;
    speed=1/(3.1415*speed);
    for(i=1;i<=n;i++){
        with(document){
            with(getElementById("a"+i)){
                style.left=x;
                style.top=y;
                style.position="absolute";
                href=HREF;
                target="_blank";
            }
            getElementById("i"+i).src=SRC;
        }
    }
    id=setInterval('circleMove()',intar);
}
function circleMove(){
    t++;
    if(t<=r){
        t=t+3;
        for(i=1;i<=n;i++){
            with(document.getElementById("a"+i)){
                style.left=Math.floor(Math.cos(t/speed+i*k)*t+x);
                style.top=Math.floor(Math.sin(t/speed+i*k)*t+y);
            }
        }
    }
    if(t>r){
        for(i=1;i<=n;i++){
            with(document.getElementById("a"+i)){
                style.left=Math.floor(Math.cos(t/speed+i*k)*r+x);
                style.top=Math.floor(Math.sin(t/speed+i*k)*r+y);
            }
        }
    }
}

function addOnLoad(){
    circleMoveStart();
    sinCurvedraw();
}

window.onload=addOnLoad;
