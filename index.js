

let a1= new Audio("./sounds/crash.mp3");
let a2= new Audio("./sounds/kick-bass.mp3");
let a3= new Audio("./sounds/snare.mp3");
let a4= new Audio("./sounds/tom-1.mp3");
let a5= new Audio("./sounds/tom-2.mp3");
let a6= new Audio("./sounds/tom-3.mp3");
let a7= new Audio("./sounds/tom-4.mp3");


document.querySelector(".w").addEventListener("click" , function () {
    a1.play();
});

document.querySelector(".a").addEventListener("click" , function () {
    a2.play();
});

document.querySelector(".s").addEventListener("click" , function () {
    a3.play();
});

document.querySelector(".d").addEventListener("click" , function () {
    a4.play();
});

document.querySelector(".j").addEventListener("click" , function () {
    a5.play();
});

document.querySelector(".k").addEventListener("click" , function () {
    a6.play();
});

document.querySelector(".l").addEventListener("click" , function () {
    a7.play();
});

document.addEventListener("keypress" , function(event) {
    
    let key = event.key;

    switch (key) {

        case "w":
            a1.play();
        break;
        
        case "a":
            a2.play();
        break;

        case "s":
            a3.play();
        break;

        case "d":
            a4.play();
        break;

        case "j":
            a5.play();
        break;
  
        case "k":
            a6.play();
        break;

        case "l":
            a7.play();
        break;       
            
        default:
            console.log("Other Key preesed");
        break;
    }
});