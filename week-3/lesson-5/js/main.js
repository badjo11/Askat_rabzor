// let result = +prompt("Enter your age")
// if (result > 23 && result < 40) {
//     alert("Hello")
// }
// else {
//     alert("Goodbye")
// }
// result > 23 && result < 40 ? alert("Hello") : alert("Goodby")

// let array = [{}]

// array.length ? console.log("Есть") : console.log("Нету")

// !array.length ? console.log("Есть") : array.length > 10 ? console.log("Да, больше") : console.log("Нет, меньше")

// let num = 9
// num > 0 && num < 10 ? num > 5 ? alert("num >= 5") : alert("num < 5") : alert("Hi")

// let num = +prompt("Введите цифру от 1 до 4")
// switch (num) {
//     case 1:
//         alert("Зима")
//         break;
//     case 2:
//         alert("Весна")
//         break;
//     case 3:
//         alert("Лето")
//         break;
//     case 4:
//         alert("Осень")
//         break;
//     default:
//         alert("Ввели неверную цифру")
// }

// let arr = [3, 4, 5, 6, 7, 2]
// let sum = 0
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         sum += elem
//     }
// }
// console.log(sum)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let obj = {
//     'Бишкек': "Кыргызстан",
//     "Минск": "Беларусь",
//     "Москва": "Россия",
//     "Киев": "Украина"
// }
// for (let elem in obj) {
//     console.log(`${elem} - это ${obj[elem]}`)
// }

// let obj = {
//     title: "Nike",
//     description: "Lorem ipsum",
//     count: 10,
// };
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// let count = 0
// for (let i = 100; i <= 500; i++) {
//     if (i % 3 === 0) {
//         count++
//     }
// }
// console.log(count)


// let arr = ["арбуз", "дыня", "вишня"]
// arr.push("клубника")
// arr.splice(arr.length, 0, "клубника")
// console.log(newArr)


// let array = ['а', 'б', 'в']
// for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i])
// }
// console.log(array)

// for (let i = 0; i < arr.length; i++) {
// if (arr[i] === "дыня") {
//     arr.splice(i + 1, 0, "помидоры")
// }
// let str = arr[i]
// let strArr = str.split("")
// let upperLetter = strArr[0].toUpperCase()
// strArr.splice(0, 1, upperLetter)
// strArr = strArr.join("")
// arr.splice(i, 1, strArr)
// console.log(strArr)
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
// }
// console.log(arr)
// let arr = [10, 20, 40, 50, 60, 70]
// let target = 50

// let ar = [-1, -1]
// for (let i = 0; i < arr.length; i++) {
//     for (let y = 0; y < arr.length; y++) {
//         if (y === i) {
//             continue;
//         }
//         if (arr[i] + arr[y] === target) {
//             ar[0] = i
//             ar[1] = y
//             break;
//         }
//     }
// }
// console.log(ar)


// Задание №3
// Напишите код который соединяет два массива и убирает дубликаты в новом массиве.
// Пример:
// Ввод:
// array1 = [1, 2, 3];
// array2 = [2, 30, 1, 1, 5];
// Вывод: [3, 2, 30, 1, 5]
// использовать метод concat()

let arr1 = [1, 1, 2, 2, 3]
let arr2 = [5, 5, 3, 3, 2, 2, 4, 4, 3, 4, 4, 1]
let arr = arr1.concat(arr2)
for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr.length; y++) {
        if (y === i) {
            continue;
        }
        if (arr[i] === arr[y]) {
            arr.splice(y, 1)
            y--
        }
    }
}
console.log(arr)
// Задание №7
// Вам даны две строки. Напишите код который проверяет, являются ли эти строки анаграммами(состоящими из одних и тех же букв) - например строки "кабан" и "банка" являются анаграммами. Используйте методы sort() и join()
// let firstWord = 'kaban', secondWord = 'banka'
// firstWord = firstWord.split("")
// secondWord = secondWord.split("")
// let bool1 = true

// firstWord.sort()
// secondWord.sort()
// for (let i = 0; i < firstWord.length; i++) {
//     if (firstWord[i] !== secondWord[i]) {
//         bool1 = false
//         break;
//     }

// }
// console.log(bool1)

// let a = 1, b = 2, c = " белых медведей"
// // a = a.toString()
// // b = b.toString()
// let s = a.toString() + b + c
// console.log(s)



// let num1 = 72, num2 = 24
// let nod = 0
// for (i = 1; i <= num1; i++) {
//     if ((num1 % i === 0) && (num2 % i === 0)) {
//         nod = i
//     }
//     if (num1 === i || num2 === i) {
//         break
//     }
// }
// console.log(nod)


// Задание №2
// Напишите программу, которая находит два элемента в массиве, сумма которых равна
// заданному числу n, код должен возвращать индексы найденных элементов.
// Пример: дан массив numbers= [10,20,10,40,50,60,70], n=50
// Вывод: 2, 3
// т.к 10 + 40(под индексами 2 и 3) = 50
// Почитать про метод map()

// Напишите генератор массивов. Вы получаете два значения start, len. Ваш код должен выдавать массив всех чисел от start в количестве len.
// Например:
// let start = 4
// let len = 4
// Вывод:
// [4, 5, 6, 7]
// let start = -6
// let len = 4
// Вывод:
// [-6, -5, -4, -3]
// let start = 4
// let len = 5
// let arr5 = []
// for (let i = 0; i < len; i++) {
//     arr5.push(start++)
// }
// console.log(arr5)

// Напишите код который проверяет является ли год високосным или нет.
// Високосные года делятся нацело на 4. Однако из этого правила есть исключение: столетия, которые не делятся нацело на 400, високосными не являются.
// В високосном годе 366 дней, в обычном 365.
// let year = 2020
// let bool = true
// if (year % 4 === 0) {
//     bool = false
//     if ((year % 100 === 0) && year % 400 !== 0) {
//         bool = true
//     }
// }
// if (bool) {
//     console.log("невисокосный")
// } else {
//     console.log("високосный год")
// }


// let heigth = 0
// let gas = 0
// let cosmo = 0
// while (true) {
//     gas = +prompt("Введите количество топлива от 5000 до 30000: ")
//     if (gas > 5000 && gas < 30000) {
//         break
//     }
// }
// while (true) {
//     cosmo = +prompt("Введите количество космонавтов от 1 до 7:")
//     if (cosmo > 1 && cosmo < 8) {
//         break;
//     }
// }

// while (gas > 0) {
//     heigth += 50
//     gas = gas - (100 * cosmo)
// }

// if (gas < 0) {
//     heigth -= 50
// }
// if (heigth >= 2000) {
//     alert("Орбита достигнута!")
// }
// else {
//     alert("Не удалось выйти на орбиту")
// }


// let items = [1, 2, 3, 4, 5, 7, 8, 9, 10]
// let mid = Math.floor()

// let bobsFollowers = ['Alice', 'Kubat', 'Toshok', 'Kumdan']
// let tinasFollowers = ['Kubat', 'Tashtan', 'Toshok']
// let mutualFollowers = []
// for (let i = 0; i < bobsFollowers.length; i++) {
//     for (let y = 0; y < tinasFollowers.length; y++) {
//         if (bobsFollowers[i] === tinasFollowers[y]) {
//             mutualFollowers.push(bobsFollowers[i])
//         }
//     }
// }
// console.log(mutualFollowers)


// let heigth = 0, gas = 0, cosmo = 0
// while (true) {
//     gas = +prompt("Введите количество топлива от 5000 до 30000: ")
//     if (gas > 5000 && gas < 30000) {
//         break
//     }
// }
// while (true) {
//     cosmo = +prompt("Введите количество космонавтов от 1 до 7:")
//     if (cosmo > 1 && cosmo < 8) {
//         break;
//     }
// }

// while (gas > 0) {
//     heigth += 50
//     gas = gas - (100 * cosmo)
// }
// console.log(gas)
// alert(heigth)
// if (gas < 0) {
//     heigth -= 50
// }

// if (heigth >= 2000) {
//     alert("Орбита достигнута!")
// }
// else {
//     alert("Не удалось выйти на орбиту")
// }

let stack = [];

function isBalanced(expr) {
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == "(" || x == "[" || x == "{") {
            stack.push(x);
            continue;
        }
        if (stack.length == 0) {
            return false;
        }

        let check;
        switch (x) {
            case ")":
                check = stack.pop();
                if (check == "{" || check == "[") {
                    console.log("NOT BALANCED");
                    return false;
                }
                break;
            case "}":
                check = stack.pop();
                if (check == "(" || check == "[") {
                    console.log("NOT BALANCED");
                    return false;
                }

                break;

            case "]":
                check = stack.pop();
                if (check == "(" || check == "{") {
                    console.log("NOT BALANCED");
                    return false;
                }

                break;
        }
    }
    console.log("BALANCED");
    return true;
}

isBalanced('{{([])}}');
isBalanced("{{{}()}}");