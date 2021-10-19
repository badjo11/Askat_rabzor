// for (let i = 1; i < 1000000000; i++) {

// }

// console.log('hello')
// alert('hello')
// console.log('Bootcamp')


// setTimeout(() => {
//     console.log('1')
// }, 2000)

// console.log('2')

// function func() {
//     console.log('hello 1')
// }
// setTimeout(func, 1000)
// setTimeout(() => {
//     console.log('hello 2')
// }, 999)

// console.log('hello 3')

// const id = setTimeout(() => {
//     console.log(1);
// }, 1000)

// const id2 = setTimeout(() => {
//     console.log(2);
// }, 1500)
// console.log(id);
// clearTimeout(id2);

// let i = 0;
// const id = setInterval(() => {
//     console.log(`Hello ${++i}`);
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
// }, 5000)


//Promise
// const age = 21
// const newPromise = new Promise(function (resolve, reject) {
//     if (age >= 21) {
//         resolve({ age, status: true })
//     } else {
//         reject({ age, status: false })
//     }
// })

// newPromise
//     .then((result) => console.log(result, 'Success'))
//     .catch((error) => console.log(error, 'Error'))
//     .finally(() => console.log('Finish'))
// console.log(newPromise);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('Say hello')
//             }, 1000)
//         }))
//     }, 1000)
// })

// // console.log(p);
// p
//     .then(promise => console.log(promise))
//     .catch(error => console.log(error))

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/')
// xhr.send();
// xhr.onload = function () {
//     console.log(JSON.parse(xhr.response));
// }





// let arr = []




// setTimeout(() => {
//     // arr.forEach(item => {
//     //     item[]
//     // })
//     console.log(arr)

// }, 100)

// setTimeout() позволяет нам вызвать функцию только один раз через определённый промежуток времени
// setTimeout(() => {
//     console.log('Zero');
// }, 0)

// console.log('first')
// console.log('second')
// console.log('third')
// setInterval() позволяет вызвать функцию регулярно, через определённый промежуток времени
// let id = setInterval(() => {
//     console.log("hi");
// }, 1000);


// setTimeout(() => {
//     clearInterval() чтобы остановить setInterval
//     clearInterval(id)
// }, 2000);

// Promise - это объект, у которого есть 3 состояния
// pending - ожидание
// fullfilled - успешно выполнено (resolve)
// rejected - выполнено с ошибкой

// const promise = new Promise((resolve, reject) => {
//     let age = prompt('enter age')
//     if (age > 25) {
//         resolve("true")
//     } else {
//         reject("false")
//     }
// })

// promise.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Itog");
// })


// let API = 'https://pokeapi.co/api/v2/pokemon/'
// fetch(API).then((response) => {
//     response.json()
//         .then((value) => {
//             console.log(value.results);
//         })
// })
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
//     var instance = M.Collapsible.getInstance(elem);
// });

// instance.open(3);
// Or with jQuery

// $(document).ready(function () {
//     $('.collapsible').collapsible();
// });

let tbody = $('tbody')
let prev = $('.prev'), next = $('.next')
let preloader = $('.preloader')
let API = 'https://swapi.dev/api/people'
function render(url) {

    preloader.css('display', 'none')
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            preloader.css('display', 'none')
            tbody.html("")
            data.results.forEach(item => {
                tbody.append(`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.eye_color}</td>
                        <td>${item.mass}</td>
                        <td>${item.height}</td>

                    </tr>
                `)
            })
            if (!data.previous) {
                prev.addClass('disabled')
            } else {
                prev.removeClass('disabled')
                prev.attr('id', data.previous)
            }

            if (!data.next) {
                next.addClass('disabled')
            } else {
                next.removeClass('disabled')
                next.attr('id', data.next)
            }
            console.log(data);
        })
}

next.on('click', (e) => {
    let url = e.currentTarget.id
    render(url)
})
prev.on('click', (e) => {
    let url = e.currentTarget.id
    render(url)
})
render(API)



// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(result => (result.json()))
//     .then(data => ((data.results.forEach(element => {
//         // console.log(element.name)
//         $('body ul').append(`<li>${element.name}</li>`)

//     }))))
// setTimeout(() => {
//     $('body ul').find('li').each(function () {
//         $(this).click(function () {
//             console.log((this));
//         })
//     })
// }, 50);

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//     .then(result => (result.json()))
//     .then(data => (console.log(data.name, data.height, data.weight, data.types[0].type.name, data.types[1].type.name, data)))


