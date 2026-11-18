(function(){
var d=document,$=function(s,c){return(c||d).querySelector(s)},$$=function(s,c){return[].slice.call((c||d).querySelectorAll(s))};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* burger */
var bg=$('.burger'),nav=$('.nav');
if(bg){bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o);d.body.classList.toggle('lock',o)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){bg.click();bg.focus()}});}

/* reveal + hero image */
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
$$('.rv,.shot').forEach(function(el){io?io.observe(el):el.classList.add('in')});

/* open now (America/Chicago, Google Maps hours Mon-Fri 8:00-16:30) */
var HRS={1:[8,16.5],2:[8,16.5],3:[8,16.5],4:[8,16.5],5:[8,16.5]},DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function chi(){return new Date(new Date().toLocaleString('en-US',{timeZone:'America/Chicago'}))}
function fmt(h){var hh=Math.floor(h),m=Math.round((h-hh)*60);return(hh>12?hh-12:hh)+':'+(m<10?'0':'')+m+(hh>=12?' pm':' am')}
function status(){
 var n=chi(),day=n.getDay(),x=n.getHours()+n.getMinutes()/60,r=HRS[day],open=false,t1='',t2='';
 if(r&&x>=r[0]&&x<r[1]){open=true;t1='Open now';t2='Closes at '+fmt(r[1])+' Central time today.'}
 else{var nx=day,add=0;if(r&&x<r[0]){nx=day}else{do{nx=(nx+1)%7;add++}while(!HRS[nx])}
  t1='Closed right now';t2='Opens '+(add===0?'today':add===1?'tomorrow':DN[nx])+' at '+fmt(HRS[nx][0])+' Central time. Leave a message below.'}
 $$('[data-status]').forEach(function(s){s.classList.toggle('open',open);var b=$('b',s),sp=$('span:not(.dot)',s);if(b)b.textContent=t1;if(sp)sp.textContent=t2});
 $$('table.h tr').forEach(function(tr){tr.classList.toggle('today',tr.dataset.d==day)});
}
status();setInterval(status,60000);

/* progress bar + pipe rail */
var prog=$('.prog'),rail=$('.rail'),water=rail&&$('.water',rail),nodes=[];
function build(){
 if(!rail)return;$$('.nd',rail).forEach(function(n){n.remove()});nodes=[];
 var H=d.documentElement.scrollHeight-innerHeight,rh=rail.clientHeight;
 $$('main [data-node]').forEach(function(s){var y=s.getBoundingClientRect().top+scrollY-120,p=Math.max(0,Math.min(1,y/H)),n=d.createElement('div');
  n.className='nd';n.style.top=(p*rh-8)+'px';n.innerHTML='<span>'+s.dataset.node+'</span>';rail.appendChild(n);nodes.push([p,n])});
}
function scroll(){
 var H=d.documentElement.scrollHeight-innerHeight,p=H>0?Math.min(1,scrollY/H):0;
 if(prog)prog.style.transform='scaleX('+p+')';
 if(water)water.style.transform='scaleY('+p+')';
 nodes.forEach(function(a){a[1].classList.toggle('on',p>=a[0]-.001)});
}
build();scroll();addEventListener('scroll',scroll,{passive:true});addEventListener('resize',function(){build();scroll()});addEventListener('load',function(){build();scroll()});

/* count up */
$$('[data-count]').forEach(function(el){var to=parseFloat(el.dataset.count),dec=(el.dataset.count.split('.')[1]||'').length,done=false;
 function go(){if(done)return;done=true;if(reduce){el.textContent=to.toFixed(dec);return}
  var t0=null;(function f(t){t0=t0||t;var k=Math.min(1,(t-t0)/1200),e=1-Math.pow(1-k,3);el.textContent=(to*e).toFixed(dec);if(k<1)requestAnimationFrame(f)})(performance.now())}
 if(io){var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){go();o.disconnect()}});o.observe(el)}else go()});

/* triage */
var tri=$('[data-tri]');
if(tri){var btns=$$('.opt',tri),panels=$$('.panel',tri);
 function pick(id,focus){btns.forEach(function(b){b.setAttribute('aria-selected',b.dataset.p===id)});panels.forEach(function(p){p.hidden=p.id!=='p-'+id});if(focus){var p=$('#p-'+id);p.setAttribute('tabindex','-1')}}
 btns.forEach(function(b,i){b.addEventListener('click',function(){pick(b.dataset.p)});
  b.addEventListener('keydown',function(e){var k=e.key==='ArrowDown'||e.key==='ArrowRight'?1:e.key==='ArrowUp'||e.key==='ArrowLeft'?-1:0;if(k){e.preventDefault();var n=btns[(i+k+btns.length)%btns.length];n.focus();n.click()}})});
 pick(btns[0].dataset.p);}

/* city map */
var am=$('[data-map]');
if(am){
 var HQ=[32.3513,-95.3011],C=[['Tyler',32.3513,-95.3011],['Whitehouse',32.2268,-95.2269],['Bullard',32.1415,-95.3216],['Flint',32.1862,-95.3877],['Chandler',32.3068,-95.4808],['Lindale',32.5157,-95.4094],['Hawkins',32.5879,-95.2047],['Troup',32.1446,-95.1214],['Jacksonville',31.9638,-95.2702],['Kilgore',32.3862,-94.8755],['Mineola',32.6432,-95.4883],['Gladewater',32.536,-94.9427],['Longview',32.5007,-94.7405],['Canton',32.5568,-95.8641],['Athens',32.2049,-95.8555],['Henderson',32.1532,-94.7994],['Winnsboro',32.9568,-95.2902],['Palestine',31.7621,-95.6308]];
 function mi(a,b){var R=3958.8,r=Math.PI/180,dl=(b[0]-a[0])*r,dn=(b[1]-a[1])*r,h=Math.sin(dl/2)*Math.sin(dl/2)+Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dn/2)*Math.sin(dn/2);return 2*R*Math.asin(Math.sqrt(h))}
 var S=5,cx=300,cy=260,ns='http://www.w3.org/2000/svg',svg=$('svg',am),g='';
 function xy(c){return[cx+(c[2]-HQ[1])*69.17*Math.cos(HQ[0]*Math.PI/180)*S,cy-(c[1]-HQ[0])*69.17*S]}
 g+='<circle class="ring2" cx="'+cx+'" cy="'+cy+'" r="'+(40*S)+'"/><circle class="ring" cx="'+cx+'" cy="'+cy+'" r="'+(30*S)+'"/>';
 g+='<text x="'+(cx+30*S*.72)+'" y="'+(cy-30*S*.72-6)+'" style="fill:#0f6f80;font-weight:700">30 mi</text>';
 C.forEach(function(c,i){var p=xy(c),dist=mi(HQ,[c[1],c[2]]);c.push(dist);
  g+='<g data-i="'+i+'"><circle class="c'+(dist>30?' out':'')+'" data-i="'+i+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+(i===0?7:6)+'" tabindex="0" role="button" aria-label="'+c[0]+', about '+Math.round(dist)+' miles"></circle><text x="'+(p[0]+10).toFixed(1)+'" y="'+(p[1]+4).toFixed(1)+'">'+c[0]+'</text></g>'});
 svg.innerHTML=g;
 var list=$('.cities',am.parentNode),res=$('.verdict',am.parentNode),inp=$('input',am.parentNode);
 list.innerHTML=C.map(function(c,i){return'<li><button type="button" data-i="'+i+'">'+c[0]+'</button></li>'}).join('');
 function show(i){var c=C[i],m=Math.round(c[3]);$$('circle.c',svg).forEach(function(e){e.classList.toggle('sel',e.dataset.i==i)});$$('button',list).forEach(function(b){b.classList.toggle('sel',b.dataset.i==i)});
  var inside=c[3]<=30,near=c[3]>30&&c[3]<=40;
  res.className='verdict'+(inside?'':' out');
  res.innerHTML=inside?'<b>'+c[0]+': about '+m+' miles from Tyler</b><br>Inside the 30-mile service radius shown on Calvary\'s Facebook page. Call to book.':near?'<b>'+c[0]+': about '+m+' miles from Tyler</b><br>Just outside the 30-mile radius. Call and ask, we can\'t promise it.':'<b>'+c[0]+': about '+m+' miles from Tyler</b><br>Outside the 30-mile radius. Please call before counting on a visit.';}
 am.addEventListener('click',function(e){var t=e.target.closest('[data-i]');if(t)show(+t.dataset.i)});
 am.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.dataset.i){e.preventDefault();show(+e.target.dataset.i)}});
 list.addEventListener('click',function(e){var t=e.target.closest('button');if(t)show(+t.dataset.i)});
 inp.addEventListener('input',function(){var q=inp.value.trim().toLowerCase(),n=0;$$('li',list).forEach(function(li,i){var m=!q||C[i][0].toLowerCase().indexOf(q)>-1;li.hidden=!m;if(m)n++});
  if(!n){res.className='verdict out';res.innerHTML='<b>"'+inp.value.replace(/[<>&"]/g,'')+'" is not on our map</b><br>Call (903) 330-0390 and ask whether we come to you.'}else if(q&&n===1){var i=C.findIndex(function(c){return c[0].toLowerCase().indexOf(q)>-1});show(i)}});
 show(0);
}

/* leak checklist */
var ck=$('[data-check]');
if(ck){var bx=$$('input',ck),bar=$('.meter i'),lab=$('[data-n]'),done=$('[data-done]');
 function upd(){var n=bx.filter(function(b){return b.checked}).length;bar.style.width=(n/bx.length*100)+'%';lab.textContent=n+' of '+bx.length+' done';done.hidden=n<bx.length}
 bx.forEach(function(b){b.addEventListener('change',upd)});upd();}

/* contact form (demo mode, nothing is sent) */
var f=$('#form');
if(f){var m=$('.msg',f.parentNode),q=new URLSearchParams(location.search).get('issue');
 if(q){var s=f.elements.issue;[].slice.call(s.options).forEach(function(o){if(o.value===q)s.value=q})}
 function chk(i){var v=i.value.trim(),ok=i.validity.valid&&v!=='';if(i.name==='phone'){ok=ok&&v.replace(/\D/g,'').length>=10}
  i.setAttribute('aria-invalid',!ok);var e=i.parentNode.querySelector('.err');e.textContent=ok?'':(i.name==='phone'?'Enter a 10-digit phone number.':i.name==='email'?'Enter a valid e-mail address.':'Please fill in this field.');return ok}
 $$('[required]',f).forEach(function(i){i.addEventListener('blur',function(){chk(i)})});
 f.addEventListener('submit',function(e){e.preventDefault();var ok=true,first=null;
  $$('[required]',f).forEach(function(i){if(!chk(i)){ok=false;first=first||i}});
  var em=f.elements.email;if(em.value&&!chk(em)){ok=false;first=first||em}
  if(!ok){first.focus();return}
  if(f.elements.website.value)return;
  m.classList.add('on');m.innerHTML='<b>Thank you, this is a concept mockup.</b><br>Your message was <u>not</u> sent. On a live site it would go straight to Calvary Plumbing. For a real request, call <a href="tel:+19033300390">(903) 330-0390</a>.';m.setAttribute('tabindex','-1');m.focus();f.reset()})}
})();
