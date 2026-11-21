(function(){
    var root=document.documentElement;
    function setLang(l){
      root.setAttribute('data-lang',l);root.setAttribute('lang',l);
      document.querySelectorAll('[data-set-lang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.setLang===l?'true':'false')});
      try{localStorage.setItem('meca-lang',l)}catch(e){}
    }
    var saved=null;try{saved=localStorage.getItem('meca-lang')}catch(e){}
    var q=new URLSearchParams(location.search).get('lang');
    var initial=(q==='es'||q==='en')?q:(saved||((navigator.language||'').toLowerCase().indexOf('es')===0?'es':'en'));
    setLang(initial);
    document.querySelectorAll('[data-set-lang]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.setLang)})});
    var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  })();
