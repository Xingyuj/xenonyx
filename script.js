(() => {
  'use strict';
  const starfield = document.getElementById('stars');
  let seed = 43129;
  const rand = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 4294967296);
  const fragment = document.createDocumentFragment();
  for (let i=0;i<310;i++) {
    const star=document.createElement('i');
    const s=rand()>.96?3:rand()>.8?1.7:1;
    star.className='star';
    star.style.cssText=`left:${(rand()*100).toFixed(2)}%;top:${(rand()*100).toFixed(2)}%;width:${s}px;height:${s}px;opacity:${(.2+rand()*.75).toFixed(2)};--duration:${(3+rand()*5).toFixed(1)}s;--delay:${(-rand()*8).toFixed(1)}s`;
    fragment.append(star);
  }
  starfield.append(fragment);
  const worlds={
    tradigo:{icon:'⌂',title:'Tradigo',subtitle:'Home projects, made simple with AI.',points:['Plan and design with AI','Find and work with trusted tradies','Manage projects and quotes'],href:'https://tradigo.com.au'},
    wetnose:{icon:'♥',title:'Wetnose',subtitle:'A happier world for pets and their humans.',points:['Bring pet lovers together','Discover care and services','Make every tail wag'],href:'https://wetnose.com.au'}
  };
  const buttons=[...document.querySelectorAll('.planet-button')];
  const card=document.getElementById('planet-details');
  const icon=document.getElementById('card-icon');
  const title=document.getElementById('card-title');
  const subtitle=document.getElementById('card-subtitle');
  const points=document.getElementById('card-points');
  const link=document.getElementById('card-link');
  let current='tradigo';
  function choose(id){
    if(!worlds[id]||id===current)return;
    current=id;const world=worlds[id];
    card.classList.add('is-swapping');
    buttons.forEach(button=>{const active=button.dataset.planet===id;button.classList.toggle('is-active',active);button.setAttribute('aria-expanded',String(active));});
    window.setTimeout(()=>{
      card.dataset.world=id;icon.textContent=world.icon;title.textContent=world.title;subtitle.textContent=world.subtitle;
      points.replaceChildren(...world.points.map(value=>{const li=document.createElement('li');li.textContent=value;return li;}));
      link.href=world.href;link.setAttribute('aria-label',`Visit ${world.title} website`);
      card.classList.remove('is-swapping');
    },130);
  }
  buttons.forEach(button=>{
    button.addEventListener('click',()=>choose(button.dataset.planet));
    button.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')choose(button.dataset.planet);});
    button.addEventListener('focus',()=>choose(button.dataset.planet));
  });
  const toggle=document.getElementById('menuToggle'),nav=document.getElementById('mobileNav');
  toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.hidden=expanded;});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.hidden=true;toggle.setAttribute('aria-expanded','false');}));
  document.getElementById('year').textContent=String(new Date().getFullYear());
})();
