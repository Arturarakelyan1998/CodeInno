// const arr = [20, 120, 111, 215, 54, 78];
//
// function secondMax(arr) {
//     arr.sort(function (a, b) {
//         return b - a;
//     });
//     return arr[1]
// }
//
// console.log(secondMax(arr));
//-----------------------------------------------
//-----------------------------------------------
// const str="Az1234566#"
// function checkPass(str){
//     if (str.length<6 && str.length>16) return "Invalid"
//     if(str.includes('#',)) return 'Valid'
//
// }
//
// console.log(checkPass(str));
//-----------------------------------------------
// let n = 6;
// let string = "";
// for (let i = 2; i <= n; i++) {
//     for (let j = 1; j < i; j++) {
//         string += j;
//     }
//     string += "\n";
// }
// for (let i = 2; i <= n - 1; i++) {
//     for (let j = 1; j < n - i; j++) {
//         string += j;
//     }
//     string += "\n";
// }
// console.log(string);
//-----------------------------------------------
// const arr = [1, 4, 'i am a string', '456']
//
// function check(arr) {
//     let numInt = 0;
//     let numStr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') numInt++
//         if (typeof arr[i] === 'string') numStr++
//     }
//     return `Numbers: ${numInt}, Strings:  ${numStr}`
//
//
// }
//
// console.log(check(arr));