/* SiswaGigs demo behaviour - dummy only. Replace with servlet calls when DB is connected. */
(function(){
var CLS={Pending:'wn',Accepted:'ok',Rejected:'bd',Active:'ok',Suspended:'bd',Open:'ok','In progress':'in',Completed:'in',Hidden:'mb',Closed:'mb',Visible:'ok'};
function badge(el,s){el.textContent=s;el.className='badge b-'+(CLS[s]||'mb');}
function toast(m){var t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show')},3200);}
function confirmBox(o,ok){var d=document.getElementById('dlg');d.querySelector('h2').textContent=o.title||'Are you sure?';d.querySelector('p').textContent=o.text;
var y=d.querySelector('.yes');y.textContent=o.yes||'Confirm';y.className='btn yes '+(o.danger?'danger':'');d.showModal();
y.onclick=function(){d.close();ok();};d.querySelector('.no').onclick=function(){d.close();};}
document.addEventListener('click',function(e){
 var b=e.target.closest('button,a');if(!b)return;
 if(b.dataset.pw){var i=document.getElementById(b.dataset.pw);var s=i.type==='password';i.type=s?'text':'password';b.textContent=s?'Hide':'Show';b.setAttribute('aria-pressed',s);return;}
 var run=null;
 if(b.dataset.setStatus){run=function(){var tr=b.closest('tr');badge(tr.querySelector('.badge'),b.dataset.setStatus);
   b.parentNode.innerHTML='<span class="help">Decision saved</span>';toast(b.dataset.toast||'Status updated.');};}
 else if(b.dataset.a){run=function(){var on=b.dataset.state!=='b',tr=b.closest('tr');b.dataset.state=on?'b':'a';
   badge(tr.querySelector('.badge'),on?b.dataset.b:b.dataset.a);b.textContent=on?b.dataset.lb:b.dataset.la;
   b.className='btn sm '+(on?'ok':'danger');toast(b.dataset.toast||'Updated.');};}
 else if(b.dataset.toast&&b.dataset.confirm===undefined){e.preventDefault();toast(b.dataset.toast);return;}
 else if(b.dataset.confirm!==undefined){run=function(){toast(b.dataset.toast||'Done.');if(b.dataset.href)setTimeout(function(){location.href=b.dataset.href},900);};}
 if(run){e.preventDefault();if(b.dataset.confirm!==undefined)confirmBox({title:b.dataset.title,text:b.dataset.confirm,yes:b.dataset.yes,danger:b.dataset.danger!==undefined},run);else run();}
});
/* client-side validation */
document.querySelectorAll('form[data-demo]').forEach(function(f){
 f.setAttribute('novalidate','');
 f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
  f.querySelectorAll('.f').forEach(function(w){var i=w.querySelector('input,select,textarea');if(!i)return;var m=i.dataset.match;
   var bad=!i.checkValidity()||(m&&i.value!==document.getElementById(m).value);w.classList.toggle('bad',bad);i.setAttribute('aria-invalid',bad);
   if(bad&&ok){i.focus();ok=false;}});
  if(!ok){toast('Please fix the highlighted fields.');return;}
  toast(f.dataset.demo);if(f.dataset.next)setTimeout(function(){location.href=f.dataset.next},1000);});
});
/* live filter: input/select with data-filter="#container" filters children (.item, tr) by text and data-cat/data-status */
document.querySelectorAll('[data-filter]').forEach(function(c){
 var box=document.querySelector(c.dataset.filter);var empty=document.querySelector(c.dataset.empty||'.empty');
 function go(){var q=(document.querySelector('[data-q]')||{value:''}).value.toLowerCase(),
  sel=(document.querySelector('[data-sel]')||{value:''}).value,n=0;
  box.querySelectorAll('.item').forEach(function(it){var ok=it.textContent.toLowerCase().indexOf(q)>-1&&(!sel||it.dataset.cat===sel);it.hidden=!ok;if(ok)n++;});
  if(empty)empty.style.display=n?'none':'block';var cnt=document.getElementById('count');if(cnt)cnt.textContent=n;}
 c.addEventListener('input',go);c.addEventListener('change',go);});
})();

const profileLink = document.querySelector('.profile-link[data-photo]');
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  const panel = document.getElementById('menu-panel');
  const mobile = window.matchMedia('(max-width:1024px), (max-width:1366px) and (pointer:coarse)');
  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    panel.inert = mobile.matches && !open;
  }
  menuToggle.hidden = false;
  const accountNav = document.getElementById('account-nav');
  function updateHeader() {
    if (mobile.matches) menuToggle.before(profileLink);
    else accountNav.prepend(profileLink);
    setMenu(false);
  }
  updateHeader();
  mobile.addEventListener('change', updateHeader);
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') === 'false'));
  menuToggle.closest('header').addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });
}

if (profileLink && profileLink.dataset.photo.trim()) {
  const photo = new Image();
  photo.alt = '';
  photo.onload = () => profileLink.querySelector('.profile-avatar').append(photo);
  photo.src = profileLink.dataset.photo;
}

