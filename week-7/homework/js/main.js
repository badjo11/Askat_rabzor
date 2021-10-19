// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
(Вы можете стилизовать страницу по желанию.)
*/
let block1 = $('.block-1');
let list = $('.list');
let API = 'https://rickandmortyapi.com/api/character/'

async function getData() {
    const { data } = await axios(API);
    data.results.forEach((item, index) => {
        list.append(
            ` <li>${item.name
            } </li> <img src="${item.image}">`
        );
    });
}
getData()
/* Задание №1.2.
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.

*/
//сделал сразу вверху


/* Задание №1.3.
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните
в локальном сервере db.json, в массиве под
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
const setData = async () => {
    const { data } = await axios(API);
    console.log(data);
    const res = await axios.post('http://localhost:8000/characters', data)
    console.log(res.data);
}

//вызов функции для сохранения массива в local server
// setData() 


/* Задание №1.4.
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые
вы получили (стянули) с db.json.
*/
let block2 = $('.block2');
let list2 = $('.list2');
async function getDataToLocal() {
    const { data } = await axios('http://localhost:8000/characters');
    let allDatas = data[0].results;
    allDatas.forEach((item, index) => {
        list2.append(
            ` <li>${item.name
            } </li> <img src="${item.image}".jpeg">`
        );
    });
}
getDataToLocal()
/* Задание №1.5.
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
//сделал сразу в одной функции