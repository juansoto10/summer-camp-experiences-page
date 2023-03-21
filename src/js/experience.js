// Menu
const menuIcon = document.querySelector('#menu');
const menuItems = document.querySelector('#menu-items');
// Containers
const experienceSection = document.querySelector('#experience-section');
const experienceComments = document.querySelector('#experience-comments');
// Query parameter
const params = new URLSearchParams(window.location.search);
const selectedExperience = params.get('name');
// Dark mode
const darkModeButton = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const isDarkModeActive = JSON.parse(localStorage.getItem('darkMode'));


// Dark mode
document.addEventListener('DOMContentLoaded', () => {
  isDarkModeActive ? body.classList.add('dark') : body.classList.remove('dark');
});


darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
})


// Menu
menuIcon.addEventListener('click', () => {
  let list = document.querySelector('ul');

  menuIcon.name === 'menu-outline' ? (menuIcon.name = 'close-outline') : (menuIcon.name = 'menu-outline');
  menuItems.classList.toggle('opacity-0');
})


function toggleScroll() {
  if (!menuItems.classList.contains('opacity-0')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}


// Call the toggleScroll function when the opacity of the ul element changes
menuItems.addEventListener('transitionend', toggleScroll);


// Experience
function getExperience(name, experiences) {
  for (let experience of experiences) {
    const experienceName = experience.name.toLowerCase();
    
    if (experienceName === name) {
      return experience;
    }
  }
}


function showExperience(name) {
  const experience = getExperience(name, experiences);

  const h3 = document.createElement('h3');
  h3.classList.add('font-bold', 'text-xl', 'sm:text-2xl', 'md:text-3xl', '2xl:text-4xl', 'mb-5', 'md:mb-10', 'text-orange-400');
  const h3Text = document.createTextNode(`${experience.name}, ${experience.age}`);
  h3.append(h3Text);

  const p = document.createElement('p');
  p.classList.add('mb-2');
  pText = document.createTextNode(`${experience.text}`);
  p.append(pText);

  experienceSection.append(h3, p);

  // Change Facebook comments url
  experienceComments.setAttribute('data-href', window.location.href);
}


showExperience(selectedExperience);
