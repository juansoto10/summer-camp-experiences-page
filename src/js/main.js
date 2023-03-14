/* const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('hidden');
}); */

const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');


menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('hidden');
  document.querySelectorAll('.bar').forEach(bar => {
    bar.classList.toggle('active');
  });
});


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