
const contact = document.createElement('div');
contact.classList.add('contact');
const text = document.createElement('h1');
text.classList.add('text-white', 'mt-5', 'contact-text', 'pb4');
text.textContent = 'Contacte US ';
const phoneText = document.createElement('h2');
phoneText.classList.add('text-white', 'contact-text');
phoneText.textContent = 'Phone :';

const phoneNumber = document.createElement('h2');
phoneNumber.classList.add('text-white', 'contact-text');
phoneNumber.textContent = '0049 - 123 456 789';

const adressText = document.createElement('h2');
adressText.classList.add('text-white', 'contact-text');
adressText.textContent = 'Adress :';

const adress = document.createElement('h2');
adress.classList.add('text-white', 'contact-text');
adress.textContent = 'Gtrand St. New York';

contact.appendChild(text);
contact.appendChild(phoneText);
contact.appendChild(phoneNumber);
contact.appendChild(adressText);
contact.appendChild(adress);

export default contact;
