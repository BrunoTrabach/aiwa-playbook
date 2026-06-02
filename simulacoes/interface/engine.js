
let data=null, idx=0;
async function loadHistoria(url){
  const r = await fetch(url); data = await r.json();
  document.getElementById('titulo').textContent = data.titulo;
  render();
}
function render(){
  const d = data.telas[idx]; const s = document.getElementById('stage');
  if(d.tipo==='intro') s.innerHTML=`<div class="card intro"><h2>${d.texto}</h2></div>`;
  else if(d.tipo==='contexto') s.innerHTML=`<div class="card contexto">${d.texto.replace(/\n/g,'<br>')}</div>`;
  else if(d.tipo==='etapa') s.innerHTML=`<div class="card etapa">${d.texto}</div>`;
  else if(d.tipo==='fala') s.innerHTML=`<div class="msg ${d.personagem==='Bruno'||d.personagem==='Edy'?'right':''}"><img src="../../assets/avatares/${d.avatar}" onerror="this.style.display='none'"><div class="bubble"><b>${d.personagem}</b><br>${d.texto}</div></div>`;
}
function next(){ if(idx < data.telas.length-1){ idx++; render(); } }
function prev(){ if(idx>0){ idx--; render(); } }
document.addEventListener('keydown', e=>{ if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); });
