import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import navContainer from './modules/navbar';
import { home, mainContainer } from './modules/home';
import aboutContainer from './modules/about';
import contactContainer from './modules/contact';
import menuContainer from './modules/menu';

const content = document.querySelector('.content');
const mainWrapper = () => mainContainer(content);
const nav = () => navContainer(content);
nav();
mainWrapper();
const tabs = document.querySelectorAll('.nav-link');
const main = document.querySelector('#main-container');

const homeComp = () => home(main);
const aboutComp = () => aboutContainer(main);
const menuComp = () => menuContainer(main);
const contactComp = () => contactContainer(main);
homeComp();
const navigator = (param) => {
  main.innerHTML = '';
  param();
};
tabs.forEach(currentItem => {
  currentItem.addEventListener('click', event => {
    if (event.target.id === 'tab-link-0') navigator(homeComp);
    if (event.target.id === 'tab-link-1') navigator(aboutComp);
    if (event.target.id === 'tab-link-2') navigator(menuComp);
    if (event.target.id === 'tab-link-3') navigator(contactComp);
  });
});
/* content.appendChild(containre);
content.appendChild(about);
content.appendChild(menu);
content.appendChild(contact); */
