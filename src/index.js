module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];

    str.split("");
    for (let iterator of str) {
        for (let bracketsItem of bracketsConfig) {
            for (let i of bracketsItem) {
                let bracketsConfigIndex = bracketsItem.indexOf(bracketsItem[i]);
                if (bracketsConfigIndex % 2 === 0) {
                    stack.push(bracketsConfigIndex + 1);
                } else if (bracketsConfigIndex !== stack.pop()) {
                    return false;
                }

                if (stack.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
};
