const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d');

let x = 10;
let y = 10;

let canMoveXRight = true;
let canMoveXLeft = false;

let canMoveYDown = true;
let canMoveYUp = false;

function gameLoop(){
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 100, 100);

    if(x >= canvas.width - 100 && y >= canvas.height - 100){
        canMoveXRight = false;
        canMoveYDown = false;
        console.log("bas droite");
    }

    moveSquare();
    

}

function moveSquare(){

    if(canMoveXRight){
        x += 1;
    }

    if(canMoveXLeft){
        x -= 1;
    }

    if(canMoveYDown){
        y += 1;
    }

    if(canMoveYUp){
        y -= 1;
    }
}

setInterval(gameLoop, 1000 / 60);