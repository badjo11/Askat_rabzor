// let xhr = new XMLHttpRequest()

// let list = $('.task-list')
// xhr.open('GET', 'http://localhost:3000/todos')
// xhr.send()
// xhr.onload = function () {
//     // console.log(xhr.response);
//     let data = JSON.parse(xhr.response)
//     // console.log(data);
//     data.forEach(element => {
//         list.append(`<li>${element.task}</li>`)
//     });
// }

//fetch

// let promise = fetch(',http://localhost:3000/todos')
// promise
//     .then(response => (response.json()))
//     .then(data => {
//         // console.log(data)
//         data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//         });
//     })

// ajax
// $.ajax({
//     url: 'http://localhost:3000/todos',
//     type: 'GET',
//     success: function (data) {
//         console.log(data)
//     },
//     error: function () {
//         console.log('ERROR')
//     }
// })

let btn = $('.btn');
let input = $('.task-input');
let list = $('.task-list')
btn.on('click', function () {
    let value = input.val();

})


function postNewTask() {
    fetch('http://localhost:3000/todos', {
        method: 'POST',

    })

}