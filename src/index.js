import './styles.css';
import createMenu from './templates/menu.hbs';
import menu from './templates/menu.json';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menuList: document.querySelector('.js-menu'),
    toggleButton: document.querySelector('.theme-switch__toggle'),
    body: document.body,
};

   ( function () {
        refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));
       refs.body.classList.add(localStorage.getItem('Theme') ? localStorage.getItem('Theme'):Theme.LIGHT);
       refs.toggleButton.checked = localStorage.getItem('Theme') === Theme.DARK;
    })();



refs.toggleButton.addEventListener('click', onChandeTheme);
function onChandeTheme(event) {
    if (event.target.checked) {
        toggleTheme(Theme.DARK,Theme.LIGHT)  
    } else {
        toggleTheme(Theme.LIGHT,Theme.DARK) 
    }
}
function toggleTheme(add,rem) {
     refs.body.classList.add(add);
    refs.body.classList.remove(rem);
    localStorage.setItem('Theme', add);
}