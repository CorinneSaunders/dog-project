// Setting the intial age as a constant value
var myAge = 40;

// Setting the constant variable 2 for the dog early years
var earlyYears = 2;

// Reassign variable 
earlyYears *= 10.5;

// Set laterYears variable to be the value less the earlyYears
var laterYears = myAge - 2;

// Reassign laterYears to 4 dog years for every human year
laterYears *= 4;

console.log(earlyYears,laterYears);

//Setting the dog years to the value of adding earlyYears value to laterYears value after above calculations
var myAgeInDogYears = earlyYears + laterYears;

// Using string method to change the myName variable to lowercase
var myName = "Corinne".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
