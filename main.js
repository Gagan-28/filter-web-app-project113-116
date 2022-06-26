noseX = 0;
noseY = 0;

function preload()
{
    clownNose = loadImage("m.png");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX-20, noseY-20, 40, 40);
}
function take_snapshot()
{
    save("picture_filter.png");
}
function modelLoaded()
{
    console.log("Pose net is loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = "+noseX+"Nose Y = "+noseY);
    }
}