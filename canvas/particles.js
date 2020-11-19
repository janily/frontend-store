const canvas = document.getElementById("particles");//$("#canvas"),
let	ctx = canvas.getContext('2d');
const winWidth = document.documentElement.clientWidth;
const winHeight = document.documentElement.clientHeight;

canvas.width = winWidth;
canvas.height = winHeight;

const img = new Image();
img.src = './qie.png';

if(img.complete) {
    init()
} else {
    img.onload = function() {
        init();
    }
}

let dotList = [];

function init() {
    const imgW = img.width,
          imgH = img.height,
          sx = winWidth/2 - imgW/2,
          sy = winHeight/2 - imgH/2;
    
          ctx.drawImage(img,sx,sy);
          let imgData = ctx.getImageData(sx,sy,imgW,imgH);
          console.log(imgData);

          for(let x = 0; x<imgData.width; x+=6) {
              for(let y = 0; y<imgData.height; y+=6) {
                  let i = (y*imgData.width + x) * 4;
                  if(imgData.data[i+3] > 128 && imgData.data[i] < 100) {
                      let dot = new Dot(x,y,2);
                      dotList.push(dot)
                  }
              }
          }

          draw();
}

function Dot(centerX, centerY, radius) {
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
}

function draw(){
    var imgW = img.width,
        imgH = img.height,
        sx = winWidth/2-imgW/2,
        sy = winHeight/2-imgH/2;

    ctx.clearRect(0, 0, winWidth, winHeight);

    ctx.fillStyle = "#49ABA9";

    for(var i=0; i<dotList.length; i+=1){
        curDot = dotList[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(sx+curDot.x, sy+curDot.y, curDot.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.restore();
    }
}
