(function(){
  function syncMiniStats(){
    const pairs=[['sDone','miniDone','已答'],['sWrong','miniWrong','错题'],['sStar','miniStar','收藏']];
    for(const [srcId,dstId,label] of pairs){
      const src=document.getElementById(srcId),dst=document.getElementById(dstId);
      if(src&&dst)dst.textContent=label+' '+src.textContent;
    }
  }
  function applyCompact(){
    const header=document.querySelector('header>div');
    const badges=document.querySelector('.badges');
    const account=document.getElementById('accountTitle')?.closest('section.panel');
    if(header&&account&&!account.classList.contains('header-account')){
      account.classList.add('header-account');
      header.appendChild(account);
    }
    if(badges&&!document.getElementById('miniDone')){
      for(const [id,label] of [['miniDone','已答 0'],['miniWrong','错题 0'],['miniStar','收藏 0']]){
        const el=document.createElement('span');el.className='badge mini-stat';el.id=id;el.textContent=label;badges.appendChild(el);
      }
    }
    syncMiniStats();
    ['sDone','sWrong','sStar'].forEach(id=>{
      const el=document.getElementById(id);
      if(el&&!el.dataset.compactWatch){
        el.dataset.compactWatch='1';
        new MutationObserver(syncMiniStats).observe(el,{childList:true,characterData:true,subtree:true});
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyCompact);else applyCompact();
  setTimeout(applyCompact,300);
  setTimeout(applyCompact,1000);
})();
