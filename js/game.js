const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;

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

//var img = new Image();
//img.src = 'img/...'

function gameLoop(){
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    /*ctx.fillStyle = 'red';
    ctx.fillRect(x, y, CUBE_SIZE_X, CUBE_SIZE_Y);*/

    if(x + CUBE_SIZE_X + moveX > canvas.width || x + moveX <= 0){
        moveX *= -1;
    }

    if(y + CUBE_SIZE_Y + moveY > canvas.height || x + moveY <= 0){
        moveY *= -1;
    }
    x += moveX;
    y += moveY;
}

function rect_draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    if(this.x + this.w > canvas.width){
        this.dx = -this.dx;
    }

    if(this.x < 0){
        this.dx = Math.abs(this.dx)
    }

    if(this.y + this.h > canvas.height){
        this.dy = Math.abs(this.dy)
    }

    this.x += this.dx;
    this.y += this.dy;
}

setInterval(gameLoop, 1000 / 60);