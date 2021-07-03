const button = document.getElementById("submit");
const body = document.querySelector(".background");
const red = document.getElementsByClassName(".red"),
  green = document.getElementsByClassName(".green"),
  blue = document.getElementsByClassName(".blue"),
  yellow = document.getElementsByClassName(".yellow");

button.addEventListener("click", (e) => {
  const colorArray = [
    "red",
    "blue",
    "purple",
    "green",
    "yellow",
    "black",
    "orange",
    "grey",
    "pink",
  ];
  let choices = parseInt(Math.random() * colorArray.length);
  console.log(choice);
  body.style.backgroundColor = colorArray[choices];
});
