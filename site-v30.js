/* V30 local UI behavior — replaces the remote script-v9.js dependency. */
(()=>{
  const root=document.documentElement;
  const header=document.querySelector('.site-header');
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(menu&&header&&nav){
    menu.addEventListener('click',()=>{const open=!header.classList.contains('menu-open');header.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');}));
  }

  const progress=document.querySelector('.progress span');
  const updateProgress=()=>{if(!progress)return;const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);progress.style.transform=`scaleX(${Math.min(1,Math.max(0,scrollY/max))})`;};
  updateProgress();addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress,{passive:true});

  const reveals=[...document.querySelectorAll('.reveal')];
  if(!('IntersectionObserver' in window)){reveals.forEach(el=>el.classList.add('is-visible'));}
  else{
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const d=Number(e.target.dataset.delay||0);setTimeout(()=>e.target.classList.add('is-visible'),Math.min(d,600));io.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'});
    reveals.forEach(el=>io.observe(el));
  }

  const dialog=document.querySelector('.lightbox');
  const dialogImg=dialog?.querySelector('img');
  const close=dialog?.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-item[data-full]').forEach(btn=>btn.addEventListener('click',()=>{if(!dialog||!dialogImg)return;dialogImg.src=btn.dataset.full||btn.querySelector('img')?.src||'';dialogImg.alt=btn.querySelector('img')?.alt||'';if(typeof dialog.showModal==='function')dialog.showModal();}));
  close?.addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});

  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(fine){document.querySelectorAll('.tilt-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${(-y*2.4).toFixed(2)}deg) rotateY(${(x*2.4).toFixed(2)}deg) translateY(-3px)`;});card.addEventListener('pointerleave',()=>card.style.transform='');});}
  root.classList.add('motion-lite');
})();
