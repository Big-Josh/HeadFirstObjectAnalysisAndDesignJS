DogDoor = require('./DogDoor.js')



class BarkRecognizer {
    constructor() {
        this.door = new DogDoor();  // Create a new DogDoor instance
    }

    recognize(bark) {
        console.log(`BarkRecognizer: Heard a "${bark}"`);  // Print the bark sound
        this.door.openDoor();  // Open the door when the bark is recognized
    }
}

module.exports = BarkRecognizer