/**
 * #1
 *
 * Create an object called 'me' that has three keys, 'firstname', 'age', and 'state'.
 * Assign the keys the appropriate values.
 */

// CODE HERE
    var me = {
      firstname: "Bryce",
      age: 24,
      state: "Arizona"
    };
/**
 * #2
 *
 * Add a new key/value pair to the 'me' object using dot notation.
 * The new key should be 'faveColor'. Set it to your favorite color as a string.
 */

// CODE HERE
    me.faveColor = "Teal";
/**
 * #3
 *
 * Below is an object, 'message'. Below it, add a 'text' key using bracket notation,
 * and assign it a string of whatever you would like.
 */

// DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
// DON'T TOUCH THE CODE ABOVE
// CODE HERE
  message["text"] = "This is some text.";
/**
 * #4
 *
 * Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'.
 * upVote() should take in a number, add one to it, and return the number.
 * downVote() should take in a number, subtract one from it, and return the number.
 */

// CODE HERE
var adjustCount = {};
adjustCount.upVote = function (n1){
  return ++n1;
};

adjustCount.downVote = function(n2){
  return --n2;
};
/**
 * #5
 *
 * Create an array called 'myFriends' with four of your friends names.
 */

// CODE HERE
  var myFriends = ["Matt","Jake","Kevin","Sam"];
/**
 * #6
 *
 * Add a fifth friends name to the end of your 'myFriends' array.
 */

// CODE HERE
myFriends.push("Alec");
/**
 * #7
 *
 * Create a 'myArrayCopy' variable. It should equal the 'myArray' variable.
 * Use a built-in JavaScript method to create a copy.
 */

// DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
// DON'T TOUCH THE CODE ABOVE
// CODE HERE
  var myArrayCopy = myArray.slice(0,myArray.length);
/**
 * #8
 *
 * Below is a array, 'myNumbers'. Create a function called 'evensOnly'
 * that returns an array of only even numbers.
 */

//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
function evensOnly(arr) {
  arr = myNumbers;
  evenArray = [];
  for (i = 0;i < arr.length;i++){
    if(arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    };
  };
  return evenArray;
};
  // CODE HERE
  

/**
 * #9
 *
 * Using .filter(), return only your friends of the array of people below.
 * Assign it to a variable called 'trueFriends'.
 */

// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];
var trueFriends = peopleIknow.filter(function(person) {
  return person.friend === true;
});
/**
 * #10
 *
 * Create a function called 'indexFinder' that loops over an array and returns a new array
 * of the indexes of the array passed into the function. For example, passing the array [243, 123, 4, 12]
 * into the function would return [0,1,2,3]. Create a new variable called 'indexes' and set it to contain
 * the indexes of 'randomNumbers'.
 */

var randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
var indexes = indexFinder(randomNumbers);

function indexFinder(arr){
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    newArray.push(i);
  };

  return newArray;
};