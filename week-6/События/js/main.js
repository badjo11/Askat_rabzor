
// // let btn = document.getElementById('btn');
// // // btn.addEventListener('click', () => {
// // //     console.log('Hello Makers')
// // // });

// // btn.addEventListener('click', handler);

// // btn.addEventListener('click', handler2);
// // function handler() {
// //     alert('Thank you')
// // }
// // // btn.onclick = () => alert('Huy')
// // function handler2() {
// //     alert('Thank you again')
// // }

// // btn.removeEventListener('click', handler)



// // let h1 = document.querySelector('h1')
// // let inp = document.querySelector('#inp')
// // console.log(h1, inp)

// // inp.addEventListener('change', function (event) {
// //     h1.innerText = event.target.value
// //     event.target.value = ''
// // })


// // inp.addEventListener('input', function (event) {
// //     h1.innerText = event.target.value
// //     console.log(event);
// // })
// // let count = 0
// // inp.addEventListener('keydown', function (event) {
// //     // h1.innerText = event.target.value
// //     console.log(event);
// //  l   h1.innerText = event.key
// // })


// // let btn = document.querySelector('#btn')
// let inp = document.querySelector('#inp')
// // let container = document.querySelector('#container')


// let addElemToContainer = function () {
//     // console.log(inp.value)
//     let newElem = document.createElement('div');
//     if (!inp.value) return
//     newElem.innerText = inp.value;
//     document.body.append(newElem)
//     inp.value = ''
// }

// // btn.addEventListener('click', addElemToContainer)
// inp.addEventListener('change', addElemToContainer)


// // let checkedDiv = document.getElementsByClassName('checked_div')[0];

// // checkedDiv.addEventListener('click', function (event) {
// //     console.log(checkedDiv.id)
// //     console.log(checkedDiv.classList[0])

// // });

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Dom полностью загружен")
// })

// // let btn = document.querySelector('button')
// // btn.onclick = () => {
// //     alert('Clicked')
// // }

// // let h1 = document.createElement('h1');
// // document.body.append(h1);
// // h1.innerText = `Width:  Height: `;
// // window.addEventListener('resize', function (event) {
// //     let heigth = window.innerHeight;
// //     let width = window.innerWidth;
// //     h1.innerText = `Width: ${width} Height: ${heigth}`;
// // });


// let input = document.querySelector('input')
// input.addEventListener('paste', function (e) {
//     alert('Нельзя вставлять текст')
// })


// input.addEventListener('copy', function (e) {
//     alert('Нельзя копировать')
// })

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOCUMENT READY');
});