const {Guitar,GuitarSpec} = require('./guitar.js');

class Inventory{
    constructor(){
        this.guitars = [];
    }
   addguitar(serialNumber, price, builder, model, type, backWood, topWood){
    // Create a GuitarSpec object first
    const guitarSpec = new GuitarSpec(builder, model, type, backWood, topWood);
    // Create a Guitar object using the serialNumber, price, and guitarSpec
    const guitar = new Guitar(serialNumber, price, guitarSpec);
    this.guitars.push(guitar)
   }
   getGuitar(serialNumber){
    // Find a guitar by serial Number
    return this.guitars.find(guitar => guitar.getSerialNumber() == serialNumber) || null;
   }
   search(searchGuitar){
    let matchingGuitars = [];
    for (let i = 0; i < this.guitars.length; i++ ) {
        let guitar = this.guitars[i]
        let guitarspec = guitar.getSpec();
        //Ignore serial number and price
        if (searchGuitar.builder && searchGuitar.builder !== guitarspec.getBuilder()) continue;
        if (searchGuitar.model && searchGuitar.model.toLowerCase() !== guitarspec.getModel().toLowerCase()) continue;
        if (searchGuitar.type && searchGuitar.type !== guitarspec.getType()) continue;
        if (searchGuitar.backWood && searchGuitar.backWood !== guitarspec.getBackWood()) continue;
        if (searchGuitar.topWood && searchGuitar.topWood !== guitarspec.getTopWood()) continue;
    
        // add guitar to the array if all conditions match
        matchingGuitars.push(guitar)
    }
     // Return the array of matching guitars (could be empty if no matches found)
    return matchingGuitars.length > 0 ? matchingGuitars : null;
   }
} 


// Export the Inventory class\
module.exports = Inventory;