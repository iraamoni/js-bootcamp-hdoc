// Tutorial (video: 016 Advanced If Statements)
let isAccountLocked = false; 
let currentRole = "admin";

if (isAccountLocked) {
    console.log ("Unfortunately, you account has been locked")
} else if (currentRole === "admin") {
    console.log ("welcome, admin")
} else {
    console.log ("welcome")
}


//Challenge ( video: 016 Advanced If Statements)

let temperatureOutside = 45;
let isFreezing = temperatureOutside < 20;
let isHot = temperatureOutside > 70;

if (isHot) {
    console.log ("it's extremely hot outside")
} else if (isFreezing) {
    console.log ("its really cold outside")
} else {
    console.log ("the weather is really nice") //prints: the weather is really nice.
}
