(function(){
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.classList.toggle('open',!o)})}
var r=document.querySelectorAll('.rv');
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
r.forEach(function(el){io.observe(el)})}else{r.forEach(function(el){el.classList.add('in')})}
var f=document.getElementById('demoform');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var o=f.querySelector('.ok');if(o)o.classList.add('show')})}
})();
