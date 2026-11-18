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
var pk=document.querySelector('[data-pick]');
if(pk){var bs=pk.querySelectorAll('.pk-b'),res=pk.querySelector('.pk-res'),nm=pk.querySelector('[data-pk-name]'),out=pk.querySelector('[data-pk-msg]'),sm=pk.querySelector('[data-pk-sms]'),cur='';
 var upd=function(){var n=nm.value.trim(),t=cur+(n?' This is '+n+'.':'')+' I am in the Tyler area.';out.textContent=t;sm.href='sms:+19037212181?&body='+encodeURIComponent('Hi Pro-Tech, '+t.slice(13))};
 bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');cur=b.dataset.m;res.hidden=false;upd()})});
 nm.addEventListener('input',function(){if(cur)upd()})}
var cn=[].slice.call(document.querySelectorAll('[data-count]'));
if(cn.length&&'IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io2.unobserve(e.target);var el=e.target,to=+el.dataset.count,d=+(el.dataset.dec||0),t0=performance.now();(function st(t){var p=Math.min((t-t0)/900,1);el.textContent=(to*(1-Math.pow(1-p,3))).toFixed(d);if(p<1)requestAnimationFrame(st);else el.textContent=to.toFixed(d)})(t0)})},{threshold:.5});
 cn.forEach(function(e){io2.observe(e)})}
var f=document.querySelector('form.form');
if(f){var fn=f.querySelector('.fnote');
 f.addEventListener('submit',function(e){e.preventDefault();if(f.website&&f.website.value)return;var ok=true,first=null;
  f.querySelectorAll('input:not(.hp),select,textarea').forEach(function(i){var er=i.nextElementSibling;if(!er||!er.classList.contains('err'))return;var v=i.value.trim(),bad=false,m='';
   if(i.required&&!v){bad=true;m='Please fill in this field.'}else if(i.name==='phone'&&v&&!/^[0-9 +()\-]{10,}$/.test(v)){bad=true;m='Enter a phone number with area code, e.g. (903) 555-0123.'}else if(i.type==='email'&&v&&!i.checkValidity()){bad=true;m='Enter a valid e-mail address.'}
   i.setAttribute('aria-invalid',bad);er.textContent=m;if(bad){ok=false;if(!first)first=i}});
  if(!ok){fn.hidden=true;first.focus();return}
  fn.hidden=false;fn.focus();fn.scrollIntoView({block:'nearest'})})}
})();
