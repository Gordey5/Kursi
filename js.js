document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username'); // Получаем имя из localStorage
    if (username) { // Если имя существует
        document.getElementById('userNameDisplay').textContent = username;
        document.getElementById('userNameDisplay').style.display = 'block';
    }
});
const copyLinks = document.querySelectorAll('.copy-icon');
function copyText(textToCopy) {
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    try {
        const successful = document.execCommand('copy'); 
        const overlay = document.getElementById('overlay');
        const notification = document.getElementById('notification');

        if (successful) {
            overlay.classList.add('active'); 
            notification.classList.remove('hidden'); 
            notification.classList.add('visible'); 

            setTimeout(() => {
                notification.classList.remove('visible'); 
                overlay.classList.remove('active'); 
            }, 750);
        } else {
            throw new Error('Не удалось скопировать текст.');
        }
    } catch (err) {
        console.error('Ошибка копирования:', err);
    }
}
copyLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const parentDiv = this.parentElement.querySelector('#text-to-copy');
        if (parentDiv) {
            copyText(parentDiv); 
        }
    });
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отмена стандартной отправки формы

    // Получаем введённое имя пользователя
    const userName = document.getElementById('nameInput').value;

    // Сохраняем имя пользователя в localStorage
    localStorage.setItem('username', userName);

    // Показываем кнопку с именем пользователя
    showUserButton(userName);
});

// Функция для отображения кнопки с именем пользователя
function showUserButton(username) {
    const button = document.getElementById('userNameDisplay');
    const displayedName = document.getElementById('displayedName');

    if (username) {
        button.style.display = 'block';
        displayedName.textContent = username;
    } else {
        button.style.display = 'none';
    }
}

// Проверка наличия имени пользователя при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    showUserButton(savedUsername);
});
