class GuitarSpec{
    constructor( builder, model, type, backWood, topWood, numStrings){
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood
        this.numStrings = numStrings
    }
    getBuilder(){
        return this.builder
    }
    getModel(){
        return this.model
    }
    getType() {
        return this.type;
    }
    getBackWood() {
        return this.backWood;
    }
    getTopWood() {
        return this.topWood;
}
    getNumstrings(){
        return this.numStrings
    }
    
    matches(otherSpec){
        if (this.builder !== otherSpec.getBuilder()) return false;
        if (this.model && this.model.toLowerCase() !== otherSpec.getModel().toLowerCase()) return false;
        if (this.type !== otherSpec.getType()) return false;
        if (this.backWood !== otherSpec.getBackWood()) return false;
        if (this.topWood !== otherSpec.getTopWood()) return false;
        return true;
    }

}



class Guitar {
    constructor(serialNumber, price, spec){
        this.serialNumber = serialNumber;
        this.spec = spec;
        this.price  = price
    }
    getSerialNumber(){
        return this.serialNumber
    } 
    getPrice() {
        return this.price;
    }
    getSpec(){
        return this.spec
    }
}

// Export the Guitar class
module.exports = {Guitar,GuitarSpec}