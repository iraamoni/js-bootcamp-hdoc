// tutorial (video: 022 Undefined and Null)

    let name // undefined for variables
    console.log (name) //prints: undefined


    name = "jen" // name is defined
    if (name === undefined) {
        console.log ("please provide a name");
    } else {
        console.log (name);
    }

    let square = function (num) { //undefined for function arguments
        console.log (num)
    }

    square(3) // num is defined by 3
    square () // num is not defined, therefore prints: undefined.

    let result = square();
    console.log (result) //prints: undefined


    let age = 27;
    age = undefined; 
    console.log (age) //prints undefined (the default of the language)

    let age = 27;
    age = null; 
    console.log (age) //prints null (explicitly cleared by the developer)


// challenge (video: 022 Undefined and Null)
// None 