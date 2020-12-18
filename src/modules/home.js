
import homeimg from '../images/hero.jpg';
const home = (param) => { 
const containre = document.createElement('div');
const imghero = document.createElement('img');
imghero.src = homeimg;
imghero.classList.add('rounded', 'mx-auto', 'd-block', 'navbar-m', 'img-hero');
containre.appendChild(imghero);
param.appendChild(containre);
}
const mainContainer = (param) => {
  const mainElt = document.createElement('main');
  mainElt.setAttribute('class', 'main-page width-100 height-100');
  mainElt.setAttribute('id', 'main-container');
  param.append(mainElt);

}
export   {
    home,
    mainContainer
};
