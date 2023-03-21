const menuIcon = document.querySelector('ion-icon');
const menuItems = document.querySelector('#menu-items');

const darkModeButton = document.querySelector('#dark-mode');
const body = document.querySelector('body');


const isDarkModeActive = JSON.parse(localStorage.getItem('darkMode'));

document.addEventListener('DOMContentLoaded', () => {
  isDarkModeActive ? body.classList.add('dark') : body.classList.remove('dark');
});


darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
})

/* function setColors() {
  if (isDarkModeActive) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}
 */
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


// Experiences

const cardsSection = document.querySelector('#cards-section');
const experienceSection = document.querySelector('#experience-section');


const experiences = [
  {
    name: "Maja",
    age: 29,
    thumbnail: 'https://i.postimg.cc/wMHFNCW8/portrait-787522-960-720.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto fugit dolores quod laudantium dignissimos aliquam maxime possimus ut atque totam magni voluptatem aspernatur, hic doloribus porro laborum dicta harum?...'
  },
  {
    name: "Carlos",
    age: 27,
    thumbnail: 'https://i.postimg.cc/wMHFNCW8/portrait-787522-960-720.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto fugit dolores quod laudantium dignissimos aliquam maxime possimus ut atque totam magni voluptatem aspernatur, hic doloribus porro laborum dicta harum?...'
  },
  {
    name: "Maria",
    age: 23,
    thumbnail: 'https://i.postimg.cc/wMHFNCW8/portrait-787522-960-720.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto fugit dolores quod laudantium dignissimos aliquam maxime possimus ut atque totam magni voluptatem aspernatur, hic doloribus porro laborum dicta harum?...'
  },
]


function renderCards() {
  const toRender = [];

  experiences.forEach(experience => {
    const a = document.createElement('a');
    a.classList.add('mb-10', 'transition', 'ease-in-out', 'duration-300', 'hover:scale-[1.03]')
    //href
    const url = new URL('/experiences/', window.location.href);
    url.searchParams.set('name', experience.name.toLowerCase());
    a.href = url.toString();

    const article = document.createElement('article');
    article.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'rounded-xl', 'shadow-md', 'max-w-[380px]', 'dark:bg-dark-sec');

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.classList.add('w-full', 'rounded-t-xl', 'max-h-[250px]');
    img.src = experience.thumbnail;

    const secDiv = document.createElement('div');
    secDiv.classList.add('px-4', 'pt-3');

    const h3 = document.createElement('h3');
    h3.classList.add('font-bold', 'text-lg', 'mb-2', 'text-orange-400');
    h3Text = document.createTextNode(`${experience.name}, ${experience.age}`);
    h3.append(h3Text);

    p = document.createElement('p');
    p.classList.add('mb-2');
    // Short text
    pText = document.createTextNode(`${experience.text}`);
    p.append(pText);

    span = document.createElement('span');
    span.classList.add('block', 'text-orange-500', 'text-sm', 'text-right', 'mb-1', 'font-light');
    spanText = document.createTextNode('Click to read');
    span.append(spanText);

    secDiv.append(h3, p, span);

    div.append(img, secDiv);

    article.append(div);

    a.append(article);

    toRender.push(a);
  });

  cardsSection.append(...toRender);
}


// renderCards();


const params = new URLSearchParams(window.location.search);
const selectedExperience = params.get('name');


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
}

// showExperience(selectedExperience);
