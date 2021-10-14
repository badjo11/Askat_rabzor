// let elevator = {
//     currentFloor: 1,
//     maxFloor: 16,
//     minFloor: 1,
//     printFloor: function () {
//         console.log(this.currentFloor);
//     },
//     upOneFloor: function () {
//         if (this.currentFloor < this.maxFloor) {
//             this.currentFloor++;
//             this.printFloor();
//         } else console.log(`We are in ${this.maxFloor}`);
//     },
//     downOneFloor: function () {
//         if (this.currentFloor > this.minFloor) {
//             this.currentFloor--;
//             this.printFloor();
//         } else console.log(`We are in ${this.minFloor}`);
//     },
//     toFloor: function (numOfFloor) {
//         if (numOfFloor >= this.minFloor && numOfFloor <= this.maxFloor) {
//             if (this.currentFloor > numOfFloor) {
//                 while (this.currentFloor > numOfFloor) {
//                     this.downOneFloor();
//                 }
//             } else {
//                 while (this.currentFloor < numOfFloor) {
//                     this.upOneFloor();
//                 }
//             }
//         }
//         else {
//             console.log(`${this.maxFloor} is max floor, ${this.minFloor} is min floor`)
//         }
//     },
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.downOneFloor()
// elevator.toFloor(15);


// let obj1 = {
//     name: 'Kubat',
//     age: 24,
// };
// let obj2 = obj1
// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.name = 'Askat'
// console.log(obj1, obj2)


// let arr = [1, 2, 3, 4]

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr
// })
// console.log(sum)

// let i = 3
// switch (i) {
//     case 1:
//         console.log(1)

//     case 2:
//         console.log(2)
//         break
//     default:
//         console.log('not 1 and 2 ')

// }
// let i = 5, y = 2
// while (i < 10 || y < 3) {
//     console.log(i, y)
//     i++
//     y++
// }
// do {
//     console.log(i, y)
//     i++
//     y++
// }
// while (i < 5 && y < 2)


// console.log(0 == false)

// 3 </ 5 ? console.log(true) : console.log(false)

// let i1 = +prompt('Enter')
// console.log(typeof i1)

// let str = 'JavaScript'
// console.log(str)
// str = str.split("")
// console.log(str)
// str.reverse()
// console.log(str)
// str = str.join("")
// console.log(str)

// let arr1 = [1, 2, 3]
// let newArr = [4, 5, 6]
// arr1 = arr1.concat(newArr)
// console.log(arr1)
// let arr1 = [1, 2, 3, 4, 5]
// arr1.splice(2, 2)
// console.log(arr1)


// let array = [1, 2, 4, 4, 5]
// console.log(array.some((item, index) => {
//     return item < 0
// }))

// let str = '123'
// let number = parseInt(str)
// number = number.toString()
// consollet e.log(typeof number)

// let obj2 = JSON.parse(JSON.stringify(obj))

// obj2.name = 'Kolya'
// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// for (let i = digits.length - 1; i >= 0; i--) {
//     if (arr[i] !== 9) {
//         arr[i] += 1
//         break
//     } else {

//     }
// }
// console.log(digits)

// function func(num) {
//     let count = 0
//     return function (num1) {

//         count++
//         console.log(num1)
//     }
// }
// let first = func(2)
// first(3)
// first(4)
// first(5)
// let second = func(3)
// second(2)
// second(2)

// let arr = [1, 2, 3, 4]
// for (let i in arr) {
//     console.log(i)
// }
// let obj = {
//     name1: 'Jan',
//     age: {
//         myage: {
//             ri: {

//                 say: () => {
//                     console.log(this)
//                 }
//             }
//         }

//     },
//     sayH() {
//         say()
//     }

// }
// obj.sayH()
// for (let i in obj) {
//     console.log(obj[i])
// }
// let arr = [1, 2, 3, 4, 5]
// let [first, second, ...spread] = arr
// console.log(spread)

// function fact(num) {
//     if (num === 1) {
//         return 1
//     }
//     return num * fact(num - 1)
// }

// console.log(fact(5))

// let nums = [1, 2, 3, 4]
// // let [first, , ...other] = nums
// let newArr = [...nums]
// console.log(newArr)


// let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [1, 1, 1, 1, 1]
// let l = []
// let i = 0
// let temp = 0
// while (l1.length !== l2.length) {
//     if (l1.length < l2.length) {
//         l1.push(0)
//     } else
//         l2.push(0)
// }
// let j = 0
// console.log(l1)
// console.log(l2)

// while (l1.length > 0 || l2.length > 0) {
//     temp = 0
//     l.push((l1[i] + l2[i]) % 10)
//     if (l1[i] + l2[i] > 9) {
//         temp = 1
//     }
//     l1.shift()
//     l2.shift()
//     if (temp) {
//         l[j]++
//     }
//     j++
// }
// console.log(l)

// let s = 'zbax', k = 2
// let temp = ''
// let aplha = 'abcdefghij'
// for (let i = 0; i < s.length; i++) {
//     temp += aplha.indexOf(s[i]) + 1

// }
// let ans = 0
// for (let i = 0; i < k; i++) {
//     ans = 0
//     for (let j = 0; j < temp.length; j++) {
//         ans += parseInt(temp[j])
//     }
//     temp = ans.toString()
// }
// console.log(ans)
// function rec(num) {
//     if (num <= 0) {
//         return
//     }
//     else {
//         console.log(num)
//         rec(num - 1)
//     }
// }
// // rec(5)
// let regexp = /^\+996\d{9}$/
// if (regexp.test('+9965051553568')) {
//     console.log('Valid number, KG')
// } else {
//     console.log('Invalid number')
// }
// function checkMail(str) {
//     let regexp = /^\S+@\S+$/
//     if (regexp.test(str)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkMail('beka@gmail.com'))

