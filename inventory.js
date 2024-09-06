const Guitar = require('./guitar.js');

class Inventory{
    constructor(){
        this.guitars = [];
    }
   addguitar(serialNumber, price, builder, model, type, backWood, topWood){
    const guitar = new Guitar(serialNumber, builder, model, type, backWood, topWood, price)
    this.guitars.push(guitar)
   }
   getGuitar(serialNumber){
    // Find a guitar by serial Number
    return this.guitars.find(guitar => guitar.getSerialNumber() == serialNumber) || null;
   }
   search(searchGuitar){
    return this.guitars.find(guitar => {
        //Ignore serial number and price
        if (searchGuitar.builder && searchGuitar.builder !== guitar.getBuilder()) return false;
        if (searchGuitar.model && searchGuitar.model !== guitar.getModel()) return false;
        if (searchGuitar.type && searchGuitar.type !== guitar.getType()) return false;
        if (searchGuitar.backWood && searchGuitar.backWood !== guitar.getBackWood()) return false;
        if (searchGuitar.topWood && searchGuitar.topWood !== guitar.getTopWood()) return false;
        return true;
    }) || null
   }
}

// Export the Inventory class
module.exports = Inventory;