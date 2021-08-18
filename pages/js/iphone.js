var arr = [
  `../images/iphone.jpg`,
  "../images/iphone4.jpg",
  "../images/iphone6.jpg",
  "../images/iphone7.jpg",
  "../images/iphone11.jpg",
  "../images/iphone10.jpg",
  "../images/iphone12.jpg",
];

const prevButton = document.querySelector("#button1");
const nextButton = document.querySelector("#button2");

const img = document.getElementById("img");
const title = document.createElement("div");
const setImg = document.createElement("img");

title.classList.add("lol");

var i = 1;
function next() {
  console.log("nextbutton fired");
  title.style.backgroundColor = "red";

  // console.log((img.style.src = `${arr[i]}`));
  // if (n > arr.length - 1) {
  //   i = 0;
  // } else {
  //   i++;
  // }
  setImg.appendChild(title);
  img.appendChild(title);
}
function previous() {
  console.log("prevbutton fired");
  // img.style.src = arr[i];
  // if (n < 1) {
  //   i = arr.length - 1;
  // } else {
  //   i--;
  // }
}
prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
