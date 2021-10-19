// let promise = fetch('hhtp://localhost:8000/todos')
// promise
//     .then(response => console.log(response);)

// GET
// fetch
const API = 'http://localhost:8000/products'
// function getData() {
//     fetch(API)
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 console.log(response.statusText);
//             }
//         })
//         .then(data => console.log(data))

// }

// getData()

// axios


// async function getDataAxios() {
//     try {
//         const { data } = await axios(API);
//         console.log(data)
//     } catch (e) {
//         const status = e.response.status
//         if (status == 404) {
//             console.log("Введите правильную ссылку");
//         } else if (status == 500) {
//             console.log("Неполадки на сервере");
//         } else if (status == 403) {
//             console.log("Не авторизован");
//         }
//     }

// }
// getDataAxios()

// const num = 10
// try {
//     num = 20
// } catch (error) {
//     console.log(error)
// }


let input = document.querySelector('input')
let btn = document.querySelector('button')

// const addProduct = () => {
//     let value = input.value
//     let product = {
//         title: value
//     }
//     fetch(API, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(product)
//     });

// };



// const addProduct = async () => {
//     let value = input.value
//     let product = {
//         title: value
//     }
//     const res = await axios.post(API, product)
//     console.log(res);
// }
// btn.addEventListener('click', addProduct)


//PUT and PATCH
function updateProduct() {
    let editedProduct = {
        title: "MacBook m1",
    };
    // fetch(`${API}/1`, {
    //     method: "PATCH",
    //     headers: {
    //         'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify(editedProduct),
    // })
    axios.patch(`${API}/2`, editedProduct)
};

updateProduct()