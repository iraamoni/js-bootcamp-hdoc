// Tutorial (video: 043 Searching Arrays Part II)

    const notes = [ 
        {
            title: 'Trip to Norway',
            description: 'We are going in March, really excited',
            date: 15
        }, 
        {
            title: 'Trip to Finland',
            description: 'We are going in March, really excited',
            date: 15
        }, 
        {
            title: 'Trip to germany',
            description: 'We are going in December, really excited',
            date: 16
        }, 
        {
            title: 'Trip to Amsterdam',
            description: 'We are going in November, really excited',
            date: 21
        },
        {
            title: 'Trip to bruges',
            description: 'We are going in November, really excited',
            date: 21
        },
    ]

    const findNote = function(notes, noteTitle) {
        const index =  notes.findIndex(function(note, index) {
            return note.title.toLowerCase() === noteTitle.toLowerCase()
        })
        return notes[index]
    }
   
    const note = findNote(notes, 'Trip to Amsterdam')
    console.log(note)

    // ------------------------------------------------------------------------

    const findNoteNovember = function (notes, noteDescription, noteTitle) {
        const index = notes.findIndex(function (note) {
            const titleMatches = note.title.toLowerCase().includes(noteTitle.toLowerCase());
            const descriptionMatches = note.description.toLowerCase().includes(noteDescription.toLowerCase());
            const matchFound = (titleMatches && descriptionMatches);

            return matchFound;
        })
        return notes[index]
    }

    const november = findNoteNovember(notes, 'November', 'AmsteRdam')
    console.log (november)

     //--------------------------------------------------------------------------------------

     const notes = [ 
        {
        title: 'Trip to Norway',
        description: 'We are going in March, really excited',
        date: 15
        }, 
        {
        title: 'Trip to germany',
        description: 'We are going in December, really excited',
        date: 16
        }, 
        {
        title: 'Trip to Amsterdam',
        description: 'We are going in November, really excited',
        date: 21
        }
    ]


    const findNote = function(notes, noteTitle) {
        return  notes.find(function(note, index) {
            return note.title.toLowerCase() === noteTitle.toLowerCase()
        })
        
    }

    const note = findNote(notes, 'trip to amsterdam')
    console.log(note)

// Challenge (video: 043 Searching Arrays Part II)

    const ToDoList = ['walk', 'eat', 'sleep', 'cuddle', 'code', 'study', 'play']
    const toDoList = [
        {
            title: 'walk',
            completed: true
        },
        {
            title: 'eat',
            completed: false
        }, 
        {
            title: 'sleep',
            completed: true
        },
        {
            title: 'cuddle',
            completed: true
        },
        {
            title: 'code',
            completed: true
        },
        {
            title: 'study',
            completed: false
        },
        {
            title: 'play',
            completed: false
        },
    ]

    const deleteOneToDoList = function (list, todoTitle) {
        const index = list.findIndex(function (todo) {
            return todo.title.toLowerCase() === todoTitle.toLowerCase()
        })
        
        return toDoList.splice(index, 1)
    }
    
    const deletedItem = deleteOneToDoList(toDoList, 'Play')
    console.log(deletedItem) 
    console.log()
    