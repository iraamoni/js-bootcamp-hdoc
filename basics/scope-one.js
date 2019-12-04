// tutorial (video: 018 Variable Scope Part I)
let varOne = "hi";

if (true) {
    console.log (varOne)
    let varTwo = "hello";
    console.log (varTwo)

    if (true) {
        varFour = "hey" // local: has access to parent and global scope
    }
    console.log (varFour)
}

if (true) {
    let varThree = "ciao!"
}

console.log (varOne)


// challenge (018 Variable Scope Part I)

// None!