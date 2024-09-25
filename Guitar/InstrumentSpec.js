class Instrument{
    constructor(builder, model, type, backWood, topWood){
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getBuilder(){
        return this.builder
    }
    
    getModel(){
        return this.model
    }

    getType(){
        return this.type
    }

    getBackwood(){
        return this.backWood
    }

    getTopwood(){
        return this.topWood
    }
    
    matches(otherSpec){
        if(this.builder !== otherSpec.getBuilder()) return false;
        if(this.model.toLowercase() !== otherSpec.getModel().toLowercase()) return false;
        if(this.type !== otherSpec.getType()) return false;
        if(this.backWood !== otherSpec.getBackwood()) return false;
        if(this.topWood !== otherSpec.getTopwood()) return false;
        else return true;
    }
}