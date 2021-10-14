// console.log("Hello world");

let string = "abcd";
const number = 10;
// console.log(number);
let boolean = true;
let typeNull = null;
let typeUndefined = undefined;
// console.log(typeNull);
// console.log(typeUndefined);
let object = {
    title: "Adidas zone",
    color: "green",
    size: 44,
    brand: "Adidas",
    gender: "male",
    'description-1': "Good shoes"
}

let newObj = object
newObj.title = "Nike Airforce"

// console.log(object);
// let firstStr = "JS122"
// let secondStr = firstStr
// secondStr = "JS13-FULLSTACK"
// console.log(firstStr)
// console.log(secondStr)


// alert, prompt, confirm
// let res = alert('Hi')
// console.log(res)
// let nam = prompt("Введите ваше имя")
// alert('Привет ' + nam)
// let result = confirm("Вам есть 14 лет?")
// console.log(result)

// let num1 = '10'
// let num2 = 20
// let sum = num1 + num2
// console.log(sum)

// console.log(1 + '1' - 1)
// console.log(10 <= 10)
// console.log(10 >= 11)
// console.log('11' == 11)

// let num1 = +prompt("Введите первое число")
// let num2 = +prompt("Введите второеое число")
// alert(num1 ** num2)

let user = {
    name: "Beknazar",
    lastName: "Omurbek",
    age: 23
}

// console.log("Добро пожаловать " + user.name + " " + user.lastName + " на наш сайт")
// console.log(`Добро пожаловать ${user.name} ${user.lastName} на наш сайт`)

let obj = {
    5: 0,
    '5': 10,
    5: 333
}

// console.log(obj)
// console.log(obj['5'])

let list = [1, 2, 3, 4, 5, "Heelo", { arr: 123 }, ["first", "second"]]
console.log(list[6])
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])
// }

// let a = +prompt("Дайте сторону")
// alert(a * a * a)
let a = +prompt("Дайте первую сторону")
let b = +prompt("Дайте вторую сторону")
alert((a + b) * 2)
