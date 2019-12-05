// Tutorial (video: 026 Build a Grade Calculator)
    //none

    
// challenge (video: 026 Build a Grade Calculator)

    // students score,  total possible score
    // 15/20 -> you got a grade C (75%)
    // A (90-100), B (80-89), C(70-79), D (60-69), F(0-59)

        //example 1

            let score = function (studentScore, totalScore) {
                return studentScore/totalScore*100
            }

            let printScore = function (studentScorePercent) {
                if (studentScorePercent > 100 || studentScorePercent <= 0) {
                    console.log ('invalid score')
                } else if (studentScorePercent >= 90 && studentScorePercent <= 100) {
                    console.log(`Congratulations! You got an A and the percentage of score is ${studentScorePercent}`)
                } else if (studentScorePercent >= 80 && studentScorePercent <= 89) {
                    console.log(`Congratulations! You got a B and the percentage of score is ${studentScorePercent}`)
                } else if (studentScorePercent >= 70 && studentScorePercent <= 79) {
                    console.log(`Congratulations! You got a C and the percentage of score is ${studentScorePercent}`)
                } else if (studentScorePercent >= 60 && studentScorePercent <= 69) {
                    console.log(`Congratulations! You got a C and the percentage of score is ${studentScorePercent}`)
                } else if (studentScorePercent <= 59) {
                    console.log(`Unfortunately! You have received an F and the percentage of score is ${studentScorePercent}`)
                }
            }
            
            let sendScore = function (studentScorePercent) {

            }

            let scoreOfIraa = score(20, 20);
            printScore(scoreOfIraa);

        //example 2

            let calcScore = function (studentScore, totalScore) {
                let percent = (studentScore/totalScore)*100;
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

            let result = calcScore(10, 20)
            console.log (result)
        
        



