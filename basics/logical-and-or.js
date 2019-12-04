// tutorial (video: 017 Logical And and Or Operators)

let temp = 95;

if (temp >= 30 && temp <= 90){
    console.log ("Go outside, the weather is really nice")
} else if (temp <= 0 || temp >= 100) {
    console.log ("Do not go outside")
} else {
    console.log ("Eh, do whatever you want")
}


// challenge (video: 017 Logical And and Or Operators)

let isGuestOneVegan = true; //is vegan
let isGuestTwoVegan = false; //is not vegan

    if (isGuestOneVegan && isGuestTwoVegan) {
        console.log ("only offer vegan dishes")
    } else if (isGuestOneVegan || isGuestTwoVegan) {
        console.log ("offer both vegan and non vegan dishes")
    } else {
        console.log("offer all dishes")
    }
