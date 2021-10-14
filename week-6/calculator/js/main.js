$(document).ready(function () {
    let thisValue = 0;
    let valueOne = 0;
    let valueTwo = 0;

    $('.x1').click(function (event) {
        $('.symbol').css({ 'pointer-events': 'auto' })
        if ($('.x1').hasClass('first-active')) {
            thisValue = $(this).text()
            $('.valueOne').append(thisValue)
            valueOne = $('.valueOne').text()
        } else if ($('.x1').hasClass('second-active')) {
            thisValue = $(this).text()
            $('.valueTwo').append(thisValue)
            valueTwo = $('.valueTwo').text()
        }
    })
    $('.symbol').click(function () {
        let symbol = $(this).html()
        $('.valueSymbol').text(symbol)
    })
})

