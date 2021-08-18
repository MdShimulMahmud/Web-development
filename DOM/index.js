// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Hello";
// console.log(document.all[5]);
// console.log(document.images);
// var divId = document.getElementById("divId");
// divId.innerHTML = `<h2>I am shimul Mahmud and i am a student of cuet</h2>`;
// divId.style.backgroundColor = "rgba(200,200,100,300)";
// divId.style.fontWeight = "bold";
// divId.style.fontFamily = "cursive";

// document.body.style.backgroundColor = "grey";

// document.addEventListener("DOMContentLoaded", function() {
//     function createParagraph() {
//       let para = document.createElement('p');
//       para.textContent = 'You clicked the button!';
//       document.body.appendChild(para);
//     }

//     const buttons = document.querySelectorAll('button');

//     for(let i = 0; i < buttons.length ; i++) {
//       buttons[i].addEventListener('click', createParagraph);
//     }
//   });
const wishButton = document.querySelector("#wishButton");
const take = document.querySelector("#take");
// console.log(take.value);
document.addEventListener("DOMContentLoaded", function () {
  function createParagraph() {
    let para = document.createElement("para");
    para.style.margin = "10px";
    para.style.padding = "20px";
    para.style.display = "block";
    para.textContent = `Thank you`;
    // para.appendChild(take);

    document.body.appendChild(para);
  }

  // const wishButton = document.querySelector("#wishButton");
  wishButton.addEventListener("click", createParagraph);
});
