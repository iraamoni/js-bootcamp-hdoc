// tutorial (019 Variable Scope Part II)

let name = "Suborna"

if (true) {
    let name = "mike";
    if (true) {
        let name = "Jen";
        console.log(name); //prints: Jen
    }
}

if (true) {
    console.log(name) //prints: Suborna
}


// challenge (019 Variable Scope Part II)

// None