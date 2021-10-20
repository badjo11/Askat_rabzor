let btnUp = $('#btn-up')
let btnDown = $('#btn-down')
let btnFloor = $('#btn-floor')
let inpFloor = $('#inp-floor')
let elevator = $('.elevator')
elevator.css("height", "500px");
let lift = $('.lift')
let tempTop = 470
let currentFloor = 1
let maxFloor = 16
let minFloor = 1
lift.css({ transition: "1s" })

function goUp() {
    if (tempTop <= 20) {
        alert("Max floor")
        return
    }
    currentFloor++
    tempTop -= 30
    lift.css({ top: tempTop });
    $('h1').html(`Floor: ${currentFloor}`)
}
btnUp.on('click', goUp)
function goDown() {
    if (tempTop === 470) {
        alert("Min floor")
        return
    }
    currentFloor--
    tempTop += 30
    lift.css({ top: tempTop });
    $('h1').html(`Floor: ${currentFloor}`)

}
btnDown.on('click', goDown)
btnFloor.on('click', function () {
    let floor = inpFloor.val()
    if (floor > maxFloor || floor < minFloor) {
        alert('Нет такого этажа')
        return
    }
    if (currentFloor > floor) {
        while (currentFloor > floor) {
            goDown()
        }
    } else {
        while (currentFloor < floor) {
            goUp()
        }
    }
})