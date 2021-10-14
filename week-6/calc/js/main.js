let textBlock = document.querySelector('.answers')
function myFunction(str) {
    textBlock.innerText += str
}
function myFunction1(oper) {
    textBlock.innerText += oper
}
function funcToDelete() {
    // textBlock.innerText -= 1
}

function funcToClear() {
    textBlock.innerText = ''
}
function funcToShowResult() {
    let temp1 = /d+/
    textBlock.replace(temp1, '')
    let tempOper = textBlock[0]
    textBlock.replace(tempOper, '')
    let temp2 = /d+/
    let result = 0
    switch (tempOper) {
        case '*':
            result = temp1 * temp2
            break
        case '+':
            result = temp1 + temp2
            break
        case '/':
            result = temp1 / temp2
            break
        case '-':
            result = temp1 - temp2
            break
    }
    textBlock.innerText = result

}