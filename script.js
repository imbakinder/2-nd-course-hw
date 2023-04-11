// const number = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < number.length; i++) {
//         if (number[i] === 10) {
//             console.log(number[i]);
//             break
//         }
//         console.log(number[i]);
//     }

// const number = [1, 5, 4, 10, 0, 3];
// const index = number.indexOf(4);
// console.log(index);

// let number = [1, 3, 5, 10, 20];
// number = number.join(' ');
// console.log(number);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   let innerArr = [];
//   for (let j = 0; j < 3; j++) {
//     innerArr.push(1);
//   }
//   arr.push(innerArr);
// }
// console.log(arr);

// let arr = [1, 1, 1];
// arr.push(1, 2, 3);
// console.log(arr);

// const arr = [9, 8, 7, "a", 6, 5];
// arr.sort();
// arr.splice(arr.indexOf("a"), 1);
// const newArr = arr.filter((item) => typeof item === "number");

// console.log(newArr);

// const arr = [9, 8, 7, 6, 5];
// const num = parseInt(prompt("Введите число от 1 до 10"));
// const isIncluded = arr.includes(num);

// if (isIncluded) {
//   console.log(`Число ${num} содержится в массиве`);
// } else {
//   console.log(`Число ${num} не содержится в массиве`);
// }

// let str = 'abdef';
// console.log(str.split('').reverse().join(''));

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const newArr = arr.flat();

// console.log(newArr);

// let arr = [1, 4, 5, 7, 9, 10, 3, 6, 2, 8];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + arr[i - 1]);
// }


// function squareArray(arr) {
//     const result = arr.map((item) => item * item);
//     return result;
//   }
  
//   const numbers = [2, 3, 4, 5];
//   const squaredNumbers = squareArray(numbers);
  
//   console.log(squaredNumbers);


// function getLengthWords(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(arr[i].length);
//     }
//     return result;
//   }
  
//   const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
//   const wordsLength = getLengthWords(words);
  
//   console.log(wordsLength);


// function getNegativeNumbers(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
  
//   const numbers = [1, -2, 3, -4, 5, -6];
//   const negativeNumbers = getNegativeNumbers(numbers);
  
//   console.log(negativeNumbers);




