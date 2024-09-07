const Guitar = require('./guitar.js');
const Inventory = require('./inventory.js');

const Type = Object.freeze({
    "ACOUSTIC" : "acoustic",
    "ELECTRIC" : "electric"
});

const Builder = Object.freeze({
    "FENDER" : "fender",
    "MARTIN" : "martin",
    "GIBSON" : "gibson",
    "COLLINGS" : "collings",
    "OLSON" : "olson",
    "RYAN" : "ryan",
    "PRS" : "prs",
    "ANY": "any"
})

const Wood = Object.freeze({
    "INDIAN_ROSEWOOD" : "indian rosewood",
    "BRAZILIAN_ROSEWOOD" : "brazilian rosewood",
    "ALDER" : "alder"
})

class FindGuitarTester {
    static main () {
        // Set up Rick's guitar inventory
        const inventory = new Inventory();
        inventory.addguitar('V9512',1549.95, Builder.FENDER,'Stratocastor', Type.ELECTRIC, Wood.ALDER, Wood.ALDER)
        inventory.addguitar('V95693',1499.5, Builder.FENDER,'Stratocastor', Type.ELECTRIC, Wood.ALDER, Wood.ALDER)
        inventory.addguitar('V95693',1499.5, Builder.FENDER,'Stratocastor', Type.ELECTRIC, Wood.ALDER, Wood.BRAZILIAN_ROSEWOOD)

        FindGuitarTester.initializeInventory(inventory);

        // Erin is looking for a Fender Stratocaster electric guitar made of Alder wood
        const whatErinLikes = new Guitar(null, 0, Builder.FENDER, 'Stratocastor', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        const guitars = inventory.search(whatErinLikes)

        if (guitars != null){
            console.log("Erin, you might like these guitars : ");
                for(let i = 0; i < guitars.length; i ++){
                    let guitar = guitars[i]
                    console.log(
                    guitar.getBuilder() + " " + guitar.getModel() + " " +
                    guitar.getType() + " guitar:\n" +
                    guitar.getBackWood() + " back and sides,\n" + 
                    guitar.getTopWood() + " top.\nYou can have it for only $" + 
                    guitar.getPrice() + "!")};
        } else {
            console.log("Sorry, Erin, we have nothing for you.");
        }
    }
    static initializeInventory(inventory) {
        // Add guitars to the inventory
        inventory.addguitar('V9512',1549.95, Builder.FENDER,'Stratocastor', Type.ELECTRIC, Wood.ALDER, Wood.ALDER)
        inventory.addguitar('V95693',1499.5, Builder.FENDER,'Stratocastor', Type.ELECTRIC, Wood.ALDER, Wood.ALDER)
        inventory.addguitar('SN001', 1500.00, 'Gibson', 'Les Paul', 'Electric', 'Mahogany', 'Maple');
        inventory.addguitar('SN002', 1200.00, 'Fender', 'Stratocaster', 'Electric', 'Alder', 'Alder');
        inventory.addguitar('SN003', 1000.00, 'Ibanez', 'RG', 'Electric', 'Basswood', 'Maple');
        // Add more guitars as needed...
        }
    }


// Run the main function to simulate the test
FindGuitarTester.main();