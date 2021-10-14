// function min(a, b) {
//     return a < b ? a : b
// }
// console.log(min(3, 1))


// let arr = [1, 3, 5, 2, 3, 4]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log("Есть!")
//         break
//     }
// }

// let sum = (a, b) => a + b
// console.log(sum(3, 4))


// let lang = 'en'
// let arr = []
// if (lang === 'ru') {
//     arr.push("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье")
// }
// else if (lang === 'en') {
//     arr.push("Monday", "Tuesday", "Wendsday", "Thurday", "Friday", "Saturday", "Sunday")
// }
// console.log(arr)


// function func(str) {
//     str = str.split(" ")
//     for (let i = 0; i < str.length; i++) {
//         if (str[i][0] === ) {
//             str.splice(i, 0)
//             console.log("h")
//         }
//     }
//     return str
// }
// let str = "hello world Hot"
// console.log(func(str))


// let min = 33
// if(min > 0 && min <= 15){
//     console.log(`${min} входит в первую четверть часа`)
// }
//  else if (min > 15 && min <= 30 ){
//     console.log(`${min} входит во вторую четверть часа`)
//  } 
//  else if ( min > 30 && min <=45 ){
//     console.log(`${min} входит в третью четверть часа`)
//  }


// let arr = ['r', 'r', '2', '3']
// arr = arr.join(",")
// console.log(arr)

// let str = ''
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i]
// }
// console.log(str)

let n = 1000
let count = 0
while (n > 50) {
    n /= 2
    count++
}

console.log(n)
console.log(count)