let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(poses) {
    //console.log(poses);
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('poseNet ready');
    console.log('setup');
}

function draw() {

    image(video, 0, 0);

    if (pose) {
        let eyeR = pose.rightEye;
        let eyeL = pose.leftEye;
        let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
        noStroke();
        tint(255, 126);
        fill(255, 255, 0, 25);
        noStroke();
        ellipse(pose.rightWrist.x, pose.rightWrist.y, 400);
        ellipse(pose.leftWrist.x, pose.leftWrist.y, 400);

        for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            tint(255, 126); 
            fill(255, 255, 0, 25);
            noStroke();
            ellipse(x, y, 400, 400);
        }

        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            tint(255, 126);
            fill(255, 255, 0, 25);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
    }
}

