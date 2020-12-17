import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './modules/navbar';
import containre from './modules/home';

const content = document.querySelector('.content');


content.appendChild(header);
content.appendChild(containre);