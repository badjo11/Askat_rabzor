


let inp_day = $('.inp-days')
let inp_hour = $('.inp-hours')
let inp_min = $('.inp-mins')
let btn = $('.btn-start')
new Date("21-03-2020T11:20:30");

$(function () {
    $('.btn-start').click(function () {
        let countDownDate = new Date().getTime() + (60 * inp_min.val() * 1000) + (60 * 60 * 1000 * inp_hour.val()) + (24 * 60 * 60 * 1000 * inp_day.val());

        console.log(inp_min.val())
        setInterval(function () {

            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            $("#demo").html(days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ");

            if (distance < 0) {
                clearInterval(x);
                $("#demo").html('end');
            }
        }, 1000);
    });
});