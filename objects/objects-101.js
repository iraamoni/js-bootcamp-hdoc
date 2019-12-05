// tutorial (video: 028 Object Basics)

    let myBook = {
        title: 'me before you',
        publication: 1987,
        author: 'Dan Brown',
        pages: 109
    }

    console.log (myBook.author)

    myBook.author = 'Emily Blunt'
    console.log (myBook.author)


// challenge (video: 028 Object Basics)
    
    let hisInfo = {
        name: 'Foysal',
        age: 20,
        location: 'Italy'
     }

     console.log (`${hisInfo.name} is ${hisInfo.age} years old and he lives in ${hisInfo.location}`)

     hisInfo.age = hisInfo.age + 1;
     console.log (`${hisInfo.name} is ${hisInfo.age} years old and he lives in ${hisInfo.location}`)
