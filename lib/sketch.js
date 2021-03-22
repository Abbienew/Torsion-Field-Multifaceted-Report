let img;
let img2;
let img3;
let theta = 0;
let posx,
    posy,
    d,
    r = 80,
    w,
    h;



function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    img = loadImage('asset/grid.png');
    img2 = loadImage('asset/grid2.jpg');
    img3 = loadImage('asset/grid3.png');
    img4 = loadImage('asset/earthsurdacemap.jpg');


    posx = width * 0.05;
    posy = height * 0.08;
}

function draw() {
    background(000);

    translate(0, 0, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * 0.01);
    texture(img);    
    box(1500, 5, 1500);
    pop();

    translate(-240, -120, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    pop();

    translate(240,-50, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img4);    
    sphere(70);
    pop();
    theta += 0.05;

    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    pop();

    translate(-240 * 2, 200, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    pop();

    translate(240, 100, 0);
    push();
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
    texture(img4);    
    sphere(70);
    pop();

}

