module.exports = function check(str, bracketsConfig) {
    let opens = bracketsConfig.map(function (array) {
        return array[0];
    });
    let closed = bracketsConfig.map(function (array) {
        return array[1];
    });

    let stack = [];

    for (let i of str) {
        console.log(i);
        if (opens.includes(i)) {
            if (closed.includes(i)) {
                if (
                    stack[stack.length - 1] ===
                    getOpenBracket(i, bracketsConfig)
                ) {
                    stack.pop();
                } else {
                    stack.push(i);
                }
            } else {
                stack.push(i);
            }
        } else {
            if (stack[stack.length - 1] === getOpenBracket(i, bracketsConfig)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

function getOpenBracket(c, array) {
    for (let arr of array) {
        if (arr[1] === c) {
            return arr[0];
        }
    }
}
