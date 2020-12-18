import logoimg from '../images/logo.png';

const navContainer = (param) => { 
const header = document.createElement('div');
const logo = document.createElement('img');
logo.src = logoimg;
logo.classList.add('rounded', 'mx-auto', 'd-block', 'navbar-m');

const navbar = document.createElement('ul');
navbar.classList.add('nav', 'justify-content-center', 'navbar-m');
const navlist = ['Home', 'About', 'Menu', 'Contact'];


for (let i = 0; i < navlist.length; i += 1) {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const a = document.createElement('a');
  a.className = 'nav-link';
  a.id = `tab-link-${i}`;
  a.innerHTML = navlist[i];

  li.appendChild(a);
  navbar.appendChild(li);
}

header.appendChild(logo);
header.appendChild(navbar);
param.appendChild(header)
}

export default navContainer;
