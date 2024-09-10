const DogDoor = require('./DogDoor.js');
const Remote = require('./Remote');


class DogDoorSimulator {
    static main() {
        const door = new DogDoor();  
        const remote = new Remote(door);

        console.log("Fido barks to go outside...");
        remote.pressButton();  
        console.log("\nFido has gone outside...");

        console.log("\nFido’s all done...");
        try {
            // Simulate a 10-second delay before Fido gets stuck outside
            setTimeout(() => {
                console.log("...but he's stuck outside!");
                console.log("\nFido starts barking...");
                console.log("...so Gina grabs the remote control.");
                remote.pressButton();  
                console.log("\nFido’s back inside...");
            }, 10000);
        } catch (error) {
            console.error("Error occurred: ", error);
        }
    }
}


DogDoorSimulator.main();