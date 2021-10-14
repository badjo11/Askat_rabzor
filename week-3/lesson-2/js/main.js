//Логические операторы

// console.log(false && false)
// console.log(true && false)
// console.log('' && true)

// console.log(true || false)
// console.log(true || true)
// console.log(false || false)

// console.log(!!true)
// console.log(!false)

// console.log(true && true || false && !false)
// console.log(true || !true && flase || false)
// console.log(!false && !true || !true)
// console.log(false || !false && !!true)

// Условные операторы

// let num1 = 140
// let num2 = 141

// if (num1 === num2) {
//     console.log("num1 === num2")
// }
// else if (num1 < num2) {
//     console.log("num1 < num2")
// }
// else {
//     console.log("не подошло")
// }

// const value = "Hello"
// const number = 47
// if (value === "Hello") {
//     console.log("Hello, World")
// }
// if (number > 50) {
//     console.log("Number > 50")
// }
// else if (number < 50) {
//     console.log("Number < 50")
// }

// let sum = 100
// let result = 200
// if (sum === 100 && result === 200) {
//     console.log("Yes")
// }
// else {
//     console.log("No")
// }

// Тернарный оператор
// let user1 = "Mirbek"
// let user2 = "Ulan"

// user1 === user2 ? console.log("Если условие true") : console.log("Если условие false")

// let num1 = 1
// let num2 = 1

// num1 < num2 ? alert("true") : alert("false")

// 0 || '' ? console.log(true) : console.log(false)

// let str = "Bootcam"

// switch (str) {
//     case "School":
//         console.log("Good")
//         break;
//     case "Bootcamp":
//         console.log("Bootcamp")
//         break;
//     default:
//         console.log("College")
//         break;
// }

// let code = prompt("Введи тег h1")
// switch (code) {
//     case '<h1></h1>':
//         alert("Правильно ввели")
//         break;
//     case 'h1':
//         alert("Почти правильно")
//         break;
//     default:
//         alert("Повтори заголовки")
//         break;
// }

// let temp = +prompt("Введите температуру")

// // temp < 0 ? console.log(`температура воздуха опустится до ${temp} градусов`) : console.log(`температура поднимится до ${temp} градусов `)



// if (temp < 0) {
//     console.log(`температура воздуха опустится до ${temp} градусов`)
// }
// else {
//     console.log(`температура поднимится до ${temp} градусов `)
// }

// let min = +prompt("Введите число")
// if (min >= 0 && min < 15) {
//     console.log("Первая часть")
// }
// else if (min >= 15 && min < 30) {
//     console.log("Вторая часть")
// }
// else if (min >= 30 && min < 45) {
//     console.log("Третья часть")
// }
// else if (min >= 45 && min < 60) {
//     console.log("Четвертая часть")
// }
// else {
//     console.log("Ввели неправильное число")
// }

// if (!0 && !undefined) {
//     console.log("TRue")
// // }
// console.log((parseInt("$1.2")))
// console.log((parseInt("0 минут")))
// console.log((parseInt("1px")))
// console.log((parseInt("-1.2")))
// word = 'dohod'
// let str = []
// for (let i = 0; i < word.length; i++) {
//     let s = ''
//     for (let y = i; y < word.length; y++) {
//         s += word[y]

//         str.push(s)
//     }
// }
// console.log(str)
let arr = [
    ["name", "Makers"],
    ["type", "Bootcamp"],
    ["place", "Bishkek"],
    ["languages", "JavaScript, Python"],
    ["simply", "the best!"]
];
for (let [key, value] of arr) {

    console.log(`${key}: ${value}`)
}