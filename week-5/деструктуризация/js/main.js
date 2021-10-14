// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Bread',

// ]
// // console.log(list[0])

// let [first, second, ...other] = list
// console.log(first, second, other)

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ]
// let [[a, b, c, d], other] = arr
// console.log(a)


// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// }
// let { age, name, lastName } = person
// console.log(age, name, lastName)

// let obj1 = {
//     subObj: {
//         name: 'Jack'
//     }
// }
// let { subObj: { name } } = obj1
// console.log(name)

// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// }

// let { arr: [{ name }] } = obj
// console.log(name)


// function foo({ name, age }) {
//     console.log(age)
// }

// let person = {
//     name: 'Makers',
//     lastName: 'Bootcamp',
//     age: 2
// }
// foo(person)

// let arr = [1, 2, 3, 4, 5]
// let [,,,four] = arr
// console.log()


// function foo(a) {
//     console.log(a)
// }
// let arr = [1, 2, 3, 4, 5]
// foo(...arr)

// let a = {
//     age: 20
// };
// // let b = {
// //     age: 20
// // };
// let b = { ...a }
// b.age = 30
// console.log(a, b)
// console.log(a === b)

// let user = {
//     name: 'Aisultan',
//     age: 20,
//     languages:
//     {
//         english: '2 level',
//         french: '3 level'
//     }
// }
// let newUser = user
// newUser.name = 'Aibek'
// console.log(newUser.name, user.name)
// let newUser = Object.assign({}, user)
// newUser.name = 'Aibek';
// newUser.languages.english = '6 level'
// console.log(user)
// console.log(newUser)

// let product = {
//     title: "T-Shirt",
//     price: {
//         s: 3000,
//         m: 4000,
//         l: 5000,
//     },
// };

// let newProduct = JSON.parse(JSON.stringify(product))
// console.log(newProduct)
// newProduct.price.s = 100000
// console.log(product)
// console.log(newProduct)

// let student = {
//     name: "Melis",
//     surname: "Artykbaev",
// };

// let { name, surname } = student;
// console.log(name, surname)

// let arr = ['true', 10, null]
// // let boolean = arr[0]
// // console.log(boolean)
// let [boolean, num] = arr
// console.log(boolean, num)

// let obj = {
//     name: "Market",
//     frameworks: ["React", "Django"],
//     versions: {
//         legacy: [2011, 2012, 2013]
//     },
// };
// let { versions: { legacy: [, year] } } = obj
// console.log(year)
// let { name: projectName } = obj
// console.log(projectName)


// let user = {
//     // name: "John",
//     age: '22',
// };

// let { name = prompt("Enter a name"), age = +prompt("enter age") } = user
// console.log(name, age)


// function showUser({ name = 'Ishak', lastName, age }) {
//     console.log(name, lastName, age)
// }

// let obj = {
//     lastName: 'Boobekov',
//     age: 24,
// };
// showUser(obj)

// Вам дан объект с информацией о книге.С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//         title: 'The Hobbit, or There and Back Again',
//         description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//         texts: [{
//             author: 'J. R. R. Tolkien',
//             price: 120,
//             ISBN: '912-6-44-578441-0'
//         }]
//     }
// ];
// let [{ texts: [{ ISBN: number }] }] = courseCatalogMetadata
// console.log(number)

// let arr = [
//     { id: 1 },
//     { id: 1 },
//     { id: 1 },
//     { id: 2 },
//     { id: 2 },
//     { id: 2 },
//     { id: 3 },
//     { id: 3 },
//     { id: 3 },
//     { id: 3 },
// ]

// function uniq(arr) {
//     let uniqArr = []
//     arr.forEach(item => {
//         let check = uniqArr.filter((element) => item.id === element.id)
//         if (check.length === 0) {
//             uniqArr.push(item)
//         }
//         console.log(uniqArr)
//     });
//     return uniqArr
// }

// let newArr = uniq(arr)
// console.log(newArr)


// let arr = [1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]
// let newArr = []
// arr.forEach((item) => {
//     let check = newArr.filter(elem => {
//         console.log("Это элем", elem, "Это item", item)
//         return elem === item
//     })
//     if (check.length === 0) {
//         newArr.push(item)
//     }
// })
// console.log(newArr)


// let nums = [10, 21, 15, 5];
// let newNums = nums.map(item => item ** 2)
// console.log(newNums)

// let students = {
//     name: 'Aibek',
//     courses: {
//         javascript: {
//             price: 200,
//             duration: 3,
//         },
//         python: {
//             position: 'intro',
//             lesson: 1,
//         },
//     },
// }
// let { courses: { python: { position } } } = students
// console.log(position)

// let user = {
//     name: "Igor",
//     age: 25,
//     friends: ['Ilyas', 'Kostya'],
//     children: [
//         { name: 'Kolya', age: 3 },
//         { name: 'Petr', age: 10 },
//     ],
//     parents: [
//         { name: 'Victor', age: 55 },
//         {
//             name: 'Vasilisa',
//             age: 53,
//             friends: {
//                 close: ['Shergazy', 'Aleskandra'],
//                 notClose: [],
//             }
//         }
//     ],
//     jobs: {
//         frontEnd: {
//             language: "JavaScript",
//         },
//         backEnd: {
//             languages: {
//                 java: {
//                     version: 8,
//                     frameworks: {
//                         spring: {
//                             version: 1,
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// let { parents: [, { friends: { close: [, alex] } }] } = user
// let { children: [, secondChild] } = user
// console.log(alex)
// let { jobs: { backEnd: { languages: { java: { frameworks: { spring: { version } } } } } } } = user
// console.log(version)

// function calcDays(age) {
//     return age * 365
// }

// console.log(calcDays(30))

// function rec(num) {
//     if (num === 100) {
//         return
//     }
//     console.log(num)
//     rec(++num)
// }

// rec(1)
let num = 12
console.log($num)