window.onload = function() {
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; 
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    var spriteSheet = new Image();
    spriteSheet.src = "img/img.png";
    var zepequeno = new sprite(spriteSheet);
    var scene = new Image();
    scene.src = "img/scene.png";

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
  
    function keydownHandler(e) {
        switch (e.keyCode) {
            case RIGHT:
                zepequeno.mvRight = true;
                zepequeno.mvLeft = false;
                zepequeno.mvUp = false;
                zepequeno.mvDown = false;
                break;
                case LEFT:
                zepequeno.mvRight = false;
                zepequeno.mvLeft = true;
                zepequeno.mvUp = false;
                zepequeno.mvDown = false;
                break;
                case UP:
                zepequeno.mvRight = false;
                zepequeno.mvLeft = false;
                zepequeno.mvUp = true;
                zepequeno.mvDown = false;
                break;
                case DOWN:
                zepequeno.mvRight = false;
                zepequeno.mvLeft = false;
                zepequeno.mvUp = false;
                zepequeno.mvDown = true;
                break;
        }

    }

    function keyupHandler(e){
        switch(e.keyCode){
            case RIGHT:
                zepequeno.mvRight = false;
                break;
                case LEFT:
                zepequeno.mvLeft = false;
                break;
                case UP:
                zepequeno.mvUp = false;
                break;
                case DOWN:
                zepequeno.mvDown = false;
                break;
        }

    }

    spriteSheet.onload = function(){
    init();
    }
    
    function init(){
        zepequeno.posX = zepequeno.posY = 150;
    loop();
    }

    function update(){
        zepequeno.move();

    }

    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);
        ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,cnv.width,cnv.height);
        zepequeno.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        draw();
    }

}