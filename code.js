function setup(){
    canvas=createCanvas(400,400);
    video=createCapture(VIDEO);
    video.size(400,400);
    canvas.center();
    video.hide();

    modelformobilenet= ml5.imageClassifier('mobileNet',modelLoaded);
}

function draw(){
    image(video,0,0,400,400)
}
