let menu = document.getElementById('menu-ao');
const xhr = new XMLHttpRequest();
xhr.open('GET', './sub-pages/menu.html');
xhr.setRequestHeader('Content-Type', 'text/plain');
xhr.send();
xhr.onload = function (data) {
    menu.innerHTML = data.currentTarget.response;
};
