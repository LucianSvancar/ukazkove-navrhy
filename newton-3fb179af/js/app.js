(()=>{const b=document.querySelector('.burger'),m=document.querySelector('.mnav');
if(b&&m)b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o});
const f=document.getElementById('demoform');
if(f)f.addEventListener('submit',e=>{e.preventDefault();f.querySelector('.msg').hidden=false});
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!rm&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.sl li,.steps li,.srow,.sec .shead,.ti').forEach(x=>{x.classList.add('rv');io.observe(x)})}})();
