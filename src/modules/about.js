import bannerImg from '../images/banner.jpg';
const aboutContainer = (param) => { 
const about = document.createElement('div');
const h1 = document.createElement('h1');
h1.classList.add('h1', 'text-danger', 'text-center');
h1.textContent = 'Welcome To MILKYDAY';

const aboutText = document.createElement('p');
aboutText.classList.add('about-text', 'text-center', 'font-weight-bold');
aboutText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Omnis eius dicta asperiores animi ipsum, iusto eaque delectus, 
corrupti sunt facilis dolore quaerat iure harum, praesentium labore perspi`;

const banner = document.createElement('img');
banner.src = bannerImg;
banner.classList.add('about-banner', 'mx-auto');


about.append(h1,aboutText,banner);
param.appendChild(about)
}
export default aboutContainer;
