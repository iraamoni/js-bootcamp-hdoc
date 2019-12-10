// Tutorial (video: 041 The For Loop)

    const notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6', 'note 7']

    for (let count = 0; count < 10; count++) {
        console.log(count);
    }

    for (let count = 0; count < notes.length; count++) {
        console.log(notes[count])
    }

    for (let count = notes.length; count >= 0; count--) {
        console.log(notes[count])
    }



// Challenge (video: 041 The For Loop)

    const thingsToDo = ['walk', 'eat', 'sleep', 'cuddle', 'code', 'study', 'play']

    thingsToDo.splice(2, 1)
    thingsToDo.push('poop')
    thingsToDo.shift()

    console.log(`you have ${thingsToDo.length} todos`)

    for (let i = 0; i < thingsToDo.length; i++) {
        const num = i + 1;
        const element = thingsToDo[i];
        console.log (`${num}. ${element}`)
    }
