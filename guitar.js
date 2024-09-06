class Guitar {
    constructor(serialNumber, builder, model, type, backWood, topWood, price){
        this.serialNumber = serialNumber;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood
        this.price  = price
    }
    getSerialNumber(){
        return this.serialNumber
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

// Export the Guitar class
module.exports = Guitar;