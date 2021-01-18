const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;

document.addEventListener("DOMCContentLoaded", startUp);

function createSquares(x, y, w, h, color, dx, dy, draw){
    let obj = {
        x : 50,
        y : 10,
        w : 150,
        h : 100,
        color : 'red',
        dx : 2,
        dy : 2,
        draw : rect_draw
    }
    return obj;
}

let rect = createSquares(10, 20, 30, 50, 'red', 3, 3);
let rect2 = createSquares(100, 20, 30, 50, 'yellow', 2, 3);

let x = 0;
let y = 0;

let moveX = 2;
let moveY = 2;

const CUBE_SIZE_X = 100;
const CUBE_SIZE_Y = 100;

var listSquarres = [];

var img = new Image();
img.src = 'pictures/SpongeBob.png'

function startUp(){
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
}

function gameLoop(){
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);    

    // ctx.fillStyle = 'red';
    //ctx.fillRect(x, y, CUBE_SIZE_X, CUBE_SIZE_Y);

    //ctx.globalCompositeOperation = "destination-in";

    ctx.drawImage(img, x, y);

    //var imgData = ctx.getImageData(x, y, canvas.width, canvas.height);

    if(x + img.width + moveX > canvas.width || x + moveX <= 0){
        moveX *= -1;

        /*for(var i = 0; i < imgData.data.length; i+=4){
            imgData.data[i] = 100;
        }*/
    }

    if(y + img.height + moveY > canvas.height || y + moveY <= 0){
        moveY *= -1;
        /*for(var i = 0; i < imgData.data.length; i+=4){
            imgData.data[i] = 200;
        }*/
    }
    x += moveX;
    y += moveY;
}

function rect_draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h); 
}

function handleStart(ev){
    ev.preventDefault();

    var touches = ev.changedTouches;
    var touchX = 0;
    var touchY = 0;

    for (var i=0; i<touches.length; i++) {
        ongoingTouches.push(touches[i]);
        var color = colorForTouch(touches[i]);
        ctx.fillStyle = color;
        ctx.fillRect(touches[i].pageX-2, touches[i].pageY-2, 4, 4);
      }
}

function handleEnd(ev){
    ev.preventDefault();
}

function handleCancel(ev){
    ev.preventDefault();
}

function handleMove(ev){
    ev.preventDefault();
}

setInterval(gameLoop, 1000 / 60);