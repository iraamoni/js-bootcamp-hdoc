// tutorial (video: 024 Function Scope)
    // Global scope (fahrenheitToCelsius, celsiusResultOne, celsiusResultTwo)
    // Local Scope (fahrenheit, celsius)

    let fahrenheitToCelsius = function (fahrenheit) { //the arguments are bound to the local scope even though they are not defined inside of the curly braces, which is why fahrenheit is a local scope
        let celsius =  (fahrenheit- 32) * 5/9;

        if (celsius <= 0) {
            let isFreezing = true; //local scope
        }
        return celsius; 
    }

    let celsiusResultOne = fahrenheitToCelsius(32); //variable created to store the result 
    fahrenheitToCelsius(32);  //called the function (not necessary to repeat, for understanding purpose only)
    console.log (celsiusResultOne);

    let celsiusResultTwo = fahrenheitToCelsius(68);
    console.log (celsiusResultTwo);


// challenge (video: 024 Function Scope)
// None