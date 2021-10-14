//forEach
// let arr = ['boolean', 34, {}, true]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// arr.forEach((value, index, array) => {
//     console.log(value)
// })

// let arr = [1, 2, 3, 4, 5, 'a', 6]
// let newArr = arr.map(function (item, index, array) {
//     if (item === 'a') {
//         return 5
//     }
//     return item
// })
// console.log(newArr)

// let numbers = [32, 2, 43, 10, 25]
// let newArray = numbers.filter(item => {
//     return item > 15
// })
// console.log(newArray)


// let obj =
//     [
//         {
//             title: 'Pila',
//             genre: "horror",
//         },
//         {
//             title: 'Venom',
//             genre: "fentesy"
//         },
//         {
//             title: "Eki batyr",
//             genre: "comedy"
//         }
//     ]
// console.log(obj)
// function handleFilter(genre) {
//     let filteredArr = obj.filter((item) => {
//         return item.genre === genre
//     })
//     console.log(filteredArr)
// }
// handleFilter('horror')

// let arr = [-3, 4, -2]
// arr.forEach((value, index) => {
//     if (value === -2) arr.splice(index - 1, 0, -2)
// })
// console.log(arr)

//indexOf
// let arr = [true, 1, 0, "str"]
// let result = arr.indexOf(true)
// console.log(result)

// let arr = [10, 20, "array"]
// let result = arr.includes(20)
// console.log(result)

// let users = [
//     { id: 1, name: "Sanzhar" },
//     { id: 2, name: "Bael" },
//     { id: 3, name: "Atai" },
// ]
// let result = users.some((item) => {
//     return item.id === 4
// })
// console.log(result)

// let arr10 = ["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]
// arr10.forEach(value => {
//     if (value.includes("<h1>")) {
//         document.write("<h1>Основной заголовок</h1>")
//     }
//     if (value.includes("<p>")) {
//         document.write("<p>А это параграф<p> </p>")
//     }
//     if (value.includes("<div>")) {
//         document.write("<div>А это тег </div>")

//     }
// })
// 3. Дан массив с числами. Создайте из него новый массив, в которым останутся лишь положительные числа. Для этого нужно создать вспомогательную функцию isPositive(), которая будет принимать в качестве аргумента число и возвращать true, если число положительное, и false - если отрицательное. *

// function isPositive(num) {
//     return num > 0 ? true : false
// }
// let arr = [1, 3, -2, 5, -5, 2, -3]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (isPositive(arr[i])) newArr.push(arr[i])
// }
// console.log(newArr)

// let arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log("Есть!")
//         break
//     }
// // }
// sayHi();
// function sayHi() {
//     alert("Hello")
// }
// alert(str)
// let str = "Helo"



// let regexp = /[aeoui]/g
// let str = 'Hello'
// if (str.test(regexp)) {
//     console.log("Есть гласная буква")
// } else {
//     console.log("Нету гласных букв")
// }


// function rec(str) {
//     if (str.length > 1) {
//         return rec(str.splice(1))
//     }
//     return str
// }
// console.log(rec('h e l l o'))

// let arr = [false, 0, '', undefined]
// console.log(arr.every((item) => {
//     return item === false
// }))

// let arr = [false, 0, 'hello', undefined, 69, []]
// console.log(arr.every((item) => {
//     return item
// }))






// let arr = ["hello", 25, true, false]
// function output(arr) {
//     console.log(arr.shift())
//     if (arr.length > 1) {
//         output(arr)
//     }
// }
// output(arr)

// function pow(x, n) {
//     if (n === 0) {
// /         return n
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
// console.log(pow(3, 4))

// function rec(bool) {
//     if (bool) {
//         return rec(!bool)
//     } else if (bool || bool) {
//         return rec(!!bool)
//     } else {
//         return true
//     }
// }
// console.log(rec(true))


// let products = ["Nike", "Puma", "Bigser"]
// let newArr = products.map(item => item)
// console.log(newArr)


// let arr = ["Есть", "жизнь", "на", "марсе"]
// let newArr = arr.map(item => item.length)
// console.log(newArr)

// let names = ['sam', 'luck', 'james']
// names = names.map(item => {
//     return item.charAt(0).toUpperCase() + item.slice(1)
// })
// console.log(names)

// let arr = [1, 2, -11, 30, -2, 3]
// let newArr = arr.filter(item => item < 0)
// console.log(newArr)

// let arr = ['str', 1, [3, 4], true, ['str'], 10]
// let newArr = arr.filter(item => Array.isArray(item))
// console.log(newArr)

// let num = 123456789
// num = num.toString().split("")
// let str = []
// num.forEach(element => {
//     str.unshift(element)
// });
// console.log(str.join(""))
// function isPalindrom(str) {
//     return str === str.split("").reverse().join("") ? true : false
// }
// console.log(isPalindrom('mada'))


// resolver_tower_of_hanoi = function (s, d, e, n) {
//     if (n <= 0) return//точка выхода
//     //меняем 2ую ячейку с 3ей, сокращая число колечек
//     resolver_tower_of_hanoi(s, e, d, n - 1)
//     //выводим в консоль результат
//     console.log(`Move Disk-${n} FROM ${s} TO ${d}`);
//     //сдвигаем ячейки влево, сокращая число колечек
//     resolver_tower_of_hanoi(e, d, s, n - 1);
// }
// resolver_tower_of_hanoi('s', 'd', 'e', 3)


let company = { // объект который мы рекурсивно проходим
    sales: [{ name: 'Atai', salary: 1000 }, { name: 'Dayana', salary: 600 }],
    web: {
        back_end: {
            python: [{ name: 'Erlan', salary: 2000 }, { name: 'Islam', salary: 1200 }],
            php: [{ name: 'Max', salary: 1800 }],
        },
        front_end: {
            js: [{ name: 'Vladimir', salary: 1300 }],
        }
    }
}
// Функция для подсчёта суммы зарплат
function sumSalaries(dep) {
    if (Array.isArray(dep)) { // случай 1ый
        return dep.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай 2ый
        let sum = 0;
        for (let subdep of Object.values(dep)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}
console.log((sumSalaries(company)))

