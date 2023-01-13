
var length=document.querySelectorAll(".drum").length;
for (let index = 0; index < length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
    
}


document.addEventListener("keydown",function (event) {
    console.log(event);
        playSound(event.key);
        buttonAnimation(event.key);
});

function buttonAnimation(key){
    
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}

function playSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
                        
            break;
        case "a":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
                            
            break;
        case "s":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play(); 
            break;
        case "d":
            var tom4=new Audio("sounds/tom4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass= new Audio("sounds/kickBass.mp3");
            kickBass.play();
            break;
        default:
            console.log(key);
            break;
    }
}
