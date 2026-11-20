(() => {
  'use strict';
  // Deterministic, lightweight stars: no canvas, frameworks or network requests.
  const stars = document.getElementById('stars');
  let seed = 41391;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 230; i++) {
    const star = document.createElement('i');
    star.className = 'star';
    const size = random() > 0.91 ? 2.8 : random() > 0.60 ? 1.5 : 1;
    star.style.cssText = `left:${(random() * 100).toFixed(2)}%;top:${(random() * 100).toFixed(2)}%;width:${size}px;height:${size}px;--duration:${(2.5 + random() * 5).toFixed(2)}s;--delay:${(-random() * 8).toFixed(2)}s;opacity:${(.22 + random() * .6).toFixed(2)}`;
    frag.append(star);
  }
  stars.append(frag);

  const planets = {
    tradigo: {
      serial: 'PLANET 001 • ACTIVE MISSION', icon: '⌂', title: 'Tradigo',
      subtitle: 'The builder planet 🛠',
      description: 'For every “I should really fix that...” that deserves a “Haha, done!” Plan home projects, find tradies, and make the whole thing a little less chaotic — with AI along for the ride.',
      linkText: 'Visit Tradigo', href: 'https://tradigo.com.au', coordinate: 'COORDINATES: 01.001 / HOME'
    },
    wetnose: {
      serial: 'PLANET 002 • IN ORBIT', icon: '♡', title: 'Wetnose',
      subtitle: 'The pet planet 🐾',
      description: 'Every good spaceship needs a furry co-pilot. A little world for happy pets, their humans, and all the delightful connections in between. More adventures are on the way!',
      linkText: 'Visit Wetnose', href: 'https://wetnose.com.au', coordinate: 'COORDINATES: 02.002 / PAWS'
    }
  };
  const buttons = [...document.querySelectorAll('.planet-button')];
  const card = document.getElementById('planet-details');
  const fields = {
    serial: document.getElementById('card-serial'), icon: document.getElementById('card-icon'),
    title: document.getElementById('card-title'), subtitle: document.getElementById('card-subtitle'),
    description: document.getElementById('card-description'), link: document.getElementById('card-link'),
    coordinate: document.getElementById('card-coordinate')
  };
  let active = 'tradigo';
  let swapTimer;
  function choosePlanet(id) {
    if (!planets[id] || id === active) return;
    active = id;
    buttons.forEach(button => {
      const selected = button.dataset.planet === id;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-expanded', String(selected));
    });
    card.classList.add('is-swapping');
    clearTimeout(swapTimer);
    swapTimer = setTimeout(() => {
      const info = planets[id];
      card.dataset.world = id;
      fields.serial.textContent = info.serial;
      fields.icon.textContent = info.icon;
      fields.title.textContent = info.title;
      fields.subtitle.textContent = info.subtitle;
      fields.description.textContent = info.description;
      fields.link.textContent = info.linkText + ' ↗';
      fields.link.href = info.href;
      fields.coordinate.textContent = info.coordinate;
      card.classList.remove('is-swapping');
    }, 135);
  }
  buttons.forEach(button => {
    button.addEventListener('click', () => choosePlanet(button.dataset.planet));
    button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') choosePlanet(button.dataset.planet); });
    button.addEventListener('focus', () => choosePlanet(button.dataset.planet));
  });
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.hidden = expanded;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
