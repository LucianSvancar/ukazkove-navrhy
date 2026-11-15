(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
var els=[];
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)});}else{els.forEach(function(e){e.classList.add('in')})}
var bar=document.querySelector('.bar'),tr=document.querySelector('.hero')||document.querySelector('.sub');
if(bar&&tr){bar.classList.add('off');var chk=function(){var r=tr.getBoundingClientRect();bar.classList.toggle('off',r.bottom>0)};
window.addEventListener('scroll',chk,{passive:true});chk();}
var f=document.getElementById('demo-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').hidden=false})}
})();
