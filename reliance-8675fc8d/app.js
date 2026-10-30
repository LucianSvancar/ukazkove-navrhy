(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var b=d.querySelector('.burger'),m=d.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o;});}
d.querySelectorAll('.dd>button').forEach(function(x){x.addEventListener('click',function(e){e.stopPropagation();var p=x.parentNode,o=p.classList.toggle('open');x.setAttribute('aria-expanded',String(o));d.querySelectorAll('.dd.open').forEach(function(y){if(y!==p){y.classList.remove('open');y.firstChild.setAttribute('aria-expanded','false')}})})});
d.addEventListener('click',function(){d.querySelectorAll('.dd.open').forEach(function(y){y.classList.remove('open');y.firstChild.setAttribute('aria-expanded','false')})});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){d.querySelectorAll('.dd.open').forEach(function(y){y.classList.remove('open')})}});
var cb=d.querySelector('.cb'),t=d.querySelector('[data-cta]');
if(cb&&t&&'IntersectionObserver' in window){new IntersectionObserver(function(en){var e=en[0];cb.classList.toggle('on',!e.isIntersecting&&e.boundingClientRect.top<0)},{threshold:0}).observe(t)}
var cp=d.getElementById('cp'),cc=d.getElementById('cpc');
d.querySelectorAll('.clist a').forEach(function(a){function s(){if(cp){cp.src='img/'+a.dataset.img;if(cc)cc.textContent=a.dataset.cap||''}d.querySelectorAll('.clist a.on').forEach(function(x){x.classList.remove('on')});a.classList.add('on')}a.addEventListener('mouseenter',s);a.addEventListener('focus',s)});
if(!rm&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});d.querySelectorAll('.proj li,.team li,.big,.st,.spec li').forEach(function(x){x.classList.add('rv');io.observe(x)})}
})();
