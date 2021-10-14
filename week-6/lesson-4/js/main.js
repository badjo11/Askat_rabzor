// $('#btn').on('click', function () {
//     alert('BTN')
// })
$(document).ready(function () {
    // alert('werwerqw')
    // $('#btn').click(function () {
    //     alert('wer')
    // })
    // $(window).on('mousemove', function (event) {
    //     console.log(event)
    // })
    // $(window).mousemove(function (event) {
    //     console.log(event)
    // })
    // $('.default-btn').on('click', function () {
    //     $('.buttons').append('<button class="delete">Delete</button>')
    //     // $('.delete').on('click', function () {
    //     //     alert('delete btn clicked')
    //     // })
    // })
    // $('.buttons').click(('.delete'), function () {
    //     alert('clicked')
    // })
    // $('.block').fadeOut(5000)
    // $('.block').fadeIn(3000)
    // $('.block').hide(3000)
    // $('.block').show(3000)
    // $('.block').fadeOut(2000).delay(3000).show(2000)
    // $('div').click(function (e) {
    //     // console.log(e.target)
    //     // console.log(e.currentTarget)
    //     // console.log(this);
    //     if (e.target !== this) return
    //     alert('Div clicked')
    // })
    // $('p').click(function (e) {
    //     // console.log(e.target)
    //     // console.log(e.currentTarget)
    //     // console.log(this)
    //     if (e.target !== this) return
    //     alert('P clicked')
    // })
    // $('button').click(function (e) {
    //     console.log(this)
    //     // console.log(e.target)
    //     // e.stopPropagation()
    //     if (e.target !== this) return

    //     alert('Button clicked')
    // })

    // $('button').attr('type', 'button')
    // $('button').click(function (e) {
    //     e.preventDefault()
    //     $('h1').text('Makers Bootcamp')
    // })

    console.log('DOM is loaded')
})

let btn = $('button');
// btn.on('click', function () {
//     console.log('hi')
// })
// btn.on('dblclick', function () {
//     console.log('hi')
// })
let input = $('input')
input.focus(() => {
    console.log("Focus")
})
input.blur(() => {
    console.log('Убрали фокус')
    if (!input.val()) {
        input.css('border', '2px solid red')
    } else {
        input.css('border', '2px solid green')
    }
})

input.on('input', function () {
    console.log(input.val())
})

$('p').on('mouseup', function () {
    let selectedText = (window.getSelection().toString())
    $('strong').text(selectedText)
})
let range = $('#range')
let img = $('img')
range.on('input', (e) => {
    img.css('opacity', e.target.value)
})