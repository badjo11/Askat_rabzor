//Простые методы массивов

//push, pop, shift, unshift

// let arr = [1, 2, 3]

// arr.push(4)//добавляет в конец

// console.log(arr)
// arr.pop()//вырезает один элемент с конца
// console.log(arr)

// let arr = ["Kyrgyzstan", "Uzbekistan", "Russia"]
// arr.unshift("China")
// console.log(arr)

//splice, slice
// let nums = [22, 40, 38, 50]
// let res = nums.splice(0, 1, '1')
// console.log(nums)
// console.log(res)

// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2)
// // массив.slice(с какого начать, по какой не включительно)

// let arr = [1, 2, 3, 4, 5]

// let str = arr.join(" ")
// console.log(arr)
// console.log(str)
// let newArr = str.split(" ")//из строки делает массив
// console.log(newArr)

// let nums = [1, 2, 30, 11, 101, 22, 86]
// nums.sort((a,b) => a - b)
// console.log(nums)


// Concat
// let res1 = [1, 2, 3]
// let res2 = [4, 5, 6]
// let res = res2.concat(res1, ["str", "boolean"])
// console.log(res)


// let arr = ["Ryu", "Ken", "Chun-Li", "Camel", "Sakura"]

// for (let i = 0; i < arr.length; i++) {
//     arr.splice(i, 1, [arr[i], i])
// }
// console.log(arr)


// let mixedUsers = [
//     {
//         role: "user",
//     },
//     {
//         role: "admin",
//     },
//     {
//         role: "admin",
//     },
//     {
//         role: "user",
//     },
//     {
//         role: "user",
//     },
//     {
//         role: "admin"
//     }

// ]
// let admins = []
// let users = []

// for (let i = 0; i < mixedUsers.length; i++) {
//     if (mixedUsers[i].role === 'admin') {
//         admins.push(mixedUsers[i])
//     }
//     else if (mixedUsers[i].role === 'user') {
//         users.push(mixedUsers[i])
//     }
// }
// console.log(admins)
// console.log(users)


let products = [
    { size: 's' },
    { size: 's' },
    { size: 's' },
    { size: 's' },
    { size: 'l' },
    { size: 'l' },
    { size: 'l' },
    { size: 'l' },
    { size: 'm' },
    { size: 'm' },
]
let s = 0, l = 0, m = 0
let sSizes = [], lSizes = [], mSizes = []
for (let i = 0; i < products.length; i++) {
    if (products[i].size === 's') {
        sSizes.push(products[i])
    }
    else if (products[i].size === 'l') {
        lSizes.push(products[i])
    }
    else if (products[i].size === 'm') {
        mSizes.push(products[i])
    }
}
console.log(sSizes)
console.log(lSizes)
console.log(mSizes)



