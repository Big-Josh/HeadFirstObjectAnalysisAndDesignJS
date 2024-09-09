DogDoor = require('./DogDoor.js')

class Remote {
    constructor(){
        this.door = new DogDoor
    }
    
    pressButton(){
        console.log("Pressing the remote control button ....")
        if (this.door.isOpen) {
            this.door.openDoor()
        } else {
            this.door.closeDoor()
        }
    }
}


module.exports = Remote