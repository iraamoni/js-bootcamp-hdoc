// tutorial (video: 033 Exploring String Methods)

    let name = '   Suborna Jahan   '
    console.log (name.length)
    console.log (name.toUpperCase())
    console.log (name.toLowerCase())

    let password = "abcd10july"
    console.log(password.includes('acd'))
    console.log (name.trim())

// challenge (video: 033 Exploring String Methods)  

    //Example 1
        let isValidPasswordOne = function (passwordOne) {
            if (passwordOne.length <= 8 || passwordOne.includes('password')) {
                return false
            } else {
                return true;
            }
        }

        let passwordOne = isValidPasswordOne('hello1234')
        console.log (passwordOne) //prints: true because it doesn't contain the word password and its more than 8 characters long
        
    // Example 2
    
        let isValidPasswordTwo = function (passwordTwo) {
            if (passwordTwo.length <= 8 || passwordTwo.includes('password')) {
                return false
            } else {
                return true;
            }
        }

        let passwordTwo = isValidPasswordTwo('password101')
        console.log (passwordTwo) //prints: false because the password contains the word password

    // Example 3

        let isValidPasswordThree = function (passwordThree) {
            return passwordThree.length > 8 && !passwordThree.includes('password')
        }

        let passwordThree = isValidPasswordThree('password111')
        console.log (passwordThree) //prints: false, is more than 8 characters but includes the word password therefore false
    
    // Example 4

        let isValidPasswordFour = function (passwordFour) {
            return passwordFour.length > 8 && !passwordFour.includes('password')
        }

        let passwordFour = isValidPasswordFour('password111')
        console.log ({passwordFour}) //prints: false, contains more than 8 characters and includes the word password.

        
        
