
var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberOfButtons; i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click",function respondToclick()
{
    console.log("I got clicked!");
}
);
}
