// document.getElementsByClassName("text").addEventListener("mouseover", mouseOver)
// document.getElementsByClassName("text").addEventListener("mouseout", mouseOut)

let theBody = document.querySelector("body");
let theText = document.querySelector("#para")
let theText2 = document.querySelector("#para2")
let theText3 = document.querySelector("#para3")
let theQuote = document.querySelector("#quote")

const Button = document.querySelector("#button");

Button.addEventListener('click', changeColor);

function changeColor(){
    theBody.style.backgroundColor = "black";
    theText.style.color = "white";
    theText2.style.color = "white";
    theText3.style.color = "white";
    theQuote.style.color = "white";
}

// function mouseOver(id, color){
//     document.getElementsById(class).style.background = color;
// }

// function mouseOut(id, color) {
//     document.getElementsById(class).style.background = color;
// }

// document.addEventListener("keyDown", event => {
//     if(event.keyCode == 32){
//         keyDown();
//     }
// })

// function keyDown(){
//     var color = document.getElementsById("color").value;
//     // document.body.style.color = "green";
//     document.getElementsById("para").style.color = "green";
// }



