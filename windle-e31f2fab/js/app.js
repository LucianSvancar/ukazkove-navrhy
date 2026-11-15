(function(){
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){
 var set=function(o){b.setAttribute('aria-expanded',o);m.classList.toggle('open',o);document.body.classList.toggle('lock',o)};
 b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
 m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
}
var cb=document.querySelector('.callbar'),rf=document.querySelector('.trustw')||document.querySelector('.hero');
if(cb&&rf){cb.classList.add('hid');var t=function(){cb.classList.toggle('hid',rf.getBoundingClientRect().bottom>0)};addEventListener('scroll',t,{passive:true});t()}
var els=[].slice.call(document.querySelectorAll('.rv'));
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('in')})}
var f=document.querySelector('form.form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var n=f.querySelector('.fnote');n.hidden=false;n.scrollIntoView({block:'nearest'})})}
})();
