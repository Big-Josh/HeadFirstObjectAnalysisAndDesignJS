DogDoor = require('./DogDoor.js')

class Remote {
    constructor(){
        this.door = new DogDoor
    }
    
    pressButton(){
        console.log("Pressing the remote control button ....")
        if (this.door.isOpen) {
            this.door.closeDoor()
        } else {
            this.door.isOpenDoor()
        }
    }
}


module.exports = Remote