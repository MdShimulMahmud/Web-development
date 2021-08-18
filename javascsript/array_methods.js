const array = [19,34,45,56,67,8,76];
console.log(array);


// splice(index, no of removing element, element,element,.....);
 array.splice(3,1,50,60);
 // sorting
 // sort(function(a,b){return a-b;});
 // sorting reverse
 // array.sort(function(a, b) {return b-a;});
console.log(array);

// splice(starting index,upto slicing index );
// splice(index of starting slice);
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 4);
console.log(citrus);
// fruits.sort();
// fruits.reverse();
console.log(fruits.toString());