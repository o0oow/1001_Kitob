'use strict';

// initial variables

let books = [
    {
        id: 0,
        name: '1984',
        price: 10.50,
        amount: 30,
        category: 'bestsellers',
        image: 'images/1984.jpg',
    },
    {
        id: 1,
        name: 'Beyound good and evil',
        price: 12.90,
        amount: 20,
        category: 'new',
        image: 'images/Beyound good and evil.jpg',
    },
    {
        id: 2,
        name: 'Crime and punishment',
        price: 21.80,
        amount: 10,
        category: 'bestsellers',
        image: 'images/Crime and punishment.jpg',
    },
    {
        id: 3,
        name: 'Portraint of Dorian Gray',
        price: 22.00,
        amount: 40,
        category: 'new',
        image: 'images/Portraint of Dorian Gray.jpg',
    },
    {
        id: 4,
        name: 'The old man and sea',
        price: 23.50,
        amount: 19,
        category: 'bestsellers',
        image: 'images/The old man and sea.jpg',
    },  {
        id: 5,
        name: 'The little prince',
        price: 13.30,
        amount: 16,
        category: 'new',
        image: 'images/The little prince.jpg',
    },  {
        id: 6,
        name: 'The Catcher in the Rye',
        price: 17.90,
        amount: 9,
        category: 'bestsellers',
        image: 'images/The Catcher in the Rye.jpg',
    },  {
        id: 7,
        name: 'Oliver Twist',
        price: 21.60,
        amount: 14,
        category: 'new',
        image: 'images/Oliver Twist.jpg',
    },  {
        id: 8,
        name: 'Atomic Habits',
        price: 19.90,
        amount: 6,
        category: 'bestsellers',
        image: 'images/Atomic Habits.jpg',
    },  {
        id: 9,
        name: 'Pride and Prejudice',
        price: 29.70,
        amount: 11,
        category: 'new',
        image: 'images/Pride and Prejudice.jpg',
    },  {
        id: 10,
        name: 'The Great Gatsby',
        price: 32.10,
        amount: 11,
        category: 'bestsellers',
        image: 'images/The Great Gatsby.jpg',
    },  {
        id: 11,
        name: 'Nineteen Eighty-Four',
        price: 19.70,
        amount: 11,
        category: 'bestsellers',
        image: 'images/Nineteen Eighty-Four.jpg',
    },  {
        id: 12,
        name: 'To Kill a Mockingbird',
        price: 28.00,
        amount: 11,
        category: 'new',
        image: 'images/To Kill a Mockingbird.jpg',
    },  {
        id: 13,
        name: 'The Handmaid`s Tale',
        price: 29.70,
        amount: 11,
        category: 'new',
        image: 'images/The Handmaid`s Tale.jpg',
    },  {
        id: 14,
        name: 'Animal Farm',
        price: 29.70,
        amount: 11,
        category: 'bestsellers',
        image: 'images/Animal Farm.jpg',
    },  {
        id: 15,
        name: 'Alice in Wonderland',
        price: 29.70,
        amount: 11,
        category: 'new',
        image: 'images/Alice in Wonderland.jpg',

    },  {
        id: 16,
        name: 'Gone with the Wind',
        price: 29.70,
        amount: 11,
        category: 'new',
        image: 'images/Gone with the Wind.jpg',
    },  {
        id: 17,
        name: 'Lord of the Flies',
        price: 29.70,
        amount: 11,
        category: 'bestsellers',
        image: 'images/Lord of the Flies.jpg',
    },  {
        id: 18,
        name: 'A Tale of Two Cities',
        price: 29.70,
        amount: 11,
        category: 'new',
        image: 'images/A Tale of Two Cities.jpg',
    },  {
        id: 19,
        name: 'The Kite Runner',
        price: 29.70,
        amount: 11,
        category: 'new',
        image: 'images/The Kite Runner.jpg',
    },  {
        id: 20,
        name: 'Of Mice and Men',
        price: 29.70,
        amount: 11,
        category: 'bestsellers',
        image: 'images/Of Mice and Men.jpg',
    },
]

// let books = [];

const productBlock = document.getElementById('products-block');
const searchInput = document.querySelector('#search-input');

let cartItems = [];
let newTotalPrice = 0;
let totalAmount = 0;
let newTotalAmount = 0;
let newId = 21;

let user = 'someone';

const adminModalEl = document.getElementById('modalForAdmin');
const loggedUserName = document.getElementById('loggedUserName');
const modalButtons = document.getElementById('modal-buttons');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cartModal');
const amountOfBooksInCart = document.getElementById('selected-amount');
amountOfBooksInCart.style.display = 'none';

const getAllDataUrl = '';

// window.addEventListener('DOMContentLoaded', function() {
//     fetch('http://localhost:8484/admin/books', {
//         method: 'GET',
//         headers: {
//             "Access-Control-Allow-Methods": "GET",
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "text/plain"
//         },
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Обработка полученных данных
//             console.log(data);
//             books = [...books, ...data];
//             updateProductBlock(books);
//         })
//         .catch(error => {
//             // Обработка ошибок
//             console.error('Ошибка:', error);
//         });

// });

updateProductBlock(books);


function onAddToCart(item) {
    const selectedAmount = totalAmount; // Сохраняем текущее выбранное количество
    totalAmount = 0; // Сбрасываем выбранное количество для следующего товара

    // Проверяем, есть ли уже товар в корзине
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество выбранных экземпляров
        existingItem.amount += selectedAmount;
    } else {
        // Если товара нет в корзине, добавляем новый элемент в массив корзины
        cartItems.push({ ...item, amount: selectedAmount });
    }

    // Обновляем общую сумму и количество товаров
    newTotalPrice += item.price * selectedAmount;
    const newTotalAmount = cartItems.reduce((total, cartItem) => total + cartItem.amount, 0);

    // Обновляем модальное окно корзины
    updateCartModal(newTotalPrice, newTotalAmount);
}

function updateCartModal(totalPrice, totalAmount) {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('total-price');
    const amountOfBooks = document.getElementById('amount-of-books');

        cartItemsContainer.innerHTML = '';
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

        cartItems.forEach(function (item) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            const productImg = document.createElement('img');
            productImg.src = `./images/${item.name}.jpg`;
            productImg.alt = item.name;
            productImg.classList.add('product-photo');

            const amountOfBook = document.createElement('span');
            amountOfBook.textContent = 'Amount: ' + item.amount;

            const productName = document.createElement('span');
            productName.className = 'product-name';
            productName.textContent = item.name;

            const productPrice = document.createElement('span');
            productPrice.className = 'product-price';
            productPrice.textContent = 'Price: $' + item.price.toFixed(2);

            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');

            const deleteBtn = document.createElement('div');
            deleteBtn.innerHTML = '<button class="add-to-cart-button"><i class="fas fa-trash cart-icon"></i></button>';

            deleteBtn.addEventListener('click', function updateAmount() {
                // Удаляем книгу полностью из корзины
                const index = cartItems.indexOf(item);
                cartItems.splice(index, 1);

                // Вычитаем удаленную книгу из общей суммы и количества товаров
                totalPrice -= item.price * item.amount;
                totalAmount -= item.amount;
                newTotalAmount = totalAmount;

                amountOfBooks.textContent = `${totalAmount}`;
                amountOfBooksInCart.textContent = `${totalAmount}`;

                // Обновляем модальное окно корзины
                updateCartModal(totalPrice, totalAmount);
            })

            cartItemsContainer.appendChild(cartItem);
            cartItem.appendChild(productImg);
            cartItem.appendChild(infoBox);
            infoBox.appendChild(productName);
            infoBox.appendChild(productPrice);
            infoBox.appendChild(amountOfBook);
            infoBox.appendChild(deleteBtn);
        });

        // Обновляем количество книг в модальном окне
        if (totalAmount !== 0) {
            // amountOfBooks.style.display = 'flex';
            amountOfBooks.textContent = `${totalAmount}`;
            amountOfBooksInCart.textContent = `${totalAmount}`;
            amountOfBooksInCart.style.display = 'flex';
        }
}

function onAddBookToCatalog() {
    // Получаем значения из полей ввода
    const name = document.getElementById("bookName").value;
    const price = parseFloat(document.getElementById("price").value);
    const amount = parseInt(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const photoInput = document.getElementById("photo");
    const photoFile = photoInput.files[0]; // Получаем выбранный файл

    if (name === '' && price === null && amount === null && category === '' && photo === '') {
        alert('Fields are empty!');
        return;
    }

    // Создание объекта FormData и добавление фотографии
    let formData = new FormData();
    formData.append('photo', photoFile); // photoFile - это объект типа File, содержащий фотографию

// Отправка запроса на бекенд с помощью fetch
    const photoUrl = '';
    fetch(photoUrl, {
        method: 'POST',
        body: formData
    })
        .then(function(response) {
            if (response.ok) {
                // Фотография успешно загружена
                console.log('Фотография успешно загружена.');
            } else {
                // Возникла ошибка при загрузке фотографии
                console.log('Ошибка при загрузке фотографии.');
            }
        })
        .catch(function(error) {
            // Возникла ошибка при выполнении запроса
            console.log('Ошибка при выполнении запроса: ' + error.message);
        });


    // Создаем объект книги
    const book = {
        id: newId++,
        name: name,
        price: price,
        amount: amount,
        category: category,
        // image: photoFile ? URL.createObjectURL(photoFile) : '' // Присваиваем URL объекта файла в качестве изображения
    };

    fetch('https://example.com/api/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Дополнительные заголовки (если необходимо)
        },
        body: JSON.stringify(book)
    })
        .then(response => {
            if (response.ok) {
                // Обработка успешного ответа
                console.log('Книга успешно отправлена');
            } else {
                // Обработка ошибки
                console.error('Ошибка при отправке книги');
            }
        })
        .catch(error => {
            // Обработка ошибок
            console.error('Ошибка:', error);
        });

    // Добавляем книгу в массив или выполняем другую необходимую логику
    books.unshift(book);

    // Очищаем значения полей ввода
    document.getElementById("bookName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    photoInput.value = ""; // Очищаем значение поля выбора файла

    // Выводим результат или выполняем другие действия
    console.log("Книга успешно добавлена:", book);
    console.log("Общий каталог:", books);

    closeModalForAddingBook();
    updateProductBlock(books);
}

// Обработчик события при нажатии на иконку "cart plus"
cartIcon.addEventListener('click', function() {
    cartModal.style.display = 'block';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// creating a book cards
function createProductElement(book) {
    const product = document.createElement('div');
    product.className = 'product';
    product.id = "bookID-" + book.id;

    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');

    const productImg = document.createElement('img');
    productImg.src = book.image;
    productImg.alt = book.name;
    productImg.classList.add('product-photo');

    const productName = document.createElement('span');
    productName.className = 'product-name';
    productName.textContent = book.name;

    const productPrice = document.createElement('span');
    productPrice.innerHTML = `<span class="product-price">price: <br> <span style="font-weight: lighter;">$${book.price.toFixed(2)}</span></span>`;

    const productAmount = document.createElement('span');
    productAmount.className = 'product-amount';
    productAmount.textContent = 'left ' + book.amount + ' pcs.';

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    product.appendChild(productImg);
    product.appendChild(infoBox);
    infoBox.appendChild(productName);
    infoBox.appendChild(productPrice);
    infoBox.appendChild(productAmount);
    infoBox.appendChild(cardFooter);

    if (user === 'someone') {
        adminModalEl.style.display = 'none';
        modalButtons.style.justifyContent = 'space-evenly';
        productAmount.style.display = 'none'

        const increaseBtn = document.createElement('button');
        increaseBtn.textContent = '+';
        increaseBtn.className = 'amount-controller-btn';
        increaseBtn.style.background = '#ccd5ae';

        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '-';
        decreaseBtn.className = 'amount-controller-btn'
        decreaseBtn.style.background = '#d4a373';

        const amountController = document.createElement("span");
        amountController.textContent = `${newTotalAmount}`;

        const amountControllerBox = document.createElement('div');
        amountControllerBox.className = 'amount-controller-box';
        // amountControllerBox.appendChild(increaseBtn);
        // amountControllerBox.appendChild(amountController);
        // amountControllerBox.appendChild(decreaseBtn);

        const addToCart = document.createElement('div');
        addToCart.innerHTML = '<button class="add-to-cart-button"><i class="fas fa-cart-plus cart-icon"></i></button>';

        addToCart.addEventListener('click', function() {
            // if ( totalAmount > 0 ) {
                totalAmount++;
                book.amount--;
                // console.log(book.amount);
            amountController.textContent = `${totalAmount}`;
            onAddToCart(book);
                // amountController.textContent = '0'
            // }
            // else {
            //     alert('Choose an amount of book!');
            // }
        });

        decreaseBtn.addEventListener('click', () => {
            if (totalAmount > 0) {
                totalAmount--;
                book.amount++;
            }
            amountController.textContent = `${totalAmount}`;

        });

        increaseBtn.addEventListener('click', () => {
            if (book.amount > 0) {
                totalAmount++;
                book.amount--;
                // console.log(book.amount);
            }
            amountController.textContent = `${totalAmount}`;
        });

        cardFooter.style.justifyContent = 'center';

        cardFooter.appendChild(amountControllerBox);
        cardFooter.appendChild(addToCart);
    }

    if (user === 'admin') {
        adminModalEl.style.display = 'flex';
        productAmount.style.display = 'block';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'edit-input';
        nameInput.value = book.name;

        const priceInput = document.createElement('input');
        priceInput.type = 'number';
        priceInput.className = 'edit-input';
        priceInput.value = book.price.toFixed(2);

        const amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.className = 'edit-input';
        amountInput.value = book.amount;

        const changePhotoField = document.createElement('div');
        changePhotoField.className = 'change-photo-field';
        changePhotoField.textContent = 'Change photo';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';

        changePhotoField.addEventListener('click', () => {
            fileInput.click();
        });

        cardFooter.style.justifyContent = 'space-between';

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                productImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.className = 'edit-button';

        const deleteBtn = document.createElement('div');
        deleteBtn.innerHTML = '<button class="add-to-cart-button"><i class="fas fa-trash cart-icon"></i></button>';

        const editBtn = document.createElement('div');
        editBtn.innerHTML = '<button class="add-to-cart-button"><i class="fas fa-edit cart-icon"></i></button>';

        editBtn.addEventListener('click', () => {
            productName.style.display = 'none';
            productPrice.style.display = 'none';
            productAmount.style.display = 'none';

            infoBox.appendChild(nameInput);
            infoBox.appendChild(priceInput);
            infoBox.appendChild(amountInput);
            infoBox.appendChild(changePhotoField);
            cardFooter.appendChild(fileInput);
            cardFooter.appendChild(saveBtn);
        });

        saveBtn.addEventListener('click', () => {
            const newName = nameInput.value;
            const newPrice = parseFloat(priceInput.value);
            const newAmount = parseInt(amountInput.value);

            if (!isNaN(newPrice) && !isNaN(newAmount) && newName !== '') {
                book.name = newName;
                book.price = newPrice;
                book.amount = newAmount;

                productName.style.display = 'inline-block';
                productPrice.style.display = 'inline-block';
                productAmount.style.display = 'inline-block';
                changePhotoField.style.display = 'inline-block';

                productName.textContent = book.name;
                productPrice.textContent = 'price: ' + ' $' + book.price.toFixed(2);
                productAmount.textContent = 'left ' + book.amount + ' pcs.';

                infoBox.removeChild(nameInput);
                infoBox.removeChild(priceInput);
                infoBox.removeChild(amountInput);
                infoBox.removeChild(changePhotoField);
                cardFooter.removeChild(fileInput);
                cardFooter.removeChild(saveBtn);

                onSaveChanges(book.id);

            } else {
                alert('Fill empty fields!');
            }
        });

        deleteBtn.addEventListener('click', () => {
            fetch(`https://example.com/api/books/${book.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Дополнительные заголовки (если необходимо)
                },
            })
                .then(response => {
                    if (response.ok) {
                        // Удаление элемента из массива на фронтенде
                        const index = books.findIndex(item => item.id === book.id);
                        if (index !== -1) {
                            books.splice(index, 1);
                            updateProductBlock(books);
                        } else {
                            console.error('Элемент не найден в массиве');
                        }
                    } else {
                        // Обработка ошибки
                        console.error('Ошибка при удалении элемента');
                    }
                })
                .catch(error => {
                    // Обработка ошибок
                    console.error('Ошибка:', error);
                });

        });

        cardFooter.appendChild(editBtn);
        cardFooter.appendChild(deleteBtn);
    }



    return product;
}

function onSaveChanges(bookId) {
    // Получаем измененные значения из полей ввода
    const name = document.getElementById(`editName${bookId}`).value;
    const price = parseFloat(document.getElementById(`editPrice${bookId}`).value);
    const amount = parseInt(document.getElementById(`editAmount${bookId}`).value);
    const category = document.getElementById(`editCategory${bookId}`).value;
    const photoInput = document.getElementById(`editPhoto${bookId}`);
    const photoFile = photoInput.files[0]; // Получаем выбранный файл

    // Создаем объект с измененными данными
    const updatedBook = {
        id: bookId,
        name: name,
        price: price,
        amount: amount,
        category: category
    };

    // Создаем объект FormData и добавляем измененные данные
    const formData = new FormData();
    formData.append('book', JSON.stringify(updatedBook));
    if (photoFile) {
        let photoData = new FormData();
        photoData.append('photo', photoFile); // photoFile - это объект типа File, содержащий фотографию

// Отправка запроса на бекенд с помощью fetch
        const photoUrl = '' // address to send a photo of book to backend
        fetch(photoUrl, {
            method: 'POST',
            body: photoData
        })
            .then(function(response) {
                if (response.ok) {
                    // Фотография успешно загружена
                    console.log('Фотография успешно загружена.');
                } else {
                    // Возникла ошибка при загрузке фотографии
                    console.log('Ошибка при загрузке фотографии.');
                }
            })
            .catch(function(error) {
                // Возникла ошибка при выполнении запроса
                console.log('Ошибка при выполнении запроса: ' + error.message);
            });
    }

    // Отправляем измененные данные на сервер
    const url = 'URL_ВАШЕГО_СЕРВЕРА'; // Замените на реальный URL сервера
    fetch(url, {
        method: 'PUT',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                console.log('Изменения успешно сохранены на сервере!');
                // Выполните необходимые действия после сохранения изменений, например, обновите интерфейс
            } else {
                throw new Error('Ошибка при сохранении изменений!');
            }
        })
        .catch(error => {
            console.error(error);
            alert('Произошла ошибка при сохранении изменений!');
        });
}


// добавление фото профиля
document.addEventListener("DOMContentLoaded", function() {
    let avatarInput = document.getElementById("avatar-input");
    let avatarContainer = document.getElementById("avatar-container");
    let avatarIcon = document.querySelector(".avatar-icon");

    avatarInput.addEventListener("change", function() {
        let file = this.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            avatarContainer.style.backgroundImage = 'url("' + e.target.result + '")';
            avatarIcon.style.display = "none";
        };
        console.log(file);
        // Создание объекта FormData и добавление фотографии
        let formData = new FormData();
        formData.append('photo', file); // photoFile - это объект типа File, содержащий фотографию

// Отправка запроса на бекенд с помощью fetch
        const photoUrl = ''
        fetch(photoUrl, {
            method: 'POST',
            body: formData
        })
            .then(function(response) {
                if (response.ok) {
                    // Фотография успешно загружена
                    console.log('Фотография успешно загружена.');
                } else {
                    // Возникла ошибка при загрузке фотографии
                    console.log('Ошибка при загрузке фотографии.');
                }
            })
            .catch(function(error) {
                // Возникла ошибка при выполнении запроса
                console.log('Ошибка при выполнении запроса: ' + error.message);
            });


        reader.readAsDataURL(file);
    });

    avatarContainer.addEventListener("click", function() {
        avatarInput.click();
    });
});

// updating books after filtering
function updateProductBlock(results) {
    productBlock.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results';
        productBlock.appendChild(noResults);
    } else {
        results.forEach(function(result) {
            const product = createProductElement(result);
            productBlock.appendChild(product);
        });
    }
}


// searching for a book
function performSearch(query) {
    if (query === '') {
        updateProductBlock(books);
    } else {
        const results = books.filter(function(book) {
            return book.name.toLowerCase().includes(query.toLowerCase());
        });

        updateProductBlock(results);
    }
}

// function for search input
searchInput.addEventListener('input', function(event) {
    const query = event.target.value;
    performSearch(query);
});

if (books.length > 0) {
    productBlock.style.display = 'flex';
    // actionBlock.style.display = 'flex';
}

books.forEach(function(book) {
    const selectOption = document.createElement('option');
    selectOption.value = book.id;
    selectOption.textContent = book.name;
    // dropdown.appendChild(selectOption);
});

// Открыть модальное окно для добавления книг
function openModalForAddingBook() {
    document.getElementById("myModalForAddingBook").style.display = "block";
}

// Закрыть модальное окно для добавления книг
function closeModalForAddingBook() {
    document.getElementById("myModalForAddingBook").style.display = "none";
}

// Открыть модальное окно для аутентификации
function openModalForAuth() {
    document.getElementById("myModalForAuth").style.display = "block";
}

// Открыть модальное окно для профиля пользователя
function openModalForUser() {
    document.getElementById("myModalForUser").style.display = "block";
}

// Закрыть модальное окно для аутентификации
function closeModalForAuth() {
    document.getElementById("myModalForAuth").style.display = "none";
}

// Закрыть модальное окно для профиля пользователя
function closeModalForUser() {
    document.getElementById("myModalForUser").style.display = "none";
}

// Показать форму по ее ID
function showForm(formId) {
    const forms = document.getElementsByClassName("form-container");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.remove("active");
    }
    document.getElementById(formId).classList.add("active");

    const titles = document.getElementsByClassName("form-title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove("active");
    }
    document.querySelector(`#${formId} .form-title`).classList.add("active");

    const modalContent = document.getElementsByClassName("modal-content");
    if (formId === "signInForm") {
        modalContent.classList.add("signin-active");
    } else {
        modalContent.classList.remove("signin-active");
    }
}

let sidebar = document.getElementById("sidebar");
let currentCategory = 'all';

function filterByCategory(category) {
    const filteredBooks = books.filter(function(book) {
        return book.category === category || category === 'all';
    });

    updateProductBlock(filteredBooks);
}

const changeLinks = document.getElementsByClassName('change-link');
for (let i = 0; i < changeLinks.length; i++) {
    changeLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        const blockTitle = document.getElementById('block-title');
        const category = event.target.dataset.category;
        currentCategory = category;
        if (currentCategory === 'all') {
            blockTitle.textContent = 'All books';
        } else if (currentCategory === 'new') {
            blockTitle.textContent = 'New books';
        } else if (currentCategory === 'bestsellers') {
            blockTitle.textContent = 'Bestsellers';
        }
        filterByCategory(category);
        onCloseMenu();
    });
}

filterByCategory(currentCategory);

let openMenu = document.getElementById("toggle-btn");
openMenu.addEventListener("click", onOpenMenu);

function onOpenMenu() {
        sidebar.style.display = 'block';
        sidebar.style.opacity = "1";
}

let closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", onCloseMenu);

function onCloseMenu() {
        sidebar.style.display = 'none';
        sidebar.style.opacity = '0';
}


// Функция для отправки данных на сервер
function sendData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            // Обработка ответа от сервера
            console.log(result);
            console.log('fuck');
            // Здесь можно выполнить дополнительные действия с полученным результатом
        })
        .catch(error => {
            // Обработка ошибки
            console.error('Error:', error);
            // Здесь можно выполнить дополнительные действия при возникновении ошибки
        });
}

// Функция для входа
const logIn = () => {
    let authorizationUrl = 'http://localhost:5500/g1/login';

    const username = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;

    if(username === '' && password === '' ) {
        return;
    }

    if (username === 'admin' && password === '1234567') {
        user = 'admin';
        loggedUserName.textContent = 'Username: Admin'
        adminModalEl.style.desplay = 'flex';
    } else {
        user = 'someone';
        loggedUserName.textContent = 'Username: ' + username;
        adminModalEl.style.desplay = 'none';
    }

    updateProductBlock(books);
    console.log(user)

    const loginData = {
        username: username,
        password: password
    };
    
    sendData(authorizationUrl, loginData);
    alert('Successfully logged in!');
    closeModalForAuth();
}

// Функция для регистрации
function signup() {
    let authorizationUrl = 'http://localhost:5500/g1/register';

    const name = document.getElementById('name').value;
    const email = document.getElementById('Email').value;
    const username = document.getElementById('Username').value;
    const password = document.getElementById('newPassword').value;

    if(name === '' && email === '' && username === '' && password === '' ) {
        return;
    }

        const signupData = {
        name: name,
        username: username,
        password: password,
        email: email
    };

    sendData(authorizationUrl, signupData);
    alert('Successfully signed up!');
    closeModalForAuth();
}

