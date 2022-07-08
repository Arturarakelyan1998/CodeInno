// function areOdd ( n){
//     if (n === 0)
//         return true;
//     else
//     if (n % 2 === 0)
//         return false;
//     else
//         return areOdd(Math.floor(n / 10));
// }
//
// console.log(areOdd(157));
//____________________________________________________
// function ba(a) {
//
//     a.sort()
//     if (a.length===0) return -1
//     return  (a[0]<0) ?  ba(a.slice(1)) : a[0]
//
// }
// let myArray = [ -2, 3, 4, -5, -1, -6];
// console.log(ba(myArray))
//____________________
//____________________________________________________
// let myArray = [0, 1,2,3,5,4,5,6,7];
//
// function violatedIndex(arr,index=0){
//     if (arr[0]<arr[1]){
//         return violatedIndex(arr.splice(1),++index)
//     }
//     if(arr.length===1) return -1
//     return ++index
// }
//
// console.log(violatedIndex(myArray));

//____________________________________________________

// let arr = [9, 68, 9, 5];
//
// function rem(arr, i = arr.length) {
//     if (i <= 0) {
//         return arr.slice(1)
//     } else {
//         return rem(arr, --i)
//
//     }
// }
//
// console.log(rem(arr));
//________________
// const arr = [1]
// const [removed, ...newArr] = arr
// console.log(newArr);

//____________________________________________________
// function flatten(arr, newArr = []) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flatten(arr[i], newArr);
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
//
// console.log(flatten([[[0, 1, 88, 3], 1], [9], [3], [[8], 4]]));
//____________________________________________________
// function rotate_left(arr, n) {
//     if (n > 0) {
//         arr.push(arr.shift())
//         return rotate_left(arr, --n)
//     }
//     if (n < 0) {
//         arr.unshift(arr.pop())
//         return rotate_left(arr, ++n)
//     }
//     return arr
// }
//
// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// console.log(rotate_left(arr, -2));
//____________________________________________________
function findSum(num) {
    if (num < 10) {
        return num;
    }
    const lastDigit = num % 10;
    const remNum = (num - lastDigit) / 10
    return findSum(lastDigit + findSum(remNum));
}

console.log(findSum(29));
//____________________________________________________
