// function areOdd ( n){
//     if (n === 0)
//         return false;
//     else
//     if (n % 2 === 0)
//         return false;
//     else
//         return areOdd(Math.floor(n / 10));
// }
//
// console.log(areOdd(0));
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
// function ba(a,size=a.length,arr=[]) {
//     if (size < 1 && arr.length===0) {
//         return -1;
//     }
//     if(a[size] >= 0){
//         arr.push(a[size])
//         ba(a, size - 1,arr)
//         Math.min(...arr)
        // return  arr
    // }
    // else{
    //     return ba(a, size-1)
    // }
// }
// let myArray = [ 1, -3,4, 5,1, 6];
// console.log(ba(myArray))

//____________________________________________________
// let myArray = [0,1,2,4,4,5,3,6];
//
// function violatedIndex(arr,i=0){
//     if(arr.length<=1) return -1
//     if (arr[i]<=arr[++i]){
//         return violatedIndex(arr,i++)
//     }
//     return i
// }
//
// console.log(violatedIndex(myArray));
//____________________________________________________

// let arr = [9, 68, 9, 5];
//
// function rem(arr, i = arr.length) {
//     if (i <= 0) {
//         const  [removed, ...newArr] = arr
//         return newArr
//     } else {
//         return rem(arr, --i)
//
//     }
// }
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
//------------------
// function flatten(array, result=[]) {
//     if (array.length === 0) {
//         return result
//     }
//     const elem = array[0]
//     const rest = array.slice(1)
//     if (Array.isArray(elem)) {
//         return flatten(elem.concat(rest), result)
//     }
//     result.push(elem)
//     return flatten(rest, result)
// }
// console.log(flatten([[[0, 1, 88, 3], 1], [9], [3], [[8], 4],'a',5]));
// ____________________________________________________
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
// function findSum(num) {
//     if (num < 10) {
//         return num;
//     }
//     const lastDigit = num % 10;
//     const remNum = (num - lastDigit) / 10
//     return findSum(lastDigit + findSum(remNum));
// }
//
// console.log(findSum(29));
//____________________________________________________
