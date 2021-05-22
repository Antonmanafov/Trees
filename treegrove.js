let trees = require('./trees');


class TreeGrove {
    constructor(arr) {
        this.trees = arr;
        this.year = 0;
        this.harverst = [];
      }

    filterTreesByType (type) {
        return this.trees.filter(el => el instanceof type)
    }
    filterTreesByMaturity () {
        return this.trees.filter(el => el.isMature())
    }
    filterTrees(type, maturity , death = false){
        let arr = this.trees.filter(el => el instanceof type)
        if (maturity == 1){
            arr =  arr.filter(el => el.isMature())
        } else if (maturity == 2) {
            arr =  arr.filter(el => !el.isMature())
        } else {
            arr = arr;
        }
        
        if (death) {
            return arr.filter(el => el.isDead())
        } else {
            return arr;
        }
    }
    GrowYear () {
        this.year +=1;
        this.trees.map(el => el.passGrowingSeason())
    }
}

let orangeTree = new trees.OrangeTree(7);
let appleTree = new trees.AppleTree(2);
let arrTrees = [orangeTree, appleTree]
let roscha = new TreeGrove(arrTrees);
// console.log(roscha);
// roscha.GrowYear();
// console.log(roscha);

module.exports = TreeGrove;