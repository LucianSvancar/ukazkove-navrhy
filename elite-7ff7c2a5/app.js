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
(function(){var t=document.querySelectorAll('.tab');if(!t.length)return;var f=document.querySelectorAll('.ggrid figure');
t.forEach(function(b){b.addEventListener('click',function(){t.forEach(function(x){x.classList.remove('on')});b.classList.add('on');var c=b.getAttribute('data-f');f.forEach(function(g){g.hidden=!(c==='all'||g.getAttribute('data-c')===c)})})})})();
