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

// let arr=[7,5,6,'n'];
// function rem(arr){
//
//     // if (arr.length>0){
//     //     arr.splice(0, 1)
//     // }
//     let i
//     const empty = []
//     if (empty.length === 0){
//         i = 1
//     }
//     if (empty.length+1 < arr.length) {
//         empty.push(rem(arr))
//
//         return arr[i++]
//     }else return empty
//
// }
const arr = [1]

const [removed, ...newArr] = arr
console.log(newArr);
// console.log(arr.length);

//____________________________________________________
