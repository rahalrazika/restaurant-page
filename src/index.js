import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './modules/navbar';
import containre from './modules/home';
import about from './modules/about'

const content = document.querySelector('.content');

content.appendChild(header);
content.appendChild(containre);
content.appendChild(about);
