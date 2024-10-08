// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if(this.health > 0 ) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);

        if(this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        if(this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return;
        }

        const vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[vikingIdx];

        const saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[saxonIdx];

        const result = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIdx, 1);
        }

        return result;
    }

    saxonAttack() {
        if(this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return;
        }

        const vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[vikingIdx];

        const saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[saxonIdx];

        const result = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0) {
            this.vikingArmy.splice(vikingIdx, 1);
        }

        return result;
    }

    attack(isVikingAttack) {
        if(this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return;
        }

        const vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[vikingIdx];

        const saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[saxonIdx];

        let result;

        if(isVikingAttack) {
            result = randomSaxon.receiveDamage(randomViking.strength);

            if(randomSaxon.health <= 0) {
                this.saxonArmy.splice(saxonIdx, 1);
            }
        } else {
            result = randomViking.receiveDamage(randomSaxon.strength);

            if(randomViking.health <= 0) {
                this.vikingArmy.splice(vikingIdx, 1);
            }
        }

        return result;
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }

        if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }

        return "Vikings and Saxons are still in the thick of battle.";
    }
}
