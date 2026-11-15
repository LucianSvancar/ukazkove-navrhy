(()=>{const d=document,b=d.querySelector('.burger'),m=d.querySelector('.mnav');
if(b&&m)b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o});
const f=d.getElementById('demoform');
if(f)f.addEventListener('submit',e=>{e.preventDefault();f.querySelector('.msg').hidden=false});
const els=[...d.querySelectorAll('.rv')];
if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){els.forEach(x=>x.classList.add('in'))}
else{const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});els.forEach(x=>io.observe(x))}})();
(()=>{const cb=document.querySelector('.callbar'),h=document.querySelector('.hero,.ph');
if(cb&&h&&'IntersectionObserver' in window){new IntersectionObserver(es=>es.forEach(x=>cb.classList.toggle('on',!x.isIntersecting))).observe(h)}else if(cb){cb.classList.add('on')}})();
