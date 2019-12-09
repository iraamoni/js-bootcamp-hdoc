// tutorial (video: 039 Manipulating Arrays with Methods )

    const notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6', 'note 7']

    notes.pop() //removes the last item
    notes.push('note 4') // adds an item at the end
    notes.shift() //removes the [0] item
    notes.unshift('note 0') // adds an item in the beginning

    console.log (notes.length)
    console.log (notes) //removes the last item

    notes.splice(1, 2) // start at index 1 and delete the next two items from there
    console.log (notes.length)
    console.log (notes) 

    notes.splice(3, 1, 'random item 1') // start at index 3 and delete the item 3 and add 'random item 1'
    console.log (notes.length) //prints 5
    console.log (notes) //prints: [ 'note 1', 'note 4', 'note 5', 'random item 1', 'note 7' ]


// Challenge (video: 039 Manipulating Arrays with Methods )

    const thingsToDo = ['walk', 'eat', 'sleep', 'cuddle', 'code', 'study', 'play']

    thingsToDo.splice(2, 1)
    thingsToDo.push('poop')
    thingsToDo.shift()

    console.log(thingsToDo)
    console.log(thingsToDo.length)
