class GuitarSpec{
    constructor( builder, model, type, backWood, topWood){
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood
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
    getBuilder(){
        return this.builder
    }
    getPrice() {
        return this.price;
    }
    getSpec(){
        return this.spec
    }
}

// Export the Guitar class
module.exports = Guitar;