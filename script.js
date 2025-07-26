// script.js

    AOS.init({
      duration: 1000,
      once: true
    });

    // Mostra lo stemma dopo la fine dell'animazione typing (3s)
    setTimeout(() => {
      document.getElementById('stemma').style.opacity = '1';
      const title = document.querySelector('.hero h1.typing');
      title.classList.add('done'); // Rimuove il cursore lampeggiante
    }, 2000);
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.toggle('active');

    // Cambia testo del bottone (opzionale)
    if (navLinks.classList.contains('active')) {
      hamburger.textContent = '✖';
    } else {
      hamburger.textContent = 'Menu ☰';
    }
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
      document.querySelector('.hamburger').textContent = 'Menu ☰';
    });
  });

const viniSwiper = new Swiper('.vini-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Ora che la nav è caricata, collega gli eventi
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          document.querySelector('.nav-links').classList.remove('active');
          document.querySelector('.hamburger').textContent = 'Menu ☰';
        });
      });
    })
    .catch(err => {
      console.error('Errore caricamento nav:', err);
    });
});



