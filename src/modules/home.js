
import homeimg from '../images/hero.jpg';

const containre = document.createElement('div');
const imghero = document.createElement('img');
imghero.src = homeimg;
imghero.classList.add('rounded', 'mx-auto', 'd-block', 'navbar-m', 'img-hero');
containre.appendChild(imghero);


export default containre;
