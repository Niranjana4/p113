function preload()
{

}

function setup()
{

    canvas=createCanvas(480,400);
    canvas.position(500,200);
    video=createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video,0,0,640,480);
    circle(25,25,50,)
    circle(456,25,50)
    circle(456,376,50)
    circle(26,376,50)

    fill(0,0,200)
    stroke(100,0,0)
}

function take_snapshot()
{
    save('image.png');
}