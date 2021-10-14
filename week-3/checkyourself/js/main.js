// function showMessage(message) {
//     console.log(message)
// }

// showMessage(null)

// function calcMultiply(a, b) {
//     return a * b
// }
// let result = calcMultiply(5, 6)
// console.log(result)

// let count = 0
// function counter() {
//     count++
//     console.log(count)
// }
// counter()
// counter()

// let namee = "Kani"
// function func() {
//     // let namee = 'Kubat'
//     function func2() {
//         // let namee = 'Aidai'
//         console.log(namee)
//     }
//     func2()
// }
// func()
// function checkSum() {
//     let a = +prompt("Enter a number")
//     let b = +prompt("Enter a number")
//     let sum = a + b
//     if (sum === 15) {
//         alert("Summa = 15")
//     } else if (sum < 15) {
//         alert("Summa < 15")
//     } else {
//         alert("Summa > 15")
//     }
// }
// checkSum()

// function someFunc() {
//     console.log("Hello World")
// }
// let newFunc = someFunc
// console.log(newFunc)

// function func(a, b, c, d, e,) {
//     let arr = [...arguments]
//     for (let elem of arr) {
//         console.log(elem)
//     }
// }
// func("Hello", true, 25, [], {})


// function func(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (
//             str[i] === 'a' ||
//             str[i] === 'e' ||
//             str[i] === 'u' ||
//             str[i] === 'i' ||
//             str[i] === 'o'
//         ) {
//             str = str.replace(str[i], '');
//             i--
//         }
//     }
//     return str.toUpperCase();
// }
// console.log(func('Hello'))
// console.log(func('Goodbye'))


// function func1(number1, number2) {
//     let arr = []
//     let bool = true
//     for (let i = number1; i < number2; i++) {
//         i = i.toString()
//         bool = true
//         for (let y = 0; y < 4; y++) {
//             if (i[y] % 2 === 1) {
//                 bool = false
//                 break
//             }
//         }
//         if (bool) {
//             arr.push(parseInt(i))
//         }
//     }
//     return arr
// }
// console.log(func1(1000, 2132))
// console.log(func1(2302, 4234))

// function имя(параметры){
//     ...тело...
// }

// function generateRandomPassword() {
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let str = ''
//     for (let i = 0; i < 8; i++) {
//         str += characters[Math.floor(Math.random() * characters.length)]
//     }
//     console.log(str)
// }

// generateRandomPassword()

// function sumTwoNumbers(num1, num2) {
//     let result = num1 + num2
//     return result
// }
// let sum = sumTwoNumbers(10, 20)
// console.log(sum)


// function checkWalking(str) {
//     if (str.length !== 10) {
//         return false
//     }
//     let south = 0, north = 0, west = 0, east = 0
//     for (let i = 0; i < str.length; i++) {
//         switch (str[i]) {
//             case 's':
//                 south++
//                 break
//             case 'w':
//                 west++
//                 break
//             case 'e':
//                 east++
//                 break
//             case 'n':
//                 north++
//                 break
//             default:
//                 console.log("Wrong param")
//                 return false;
//         }
//     }
//     if (south === north && west === east) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkWalking('snwnsesewp'))



// function checkWinner(arr1, arr2) {
//     let novak = 0, raf = 0
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > arr2[i]) {
//             novak++
//         } else {
//             raf++
//         }
//     }
//     if (novak > raf) {
//         console.log("Novak is a winner")
//     } else {
//         console.log("Rafael is a winner")
//     }
// }
// checkWinner([1, 0, 3], [2, 2, 1])
// checkWinner([2, 1, 3], [1, 2, 0])


// function miniMaxSum(arr) {
//     arr.sort((a, b) => a - b)
//     let maxSum = 0
//     let minSum = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         minSum += arr[i]
//         maxSum += arr[i + 1]
//     }
//     console.log(minSum + " " + maxSum)
// }

// let arr = [1, 3, 5, 7, 9]

// miniMaxSum(arr)

// function checkWeek(number) {

//     switch (number) {
//         case 1:
//             return "Понедельник"
//         case 2:
//             return "Вторник"
//         case 3:
//             return "Среда"
//         case 4:
//             return "Четверг"
//         case 5:
//             return "Пятница"
//         case 6:
//             return "Суббота"
//         case 7:
//             return "Воскресенье"
//         default:
//             return "Неправильное число"
//     }
// }

// let week = checkWeek(2)
// console.log(week)

// function sumTwoNumbers(num1, num2) {
//     if (num1 === num2) {
//         return 3 * (num1 + num2)
//     }
//     else {
//         return num1 + num2
//     }
// }
// console.log(sumTwoNumbers(3, 3))
// function checkName(arr, name1) {
//     let bool = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === name1) {
//             bool = true
//             break
//         }
//     }
//     return bool
// }


// let arr = ['Kani', 'Atai', "Ainura", "Daya"]

// if (checkName(arr, 'Atai')) {
//     console.log("Есть")
// } else {
//     console.log("Нету")
// }



// let arr =
//     [[11, 25, 66, 1, 69, 7, 8],
//     [23, 55, 17, 45, 15, 52, 5],
//     [75, 31, 36, 44, 58, 8, 3],
//     [22, 27, 33, 25, 68, 4, 4],
//     [84, 28, 14, 11, 5, 50, 2],
//     [22, 27, 33, 25, 68, 4, 4],
//     [22, 27, 33, 25, 68, 4, 4],
//     [22, 27, 33, 25, 68, 4, 4],
//     ]
// let arr =
//     [[11, 25, 66, 1, 69, 7],
//     [23, 55, 17, 45, 15, 52],
//     [75, 31, 36, 44, 58, 8],
//     [22, 27, 33, 25, 68, 4],
//     [84, 28, 14, 11, 5, 50]]
// [1, 1, 1, 2]]
// [1, 1, 1, 2]]
// [1, 1, 1, 2]]
// let arrLength = arr.length
// let inArrlength = arr[0].length
// for (let i = 0; i < arr.length - 1; i++) {
//     let tempArr = []
//     let x = i
//     let y = 0;
//     while (x < arr.length && y < arr[0].length) {
//         tempArr.push(arr[x][y])
//         x++
//         y++
//     }
//     tempArr.sort((a, b) => a - b)
//     x = i
//     for (let y = 0; y < tempArr.length; y++) {
//         arr[x][y] = tempArr[y]
//         x++
//     }
// }
// for (let y = 1; y < arr[0].length; y++) {
//     let tempArr = []
//     let x = y
//     let i = 0;
//     while (x < arr[0].length && i < arr.length) {
//         tempArr.push(arr[i][x])
//         x++
//         i++
//     }
//     tempArr.sort((a, b) => a - b)
//     x = y
//     for (let i = 0; i < tempArr.length; i++) {
//         arr[i][x] = tempArr[i]
//         x++
//     }
// }
// console.log(arr)
// let tempArr = []
// let y = 0
// for (let i = 0; i < 5; i++) {
//     tempArr.push(arr[i][y])
//     y++
// }
// tempArr.sort((a, b) => a - b)
// for (let i = 0, y = 0; i < 5; i++, y++) {
//     arr[i][y] = tempArr[i]
// }
// console.log(arr)



// [[5, 17, 4, 1, 52, 7],
// [11, 11, 25, 45, 8, 69],
// [14, 23, 25, 44, 58, 15],
// [22, 27, 31, 36, 50, 66],
//     [84, 28, 75, 33, 55, 68]]




//замыкание 
//через глобальную переменную
// let count = 0
// function counter() {
//     count++
//     return count
// }
// counter()
// counter()
// console.log(counter())

// function counter() {
//     let count = 0
//     return function () {
//         count++
//         return count
//     }
// }
// let first = counter()
// first()
// first()
// console.log(first())

// let i = 0
// let arrNums = [1, 2, 3, 4]
// function rec(arr, sum) {
//     sum += arr.pop()
//     i++
//     console.log(`Function ${i} began`)
//     if (arr.length != 0) {
//         // console.log(sum)
//         sum = rec(arr, sum)
//     }
//     console.log(`Function ${i} ended`)
//     i--
//     return sum
// }

// console.log(rec(arrNums, 0))
function rec15(num, degree) {
    if (degree === 1) {
        return num
    }
    if (degree != 1) {
        return (num * (rec15(num, degree - 1)))
    }
}
console.log(rec15(3, 5))
