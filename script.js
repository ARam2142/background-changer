const button = document.getElementById("submit");
const body = document.querySelector(".background");

button.addEventListener("click", () => {
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
  body.style.backgroundColor = colorArray[choices];
});
