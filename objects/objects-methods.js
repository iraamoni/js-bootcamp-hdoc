// tutorial (video: 032 Methods)
  
    let restaurant = {
        name: 'Starbucks',
        guestCapacity: 75,
        guestCount: 0,
        checkAvailability: function (partySize) {
            let seatsLeft = this.guestCapacity - this.guestCount 
            return partySize <= seatsLeft;
        }
    }

    console.log (status)
    let status = restaurant.checkAvailability(4)

// challenge (video: 032 Methods)  
this.guestCount = partySize - this.guestCount
 
    let restaurant = {
        name: 'Starbucks',
        guestCapacity: 75,
        guestCount: 0,
        checkAvailability: function (partySize) {
            let seatsLeft = this.guestCapacity - this.guestCount
            return partySize <= seatsLeft;
        },
        seatParty: function (partySize) {
            this.guestCount = partySize + this.guestCount
        },
        removeParty: function (partySize) {
        }
    }

    restaurant.seatParty(72)
    console.log (restaurant.checkAvailability(4))