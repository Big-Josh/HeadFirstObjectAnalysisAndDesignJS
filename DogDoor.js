class DogDoor {
    constructor() {
        this.open = false; // Initially, the door is closed
    }

    openDoor() {
        console.log("The dog door opens.");
        this.open = true; // Change the state to open
    }

    closeDoor() {
        console.log("The dog door closes.");
        this.open = false; // Change the state to closed
    }

    isOpen() {
        return this.open; // Return the current state of the door
    }
}

module.exports = DogDoor