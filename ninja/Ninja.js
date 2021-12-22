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

const jiraiya = new Ninja("Jiraiya", 100);
jiraiya.sayName().showStats().drinkSake().showStats().drinkSake().showStats();