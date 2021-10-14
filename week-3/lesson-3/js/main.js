// let arr = [1, 2, 3, 4, 5]
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }
// let number = 1
// while (number <= 100) {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
//     number++
// }
// let i = 50
// do {
//     console.log(i, `Сработает один раз по-любому`)
// } while (i < 40)
// FOR
// for (let i = 0, y = 20; i < 20; i++, y--) {
//     if (i % 3 === 0 && y % 2 === 0) {
//         console.log("i = " + i + " y = " + y)
//     }
// }

// let arr = ["Arstan", "Beksultan", "Akay"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] === 'Beksultan') {
//         alert(arr[i])
//         break;
//     }
// }


let users = [
    {
        name: "Askat",
        id: 123
    },
    {
        name: "Sanzhar",
        id: 13
    },
    {
        name: "Vladimir",
        id: 34
    },
    {
        name: "Erlan",
        id: 43
    }
]

// console.log(users)
// for (let i = 0; i < users.length; i++) {
//     document.write(`<h2>Имя: ${users[i].name} id=${users[i].id}</h2>`)
// }

// For of, for in

// for (let value of users) {
//     console.log(value.id)
// }

// for (let value in users) {
//     console.log(users[value])
// }


// let user = {
//     name: "Atai"
// }
// for (let key in user) {
//     console.log(user[key])
// }
// console.log(users)
// console.log(user)

// for (let value of users) {
//     console.log(value.name)
// }

//С помощью for in можно перебирать и объекты и массивы
//С помощью for of можно перебирать только массивы

let number = 5

// console.log(number++)
// console.log(number--)
// console.log(number)

// console.log(++number)
// for (let i = 0; i < 10; ++i) {
//     console.log(i)
// }

// number += 1

// let arr = [true, 7, 2, 'Hello']
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     // sum += arr[i]
//     if (typeof arr[i] === 'number') {
//         sum += arr[i]
//     }
// }
// console.log(sum)
// while(true){
//     let num = +prompt("Введите число больше ста")

// }

// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0], nul = 0, pol = 0, otr = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         nul++
//     }
//     else if (arr[i] < 0) {
//         otr++
//     }
//     else {
//         pol++
//     }
// }
// console.log(`${nul} Нулей, ${otr} отрицательных, ${pol} положительных `)

let arr = [8, -7, -21, 44, 3]
arr.sort((a, b) => a - b)
console.log(arr[arr.length - 1])