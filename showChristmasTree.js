const MIN_TREE_HEIGHT = 1
const MAX_TREE_HEIGHT = 10

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
// sprawdz czy istnieje ? jezeli tak to wez te wartosc : jak nie to wez tę
const checkIfNumber = (treeHeight) => {
    if (typeof treeHeight !== 'number' || isNaN(treeHeight)) {
        throw new Error('Tree height must be a number.');
    }
}

const checkIfNumberInScope = (treeHeight, min, max) => {
    if (treeHeight < min || treeHeight > max) {
        throw new Error(`Use a number from ${min} to ${max}`);
    }
}
showChristmasTree(9)
// "\n"