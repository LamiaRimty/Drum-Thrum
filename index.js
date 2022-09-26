
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberOfDrumButtons; i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click",function respondToclick()
{
    var buttonInnerHTML=this.html;
    switch (buttonInnerHTML) {
        case "a":
            
            break;
    
        default:
            break;
    }
   
    
}
);
}
//this.style.color="red";
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();