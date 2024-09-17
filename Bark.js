class Bark {
    constructor(sound) {
        this.sound = sound;
    }

    getSound() {
        return this.sound;
    }

    equals(bark) {
        if (bark instanceof Bark) {
            let otherBark = bark;
            return this.sound.toLowerCase() === otherBark.getSound().toLowerCase();
        }
        return false;
    }
}


module.exports = Bark