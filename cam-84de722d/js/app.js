(function(){var d=document,b=d.querySelector('.burger'),m=d.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o})}
var cb=d.querySelector('.callbar'),tr=d.querySelector('.trust')||d.querySelector('.pban');
if(cb&&tr&&'IntersectionObserver' in window){d.documentElement.classList.add('hasbar');new IntersectionObserver(function(e){cb.classList.toggle('on',!e[0].isIntersecting&&e[0].boundingClientRect.top<0&&!endv)}).observe(tr);var endv=false,en=d.querySelector('.cta');if(en)new IntersectionObserver(function(e){endv=e[0].isIntersecting;if(endv)cb.classList.remove('on')}).observe(en)}
var rv=d.querySelectorAll('.rv');if('IntersectionObserver' in window){var o=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});rv.forEach(function(r){o.observe(r)})}else rv.forEach(function(r){r.classList.add('in')});
var f=d.querySelector('.rq');if(f)f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.fs').textContent='This is a sample form and sends nothing. Please call (731) 885-8400.'});
})();
