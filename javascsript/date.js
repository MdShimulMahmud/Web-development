// var date = new Date();

// var time = date.getFullYear();
// console.log(time);
// var month = date.getMonth()+1;
// switch (month) {
//     case 1:
//         console.log("Janunary"); 
//      break;
//      case 2:
//         console.log("Feb");
//      break; 
//      case 3:
//         console.log("March");
//      break; 
//     case 4:
//         console.log("April");
//      break; 
//      case 5:
//        console.log("May") ;
//     break;
//       case 6:
//         console.log("June") ;
//      break; 
//      case 7:
//         console.log("July") ;
//      break; 
//      case 8:
//         console.log("August") ; 
//     break;  
//      case 9:
//         console.log("September") ; 
//      break;  
                
//      case 10:
//         console.log("Oct") ;
//     break;
//          case 11:
//             console.log("Nov") ;
//         break;
//         case 12:
//             console.log("Dec") ; 
//        break;   
// }

// var currentTime = date.getHours();
// console.log(currentTime);

// var currentMinutes = date.getMinutes();
// console.log(currentMinutes);

// var currentSeconds = date.getSeconds();
// console.log(currentSeconds);


// var currentGmt = date.getUTCDate();
// var day = date.getMonth() + 1;
// console.log(day);

// var today = new Date();
// var endYear = new Date(2021, 7, 1, 23, 59, 59, 999); // Set day and month
// endYear.setFullYear(today.getFullYear()); // Set year to this year
// var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
// var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// var daysLeft = Math.round(daysLeft); //returns days left in the year

// console.log(daysLeft);


// set countTimer

var countTimer = new Date('July 20,2021 11:59:59').getTime();

var x = setInterval(function() {
   var currentTime = new Date().getTime();

   var distance = countTimer - currentTime;

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";
 
   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("demo").innerHTML = "EXPIRED";
   }
 }, 1000);

