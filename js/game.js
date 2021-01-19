const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;

document.addEventListener("DOMCContentLoaded", startUp);

function rect_create(x, y, w, h, color, dx, dy) {
    let objRect = {
        x: x,
        y: y,
        w: w,
        h: h,
        color: color,
        dx: dx,
        dy: dy,
        draw: rect_draw
    }
    return objRect;
}

function cercle_create(x, y, rayon, color, angleStart, angleEnd, sensAntiHoraire) {
    console.log("Create new circless");
    let objCercle = {
        x: x,
        y: y,
        rayon: rayon,
        color: color,
        angleStart: angleStart,
        angleEnd: angleEnd,
        sensAntiHoraire: sensAntiHoraire,
        offset : Math.random * Math.PI * 2
    }
    return objCercle;
}

let rect = rect_create(10, 20, 30, 50, 'red', 3, 5);
let rect2 = rect_create(100, 20, 30, 50, 'green', 3, 5);

const colors = ['blue', 'red', 'yellow'];

let x = 0;
let y = 0;

let moveX = 2;
let moveY = 2;

const CUBE_SIZE_X = 100;
const CUBE_SIZE_Y = 100;

var listSquarres = [];

var img = new Image();
img.src = 'pictures/SpongeBob.png'

function startUp() {
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
}

const gameObjects = [];
let frame = 0;

function generateCircle(){
    for(let i = 0; i < 50; i++){
        // Place des cercles à des endroits aléatoires
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        // Rayon aléatoire
        const r = Math.random() * 100 + 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        // Ajoute un nouveau cerlcle au tableau gameobjects
        gameObjects.push(cercle_create(x, y, r, color, 3, 8, Math.random() >= 0.5));
    }
}

function gameLoop() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(const obj of gameObjects){
        circle_print(obj);
    }
    frame++;
    // ctx.fillStyle = 'red';
    //ctx.fillRect(x, y, CUBE_SIZE_X, CUBE_SIZE_Y);

    //ctx.drawImage(img, x, y);

    //var imgData = ctx.getImageData(x, y, canvas.width, canvas.height);

    /*if (x + img.width + moveX > canvas.width || x + moveX <= 0) {
        moveX *= -1;
    }*/

    /*if (y + img.height + moveY > canvas.height || y + moveY <= 0) {
        moveY *= -1;
    }*/
    /*x += moveX;
    y += moveY;*/
}

function rect_draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

function circle_print(obj) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(obj.x, obj.y, obj.rayon, 0, Math.PI * 2, obj.sensAntiHoraire); // obj.offset + frame / 30, 2 * Math.PI + frame / 30
    ctx.fill();
    ctx.stroke();
}

function handleStart(ev) {
    ev.preventDefault();

    var touches = ev.changedTouches;
    var touchX = 0;
    var touchY = 0;

    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.push(touches[i]);
        var color = colorForTouch(touches[i]);
        ctx.fillStyle = color;
        ctx.fillRect(touches[i].pageX - 2, touches[i].pageY - 2, 4, 4);
    }
}

function handleEnd(ev) {
    ev.preventDefault();
}

function handleCancel(ev) {
    ev.preventDefault();
}

function handleMove(ev) {
    ev.preventDefault();
}

generateCircle();
setInterval(gameLoop, 1000 / 60);