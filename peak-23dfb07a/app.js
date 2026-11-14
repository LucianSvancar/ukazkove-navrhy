(function(){
var b=document.querySelector('.burger'),m=document.querySelector('.mnav');
if(b&&m){b.addEventListener('click',function(){var o=m.hasAttribute('hidden');if(o){m.removeAttribute('hidden')}else{m.setAttribute('hidden','')}b.setAttribute('aria-expanded',o)})}
document.querySelectorAll('.dd>button').forEach(function(x){x.addEventListener('click',function(e){e.stopPropagation();var d=x.parentNode,o=d.classList.toggle('open');x.setAttribute('aria-expanded',o)})});
document.addEventListener('click',function(){document.querySelectorAll('.dd.open').forEach(function(d){d.classList.remove('open');d.firstElementChild.setAttribute('aria-expanded','false')})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.querySelectorAll('.dd.open').forEach(function(d){d.classList.remove('open')})}});
var r=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});r.forEach(function(x){io.observe(x)})}else{r.forEach(function(x){x.classList.add('in')})}
})();
