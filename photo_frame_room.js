var img = "";
var status = "";
function preload(){
    img = loadImage("bedroom.jpg");
}
function setup(){
    canvas = createCanvas(350,250);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status :  Detecting Objects" ;
}
function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
    }
    function gotResults(error,results){
        if(error){
            console.log(error);
        }
        else(results)
            console.log(results);
            objects = results;
    
        
        }    
function draw(){
    image(img,0,0,650,450);
    fill("#0303fc");
    text("Photo Frame",45,25);
    noFill();
    stroke("#fc0303");
    rect(20,3,120,100);

    fill("#213fff");
    text("Photo Frame",175,40);
    noFill();
    stroke("#0303fc"); 
    rect(170,26,150,200);
}


function Back(){
    window.alert("Are you sure you want to navigate to the homepage?")
    window.location = "homepage.html";
    localStorage.setItem("You navigated to the homepage.")
}