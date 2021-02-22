// module.exports = function check(str, bracketsConfig) {
//     // your solution
//     let stack = [];

//     const rr = str.split("");
//     for (let iterator of rr) {
//         let closeSym = bracketsConfig.flat().indexOf(iterator);
//         console.log(closeSym);
//         if (
//             stack[stack.length - 1] !== closeSym ||
//             closeSym % 2 === 0 ||
//             closeSym === 0
//         ) {
//             stack.push(closeSym + 1);
//         } else if (stack.pop() !== closeSym) {
//             return false;
//         }
//     }
//     if (stack.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

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
