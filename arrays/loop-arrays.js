// Tutorial (video: 040 Looping Over Arrays)

    const notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6', 'note 7']

    notes.forEach(function (item, index) {
        console.log(item)
        console.log(index)
    })

    console.log(notes)
    console.log(notes.length)


// Challenge (video: 040 Looping Over Arrays)

    const thingsToDo = ['walk', 'eat', 'sleep', 'cuddle', 'code', 'study', 'play']

    thingsToDo.splice(2, 1)
    thingsToDo.push('poop')
    thingsToDo.shift()

    console.log(`you have ${thingsToDo.length} todos`)
    
    thingsToDo.forEach(function (item, index) {
        const num = index + 1
        console.log (`${num}. ${item}`)
    })

    
