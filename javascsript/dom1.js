// document.getElementById("heading").innerHTML = 'Hello guys';

// document.getElementsByClassName("para")[0].innerHTML = " Kone tui?";

// var change = document.getElementsByTagName("p")[1];

// change.innerHTML = "Valo achis?";
var myVar = document.querySelector("#myImage");
// function myPicture() {
//     myVar.src = "/image/back2.jpg";
//     myVar.height = 500;
//     myVar.width = 500;
// }


var photos = ["/image/back2.jpg", "/image/back1.jpg","/image/seabeach.jpg","/image/back3.jpg","/image/dove.jpg","/image/lake.jpg"];
var count = 0;
function prev(){
    count--;
    if(count< photos.length){

        count = photos.length -1;
        myVar.src = photos[count];
    }else{
       myVar.src = photos[count]; 
    }
}
function next(){
   
    if(count>= photos.length-1){
        count=0;
        myVar.src = photos[count];
    }else{
        count++;
       myVar.src = photos[count]; 
    }
}


var zoomId = document.querySelector("#zoomImage");
function zoomIn() {
  zoomId.classList.add("styles");
}
function zoomOut() {
    zoomId.classList.remove("styles");
  }

 document.querySelector("#zoomImage").addEventListener("mouseover",function(){
     document.querySelector("#zoomImage").classList.add("round");

  });
  document.querySelector("#zoomImage").addEventListener("mouseout",function(){
    document.querySelector("#zoomImage").classList.remove("round");

 });