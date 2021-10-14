// const str = 'Hello! Привет, My name is Kani. I am 21 years old. I live in Bishkek for 12years'
// const regexp = /Kani/
// const regexp = /\d\d/g;
// const regexp = /\w\w\w/
// const regexp = /\W\W\W/
// const regexp = /\D\D/
// const str = "Hello! We are Alan and Ulan"
// const regexp = /[AU]lan/g
// const str = "Today is 20.10.2020"
// const regexp = /\d\d.\d\d.\d\d\d\d/
// const regexp = /\d{2}.\d{2}.\d{4}/
// const regexp = /\./

// const result = str.match(regexp)
// console.log(result)

// let str = "We see you, we need you"
// let pattern = /we/gi
// console.log(str.replace(pattern, 'I'))

// let str = prompt("Enter word: ")
// let regexp = new RegExp(/[a-zA-Z]/, 'g')
// console.log(regexp.test(str))

// let str = prompt("Enter word: ")
// let regexp = new RegExp(/\d+/, 'g')
// console.log(regexp.test(str))

// let str = prompt("enter product weight")
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi')
// console.log(regexp.test(str))
// let str = "Name: Jack, LastName: Amith"
// console.log(str.replace(/a/gi, '*'))

// let str = prompt("Enter your phone number:")
// let regexp = new RegExp(/^\+996\d{9}/, 'g')
// // console.log(regexp.test(str))

// if (regexp.test(str)) {
//     alert("Correct")
// }
// else {
//     alert("Wrong")
// }

// function func(m) {
//     return m * 2
// }
// console.log(func('4'))
// console.log(console)

// let str = '5 apples and 5 oranges'
// console.log(str.replace(/\d/, 'пять'))

// function is_power(num, power) {
//     num = Math.floor(num / 2)
//     console.log(num)
//     if (num === 2) {
//         console.log("HUY")
//         return true
//     } else if (num > 2) {
//         is_power(num)
//     } else {
//         return false
//     }
// }
// if (is_power(16, 2) === true) {
//     console.log("YES")
// }
// else {
//     console.log("NO")
// }

// for (let i = 1; i <= 100; i++) {
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }

// function func10(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) sum += arr[i];
//         else {
//             arr.splice(i, 1);
//         }
//     }
//     console.log(arr);
//     console.log(sum);
// }

// let arr9 = [1, 2, 3, 4, 5, 6];
// func10(arr9);

// let nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: "foo2",
//                     },
//                     moreStuff1: {
//                         magicNumber: 32,
//                         something: "foo1",
//                     },
//                 },
//             },

//         },
//     },
// };
// function contains(obj, num) {
//     for (let key in obj) {
//         if (typeof obj[key] === "object") {
//             return contains(obj[key], num)
//         }
//         if (obj[key] === num) {
//             return true
//         }
//     }
// }

// console.log(contains(nestedObject, 32))

// function binar(num) {
//     let arr = []
//     while (num > 0) {
//         arr.unshift((num % 2).toString())
//         num = Math.floor(num / 2)
//     }
//     return arr.join("")
// }
// console.log(binar(1234321))


// let items = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "lenovo"],
//     ["phone", "gold", "iphone"],
// ];

// let ruleKey = "color";
// let ruleValue = "silver";

// function checkRules(items, ruleKey, ruleValue){

// // }
// let str = ''
// function binar(num) {
//     if (num === 0) {
//         return str
//     }
//     else {
//         str += Math.floor(num % 2).toString()
//         return binar(Math.floor(num / 2))
//     }

// }
// let result = binar(8)
// result = result.split("").reverse().join("")
// console.log(result)


// function counting(num) {
//     let count = 0
//     while (num !== 0) {
//         if (num % 2) {
//             num--
//             count++
//         } else {
//             num /= 2
//             count++
//         }
//     }
//     return count
// }
// console.log(counting(1000000))
// console.log(counting(62))
// console.log(counting(8))


// function fixSentence(str, num) {
//     return str.split(" ").splice(0, num).join(" ")
// }
// let str = "Hello World This is Dayana"

// console.log(fixSentence(str, 3))

// let nums = [2, 5, 1, 3, 4, 7]
// let n = 3
// let newArr = nums.splice(0, n)
// for (let i = 0; i < n * 2; i += 2) {
//     newArr.splice(i + 1, 0, nums[i / 2])
//     // i++
// }
// console.log(newArr)
// l1 = [1, 2, 3]
// l2 = [2, 3, 1]
// for (let i = 0; i < l2.length; i++) {
//     l1.push(l2[i])
// }
// l1.sort((a, b) => a - b)
// console.log(l1)

// function is_power(n) {//вызов функции 
//     if (n === 3) {//точка выхода
//         return true //вернёт true если число равна 3
//     }else if (n % 3 !== 0) {//проверка числа
//         return false//если число не делится на 3 то возвращаем false
//     }else {
//         return is_power(n / 3)//вызов рекурсии (число/3)
//     }
// }
// is_power(81) ? console.log("Yes") : console.log("No")


function min(a, b) {
    return a < b ? a : b
}
console.log(min(3, 1))

let arr = [1, 3, 5, 2, 3, 4]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log("Есть!")
        break
    }
}


