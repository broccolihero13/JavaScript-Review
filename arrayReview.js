var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last(array){
    return array[array.length - 1]
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
function findEven(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

evenArray = findEven(evenArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
function findRandom(){
  var randomNumber = getRandomArbitrary();
  for (var i = 0; i < randomArray.length; i++) {
    if(randomArray[i] === randomNumber){
      alert(true);
      return true;
    }
  }
  alert(false);
  return false;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
second = first.concat([6, 7]);

// alert(first) //[1,2,3,4,5];
// alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
function longest(string){
  var newString = string.split(' ');
  var measurement = 0;
  var foundIt = "";
  for (var i = 0; i < newString.length; i++) {
    if(newString[i].length > measurement){
      measurement = newString[i].length;
      foundIt = newString[i];
    }
  }
  return foundIt;
}
longest(sentence);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
function capitalize() {
  var newPoem = "";
  for (var i = 0; i < myPoem.length; i++) {
    if(myPoem[i - 1] === " "){
      newPoem = newPoem.concat(myPoem[i].toUpperCase());
    } else {
      newPoem = newPoem.concat(myPoem[i]);
    }

  }
  console.log(newPoem);
  return newPoem;
}
capitalize();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(){
  var numVowels = 0;
  var vowels = "aeiou";
  for(var letter in theOdyssey){
    for(var i = 0; i < vowels.length; i++){
      if(theOdyssey[letter] === vowels[i]){
        numVowels += 1;
      }
    }
  }
  return numVowels;
}
vowelCounter();
