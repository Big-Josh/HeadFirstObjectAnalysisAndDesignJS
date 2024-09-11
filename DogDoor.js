class DogDoor {
    constructor() {
        this.open = false; // Initially, the door is closed
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
            
        },5000);
    }


    isOpen() {
        return this.open; // Return the current state of the door
    }
}

module.exports = DogDoor