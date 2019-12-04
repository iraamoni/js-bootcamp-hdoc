// Tutorial (video: 015 If Statements)

let temp = 100; 
let isFreezing = temp <= 32;

if (isFreezing) { //that's one way of doing it, using variables
    console.log ("it's freezing outside.")
}

if (temp >= 100) { //another way, using direct set of rules
    console.log ("its very hot outside")
}


//Challenge ( video: 015 If Statements)

let age = 87;
let childAge = age <= 7;
let adultAge = age >= 65;

if (childAge) {
    console.log ("congratulations, you are getting a child discount")
};

if (age >= 65) {
    console.log ("congratulations, you are getting a senior discount")
};
