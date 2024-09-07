const Guitar = require('./guitar.js');

class Inventory{
    constructor(){
        this.guitars = [];
    }
   addguitar(serialNumber, price, builder, model, type, backWood, topWood){
    const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood)
    this.guitars.push(guitar)
   }
   getGuitar(serialNumber){
    // Find a guitar by serial Number
    return this.guitars.find(guitar => guitar.getSerialNumber() == serialNumber) || null;
   }
   search(searchGuitar){
    let matchingGuitars = [];
    for (let i = 0; i < this.guitars.length; i++ ) {
        let guitar = this.guitars[i];
        //Ignore serial number and price
        if (searchGuitar.builder && searchGuitar.builder !== guitar.getBuilder()) continue;
        console.log(searchGuitar.model.toLowerCase(),guitar.getModel().toLowerCase())
        if (searchGuitar.model && searchGuitar.model.toLowerCase() !== guitar.getModel().toLowerCase()) continue;
        if (searchGuitar.type && searchGuitar.type !== guitar.getType()) continue;
        if (searchGuitar.backWood && searchGuitar.backWood !== guitar.getBackWood()) continue;
        if (searchGuitar.topWood && searchGuitar.topWood !== guitar.getTopWood()) continue;
    
        // add guitar to the array if all conditions match
        matchingGuitars.push(guitar)
    }
     // Return the array of matching guitars (could be empty if no matches found)
    return matchingGuitars.length > 0 ? matchingGuitars : null;
   }
} 


// Export the Inventory class\
module.exports = Inventory;