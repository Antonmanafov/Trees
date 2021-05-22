class Orange {

  constructor() {
  	this.diameter = this.randomDiameter();
  }

  randomDiameter() {
  	let diameters = [2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2];
  	return diameters[Math.floor(Math.random()*diameters.length)];
  }
};


class Apple {

  constructor() {
    this.diameter = this.randomDiameter();
  }
    randomDiameter() {
      let diameters = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5 ];
      return diameters[Math.floor(Math.random()*diameters.length)];
    };
};

class Pear {
  constructor() {
    this.diameter = this.randomDiameter();
  }
    randomDiameter() {
      let diameters = [2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1 ];
      return diameters[Math.floor(Math.random()*diameters.length)];
    }
};


module.exports = {Orange, Apple, Pear}
