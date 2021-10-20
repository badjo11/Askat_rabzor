
function render() {
    let arrOfWords = [
        {
            word: "макака",
            desc: "Порода обезьяны",
        }, {
            word: "помидор",
            desc: "Овощь",
        }, {
            word: "школа",
            desc: "11 лет",
        }, {
            word: "рюкзак",
            desc: "носить на плече",
        }, {
            word: "бутылка",
            desc: "Ёмкость для напитков",
        },
    ]
    let randomObject = arrOfWords[Math.round(Math.random() * (arrOfWords.length - 1))]
    let word = randomObject.word
    let desc = randomObject.desc
    let textWord = randomObject.word
    word = word.split("")
    let textDiv = $('.text-div')

    let arrOfDivs = [$('.verevka'), $('.head-1'), $('.body-1'), $('.r-hand'), $('.l-hand'), $('.r-foot'), $('.l-foot')]
    arrOfDivs.forEach(item => {
        item.css('display', 'none')
    })
    $('.text-div').empty()
    let countMistakes = 0
    for (let i = 0; i < word.length; i++) {
        textDiv.append(`<input type="text" maxlength="1" class="text" id="text-${i}" value="x" />`)
    }
    // console.log(textWord)
    $('h3').text(`${desc}`)
    $('body').keypress(function (e) {
        let letter = e.originalEvent.key
        // console.log(e.originalEvent)
        // console.log(letter + " l")
        // console.log('12')
        if (textWord.indexOf(letter) !== -1) {
            word.forEach((element, i) => {
                // console.log(element)
                if (element === letter) {
                    $(`#text-${i}`).val(`${letter}`)
                    $(`#text-${i}`).css('color', 'blue')
                }
            });
        } else {
            arrOfDivs[countMistakes].css('display', 'block')
            countMistakes++
            if (countMistakes === 7) {
                alert(`Вы проиграли, правильное слово: ${textWord}`)
            }
        }
        let bool = true
        $('.text').each((i, item) => {
            if (item.value === 'x') {
                bool = false
            }
        })
        if (bool) {
            alert(`Победа, слово: ${textWord}`)
        }
    })
}
let btnStart = $('#btn-start')
btnStart.on('click', render)