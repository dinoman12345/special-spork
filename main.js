function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  v = createCapture(VIDEO);
  v.hide();
  x=ml5.imageClassifier('MobileNet',dinol);
}
function draw(){
 image(v,0,0,300,300);
 x.classify(v,dinom);
}
function dinol(){
console.log("MobileDino has loadededededededededed");
}
var Previous_Result="";
function dinom(error,Result){
if(error){
console.log(error);
}
else{
  if((Result[0].confidence > 0.5) && (Previous_Result != Result[0].label)){
    console.log(Result);
    Previous_Result=Result[0].label;
    var synth = window.speechSynthesis;
    speak_data = 'Object detected is - '+Result[0].label;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    document.getElementById("dinoi").innerHTML=Result[0].label;
    document.getElementById("dinoj").innerHTML=Result[0].confidence;
  }
}
}