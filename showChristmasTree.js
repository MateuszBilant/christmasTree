
const showChristmasTree = (treeHeight, minThreeHeight, maxTreeHeight) => {
    checkIfNumber(treeHeight);
    checkIfNumberInScope(treeHeight)
    let christmasTree = "";
    christmasTree += " ".repeat(treeHeight) + "*";
    for (let i = 1; i <= treeHeight; i++){
        christmasTree += "\n" + " ".repeat(treeHeight - i) + "/" + "x".repeat(i + (i-1)) + "\\";
    }
    christmasTree += "\n" + " ".repeat(treeHeight) + "|";
    return console.log(christmasTree);     
    }
const checkIfNumber = (treeHeight) => {
    if (typeof treeHeight !== 'number' || isNaN(treeHeight)) {
        throw new Error('Tree height must be a number.');
    }
}

const checkIfNumberInScope = (treeHeight) => {
    if (treeHeight < 1 || treeHeight > 10) {
        throw new Error(`Use a number from 1 to 10`);
    }
}