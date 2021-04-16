"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var articles = document.querySelectorAll('.article'),
      navbar = document.querySelector('.navbar'),
      navbarList = document.querySelector('.navbar__list'); // фон у navbar при прокрутке для контраста

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      navbar.classList.add('navbar-bg');
    } else {
      navbar.classList.remove('navbar-bg');
    }
  }); // генерация li > navbar__num и атрибута id для статей

  for (var i = 0; i < articles.length; i++) {
    var id = i + 1;
    var navbarItem = document.createElement('li');

    if (i < 10) {
      id = "0".concat(id);
    }

    navbarItem.innerHTML = "\n      <a class=\"btn navbar__num\" href=\"#".concat(id, "\">").concat(id, "</a>\n    ");
    navbarList.append(navbarItem);
    articles[i].setAttribute('id', id);
  }
});