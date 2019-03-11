//ΜΕΤΑΒΛΗΤΗ ΓΙΑ ΑΛΛΑΓΗ ΕΙΚΟΝΩΝ
var i = 0;
//ΜΕΤΑΒΛΗΤΗ ΓΙΑ 
var imageTimer;
var x;
//ΜΕΤΑΒΛΗΤΗ ΓΙΑ ΕΛΕΓΧΟ ΩΣΤΕ ΝΑ ΤΡΕΧΕΙ ΜΙΑ ΦΟΡΑ ΤΟ autoplay
var timerFlag = 0;
//Array for numbering of products
var numbering = [
    "1/5",
    "2/5",
    "3/5",
    "4/5",
    "5/5"
];
//Array of products name
var text = [
    "ΦΟΥΝΤΟΥΚΙ",
    "ΦΥΣΤΙΚΙ ΚΕΛΥΦΩΤΟ",
    "ΦΥΣΤΙΚΙ ΑΡΑΠΙΚΟ",
    "ΣΟΥΣΑΜΩΤΟ ΑΡΑΠΙΚΟ",
    "ΣΤΡΑΓΑΛΙ ΑΦΡΑΤΟ"
];
function selectTimer(){
    x = document.getElementById("stimer").value;
    x = parseInt(x);
    x = x * 1000; 
        
}
//function to start autoplay
function startShow() {
    if (timerFlag == 1){
        clearInterval(imageTimer);
    }
    selectTimer();
    imageTimer=setInterval("next(),nextText()",x);
    timerFlag = 1;
}
//function to stop autoplay
function stopShow(){
    clearInterval(imageTimer)
    timerFlag = 0;
}
//function to random show an image
function randomShow(){
    var x = Math.random()*5;
    var y = Math.floor(x);
    document.getElementById("prod").src="images/prod"+y+".jpg";
    if(y==1){
        document.getElementById("numberimg").innerHTML=numbering[1];
        document.getElementById("text").innerHTML=text[1];
    }else if(y==2){
        document.getElementById("numberimg").innerHTML=numbering[2];
        document.getElementById("text").innerHTML=text[2];
    }else if(y==3){
        document.getElementById("numberimg").innerHTML=numbering[3];
        document.getElementById("text").innerHTML=text[3];
    }else if(y==4){
        document.getElementById("numberimg").innerHTML=numbering[4];
        document.getElementById("text").innerHTML=text[4];
    }else if(y==0){
        document.getElementById("numberimg").innerHTML=numbering[0];
        document.getElementById("text").innerHTML=text[0];
}
}
//function to change images
function previous(){
    if(i==0){
        i=4;
    }else i--;
    document.getElementById("prod").src="images/prod"+i+".jpg";
}
//function to change images
function next(){
    if(i==4){
        i=0;
    }else i++;
    document.getElementById("prod").src="images/prod"+i+".jpg";
}
//function to change name and number
function previousText(){
   if(i==1){
        document.getElementById("numberimg").innerHTML=numbering[1];
        document.getElementById("text").innerHTML=text[1];
    }else if(i==2){
        document.getElementById("numberimg").innerHTML=numbering[2];
        document.getElementById("text").innerHTML=text[2];
    }else if(i==3){
        document.getElementById("numberimg").innerHTML=numbering[3];
        document.getElementById("text").innerHTML=text[3];
    }else if(i==4){
        document.getElementById("numberimg").innerHTML=numbering[4];
        document.getElementById("text").innerHTML=text[4];
    }else if(i==0){
        document.getElementById("numberimg").innerHTML=numbering[0];
        document.getElementById("text").innerHTML=text[0];
}
}
//function to change name and number
function nextText(){
    if(i==1){
        document.getElementById("numberimg").innerHTML=numbering[1];
        document.getElementById("text").innerHTML=text[1];
    }else if(i==2){
        document.getElementById("numberimg").innerHTML=numbering[2];
        document.getElementById("text").innerHTML=text[2];
    }else if(i==3){
        document.getElementById("numberimg").innerHTML=numbering[3];
        document.getElementById("text").innerHTML=text[3];
    }else if(i==4){
        document.getElementById("numberimg").innerHTML=numbering[4];
        document.getElementById("text").innerHTML=text[4];
    }else if(i==0){
        document.getElementById("numberimg").innerHTML=numbering[0];
        document.getElementById("text").innerHTML=text[0];
}
}
//functions that user see the image
function prod1(){
    document.getElementById("prod").src="images/prod0.jpg";
    document.getElementById("numberimg").innerHTML=numbering[0];
    document.getElementById("text").innerHTML=text[0];
}
function prod2(){
    document.getElementById("prod").src="images/prod1.jpg";
    document.getElementById("numberimg").innerHTML=numbering[1];
    document.getElementById("text").innerHTML=text[1];
}
function prod3(){
    document.getElementById("prod").src="images/prod2.jpg";
    document.getElementById("numberimg").innerHTML=numbering[2];
    document.getElementById("text").innerHTML=text[2];
}
function prod4(){
    document.getElementById("prod").src="images/prod3.jpg";
    document.getElementById("numberimg").innerHTML=numbering[3];
    document.getElementById("text").innerHTML=text[3];
}
function prod5(){
    document.getElementById("prod").src="images/prod4.jpg";
    document.getElementById("numberimg").innerHTML=numbering[4];
    document.getElementById("text").innerHTML=text[4];
}