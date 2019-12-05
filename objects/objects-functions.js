// tutorial (video: 029 Using Objects with Functions)

    let myBook = {
        title: "me before you",
        publication: 1987,
        author: "Dan Brown",
        pages: 109
    };

    let myBookOne = {
        title: "History",
        publication: 1988,
        author: "Haward Zen",
        pages: 173
    };

    let myBookTwo = {
        title: "Geography",
        publication: 1980,
        author: "Foysal Ahamed",
        pages: 176,
    };

    let getSummery = function(book) {
        return {
            summer: `${book.title} by ${book.author}`,
            pageCountSummary: `${book.title} is ${book.pages} pages long`
        }
    };

    let bookSummery = getSummery(myBook);
    let bookSummeryOne = getSummery(myBookOne);
    let bookSummerTwo = getSummery(myBookTwo);

    console.log (bookSummeryOne.pageCountSummary) //prints: History is 173 pages long


// challenge (video: 029 Using Objects with Functions)


    let convertFahrenheit = function (fahrenheit) {
        return {
            fahrenheit: fahrenheit,
            celsius: (fahrenheit- 32) * 5/9,
            kelvin: (fahrenheit + 459.67)* 5/9
        }
    }

    let tempOfAll = convertFahrenheit (50)
    console.log (tempOfAll)


