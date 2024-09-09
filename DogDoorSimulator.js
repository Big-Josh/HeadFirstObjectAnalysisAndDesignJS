const DogDoor = require('./DogDoor.js');
const Remote = require('./Remote');


class DogDoorSimulator {
    constructor() {
        this.door = new DogDoor();  
        this.remote = new Remote(); 
    }

    run() {
        console.log("Fido barks to go outside ...\n");
        this.remote.pressButton();  
        console.log("Fido has gone outside...\n");
        this.remote.pressButton(); 
        console.log("Fido is all done...\n");
        this.remote.pressButton();  

        console.log("Fido's back inside...\n");
        this.remote.pressButton(); 
    }
}


code = new DogDoorSimulator
code.run();