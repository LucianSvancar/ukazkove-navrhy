(function(){
document.documentElement.classList.add('js');
setTimeout(function(){document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})},1500);
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
var cb=document.getElementById('callbar'),t=document.getElementById('trust');
if(cb){var ref=t||document.querySelector('.hero');var f=function(){var r=ref.getBoundingClientRect();cb.classList.toggle('show',r.bottom<0)};addEventListener('scroll',f,{passive:true});f()}
})();
