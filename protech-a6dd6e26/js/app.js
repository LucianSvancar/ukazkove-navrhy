(function(){
document.documentElement.className+=' js';
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){
 var set=function(o){b.setAttribute('aria-expanded',o);m.classList.toggle('open',o);document.body.classList.toggle('lock',o)};
 b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
 m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
}
var cb=document.querySelector('.callbar'),rf=document.querySelector('.trustw')||document.querySelector('.hero');
var fm=document.getElementById('request');
if(cb&&rf){cb.classList.add('hid');var t=function(){var h=rf.getBoundingClientRect().bottom>0;if(fm){var r=fm.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)h=true}cb.classList.toggle('hid',h)};addEventListener('scroll',t,{passive:true});t()}
var els=[].slice.call(document.querySelectorAll('.rv'));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('in')})}
document.documentElement.className+=' js-ok';
var f=document.querySelector('form.form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var n=f.querySelector('.fnote');n.hidden=false;n.scrollIntoView({block:'nearest'})})}
})();
