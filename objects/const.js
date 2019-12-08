// tutorial (video: 035 Constant Variables)

    // Example 1
    let isRaining = true;
    isRaining = false 
    console.log(isRaining) //prints false

    // Example 2
    const isRainingOne = true;
    isRainingOne = false //
    console.log(isRainingOne) //prints TypeError 

    //Example 3
    const person = {
        age: 27,
        name: 'iraamoni'
    }

    person = {} //invalid
    person.age = 21 //valid
    console.log (person) 


// challenge (video: 035 Constant Variables)  

    //Change from let to const by copying grade-calc.js

    const calcScore = function (studentScore, totalScore) {
        const percent = (studentScore/totalScore)*100;
        let letterGrade = '';

        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent >= 80) {
            letterGrade = 'B'
        } else if (percent >= 70) {
            letterGrade = 'C'
        } else if (percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }
        return `Hey, you have received ${letterGrade} ${percent}%`  
    }

    const result = calcScore(10, 20)
    console.log (result)

