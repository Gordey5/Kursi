const phoneButton = document.querySelector('.phone-number-button');
const phoneModal = document.getElementById("phoneModal");
const phoneCloseBtn = document.querySelector("#phoneModal .close");
const phoneInput = document.getElementById("phoneNumber");

// Получаем элементы для второй кнопки и модального окна
const anotherButton = document.querySelector('.another-button');
const anotherModal = document.getElementById("anotherModal");
const anotherCloseBtn = document.querySelector("#anotherModal .close");

// Функции для открытия и закрытия первого модального окна
function openPhoneModal() {
    phoneModal.style.display = "block";
    phoneInput.focus();
}

function closePhoneModal() {
    phoneModal.style.display = "none";
}

// Функции для открытия и закрытия второго модального окна
function openAnotherModal() {
    anotherModal.style.display = "block";
}

function closeAnotherModal() {
    anotherModal.style.display = "none";
}

// Обработчики событий для первой кнопки и модального окна
phoneButton.addEventListener('click', openPhoneModal);
phoneCloseBtn.addEventListener('click', closePhoneModal);

// Обработчики событий для второй кнопки и модального окна
anotherButton.addEventListener('click', openAnotherModal);
anotherCloseBtn.addEventListener('click', closeAnotherModal);

// Закрытие модальных окон при клике вне их областей
window.onclick = function(event) {
    if (event.target == phoneModal) {
        closePhoneModal();
    }
    if (event.target == anotherModal) {
        closeAnotherModal();
    }
};

// Валидация формы при отправке (для первой кнопки)
document.forms['phoneForm'].addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneValue = phoneInput.value.trim();

    if (!phoneValue.match(/^(\+7|7|8)[0-9]{10}$/)) {
        alert('Неверный формат номера телефона! Используйте формат: +7XXXXXXXXXX.');
        return;
    }

    console.log('Номер телефона:', phoneValue);
    alert('Ваш номер телефона успешно сохранён!');

    phoneInput.value = '';
    closePhoneModal();
});
// Получаем элементы для третьей кнопки и модального окна
const thirdButton = document.querySelector('.third-button');
const thirdModal = document.getElementById("thirdModal");
const thirdCloseBtn = document.querySelector("#thirdModal .close");

// Функции для открытия и закрытия третьего модального окна
function openThirdModal() {
    thirdModal.style.display = "block";
}

function closeThirdModal() {
    thirdModal.style.display = "none";
}

// Обработчики событий для третьей кнопки и модального окна
thirdButton.addEventListener('click', openThirdModal);
thirdCloseBtn.addEventListener('click', closeThirdModal);

// Закрытие модальных окон при клике вне их областей
window.onclick = function(event) {
    if (event.target == phoneModal) {
        closePhoneModal();
    }
    if (event.target == anotherModal) {
        closeAnotherModal();
    }
    if (event.target == thirdModal) { // Добавлено условие для третьего модального окна
        closeThirdModal();
    }
};
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const modal = document.getElementById('anotherModal');
    const nameInput = document.getElementById('nameInput');
    const displayedName = document.getElementById('displayedName');
    
    // Закрываем модальное окно
    modal.style.display = 'none';

    // Показываем блок с именем в верхнем правом углу
    displayedName.textContent = nameInput.value;
    document.getElementById('userNameDisplay').style.display = 'block';
});
function showList() {
    const formData = new FormData(document.getElementById("form"));
    let listItems = "";

    for (const entry of formData.entries()) {
        // Добавляем каждый элемент формы в список
        listItems += `<p class="list-item">${entry[0]}: ${entry[1]}</p>`;
    }

    // Вставляем список в контейнер
    document.getElementById("listContainer").innerHTML = listItems;

    // Показываем контейнер с списком
    document.getElementById("listContainer").style.display = "block";

    // Отображаем кнопку с именем пользователя
    const userNameDisplay = document.getElementById("userNameDisplay");
    const displayedName = document.getElementById("displayedName");
    displayedName.textContent = formData.get("nameInput"); // Используем значение поля имени
    userNameDisplay.style.display = "inline-block"; // Делаем кнопку видимой
}
// Закрытие модального окна при клике на крестик
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("anotherModal").style.display = 'none';
});

// Обработка отправки формы
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    // Закрываем модальное окно
    document.getElementById("anotherModal").style.display = 'none';
    
    // Перенаправляем на новый URL
    window.location.href = '/art.html'; // Замените /thank-you.html на ваш URL
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const modal = document.getElementById('anotherModal');
    const nameInput = document.getElementById('nameInput');
    const displayedName = document.getElementById('displayedName');
    
    // Закрываем модальное окно
    modal.style.display = 'none';

    // Сохраняем имя в localStorage
    localStorage.setItem('username', nameInput.value);

    // Переходим на следующую страницу
    window.location.href = '/art.html'; // Замените next-page.html на нужный адрес
});
function highlightSection(id) {
    let element = document.getElementById(id);
    if (element) {
        element.classList.add("highlighted"); // Добавляем класс для выделения
        setTimeout(function() {
            element.classList.remove("highlighted"); // Убираем класс через 1 секунду
        }, 1000);
    }
}

// Обработчик событий для навигационных ссылок
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        let targetId = this.href.split('#')[1]; // Получаем ID раздела
        highlightSection(targetId); // Выделяем нужный раздел
        window.location.hash = '#' + targetId; // Переходим к нужному разделу
    });
});

// Проверяем наличие хэша в URL и применяем выделение
window.onload = function() {
    var hash = location.hash.substring(1); // Получаем значение хэша
    if (hash) { // Если есть хэш
        highlightSection(hash); // Выделяем нужный раздел
    }
};
