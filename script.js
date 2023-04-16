// let str = "js";
// let upperStr = str.toUpperCase();

// console.log(upperStr);

// let num = 32.58884;
// let roundedDown = Math.floor(num);
// console.log(roundedDown);
// let num = 32.58884;
// let roundedUp = Math.ceil(num);
// console.log(roundedUp);
// let num = 32.58884;
// let rounded = Math.round(num);
// console.log(rounded);

// let arr = [52, 53, 49, 77, 21, 32];

// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }

//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log('Наименьшее число: ', min);
// console.log('Наибольшее число: ', max);

// function getRandomNumber() {
//     let randomNumber = Math.random() * 10;

//     randomNumber = Math.floor(randomNumber) + 1;
//     console.log(randomNumber);
//   }

//   getRandomNumber();

// function getRandomNumbersArray(num) {
//     let arrayLength = Math.floor(num / 2);

//     let resultArray = [];

//     for (let i = 0; i < arrayLength; i++) {
//       let randomNumber = Math.floor(Math.random() * num);

//       if (!resultArray.includes(randomNumber)) {
//         resultArray.push(randomNumber);
//       }
//     }

//     return resultArray;
//   }

//   console.log(getRandomNumbersArray(10));

// Math.floor(Math.random() * (max - min + 1)) + min

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   console.log(getRandomInt(10, 20));

// const currentDate = new Date();
// const dateAsString = currentDate.toLocaleDateString();
// console.log(dateAsString);

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate.toLocaleDateString());

// const date = new Date();
// console.log(formatDate(date));
