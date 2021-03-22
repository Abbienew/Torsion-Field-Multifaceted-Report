let detailY;


function setup() {
    createCanvas(100, 100, WEBGL);
    detailY = createSlider(3, 16, 3);
    detailY.position(10, height + 5);
    detailY.style('width', '80px');
 }

function draw() {
          background(205, 102, 94);
          rotateY(millis() / 1000);
          cone(30, 65, 16, detailY.value());
}

