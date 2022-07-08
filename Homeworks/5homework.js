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
let myArray = [7, -2, 3, 4, 5, -1, 6];
for (let i=0;i<myArray.length;i++)
{
    if (myArray[i]<0)
        myArray.splice(i, 1);
}
console.log(myArray.sort()[0]);
function min(arr) {

    if (arr.length === 0) {
        return -1;
    }
    if (arr[0]>=0 && arr[1]>=0 ){}
    else if (arr[0] > arr[1]) {
        if (arr[1] >= 0) return min(arr.slice(1));
        return min(arr.slice(2));

    } else {
        return min([arr[0]].concat(arr.slice(2)));
    }
}

console.log(min(myArray));
//____________________________________________________
