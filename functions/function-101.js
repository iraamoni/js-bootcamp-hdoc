// tutorial (video: 021 Function Basics)

    //function - input(arguments/argument), code, output(return value)

        let greetUser = function () {
            console.log ("welcome, user")
        }

        greetUser();

        let square = function (num) {
            let result = num * num;
            return result; 
        }

        let squareOfThree = square(3);
        let squareOfTen = square(10);

        console.log (squareOfThree)
        console.log (squareOfTen)


// challenge (video: 021 Function Basics)


    let fahrenheitToCelsius = function (fahrenheit) {
        let celsius =  (fahrenheit- 32) * 5/9;
        return celsius; 
    }

    let celsiusResultOne = fahrenheitToCelsius(32); //variable created to store the result 
    fahrenheitToCelsius(32);  //called the function (not necessary to repeat, for understanding purpose only)
    console.log (celsiusResultOne);

    let celsiusResultTwo = fahrenheitToCelsius(68);
    console.log (celsiusResultTwo);


    // Tried to convent to kelvin on my own! 

        let fahrenheitToKelvin = function (fahrenheit) {
            let kelvin = (fahrenheit + 459.67)* 5/9;
            return kelvin; 
        }

        let kelvinResultOne = fahrenheitToKelvin(1000);
        let kelvinResultTwo = fahrenheitToKelvin(2);

        console.log (kelvinResultOne);
        console.log (kelvinResultTwo)




