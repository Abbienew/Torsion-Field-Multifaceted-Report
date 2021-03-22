let xoff = 0


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
    background(0, 0, 0);
    rotateY(millis() / 1000);
    stroke(0);
    cone(30, 65, 16);
    xoff += 0.01
    stroke(255, 204, 0);
    strokeWeight(noise(xoff) * 5 + 2)

    for (i = 0; i <= 200; i += 5) {
        let dx = random(-10, 10)
        ellipse(dx, i + 30, 50 + i, 10 + i / 2)
    }
}