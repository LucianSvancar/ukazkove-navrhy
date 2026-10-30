(function(){
var b=document.querySelector('.burger'),m=document.querySelector('.mnav');
if(b)b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);m.hidden=o});
document.querySelectorAll('.dd>button').forEach(function(x){x.addEventListener('click',function(){var d=x.parentNode,o=d.classList.toggle('open');x.setAttribute('aria-expanded',o)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.dd.open').forEach(function(d){d.classList.remove('open')})});
document.querySelectorAll('[data-ba]').forEach(function(f){var w=f.querySelector('.baimg'),r=f.querySelector('input');
r.addEventListener('input',function(){w.style.setProperty('--p',r.value+'%')})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.sc,.ba,.bc,.card,.tc,.faq details').forEach(function(el){el.classList.add('reveal');io.observe(el)})}
})();

(function(){var d=document.documentElement;d.classList.add('js');var t=document.querySelector('.jh .acts')||null;
function on(v){d.classList.toggle('cb',v)}
if(t&&'IntersectionObserver' in window){new IntersectionObserver(function(e){on(!e[0].isIntersecting&&e[0].boundingClientRect.top<0)}).observe(t)}
else{addEventListener('scroll',function(){on(scrollY>220)},{passive:true});on(scrollY>220)}})();