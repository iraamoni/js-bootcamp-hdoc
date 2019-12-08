// tutorial (video: 034 Exploring Number Methods)

    let num = 103.941
    console.log (num.toFixed(0)) //prints: 103
    console.log(Math.floor(num)) //prints: 103 (rounds number down)
    console.log(Math.ceil(num)) //prints: 104 (rounds number up
    
    let randomNum = Math.random() //random: generates a random number between 0 to 1
    console.log (randomNum)
    
    let min = 0
    let max = 1
    let randomNumber = Math.floor((Math.random() * (max - min + 1)) + min) 
    console.log(randomNumber)

// challenge (video: 034 Exploring Number Methods)  

    // Example 1

        let minNumber = 1
        let maxNumber = 5
        
        let guessNumber = function (guess) {
            let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
            return guess === randomNumber 
        }
        console.log (guessNumber(3)) //print: false & true after running a few times


