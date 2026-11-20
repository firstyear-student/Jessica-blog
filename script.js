const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
$('#burger').onclick=()=>$('#links').classList.toggle('open');
$$('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);e.target.querySelectorAll('[data-n]').forEach(c=>{const n=+c.dataset.n;let i=0;const t=setInterval(()=>{c.textContent=++i;if(i>=n)clearInterval(t)},150)});if(e.target.dataset.n){const c=e.target,n=+c.dataset.n;let i=0;const t=setInterval(()=>{c.textContent=++i;if(i>=n)clearInterval(t)},150)}}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
const secs=[...$$('main section, #home')];
addEventListener('scroll',()=>{let cur='home';secs.forEach(s=>{if(s.getBoundingClientRect().top<140&&s.id)cur=s.id});$$('#links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur||(cur==='contact'&&false)))},{passive:true});
$$('.copy').forEach(b=>b.onclick=async()=>{const t=document.getElementById(b.dataset.copy).innerText;const o=b.textContent;try{await navigator.clipboard.writeText(t);b.textContent='Copied ✓'}catch(e){b.textContent='Select & copy manually'}setTimeout(()=>b.textContent=o,1800)});
$('#mailto').onclick=e=>{e.preventDefault();const t=$('#emailText').innerText;location.href='mailto:?subject='+encodeURIComponent('Internship/Attachment Application: Jessica Keneo Letsapa')+'&body='+encodeURIComponent(t.split('\n').slice(3).join('\n').trim())};
