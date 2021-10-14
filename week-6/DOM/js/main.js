// console.log(typeof document.getElementById('title'))
// let title = document.getElementById('title')
// let list = document.getElementsByTagName('ul')
// let items = document.getElementsByClassName('item')
// let inp = document.getElementsByName('inp_name')
// console.log(inp)

// let title = document.querySelector('#title')
// let list = document.querySelectorAll('ul')
// let items = document.querySelectorAll('.item')
// let inp = document.querySelectorAll('[name = "inp_name"]')
// console.log(inp)

// let items = document.getElementsByClassName('item')
// let items2 = document.querySelectorAll('.item')
// let list = document.getElementsByTagName('ul')
// list[0].innerHTML += '<li class = "item">New Item </li>'
// console.log(items);
// console.log(items2);

// console.log(list);

// for (let i = 0; i < items2.length; i++) {
//     console.log(items2[i]);
// }
// let example = document.getElementById('hello')
// console.log(example.innerHTML);
// example.innerText = 'New Data'
// console.log(example.innerText)

// let h2s = document.querySelectorAll('h2')
// console.log(h2s)
// let h2s = document.getElementsByTagName('h2')
// h2s.forEach(item => {
//     item.innerText = 'Hello World'
//     console.log(item)
// })

// let items = document.querySelectorAll('.item')
// console.log(items)
// items.forEach((item, index) => {
//     // item.innerHTML = `${item.innerHTML} ${index + 1}`
//     // item.style.color = 'red'
//     // item.style.backgroundColor = 'green'
//     if (index % 2 === 0) {
//         item.style.backgroundColor = 'pink'
//     }
// })

//создание элемента
// let newElem = document.createElement('div')
// newElem.innerHTML = '<span>I am a new element</span>'

// //добавление элемента
// // console.log(cont)
// cont[0].appendChild(newElem)
// newElem.style.color = 'brown'
// newElem.style.fontSize = '25px'


// let cont = document.querySelectorAll('.container')
// let elem1 = document.createElement('div')
// let elem2 = document.createElement('div')
// let elem3 = document.createElement('div')
// elem1.innerText = 'Element 1'
// elem2.innerText = 'Element 2'
// elem3.innerText = 'Element 3'

// cont[0].append(elem1)//push
// cont[0].prepend(elem2)//unshift
// cont[0].appendChild(elem3)

// let h1 = document.getElementsByTagName('h1')
// console.log(h1)
// h1[0].style.color = 'red'
// let p = document.getElementsByClassName('paragraph')
// console.log(p)
// // p[0].style.fontSize = '24px'
// for (const val of p) {
//     val.style.fontSize = '24px'
// }
// let firstSpan = document.getElementById('first-span')
// console.log(firstSpan)
// firstSpan.style.fontWeight = 700


// let h1 = document.querySelector('h1')
// console.log(h1)
// h1.style.color = 'blue'
// let p = document.querySelectorAll('.paragraph')
// console.log(p)
// p.forEach(item => {
//     item.style.fontSize = '24px'
// })

// let span = document.querySelector('#first-span')
// span.style.backgroundColor = 'blue'

// let p = document.querySelector('.paragraph')
// // p.classList.toggle('paragraph')
// p.classList.add('text')
// // p.classList.remove('paragraph')
// p.classList.replace('paragraph', 'para')

// console.log(p.classList.value)

// let div = document.querySelector('div')
// let btn = document.createElement('button')
// btn.innerText = 'SAVE'
// div.append(btn)

// let lastP = document.getElementById('last-p')
// let text = lastP.innerText
// lastP.innerHTML += '<strong> coding is easy</strong>'
// console.log(text)

// let strong = document.querySelector('strong')
// console.log(strong)


// let allTags = document.querySelectorAll('*')
// console.log(allTags)

// let tagsAByGet = document.getElementsByTagName('a')
// let tagsAByQuery = document.querySelectorAll('a')
// let a = document.createElement('a')
// document.body.append(a)

// console.log(tagsAByGet)
// console.log(tagsAByQuery)

// let lists = document.querySelectorAll('li')
// let list = lists[0].outerHTML
// console.log(list)
// lists.forEach((item, index) => {
//     if (index % 2 === 0) {
//         item.style.backgroundColor = 'red'
//     }
// })
// let p = document.querySelectorAll('p')
// p.forEach(item => {
//     item.classList.toggle('second-title')
// })

// let h2 = document.querySelector('h2')
// let res = h2.hasAttribute('class')
// h2.setAttribute('class', 'h2-title')
// h2.removeAttribute('id')
// h2.removeAttribute('class')

// console.log(res)
let ul = document.createElement('ul');
document.querySelector('#app').append(ul);
let i = 0
let timerId = setInterval(() => {
    i++
    if (i > 19) {
        window.clearInterval(timerId)
    }
    let li = document.createElement('li');
    li.innerText = `${i} - овечка`;
    ul.append(li);
}, 10);

// остановить вывод через 5 секунд
