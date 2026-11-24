
/* Runs before the main script, in old-browser syntax. If anything stops the page from starting, say so instead of
   leaving "Loading…" up forever; and fill in Array/String .at() for browsers older than Safari 15.4 / Chrome 92. */
(function(){
  [Array.prototype, String.prototype].forEach(function(p){ if (!p.at) Object.defineProperty(p, 'at', {configurable:true, writable:true,
    value:function(i){ i = Math.trunc(i) || 0; if (i < 0) i += this.length; return (i < 0 || i >= this.length) ? undefined : this[i]; }}); });
  window.addEventListener('error', function(e){
    var l = document.getElementById('loading');
    if (!l){ l = document.createElement('p'); l.id = 'loading'; l.className = 'lede'; l.style.padding = '16px'; document.body.insertBefore(l, document.body.firstChild); }
    if (l.hidden) return;
    l.textContent = 'The rankings could not start in this browser (' + (e.message || 'script error') + '). Try reloading, or updating the browser. If it keeps happening, email contactwrestlelive@gmail.com.';
  });
})();
