const button = document.getElementById("submit");
const body = document.querySelector(".background");
const red = document.getElementsByClassName(".red"),
  green = document.getElementsByClassName(".green"),
  blue = document.getElementsByClassName(".blue"),
  yellow = document.getElementsByClassName(".yellow");

button.addEventListener("click", (e) => {
  //   if (body) {
  //     body.classList.toggle("red");
  //   } else {
  //     body.classList.toggle("white");
  //   }

  let colorArray = [];
  let choice = colorArray[Math.floor(Math.random() * colorArray.length)];
  console.log(choice);
});
