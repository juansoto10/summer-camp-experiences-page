/* const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('hidden');
}); */

/* const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');


menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('hidden');
  document.querySelectorAll('.bar').forEach(bar => {
    bar.classList.toggle('active');
  });
}); */

/* function disableScroll(){  
  window.scrollTo(0, 0);
} */


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

  menuIcon.name === 'menu-outline' ? (menuIcon.name = 'close-outline') : (menuIcon.name = 'menu-outline')

  menuItems.classList.toggle('opacity-0')
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


/* const menu = (e) => {
  e.name === 'menu' ? e.name = 'close' : e.name = 'menu'
}
 */

/* 
<style>
  .hamburger {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #fff;
  }

  .bar {
    display: block;
    width: 1.5rem;
    height: 0.15rem;
    margin: 0.25rem 0;
    background-color: #333;
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
  }

  .hamburger.active .bar:first-child {
    transform: translateY(0.4rem) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:last-child {
    transform: translateY(-0.4rem) rotate(-45deg);
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }

    #menu {
      display: flex;
    }
  }
</style>

*/