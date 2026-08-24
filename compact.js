(function(){
  function syncMiniStats(){
    const pairs=[
      ['sDone','miniDone','已答'],
      ['sAcc','miniAcc','正确率'],
      ['sWrong','miniWrong','错题'],
      ['sStar','miniStar','收藏']
    ];
    for(const [srcId,dstId,label] of pairs){
      const src=document.getElementById(srcId),dst=document.getElementById(dstId);
      if(src&&dst)dst.textContent=label+' '+src.textContent;
    }
  }
  function applyCompact(){
    const header=document.querySelector('header>div');
    const badges=document.querySelector('.badges');
    const total=document.getElementById('sTotal');
    const statsPanel=total?.closest('section.panel');
    if(statsPanel){
      statsPanel.classList.add('bulky-stats');
      statsPanel.style.display='none';
    }

    const account=document.getElementById('accountTitle')?.closest('section.panel');
    if(header&&account){
      account.classList.add('header-account');
      if(account.parentElement!==header) header.appendChild(account);
    }

    if(badges){
      const wanted=[['miniDone','已答 0'],['miniAcc','正确率 0%'],['miniWrong','错题 0'],['miniStar','收藏 0']];
      for(const [id,label] of wanted){
        if(!document.getElementById(id)){
          const el=document.createElement('span');
          el.className='badge mini-stat';
          el.id=id;
          el.textContent=label;
          badges.appendChild(el);
        }
      }
    }
    syncMiniStats();

    ['sDone','sAcc','sWrong','sStar'].forEach(id=>{
      const el=document.getElementById(id);
      if(el&&!el.dataset.compactWatch){
        el.dataset.compactWatch='1';
        new MutationObserver(syncMiniStats).observe(el,{childList:true,characterData:true,subtree:true});
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyCompact);
  else applyCompact();
  [50,250,800,1600].forEach(ms=>setTimeout(applyCompact,ms));
})();
