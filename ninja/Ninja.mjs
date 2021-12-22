class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strenght: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}
export default Ninja;
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
superSensei.speakWisdom().showStats().drinkSake().showStats().speakWisdom();