var song1,song2,song3,song4,song5;
var leftScore=0;
var rightScore=0;

var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;

function preload(){
song1=loadSound("music.mp3");
song2=loadSound("gir.mp3");
song3=loadSound("despacito.mp3");
song4=loadSound("ily.mp3");
song5=loadSound("bl.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.position(650,250);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}

function modelloaded(){
    console.log("Posenet is initialised.");
}

function draw(){
image(video,0,0,600,500);
fill("yellow");
if(leftScore>0.2){
    circle(leftWristX,leftWristY,20);
   inNumberleftY= Number(leftWristY);
   removeDecimal=floor(inNumberleftY);
   volume=removeDecimal/500;
   document.getElementById("volume_button").innerHTML="Volume: "+volume;
   song1.setVolume(volume);
   song2.setVolume(volume);
   song3.setVolume(volume);
   song4.setVolume(volume);
   song5.setVolume(volume);
}
if(rightScore>0.2){
    circle(rightWristX,rightWristY,20);
    if(rightWristY>0 && rightWristY<=100){
        document.getElementById("speed_button").innerHTML="Speed:0.5x";
        song1.rate(0.5);
        song2.rate(0.5);
        song3.rate(0.5);
        song4.rate(0.5);
        song5.rate(0.5);
    }
    else if(rightWristY>100 && rightWristY<=200){
        document.getElementById("speed_button").innerHTML="Speed:1x";
        song1.rate(1);
        song2.rate(1);
        song3.rate(1);
        song4.rate(1);
        song5.rate(1); 
    }
    else if(rightWristY>200 && rightWristY<=300){
        document.getElementById("speed_button").innerHTML="Speed:1.5x";
        song1.rate(1.5);
        song2.rate(1.5);
        song3.rate(1.5);
        song4.rate(1.5);
        song5.rate(1.5); 
    }
    else if(rightWristY>300 && rightWristY<=400){
        document.getElementById("speed_button").innerHTML="Speed:2x";
        song1.rate(2);
        song2.rate(2);
        song3.rate(2);
        song4.rate(2);
        song5.rate(2); 
    }
    else if( rightWristY>400){
        document.getElementById("speed_button").innerHTML="Speed:2.5x";
        song1.rate(2.5);
        song2.rate(2.5);
        song3.rate(2.5);
        song4.rate(2.5);
        song5.rate(2.5); 
    }
}
}

function play(){
var selected=document.getElementById("songs").value;
if (selected == "hp"){
    song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.stop();
    song1.play();

    song1.setVolume(0.5);
    song1.rate(1);
}
else if(selected =="gir"){
    song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.stop();
song2.play();

song1.setVolume(0.5);
song1.rate(1);
}
else if(selected =="despacito"){
    song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.stop();
    song3.play();

    song1.setVolume(0.5);
    song1.rate(1);
    }
    else if(selected =="bl"){
        song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.stop();
        song5.play();

        song1.setVolume(0.5);
        song1.rate(1);
        }
        else if(selected =="ily"){
            song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.stop();
            song4.play();

            song1.setVolume(0.5);
            song1.rate(1);
            }
}

function gotPoses(results){
if (results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
leftScore=results[0].pose.keypoints[9].score;
rightScore=results[0].pose.keypoints[10].score;
console.log("Left Wrist"+ leftWristX+leftWristY);
console.log("Right Wrist"+ rightWristX+rightWristY);
}
}