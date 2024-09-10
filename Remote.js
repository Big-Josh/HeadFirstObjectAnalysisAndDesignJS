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

            setTimeout(() => {
                this.door.closeDoor();
                console.log("The door is closing automatically after 5 seconds");
                
            },5000);
        }
    }
}


module.exports = Remote