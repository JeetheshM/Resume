(function(){
  const root=document.documentElement;const key='pref-theme';const saved=localStorage.getItem(key);
  if(saved==='light'){root.classList.add('light');}
  document.getElementById('themeToggle')?.addEventListener('click',()=>{
    root.classList.toggle('light');
    localStorage.setItem(key, root.classList.contains('light')?'light':'dark');
  });
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();