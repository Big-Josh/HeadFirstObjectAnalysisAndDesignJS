const {Guitar,GuitarSpec} = require('./guitar.js');

class Inventory{
    constructor(){
        this.guitars = [];
    }
   addguitar(serialNumber, price, builder, model, type, backWood, topWood, numStrings){
    // Create a GuitarSpec object first
    const guitarSpec = new GuitarSpec(builder, model, type, backWood, topWood, numStrings);
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
        //search spec
        if (guitarspec.matches(searchGuitar)){
                 matchingGuitars.push(guitar) 
    }}
     // Return the array of matching guitars (could be empty if no matches found)
    return matchingGuitars.length > 0 ? matchingGuitars : null;
   }
} 


// Export the Inventory class\
module.exports = Inventory;