(()=>{const b=document.querySelector('.burger'),m=document.querySelector('.mnav');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);m.hidden=o});
const t=document.querySelector('.ddt');if(t){t.addEventListener('click',()=>{const d=t.parentNode;const o=d.classList.toggle('open');t.setAttribute('aria-expanded',o)});document.addEventListener('click',e=>{if(!t.parentNode.contains(e.target)){t.parentNode.classList.remove('open');t.setAttribute('aria-expanded','false')}})}
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.svlist a').forEach(a=>{const f=()=>{document.querySelectorAll('.svlist a').forEach(x=>x.classList.remove('on'));a.classList.add('on');document.querySelectorAll('.sl').forEach((s,i)=>s.classList.toggle('on',i==a.dataset.i))};a.addEventListener('mouseenter',f);a.addEventListener('focus',f)});
const strip=document.querySelector('.strip'),cb=document.querySelector('.callbar');
if(strip&&cb&&'IntersectionObserver' in window){document.documentElement.classList.add('js');new IntersectionObserver(e=>{const r=e[0].boundingClientRect;cb.classList.toggle('show',!e[0].isIntersecting&&r.bottom<0)}).observe(strip)}
else if(cb){cb.classList.add('show')}
if(!rm&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.sec .st,.srow,.svlist li,.rnd,.cities li').forEach(x=>{x.classList.add('rv');io.observe(x)})}
})();
