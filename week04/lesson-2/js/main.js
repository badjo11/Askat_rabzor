// function init() {
//     let name = "Adilet"
//     return function () {
//         console.log(name)
//     }
// }

// let showName = init()
// showName()


// function words(arg1) {
//     return function (arg2) {
//         console.log(arg1, arg2)
//     }
// }
// let hello = words("Hello")
// // hello("World")
// function sayHi(strName, strSurname) {
//     return function () {
//         strName = strName + " " + strSurname
//         return strName
//     }
// }
// let say = sayHi("John", "Doe")
// console.log(`Hello, ${say()}`)


// function toSum(num){
//     if(num<=1)return num
//     return num + toSum(num - 1)
// }
// let result = toSum(5)
// console.log(result)

// function func(arr, count) {

//     if (arr.length < 1) return 0
//     let currentNum = arr.shift()
//     return currentNum === 1 ? 1 + func(arr) : func(arr)

// }


// let arr = [32, 2, 1, 4, 1, -8, 9, 1, 2]
// console.log(func(arr, 0))


// function func(arr) {
//     if (arr.length < 1) return 0
//     let currentNum = arr.shift()
//     return Number.isInteger(currentNum) ? currentNum + func(arr) : func(arr)
// }

// let arr = [true, 7, 2, 'Hello', 3]
// console.log(func(arr))

// function fib(num) {
//     if (num > 1)
//         return fib(num - 1) + fib(num - 2)
//     return 1
// }
// console.log(fib(9))

// function reverseString(str) {
//     if (!str)
//         return "";
//     else
//         return reverseString(str.substr(1)) + str.charAt(0);
// }
// console.log(reverseString("hello"))
// let sum = 0
// function countNumbers(arr, i = 0) {
//     if (i === arr.length) return;
//     if (Array.isArray(arr[i])) countNumbers(arr[i])
//     else {
//         if (typeof arr[i] === "number") {
//             sum = sum + (arr[i] * arr[i])
//         }
//     }
//     countNumbers(arr, i + 1)
// }


// let arr1 = [[1, 2], 3];
// countNumbers(arr1)
// console.log(sum)

// function bubbleSort(arr, len) {

//     if (len == 1)
//         return;

//     for (let i = 0; i < len - 1; i++)
//         if (arr[i] > arr[i + 1]) {

//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     console.log(arr)
//     bubbleSort(arr, len - 1);
// }

// let arr = [64, 34, 25, 12, 22, 11, 9]
// bubbleSort(arr, arr.length);


// let arrowFunc = () => {
//     console.log("Hello, World")
// }

// let arrowFunc = () => console.log("Heelo, Wrodl")

// let arrowFunc = (arg1, arg2) => arg1 + arg2

// let arrowFunc = arg1 => console.log(arg1)
// arrowFunc(7)

// let arrowFunc = (a1, a2, a3) => {
//     console.log();
// }
// arrowFunc(12, 12, 12)

// let person = {
//     name: "John",
//     age: 22,

//     sayHello() {
//         console.log("Hello, World")
//     },

//     sayName: function () {
//         console.log(`My name is ${this.name}`)
//     },
//     sayAge() { console.log(`I'm ${this.age} y.o.`) }
// }

// console.log(person.age)
// person.sayHello()
// person.sayName()
// person.sayAge()
// let person2 = { ...person };
// console.log(person2)
// person2.name = "Kani"
// person2.age = 23
// person2.sayName()
// person2.sayAge()

// let obj1 = {
//     name: "Kani",
//     age: 20,
//     obj2: {
//         name: "Kubat",
//         sayName: function () {
//             console.log(`${this.name}`)
//         }
//     }
// }

// obj1.obj2.sayName()

// function func(a) {
//     return function (b) {
//         return a + b
//     }
// }
// let sum = func(5)(6)
// console.log(sum)
// console.log(func(5)(6))


// let obj1 = {
//     alert(a) {
//         console.log(a + "Obj1")
//     },
//     hello: () => {
//         let obj2 = {
//             alert(a) {
//                 console.log(a + 'obj2')
//             },
//             hello2: () => {
//                 this.alert("Alert")
//             }
//         }
//         obj2.hello2()
//     }
// }
// obj1.hello()

// let elevator = {
//     currentFloor: 1,
//     printFloor() {
//         console.log(`Current floor is ${this.currentFloor}`)
//     },
//     upOneFloor() {
//         if (this.currentFloor < 16) {
//             this.currentFloor++
//         }
//     },
//     downOneFloor() {
//         if (this.currentFloor > 1) {
//             this.currentFloor--
//         }
//     },
//     toFloor(number) {
//         if (number > 0 && number < 17) {


//             if (number > this.currentFloor) {
//                 while (number !== this.currentFloor) {
//                     this.upOneFloor()
//                     // this.printFloor()
//                 }
//             } else if (number < this.currentFloor) {
//                 while (number !== this.currentFloor) {
//                     this.downOneFloor()
//                     // this.printFloor()
//                 }
//             }
//             this.printFloor()
//         } else {
//             console.log("Entered a wrong number")
//             this.printFloor()
//         }
//     }
// }
// elevator.toFloor(6)
// elevator.toFloor(17)
// elevator.toFloor(1)
// elevator.toFloor(16)
// elevator.toFloor(12)



