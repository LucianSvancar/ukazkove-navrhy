(function(){
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
var cb=document.querySelector('.callbar'),tw=document.querySelector('.trustw')||document.querySelector('.hero');
if(cb&&tw){var upd=function(){cb.classList.toggle('show',tw.getBoundingClientRect().bottom<0)};addEventListener('scroll',upd,{passive:true});upd()}
var f=document.querySelector('form');if(f){f.addEventListener('submit',function(e){e.preventDefault();var o=f.querySelector('.ok');if(o)o.classList.add('show')})}
var lb=document.getElementById('lb');
if(lb){var bs=[].slice.call(document.querySelectorAll('.jg button')),cur=0,li=lb.querySelector('img'),lp=lb.querySelector('p'),last=null;
var show=function(i){cur=(i+bs.length)%bs.length;li.src=bs[cur].getAttribute('data-src');li.alt=bs[cur].querySelector('img').alt;lp.textContent=bs[cur].getAttribute('data-cap')+' ('+(cur+1)+'/'+bs.length+')'};
var open=function(i){last=document.activeElement;show(i);lb.classList.add('open');lb.querySelector('.x').focus()};
var close=function(){lb.classList.remove('open');if(last)last.focus()};
bs.forEach(function(b,i){b.addEventListener('click',function(){open(i)})});
lb.querySelector('.x').addEventListener('click',close);lb.querySelector('.pv').addEventListener('click',function(){show(cur-1)});lb.querySelector('.nx').addEventListener('click',function(){show(cur+1)});
lb.addEventListener('click',function(e){if(e.target===lb)close()});
addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1)})}
})();
