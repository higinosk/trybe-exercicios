// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

document.getElementById("header-container").style.backgroundColor = "green";

let changeColor  = document.getElementsByClassName("emergency-tasks");

for (let index = 0; index < changeColor.length; index += 1) {
   changeColor[index].style.backgroundColor = "salmon";
};


let colorText = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < colorText.length; index += 1) {
   colorText[index].style.backgroundColor = "blueviolet";
};

let changeColor2  = document.getElementsByClassName("no-emergency-tasks");

for (let index = 0; index < changeColor2.length; index += 1) {
   changeColor2[index].style.backgroundColor = "yellow";
};

let colorText2 = document.querySelectorAll(".no-emergency-tasks h3");

for (let index = 0; index < colorText2.length; index += 1) {
   colorText2[index].style.backgroundColor = "black";
};

document.getElementById("footer-container").style.backgroundColor = "darkgreen";

