Status = "";
bottle_image = "";

function preload() {
    bottle_image = loadImage("bottle.jpg");
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects..."; 
}

function modelLoaded() {
    console.log("Model Loaded!");
    detected = true;
    objectDetector.detect(bottle_image, gotResult)
}

function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(bottle_image, 0, 0, 640, 420);
}
