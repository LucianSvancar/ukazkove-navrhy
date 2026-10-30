(function(){
var d=document,b=d.querySelector('.burger'),m=d.querySelector('.mnav');
if(b)b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o});
d.querySelectorAll('.dbtn').forEach(function(x){x.addEventListener('click',function(){var p=x.parentNode,o=p.classList.toggle('open');x.setAttribute('aria-expanded',String(o))})});
d.addEventListener('keydown',function(e){if(e.key==='Escape')d.querySelectorAll('.dd.open').forEach(function(p){p.classList.remove('open')})});
var cb=d.querySelector('.callbar'),w=d.querySelectorAll('[data-watch]');
if(cb&&'IntersectionObserver' in window&&w.length){var vis=new Set();var io=new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?vis.add(e.target):vis.delete(e.target)});cb.classList.toggle('on',vis.size===0)},{threshold:0.01});w.forEach(function(x){io.observe(x)})}else if(cb){cb.classList.add('on')}
d.querySelectorAll('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var n=f.querySelector('.fnote');if(n){n.hidden=false;n.scrollIntoView({block:'nearest'})}})});
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!rm&&'IntersectionObserver' in window){var r=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');r.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});d.querySelectorAll('.sec h2,.dcard,.q,.paycard,.srow,.bcard,.person').forEach(function(x){x.classList.add('rv');r.observe(x)})}
})();