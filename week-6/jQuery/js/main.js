// let title = $('h1')
// let welcome = $('.welcome')
// let titleById = $('#title')
// let inp = $['[name = inp-name]']
// // console.log(title, welcome, titleById, inp)

// // title.css('color', 'red')
// // welcome.css('background-color', 'pink')

// welcome.addClass('example1')
// console.log(welcome.hasClass('welcome3'))
// // welcome.Class('example1')

// titleById.appendChild(title)

// title.prependTo(titleById)

// $('.center').after('<h3 class="new">New Element</h3>')


// let result = confirm('Are you 18 y.o.?')

// if (result) {
//     $('h1').css('display', 'block')
// }

// $('p').empty()
// $('p').remove()

// $('body').html('<h1>Hello Makers Bootcamp</h1>')
// $('body').after('<div class="container"></div>')


// let clonedElem = $('body').clone()
// // console.log(clonedElem);
// clonedElem[0].children[0].innerText = 'Modified'
// // console.log(clonedElem);
// $('.container').append(clonedElem)


// let num1 = +prompt('Enter first number: ')
// let num2 = +prompt('Enter second number: ')
// let result = num1 + num2

// $('body').html(`<h1>${result}</h1>`)

// function sum() {
//     let num1 = +prompt('Enter first number: ')
//     let num2 = +prompt('Enter second number: ')
//     let result = num1 + num2

//     $('body').append(`<h1>${result}</h1>`)

// }
// function sub() {
//     let num1 = +prompt('Enter first number: ')
//     let num2 = +prompt('Enter second number: ')
//     let result = num1 - num2

//     $('body').append(`<h1>${result}</h1>`)

// }
// function mul() {
//     let num1 = +prompt('Enter first number: ')
//     let num2 = +prompt('Enter second number: ')
//     let result = num1 * num2

//     $('body').append(`<h1>${result}</h1>`)

// }
// function div() {
//     let num1 = +prompt('Enter first number: ')
//     let num2 = +prompt('Enter second number: ')
//     let result = num1 / num2

//     $('body').append(`<h1>${result}</h1>`)

// }



// let inputs = $('input')
// let disableInput = $('input:disabled')
// console.log(disableInput)

// let liTags = $('li')
// liTags.addClass('list-item')
// liTags.toggleClass('active')
// liTags.removeClass('list-item')


// let paragraph = $('.text')
// // paragraph.text(paragraph.text() + ' hello')

// paragraph.html('<strong>JSFS-13</strong>')

// let div = $('#users')
// let users = [
//     {
//         name: 'Aibek',
//         age: 25
//     },
//     {
//         name: 'Seriy',
//         age: 15
//     },
//     {
//         name: 'Tumar',
//         age: 20
//     }
// ]
// users.forEach(item => {
//     div.append(`
//         <p>Имя: ${item.name} Возраст: ${item.age}</p>
//         <strong>${Date()}</strong>
//     `)
// })


// let google = $('a[href="google.com"]')
// console.log('google.com')
// let p = $('p')
// p.text(Date())
// let google = $('a:first-child').attr('href')
// let href = google.attr('href')
// let google = $('a:first')
// let href = google.attr('href', 'amazon.com')
// // google.removeAttr('href')
// google.attr('id', 'global')
// console.log(href)

// let href = google.prop('href')
// console.log(href)
// let img = $('input')
// let src = img.attr('type')
// console.log(src)

let liTags = $('li')
liTags.each(function (index, item) {
    // console.log(index, item)
    $(this).css('color', 'red')
    // if (index % 2 !== 0) {
    //     $(item).css('color', 'red')
    // }
})