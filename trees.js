 let fruitsTypes = require('./fruits')

 class FruitTree {
    constructor(age = 0, height) {
        this.age = age;
        this.height = height;
        this.fruits = [];
    }
    
    passGrowingSeason() {
        this.age += 1;
        if (this.height <= this.maxAge - this.growth) {
          this.height += this.growth;
        } else this.height = this.maxAge;
        this.fruits = [];
    
    
        if (this.isMature() && !this.isDead()) {
            let rand = Math.round(Math.random() * (this.harvestMin - this.harvestMax) + this.harvestMin);
            for (let i = 0; i <= rand; i++) {
                this.fruits.push(new this.fruitType());
            }
        }
    }

    isMature() {
        return this.age > this.matureAge;
    }
      
    isDead() {
        return this.age >= this.maxAge;
    }
    
    hasFruits() {
        return this.fruits.length > 0;
    }

    pickFruit() {
        //  Returns an Orange if there are any
        if (!this.hasFruits()) {
          throw Error('This tree has no fruits');
        }
        return this.fruits.pop();
      }
}

class OrangeTree extends FruitTree {
    constructor(age = 0, height) {
        super(age, height);
        this.growth = 2.5;
        this.maxHeight = 25;
        this.matureAge = 6;
        this.maxAge = 100;
        this.harvestMin = 100;
        this.harvestMax = 300;
        this.oranges = this.fruits;
        this.fruitType = fruitsTypes.Orange
      }
}

class AppleTree extends FruitTree {
    constructor(age = 0, height) {
        super(age, height);
        this.growth = 2;
        this.maxHeight = 26;
        this.matureAge = 5;
        this.maxAge = 45;
        this.harvestMin = 400;
        this.harvestMax = 600;
        this.apples = this.fruits;
        this.fruitType = fruitsTypes.Apple
      }
}
class PearTree extends FruitTree {
    constructor(age = 0, height) {
        super(age, height);
        this.growth = 2.5;
        this.maxHeight = 20;
        this.matureAge = 5;
        this.maxAge = 40;
        this.harvestMin = 175;
        this.harvestMax = 225;
        this.pears = this.fruits;
        this.fruitType = fruitsTypes.Pear
      }
}

let apple = new OrangeTree(20, 20)
apple.passGrowingSeason()

// let arr = [];
// console.log(apple.hasFruits())

module.exports = {
    FruitTree, OrangeTree, AppleTree, PearTree
}
