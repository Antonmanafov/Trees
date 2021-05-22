// const Orange = require('./orange');


class OrangeTree {
  constructor(age = 0, height) {
    this.age = age;
    this.height = height;
    this.oranges = [];
  }

  passGrowingSeason() {
    this.age += 1;
    this.height += 2.5;
    if (this.height <= 22.5) {
      this.height += 2.5;
    } else this.height = 25;
    this.oranges = [];
    


    if (this.isMature() && !this.isDead()) {
      let rand = Math.round(Math.random() * (300 - 100) + 100);
      for (let i = 0; i <= rand; i++) {
        this.oranges.push(new Orange());
      }
    }
  }



  isMature() {
  return this.age > 6;
  }

  isDead() {
    return this.age >= 100;
    }


  hasOranges() {
    return this.oranges.length > 0;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    return this.oranges.pop();
  }
}

module.exports = OrangeTree;
