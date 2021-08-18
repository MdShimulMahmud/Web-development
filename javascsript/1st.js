// console.log("hello world");

// var str= 'Strings';
// console.log(str[0]);


// Word blank
// function test(myFirst, mySecond , myThird , myFourth){
//     var result = "";
//     result+= myFirst+" "+ mySecond+" "+ myThird+ " "+myFourth;

//     return result;
// }

// console.log(test("My" , "Name","is Shimul ","Mahmud"));
// console.log(test("Bike" , "Car","Racing Car ","Toyoto"));

// aray within array
// var ourArray = [["Hello", 435],["Hello", 435]];
// console.log(ourArray);
// 2d array
// var myArray = [[10,20,50],["Hello", 435],[49,45,65],[[1,2,3],5,6,7,8]];

//  console.log(myArray[3][0][2]);
// console.log(myArray[3][2]);

// array push into

// var myArray = [10,20,50];
// myArray.push([10,30,50],90,100);
// console.log(myArray);

// var removed = myArray.shift();
// var removed1 = myArray.pop();
// console.log(removed);
// console.log(myArray);

// myArray.unshift(80);
// console.log(myArray);


//function 

// function result(){
//     console.log('Hey Shimul');
// }
// result();

// scopes
// var c= 7;
// function result(b){
//      a= 9;
//     return c+b; 
// }
// console.log(result(5));
// console.log(a);

// var sum = 0;
//  function Sum(){
//      return sum+=45;
//  }

//  function Sum1()
//  {
//      return sum+=20;
//  }
// Sum(); Sum1();
//  console.log(sum);

//  function equalVal(val ){
//      if( val != 10){
//          return true;
//      }else{
//          return false;
//      }

//  }

//  console.log(equalVal("10"));

var array = [ 10,{
    name:"KSL",
    age: 54

}, 34 ,565,[45,78,90]]
console.log(array[1].name);
for( var i=0; i<array.length; i++){
    console.log(array[i]);
}
var Rahim = {
    name: "Rahim Mia",
    age: 23,
    address: ["Pabna","Chittagong"],
    phone: 23243234,
    title: {
        name: "Shimul",
        age: 21,
        address: ["Dhaka","Dinajpur"],
        phone: 2345435,
        number: [12,43,45,65,]
    },
    welcomeMsg : function(){
        console.log('Hello Rahim');
    }
}

console.log(Rahim.title.address[0]);
// for(items in Rahim){console.log(items);}
for(x in Rahim.title){console.log(x);}