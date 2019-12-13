// Tutorial (video: 045 Sorting Arrays)

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


    const sortNotes = function(note) {
        note.sort(function(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
        
    }
    sortNotes(notes)
    console.log(notes)

    //If a comes first we should return -1
    //If b comes first we should return 1
    // If both are identical in order then return 0

// Challenge (video: 045 Sorting Arrays)


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

    const sortedByBoolean = function (list) {
        list.sort(function (a, b) {
            if (a.completed === true) {
                return -1
            } else if (a.completed === false) {
                return 1
            } else {
                return 0
            }
        })
    }

    const sortedByBoolean = function (list) {
        list.sort(function (a, b) {
            if (!a.completed && b.completed) {
                return -1
            } else if (a.completed && !b.completed) {
                return 1
            } else {
                return 0
            }
        })
    }

    sortedByBoolean(toDoList)
    console.log(toDoList)

