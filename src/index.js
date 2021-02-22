// module.exports = function check(str, bracketsConfig) {
//     let opens = bracketsConfig.map(peek())
//     let closed = bracketsConfig.map(peek())

//     let stack = []

//     for (let i of str) {
//         if (opens.includes(i) ){
//             if (closed.includes(i)){
//                 if( stack[stack.length - 1] === i){
//                     stack.pop()
//                 } else {
//                     stack.push(i)
//                 }
//             } else{
//                 stack.push(i)
//             }
//         } else {
//             if (stack[stack.length - 1] === i) {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         }
//     }

//     return stack.length === 0
// };

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
    const aaa = str.reduce((acc, el) => {
        const lastIndexOfConfig = bracketsConfig.flat().lastIndexOf(el);
        if (
            lastIndexOfConfig % 2 === 1 &&
            bracketsConfig.flat()[lastIndexOfConfig - 1] ===
                bracketsConfig.flat()[lastIndexOfConfigs]
        ) {
            acc.pop(); // pop for '|'
            return acc;
        } else if (
            (lastIndexOfConfig % 2 === 0 || lastIndexOfConfig === 0) &&
            bracketsConfig.flat()[lastIndexOfConfig - 1] !==
                bracketsConfig.flat()[lastIndexOfConfigs]
        ) {
            return acc.push(); // push for all кроме  '|'
        }
    }, []);
};
