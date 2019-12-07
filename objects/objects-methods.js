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

    let status = restaurant.checkAvailability(4)
    console.log (status)

    
    
// challenge (video: 032 Methods)  
 
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
            this.guestCount = partySize - this.guestCount
        }
    }

    restaurant.seatParty(72)
    console.log (restaurant.checkAvailability(4))
    restaurant.removeParty(5)
    console.log (restaurant.checkAvailability(4))

