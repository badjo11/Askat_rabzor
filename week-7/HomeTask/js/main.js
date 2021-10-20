let currentPage = 1
const API = `http://localhost:8000/contacts?_page=1&_limit=3`
const SECOND_API = "http://localhost:8000/contacts"
let productName = $("#product-name")
let productlname = $("#product-lname")
let btnSave = $('.btn-save')
let modal = $('.modal')
let productnumber = $('#product-number')

// Create

async function addProduct() {
    let name = productName.val()
    let lname = productlname.val()
    let number = productnumber.val()

    let product = {
        name,
        lname,
        number,
    }
    try {
        const response = await axios.post(API, product);
        // console.log(response)
        Toastify({
            text: response.statusText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        modal.modal("hide")
        render(API)
    } catch (e) {
        Toastify({
            text: e.response.statusText,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            }
        }).showToast();
    }
}

btnSave.on('click', addProduct)

// Read
let list = $('.list')
let prev = $('.prev')
let next = $('.next')

async function render(url) {
    try {
        const response = await axios(url)
        // console.log(response.headers.link)

        list.html("");
        response.data.forEach(item => {
            list.append(`
            <div class="card mt-3 mb-3" style="width: 18rem;">
               
                <div class="card-body">
                    <h5 class="card-title">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
                    <h5 class="card-text">${item.lname.charAt(0).toUpperCase() + item.lname.slice(1)}</h5>
                    <a href="#">${item.number}</a><br>
                    <button id="${item.id}"type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal"
                            data-bs-target="#editModal">
                            Изменить
                    </button>
                </div>
            </div>`)
        });
        // Pagination
        let links = response.headers.link.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim)
        if (!links) {
            prev.attr('disabled', "true")
            next.attr('disabled', "true")
            return
        }
        console.log(links)
        if (links[0] === links[1]) {
            prev.removeAttr('disabled')
        }
        if (links[2] === links[1]) {
            next.removeAttr('disabled')
        }
        if (links.length === 4) {
            prev.attr('id', links[1])
            next.attr('id', links[2])
            prev.removeAttr('disabled')
            next.removeAttr('disabled')
        }
        else if (links.length === 3 && currentPage === 1) {
            prev.attr('disabled', "true")
            next.attr('id', links[1])
        } else if (links.length === 3 && currentPage !== 1) {
            next.attr('disabled', "true")
            prev.attr('id', links[1])
        }
    } catch (e) {
        console.log(e);
    }
}
render(API)
next.on('click', (e) => {
    // console.log(e.target.id)
    let url = e.target.id
    render(url)
    currentPage++
})
prev.on('click', (e) => {
    // console.log(e.target.id)
    let url = e.target.id
    render(url)
    currentPage--
})

// Search

let searchInp = $('.inp-search')
searchInp.on('input', (e) => {
    let value = e.target.value
    let url = `${API}&q=${value}`
    // console.log(url)
    render(url)
})


// !UPDATE
let productNameEdit = $("#product-name-edit")
let productlnameEdit = $("#product-lname-edit")
let btnSaveEdit = $('.btn-save-edit')
let productnumberEdit = $('#product-number-edit')
$(document).on('click', '.edit-btn', async (e) => {
    let id = e.target.id
    try {
        const response = await axios(`${SECOND_API}/${id}`)
        productNameEdit.val(response.data.name)
        productlnameEdit.val(response.data.lname)
        productnumberEdit.val(response.data.number)
        btnSaveEdit.attr('id', id)
    } catch (e) {
        console.log(e)
    }

})

btnSaveEdit.on('click', async (e) => {
    let id = e.target.id
    let name = productNameEdit.val()
    let lname = productlnameEdit.val()
    let number = productnumberEdit.val()
    let product = {
        name,
        lname,
        number,
    }
    try {
        await axios.patch(`${SECOND_API}/${id}`, product)
        modal.modal('hide')
        render(`http://localhost:8000/contacts?_page=${currentPage}&_limit=3`)
    } catch (e) {
        console.log(e)
    }
})