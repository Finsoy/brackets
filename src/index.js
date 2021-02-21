module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];

    str.split("");
    for (let iterator of str) {
        let bracketsConfigIndex = bracketsConfig.indexOf(iterator);

        if (bracketsConfigIndex % 2 === 0) {
            stack.push(bracketsConfigIndex + 1);
        } else {
            if (stack.pop() !== bracketsConfigIndex) {
                return false;
            }
        }

        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
};
