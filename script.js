let password = "пароль";
let userPass = prompt("Введите пароль");

userPass = userPass.toLocaleLowerCase();

if (userPass === password) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен не верно");
}

// let c = Number(prompt("Введите число"));

// if (c > 0 && c < 10) {
//   console.log("Верно");
// } else {
//   console.log("Не верно");
// }

// let d = Number(prompt("Введите первое число"));
// let e = Number(prompt("Введиет второе число"));

// if (d > 100 || e > 100) {
//   console.log("верно");
// } else {
//   console.log("не верно");
// }

// let a = Number("2");
// let b = Number("3");
// alert(a + b);

// let monthNumber = String(prompt("Какой месяц?"));

// let monthNumber = Number(prompt('Какой месяц?'));

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//       console.log('зима');
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log('весна');
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log('лето');
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log('осень');
//       break;
//     default:
//       console.log('Устал считать');
//   }
