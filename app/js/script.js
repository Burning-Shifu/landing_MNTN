document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.article'),
        navbar = document.querySelector('.navbar'),
        navbarList = document.querySelector('.navbar__list');

  // фон у navbar при прокрутке для контраста
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      navbar.classList.add('navbar-bg');
    } else {
      navbar.classList.remove('navbar-bg');
    }
  });

  // генерация li > navbar__num и атрибута id для статей
  for (let i = 0; i < articles.length; i++) {
    let id = i + 1;
    const navbarItem = document.createElement('li');

    if (i < 10) {
      id = `0${id}`
    }
    navbarItem.innerHTML = `
      <a class="btn navbar__num" href="#${id}">${id}</a>
    `;

    navbarList.append(navbarItem);

    articles[i].setAttribute('id', id)
  }
});
