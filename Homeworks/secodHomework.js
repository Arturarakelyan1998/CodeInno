// const arr=[5,7,9]
// function forEach(arr, fun) {
//     let i = 0;
//     while (i < arr.length) {
//         fun(arr[i],i,arr)
//         i+=1;
//     }
//  }
// console.log(arr,"before");
// forEach(arr,function (val,i,arr){
//    arr[i]= val*2
// })
// console.log(arr,"after");
//----------------
// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }
//
// const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// output.myForEach(elem => {
//     console.log(elem);
// });
// ----------------------------------------------------------
// const arr=[5,7,9]
// function map(arr, fun) {
//     let i = 0;
//     const array=[];
//     while (i < arr.length) {
//         array.push(fun(arr[i],i,arr))
//         i+=1;
//     }
//     return array;
// }
// const newArr=map(arr,(x,i,arr) => x*i)
// console.log(newArr);
// console.log(arr);
// console.log(newArr);
//------------
// Array.prototype.myMap= function (callback) {
//     let result = this;
//     for (let index = 0; index < this.length; index++) {
//         if (this[index] === undefined) {
//             break;
//         }
//         result[index] = callback(this[index], index, this);
//     }
//     return result;
// };
// arr.myMap((elem)=> elem*2)
// console.log(arr);

// ----------------------------------------------------------
// const filter = function (array, callback)
//     const result = [];
//
//     const { length } = array;
//
//     for (let index = 0; index < length; index += 1) {
//         const value = array[index];
//
//         if (callback(value, index, array)) {
//             result.push( value);
//         }
//     }
//
//     return result;
// }
// console.log(filter([1, 2, 3, 4, 5],(value)=>value>2));
//----------------------
// Array.prototype.myFilter = function (callback) {
//     const results = [];
//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this))
//             results.push(this[i]);
//     }
//     return results;
// }
//
// let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// output = output.myFilter((elem) => {
//     return elem % 2 === 0;
// });
//
// console.log(output)

// ----------------------------------------------------------
// Array.prototype.myReduce = function (callback, initialValue) {
//     let value = initialValue;
//
//     for (let i = 0; i < this.length; i++) {
//         value = callback(value, this[i]);
//     }
//
//     return value;
// }
//
// const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const sum = output.myReduce((acc = 0, elem) => {
//     return acc + elem;
// });
//
// console.log(sum)


// ----------------------------------------------------------

// Array.prototype.myIndexOf = function (value) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === value)
//             return i;
//     }
//     return -1;
// }
//
// const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(output.myIndexOf(5)); //
// console.log(output.indexOf(5)); //
// ----------------------------------------------------------
// const array = [5, 12, 8, 130, 44];
//
// Array.prototype.myFind = function(callback, thisArg) {
//     let length = this.length
//     for (let index = 0; index < length; index++) {
//         if (callback.call(thisArg, this[index], index, this)) return this[index]
//     }
// }
// const found = array.myFind(element => element > 10);
// console.log(found);
// ----------------------------------------------------------

// function push(arr, value) {
//     this.store = arr;
//     this.top = arr.length;
//     this.store[this.top++] = value
//     return this.store.length
// }
//
// function pop(arr) {
//     this.store = arr;
//     this.top = arr.length;
//     if (!this.top) return;
//     const ret = this.store[--this.top]
//     this.store[--arr.length]
//     return ret
// }
//
// const arr = [4, 5, 6]
// const x = push(arr, 9)
// console.log(x);
// console.log(arr);
// const y = pop(arr)
// console.log(y)
// console.log(arr)
// ----------------------------------------------------------
// function join(arr, sep = '') {
//     let result = "";
//     for (let i = 0; i < arr.length - 1; i++) {
//         result += arr[i];
//         result += sep;
//     }
//     result += arr[arr.length - 1];
//     return result;
// }
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join('-'));
// console.log(join(elements, '-'));

// ----------------------------------------------------------


