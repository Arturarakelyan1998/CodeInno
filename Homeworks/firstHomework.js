// function numberType(num) {
//     if (typeof num !== 'number') {
//         return "ERROR please enter number"
//     } else {
//         if (num % 2 === 0) return `The ${num} is even.`
//         return `The ${num} is odd.`
//     }
// }
//
// console.log(numberType(-0));
//---------------------------------------------------
// function divisible(num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         if (num1 % num2 === 0 || num2 % num1 === 0) return 1
//         return 0
//     } else {
//         return "ERROR please enter numbers"
//     }
// }
//
// console.log(divisible(5, 10));
//---------------------------------------------------
// function triangleAngels(angle1, angle2) {
//     if (angle1 <= 0 || angle2 <= 0 || angle1 + angle2 >= 180) return "ERROR please check the entered numbers․"
//     return 180 - angle1 - angle2
// }
//
// console.log(triangleAngels(30, 90));
//---------------------------------------------------
// function four(num) {
//     if (typeof num === 'number') return '' + num + num * 2 + num * 3
//     return "ERROR please enter number"
// }
//
// console.log(four(17));
//---------------------------------------------------
// function five(num) {
//     if (typeof num === 'number') {
//         const toText = num.toString();
//         const lastChar = toText.slice(-1);
//         if (lastChar == 0) return num
//
//         return +(lastChar.concat(toText.slice(0, -1)))
//     } else {
//         return "ERROR please enter number"
//     }
// }
//
// console.log(five(159870));
//---------------------------------------------------
// function averageNumbers(n1, n2, n3, n4, n5) {
//     if (typeof n1 === 'number' && typeof n2 === 'number' && typeof n3 === 'number' && typeof n4 === 'number' && typeof n5 === 'number') {
//         return (n1 + n2 + n3 + n4 + n5) / 5
//     } else {
//         return "ERROR please enter number"
//     }
// }
//
// console.log(averageNumbers("45", -12, 0, 3, -15));
//---------------------------------------------------
// function multipleOf(num) {
//     if (typeof num === 'number') {
//         let str = `${num} is a multiple of`
//         let count = 0;
//         if (num % 3 === 0) {
//             str = '' + str + " 3";
//             count++;
//         }
//         if (num % 5 === 0) {
//             if (num % 7 === 0) count++;
//             count === 1 ? str = '' + str + " and 5" : str = '' + str + ", 5";
//
//         }
//         if (num % 7 === 0) {
//             str = '' + str + " and 7"
//         }
//         if (num % 7 !== 0 && num % 5 !== 0 && num % 3 !== 0) {
//             str = `${num} is not a multiple of 3, 5 or 7`
//         }
//
//         return str;
//     } else {
//         return "ERROR please enter number"
//     }
//
// }
// console.log(multipleOf(152));

//---------------------------------------------------
// function fu(num, str) {
//     if (typeof num === 'number' && str === "months" || str === "years") {
//         if (str === 'months') {
//             if (1 <= num && num <= 12) console.log("baby");
//             else {
//                 console.log("did you mean years?");
//             }
//         } else if (str === "years") {
//             if (1 <= num && num <= 2) console.log("toddler.");
//             else if (3 <= num && num <= 12) console.log("child.");
//             else if (13 <= num && num <= 17) console.log("teenager.");
//             else if (18 <= num) console.log("adult.");
//         }
//     } else {
//         console.log("Error please check the arguments.");
//     }
// }
//
// fu(1, "months");
//---------------------------------------------------

// const numbers = [4, 2, -5, 1, -3];
// const sortedNumbers=numbers.sort(function(a, b) {
//     return a - b;

// })
// console.log(sortedNumbers);
//-------------------
// function isNumber(element) {
//     return typeof element === 'number'
// }
//
// function sort(arr) {
//     if (arr.every(isNumber)) {
//
//         for (let i = 1; i < arr.length; i++) {
//             for (let j = i; j && arr[j - 1] > arr[j]; j--) {
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//             }
//         }
//         return arr;
//     } else {
//         return "Error please check the arguments."
//     }
// }
//
// const array = [3, 2, 4, 5, 2, 2, 1, 2, 2, 0];
// console.log(sort(array));
//---------------------------------------------------
// function exams(first, second, third) {
//     if (first < 0 || first > 100 || typeof first !== "number" || second < 0 || second > 100 || typeof second !== "number" || third < 0 || third > 100 || typeof third !== "number") {
//         return 'Error, please import only numbers from 0 to 100'
//     } else {
//
//         if (first >= 40 && second >= 40 && third >= 40) return "passed"
//         else {
//             if (first < 40 && second >= 40 && third >= 40 || first >= 40 && second < 40 && third >= 40 || first >= 40 && second >= 40 && third < 40) {
//                 const newGrade = (first + second + third) / 3
//                 if (newGrade >= 50) {
//                     return "passed"
//                 } else {
//                     return "not passed"
//                 }
//             } else {
//                 return "not passed"
//             }
//         }
//     }
//
//
// }
//
// console.log(exams(55, 501, 40));
//---------------------------------------------------

// function f(x, y, z) {
//     if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
//         if (x === 0 || y === 0 || z === 0) {
//             console.log("unsigned");
//         } else if (x > 0 && y > 0 && z > 0) {
//             console.log("The sign is +");
//         } else if (x < 0 && y < 0 && z > 0) {
//             console.log("The sign is +");
//         } else if (x > 0 && y < 0 && z < 0) {
//             console.log("The sign is +");
//         } else if (x < 0 && y > 0 && z < 0) {
//             console.log("The sign is +");
//         } else {
//             console.log("The sign is -");
//         }
//     } else {
//         console.log("ERROR please enter number")
//     }
// }
//
// f(0, 5, 10)
//---------------------------------------------------
// let n = +prompt();
//
// let i = 0;
// let j = 0;
//
// if (n % 2 === 0 && !Math.floor(n / 10)) i += 1;
// if (n % 3 === 0 && n % 10 === 1) j += 1;

//---------------------------------------------------
// function contains(digit, number) {
//     if (typeof digit === 'number' && typeof number === 'number') {
//         if (number < 0) {
//             number *= -1;
//         }
//         if (digit < 0) {
//             digit *= -1;
//         }
//         if (number === digit) {
//             return "Yes";
//         }
//         while (number !== 0) {
//             if (number % 10 === digit) {
//                 return "Yes";
//             }
//             number = Math.floor(number / 10);
//         }
//         return "No";
//     } else {
//         return "ERROR please enter number"
//     }
// }
//
// console.log(contains(5, -1085369));
//---------------------------------------------------
// function firstDigit(num) {
//     if (typeof num !== "number") return "ERROR please enter number"
//     if (num < 10 && num > -10) return num
//     const numToStr = num + ''
//     let answer = ''
//     const latest = numToStr[numToStr.length - 1]
//     if (numToStr[0] === '-') {
//         const first = numToStr[1]
//         answer = latest + numToStr.slice(2, -1) + first
//         return +answer * -1
//     } else {
//         const first = numToStr[0]
//         answer = latest + numToStr.slice(1, -1) + first
//         return +answer
//     }
// }
//
//
// console.log(firstDigit(50));

//---------------------------------------------------
// function square(str, side1, side2) {
//     if (typeof side1 === 'number' && typeof side2 === 'number' && str === "triangle" || str === "rectangle") {
//         if (side1 <= 0 || side2 <= 0) return "Please enter only positives"
//         else {
//             if (str === 'triangle') return `Square of the triangle is ${side1 * side2 / 2}.`
//             else return `Square of the rectangle is ${side1 * side2}.`
//         }
//
//     } else return "Error please check the arguments.";
// }
//
// console.log(square("rectangle", 20, 5));
//---------------------------------------------------

// function Digits(n) {
//     if (typeof n === 'number') {
//         let largest = 0;
//         let smallest = 9;
//         if (n===0) return 0;
//         if (n < 0) n *= -1;
//
//         while (n) {
//             let r = n % 10;
//             largest = Math.max(r, largest);
//             smallest = Math.min(r, smallest);
//             n = Math.floor(n / 10);
//         }
//         return largest - smallest;
//     } else return "ERROR please enter number"
// }
//
// console.log(Digits(9634785));
//---------------------------------------------------
