// const arrowFunc = arg => {
//     console.log(arg)
// }
// arrowFunc("hi")

// function func() {
//     console.log(arguments)
//     let arr = []
//     arr.push(...arguments)
// }


//arguments со стрелочными функциями не работает
// let func = () => {
//     console.log(...arguments)
// }
// func("str", 10, true)

// let km = +prompt("Enter km")
// const convert = (arg) => {
//     let m = arg * 1000
//     alert(`${m}  метров`)
// }
// convert(km)

//методы объектов
// let user = {
//     name: "Ilyuha",
//     sayHello: function (arg) {
//         console.log(`Hello ${arg}`)
//     },
//     sayHello(arg) {
//         console.log(`Hello ${arg}`)
//     },
//     sayHello: (arg) => {
//         console.log(`Hello ${arg}`)

//     },
// }
// user.sayHello("Dan")
// user.sayHello("Balan")

//this

// find = 19

// function sum (){

// }

// console.log(this)


// let obj = {
//     title: "JS77",
//     sayContext() {
//         console.log(this)
//     },
//     sayContextArrow: () => {
//         console.log(this)
//     },
//     func() {
//         let arrowFunc = () => {
//             console.log(this)
//         }
//         arrowFunc()
//     }
// }
// // console.log(obj)
// obj.sayContext()
// obj.sayContextArrow()
// obj.func()

// let user = {
//     name: "Erlan",
//     sayName: function () {
//         console.log(this.name)
//     }
// }

// let newUser = { ...user }
// newUser.name = "Islam"
// user.sayName()
// newUser.sayName()

// let passenger = {
//     firstName: "Sam",
//     lastName: "Winchester",
//     passportNum: "US12345678",
//     baggage: 20,

//     getInfo() {
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}kg.`)
//     },
//     setBaggage(arg) {
//         this.baggage = arg
//     }
// }

// passenger.getInfo()
// passenger.setBaggage(30)
// passenger.getInfo()

// let user = {
//     name: "Sam",
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     buyTicket(count) {
//         if (this.balance >= 400 * count) {
//             this.tickets += count;
//             this.balance -= 400 * count
//             console.log(`Вы успешно купили ${count} билет(ов)`)
//         } else {
//             let buyedTickets = Math.floor(this.balance / 400)
//             this.tickets += buyedTickets
//             this.balance -= 400 * buyedTickets
//             console.log(`Недостаточно средств для покупки ${count} билет(ов), куплено ${buyedTickets} билет(ов)`)

//         }
//     },
//     addToBalance(sum) {
//         this.balance += sum
//     },
//     showInfo() {
//         console.log(`${this.balance} our balance, ${this.tickets} our tickets`)
//     }
// }
// user.showInfo()
// user.buyTicket(4)
// user.showInfo()
// user.addToBalance(1000)
// user.buyTicket(5)
// user.showInfo()


function tribonacci(n) {
    if (n === 0 || n === 1) {
        return 0
    } if (n === 2) {
        return 1
    } else {
        return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
    }
}
console.log(tribonacci(5))

// 0,1,1,2,4,7,13,24,44,81,149