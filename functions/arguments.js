// tutorial (video: 023 Multiple Arguments and Argument Defaults)

    // Multiple arguments (C is not defined but the code still works) 

        let num = function (a, b, c) {
            return a + b;
        }

        let result = num(100, 1);
        console.log (result);

    // Default argument

        let getScoreTextOfAnonymous = function (name = "Anonymous", score = 0) {
            return `Name: ${name}, Score: ${score}`// return "Name: " + name + ", " + "Score: " + score 
        }

        let ScoreTextOfAnonymous = getScoreTextOfAnonymous() 
        console.log (ScoreTextOfAnonymous) //prints: Name: Anonymous, Score:0

    // Providing arguments

        //example 1

            let getScoreTextOfFoysal = function (name = "Anonymous", score = 0) {
                return `Name: ${name}, Score: ${score}` //return "Name: " + name + ", " + "Score: " + score
            }

            let ScoreTextOfFoysal = getScoreTextOfFoysal("Foysal") //first argument provided
            console.log (ScoreTextOfFoysal) //prints: Name: Foysal, Score:0
        
        //example 2

            let getScoreTextOfSuborna = function (name = "Suborna", score = 0) {
                return `Name: ${name}, Score: ${score}` //return "Name: " + name + ", " + "Score: " + score
            }

            let ScoreTextOfSuborna = getScoreTextOfSuborna(undefined, 100) //first argument provided
            console.log (ScoreTextOfSuborna) //prints: Name: Suborna, Score:100



// challenge (video: 023 Multiple Arguments and Argument Defaults)

    let getTip = function (total, tipPercentage = .25) {
        return total * tipPercentage
    }

    let tip = getTip (100)
    console.log (tip); //prints: 25

    //challenge (video: 025 Template Strings)
    let getTipTwo = function (total, tipPercentageTwo = .25) {
        let percent = tipPercentage*100;
        let tipTwo = total*tipPercentageTwo;
        return `A ${percent} tip on ${total} would be ${tipTwo}`
    }

    getTipTwo (40)
    