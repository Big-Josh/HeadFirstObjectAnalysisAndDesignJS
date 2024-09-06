const Guitar = require('./guitar.js');
const Inventory = require('./inventory.js');

class FindGuitarTester {
    static main () {
        // Set up Rick's guitar inventory
        const inventory = new Inventory();
        FindGuitarTester.initializeInventory(inventory);

        // Erin is looking for a Fender Stratocaster electric guitar made of Alder wood
        const whatErinLikes = new Guitar(null, 0, 'Fender', 'Stratocaster', 'Electric', 'Alder', 'Alder');
        const guitar = inventory.search(whatErinLikes)

        if (guitar != null){
            console.log("Erin, you might like this " + 
                guitar.getBuilder() + " " + guitar.getModel() + " " +
                guitar.getType() + " guitar:\n" +
                guitar.getBackWood() + " back and sides,\n" + 
                guitar.getTopWood() + " top.\nYou can have it for only $" + 
                guitar.getPrice() + "!");
        } else {
            console.log("Sorry, Erin, we have nothing for you.");
        }
    }
    static initializeInventory(inventory) {
        // Add guitars to the inventory
        inventory.addguitar('SN001', 1500.00, 'Gibson', 'Les Paul', 'Electric', 'Mahogany', 'Maple');
        inventory.addguitar('SN002', 1200.00, 'Fender', 'Stratocaster', 'Electric', 'Alder', 'Alder');
        inventory.addguitar('SN003', 1000.00, 'Ibanez', 'RG', 'Electric', 'Basswood', 'Maple');
        // Add more guitars as needed...
        }
    }


// Run the main function to simulate the test
FindGuitarTester.main();