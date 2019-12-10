// Tutorial (video: 042 Searching Arrays Part)

    const notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6']

    console.log (notes.indexOf('note 5')) //prints 4 
    console.log (notes.indexOf('Note 5')) //prints -1 (cannot find index due to notes having a capital N)

    const note = [{}, {
        title: 'Trip to Norway',
        description: 'We are going in March, really excited',
        date: 15
    }, {
        title: 'Trip to germany',
        description: 'We are going in December, really excited',
        date: 16
    }, {
        title: 'Trip to Amsterdam',
        description: 'We are going in November, really excited',
        date: 21
    }]

    const index = note.findIndex(function (note) {
        return note.date === 21;
    })

console.log (index)

// Challenge (video: 042 Searching Arrays Part) 
    //none 