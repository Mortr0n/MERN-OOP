import Ninja from './Ninja.mjs';
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("This is a wise message!");
        return this;
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom().showStats().speakWisdom();