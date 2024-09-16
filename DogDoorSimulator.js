const DogDoor = require('./DogDoor.js');
const Remote = require('./Remote');
const BarkRecognizer = require('./BarkRecognizer.js');


class DogDoorSimulator {
    static main() {
        const door = new DogDoor();  
        const remote = new Remote(door);
        const recognizer = new BarkRecognizer(door)


        //simulate hardware hearing the bark
        console.log("Fido starts barking")
        recognizer.recognize("Woof")
        console.log("\nFido has gone outside...");

        console.log("\nFido’s all done...");
        try {
            // Simulate a 10-second delay before Fido gets stuck outside
            setTimeout(() => {
                console.log("...but he's stuck outside!");
                console.log("\nFido starts barking...");
            }, 10000);
        } catch (error) {
            console.error("Error occurred: ", error);
        }

        //Simulate the hardware hearing the bark
        console.log("Fido starts barking")
        recognizer.recognize("Woof")
        console.log("\nFido is back inside...")
    }
}


DogDoorSimulator.main();