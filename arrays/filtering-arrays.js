// Tutorial (video: 044 Filtering Arrays)

    const notes = [ 
        {
            title: 'Trip to Norway',
            description: 'We are going in March, really excited',
            date: 15
        }, 
        {
            title: 'Trip to Germany',
            description: 'We are going in March, really excited',
            date: 16
        },         
        {
            title: 'Trip to Germany',
            description: 'We are going in December, really excited',
            date: 16
        },        
        {
            title: 'Trip to Norway',
            description: 'We are going in December, really excited',
            date: 16
        }, 
        {
            title: 'Trip to Amsterdam',
            description: 'We are going in November, really excited',
            date: 21
        }
    ]

    const findNotes = function (notes, query) {
        const filteredNotes = notes.filter(function (note) {
            const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
            const isDescriptionMatch = note.description.toLowerCase().includes(query.toLowerCase())
            return isTitleMatch || isDescriptionMatch
        })
        return filteredNotes
    }
    
    console.log(findNotes(notes, 'March'))

// Challenge (video: 044 Filtering Arrays)

    const thingsToDo = [
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


    const findCompletedTodo = function (thingsToDo) {
        const completedToDo = thingsToDo.filter(function(todo) {
            return todo.completed === false
        })
    
        return completedToDo    
    }

    console.log(findCompletedTodo(thingsToDo))
    
    