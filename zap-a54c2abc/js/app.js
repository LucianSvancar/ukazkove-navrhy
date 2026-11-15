(function(){
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o});
m.addEventListener('click',function(e){if(e.target.closest('a')){b.setAttribute('aria-expanded','false');m.hidden=true}})}
var rv=document.querySelectorAll('.rv');
if('IntersectionObserver' in window&&rv.length){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});rv.forEach(function(el){io.observe(el)})}else{rv.forEach(function(el){el.classList.add('in')})}
var cb=document.querySelector('.callbar'),hero=document.querySelector('.hero,.pban');
if(cb&&hero&&'IntersectionObserver' in window){new IntersectionObserver(function(es){cb.classList.toggle('show',!es[0].isIntersecting)},{threshold:0}).observe(hero)}else if(cb){cb.classList.add('show')}
var f=document.querySelector('form.rq');
if(f){f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.fs').textContent='Concept mockup: nothing was sent. To reach ZAP Electric, call 479-242-2244.'})}
var cl=document.querySelector('.clk');
if(cl&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
var st=cl.querySelector('.clk-st'),tm=document.getElementById('clk-time'),ls=cl.querySelectorAll('.clk-ls li');
document.documentElement.classList.add('clkon');
var tk=false;
function upd(){tk=false;var r=cl.getBoundingClientRect(),h=cl.offsetHeight-window.innerHeight,p=Math.min(1,Math.max(0,-r.top/Math.max(h,1)));
cl.style.setProperty('--p',p.toFixed(3));
var m=Math.round((6*60+p*24*60)/5)*5,hh=Math.floor(m/60)%24,mm=m%60,ap=hh>=12?'PM':'AM',h12=hh%12||12;
tm.textContent=h12+':'+(mm<10?'0':'')+mm+' '+ap;
st.classList.toggle('day',p<.5);
var a=p<.25?0:p<.5?1:p<.75?2:3;ls.forEach(function(li,i){li.classList.toggle('on',i===a)})}
function req(){if(!tk){tk=true;requestAnimationFrame(upd)}}
window.addEventListener('scroll',req,{passive:true});window.addEventListener('resize',req);upd()}
})();
