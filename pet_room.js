var img = "";
function preload(){
    img = loadImage("dog_cat.jpg");
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
    image(img,0,0,350,250);
    fill("#0303fc");
    text("Dog",45,75);
    noFill();
    stroke("#fc0303");
    rect(30,60,150,150);

    fill("#213fff");
    text("Cat",210,120);
    noFill();
    stroke("#0303fc"); 
    rect(200,90,100,130);

    fill("#f700ff");
    text("Bowl",160,200);
    noFill();
    stroke("#ff5100");
    rect(140,190,80,55);
}
function back(){
    window.alert("Do you really want to go back to the homepage?");
    window.location = "homepage.html";
}