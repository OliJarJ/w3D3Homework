//Declare 2 variables
var cat = 20;
var dog = 40;

//Addition
// regular function
function addTwo(cat,dog){
    return cat + dog;
}
console.log(addTwo(cat, dog))

// arrow function
addTwo(cat, dog) => {
    return cat + dog;
  }
//or

addTwo(cat, dog) => cat + dog;

//Subtraction
// regular function
function subtractTwo(cat,dog){
    return cat + dog;
}
console.log(subtractTwo(cat, dog))

// arrow function
subtractTwo(cat, dog) => {
    return cat - dog;
  }
//or

subtractTwo=(cat, dog) => cat - dog;

//Multiplication
// regular function
function timesTwo(cat,dog){
    return cat * dog;
}
console.log(timesTwo(cat, dog))

// arrow function
timesTwo(cat, dog) => {
    return cat * dog;
  }

//or 

timesTwo=(cat,dog) => cat * dog;

//Division
// regular function
function divideTwo(cat,dog){
    return cat / dog;
}
console.log(divideTwo(cat, dog))

// arrow function
divideTwo=(cat, dog) => {
    return cat / dog;
  }


