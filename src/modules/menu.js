import item1 from '../images/menu1.jpg';
import item2 from '../images/sharktank.jpg';
import item3 from '../images/menu3.jpg';
import item4 from '../images/menu4.jpg';
import item5 from '../images/menu5.jpg';

const menuContainer = (param) => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const itemList = [item1, item2, item3, item4, item5];
  for (let i = 0; i < itemList.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-dark', 'text-white', 'w-50', 'mx-auto', 'mt-3');


    const menuImg = document.createElement('img');
    menuImg.classList.add('card-img', 'menu-img');
    menuImg.src = itemList[i];

    const cardText = document.createElement('div');
    cardText.classList.add('card-img-overlay');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = '20$';

    const cardBody = document.createElement('h5');
    cardBody.classList.add('card-title');
    cardBody.textContent = 'Lorem Ipsum is simply dummy text of the printing and typese';

    cardText.append(cardTitle, cardBody);
    card.append(menuImg, cardText);
    menu.appendChild(card);
  }
  param.appendChild(menu);
};
export default menuContainer;
