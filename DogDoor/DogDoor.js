Bark = require('./Bark.js')

class DogDoor {
    constructor() {
        this.open = false; // Initially, the door is closed
        this.allowedbark = new Bark
    }

    closeDoor() {
        console.log("The dog door closes.");
        this.open = false; // Change the state to closed
    }

    openDoor() {
        console.log("The dog door opens.");
        this.open = true; // Change the state to open

        setTimeout(() => {
            this.open = false;
            console.log("The door is closing automatically after 5 seconds");
            
        },1);
    }


    isOpen() {
        return this.open; 
    }

    setAllowedbark(bark) {
        this.allowedbark = bark; 
    }

    getAllowedbark() {
        return this.allowedbark; 
    }

}



module.exports = DogDoor