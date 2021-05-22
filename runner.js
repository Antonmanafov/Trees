
let groove = require('./treegrove');
let treeTypes = require('./trees')
let fruits = require('./fruits')

let trees = [];

for (let index = 0; index < 70; index++) {
    if(index < 20) {
        trees.push(new treeTypes.OrangeTree(0)) 
    } else if (index < 40) {
        trees.push(new treeTypes.OrangeTree(20)) 
    } else if (index < 50) {
        trees.push(new treeTypes.OrangeTree(37)) 
    } else {
        trees.push(new treeTypes.OrangeTree(50)) 
    }
}

for (let index = 0; index < 65; index++) {
    if(index < 10) {
        trees.push(new treeTypes.AppleTree(0)) 
    } else if (index < 20 ) {
        trees.push(new treeTypes.AppleTree(5)) 
    } else if (index < 40) {
        trees.push(new treeTypes.AppleTree(20)) 
    } else if (index < 60) {
        trees.push(new treeTypes.AppleTree(37)) 
    } else {
        trees.push(new treeTypes.AppleTree(50)) 
    }
}

for (let index = 0; index < 50; index++) {
    if(index < 10) {
        trees.push(new treeTypes.PearTree(0)) 
    } else if (index < 20 ) {
        trees.push(new treeTypes.PearTree(20)) 
    } else if (index < 40) {
        trees.push(new treeTypes.PearTree(37)) 
    } else {
        trees.push(new treeTypes.PearTree(50)) 
    }
}


let roscha = new groove(trees);


function getDiameter (arrFruits) {
        if(arrFruits.length > 0) {
        return (arrFruits.reduce((a, b) => { 
            return a + b.diameter
        }, 0) / arrFruits.length).toFixed(2);
}
}

    let oranges 
    let apples 
    let pears 

for (let index = 0; index < 10; index++) {
    roscha.harverst = [];
    roscha.GrowYear();
    // console.log(roscha.filterTreesByMaturity());
    
    roscha.filterTreesByMaturity().map(el => {
        while (el.hasFruits()) {
            roscha.harverst.push(el.pickFruit());
          }
        } );
    oranges = roscha.harverst.filter(el => el instanceof fruits.Orange);
    apples = roscha.harverst.filter(el => el instanceof fruits.Apple);
    pears = roscha.harverst.filter(el => el instanceof fruits.Pear);


     const report = `Сезон ${roscha.year}
- Апельсиновые деревья: ${roscha.filterTreesByType(treeTypes.OrangeTree).length} деревьев (незрелые: ${roscha.filterTrees(treeTypes.OrangeTree, 2).length}, зрелые: ${roscha.filterTrees(treeTypes.OrangeTree, 1).length}, погибли: ${roscha.filterTrees(treeTypes.OrangeTree, 3, true).length})
  Должно произвести  ${oranges.length} Апельсинов, среднего диаметра: ${getDiameter(oranges)} .

- Яблони: ${roscha.filterTreesByType(treeTypes.AppleTree).length} деревьев (незрелые: ${roscha.filterTrees(treeTypes.AppleTree, 2).length}, зрелые: ${roscha.filterTrees(treeTypes.AppleTree, 1).length}, погибли:  ${roscha.filterTrees(treeTypes.AppleTree, 3, true).length})
  Должно произвести ${apples.length} яблок, среднего диаметра: ${getDiameter(apples)}.
  
- Грушевые деревья: ${roscha.filterTreesByType(treeTypes.PearTree).length} деревьев (незрелые: ${roscha.filterTrees(treeTypes.PearTree, 2).length}, зрелые: ${roscha.filterTrees(treeTypes.PearTree, 1).length}, погибли: ${roscha.filterTrees(treeTypes.PearTree, 3, true).length})
  Должно произвести ${pears.length } груш, среднего диаметра: ${getDiameter(pears)}.`
    console.log(report)
}


// console.log(roscha.trees.length);
