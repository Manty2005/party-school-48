(function(){
'use strict';
const Q=window.PARTY48_EXAM||[],root=document.getElementById('examRoot');
if(Q.length!==200){root.textContent='正文未能完整加载，请联网后刷新页面。';return;}
const PARTS=['党的理论学习','党章、党纪党风','中国共产党历史','中国人民大学校史'];
const DAYS=['理论 1—22 题','理论 23—44 题','理论 45—66 题','党章党纪 1—25 题','党章党纪 26—50 题','党章党纪 51—74 题','党史 1—20 题','党史 21—39 题＋校史 1—5 题','校史 6—21 题','200 题闭卷验收'];
const FOCUS=['党的理论发展与新思想框架','中国式现代化与党的建设','民主、发展、教育和国家安全','党章总纲与基本路线','党员条件、义务、权利和组织制度','纪律处分与作风建设','从建党到社会主义建设','改革开放、新时代与人大起点','人大办学传统与育人使命','全范围回忆，补齐薄弱题'];
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d;}catch{return d;}};
let start=read('party48_plan_start','2026-09-27');if(!/^\d{4}-\d{2}-\d{2}$/.test(start)||isNaN(Date.parse(start)))start='2026-09-27';
let progress=read('party48_text_progress_v1',{});if(!progress||Array.isArray(progress)||typeof progress!=='object')progress={};
let selected=Math.max(0,Math.min(9,Math.floor((new Date().setHours(0,0,0,0)-new Date(start+'T00:00:00'))/86400000)));
let view='day',filter='all',query='',recall=false;const hidden=new Set();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=i=>{const d=new Date(start+'T12:00:00');d.setDate(d.getDate()+i);return `${d.getMonth()+1} 月 ${d.getDate()} 日`;};
const status=q=>progress[q.id]||0;
const dayQuestions=d=>d===9?Q:Q.filter(q=>q.day===d);
const reviewDays=()=>[selected-1,selected-3,selected-7].filter(d=>d>=0&&d<9);
const save=()=>{try{localStorage.setItem('party48_text_progress_v1',JSON.stringify(progress));}catch{document.getElementById('saveNotice').textContent='浏览器未允许保存进度，本次标记刷新后可能丢失。';}};
function shell(){root.innerHTML=`<section class="dashboard"><div><b id="totalProgress"></b><p>每天 2—3 小时，先完成一轮完整背诵，再用考前两周巩固。</p></div><label>开始日期 <input aria-label="计划开始日期" id="planStart" type="date" value="${esc(start)}"></label></section><p id="saveNotice" role="status"></p><nav class="views" aria-label="学习方式"><button data-view="day">每日背诵</button><button data-view="all">全部 200 题</button><button data-view="weak">待加强</button></nav><div id="days" class="days" aria-label="十天学习日期"></div><section id="dayIntro"></section><div class="tools"><label class="search"><span>查找正文</span><input id="search" type="search" placeholder="输入题目、关键词或题号" autocomplete="off"></label><label>范围 <select id="filter"><option value="all">全部内容</option><option value="hot">建议重点</option><option value="weak">尚未背熟</option></select></label><button id="recall">遮住全部正文自测</button></div><p id="resultCount" role="status"></p><section id="questions" aria-label="完整背诵正文"></section>`;
root.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;query='';document.getElementById('search').value='';filter='all';document.getElementById('filter').value='all';recall=false;hidden.clear();render();});
document.getElementById('planStart').onchange=e=>{if(!e.target.value)return;start=e.target.value;try{localStorage.setItem('party48_plan_start',JSON.stringify(start));}catch{} render();};
document.getElementById('search').oninput=e=>{query=e.target.value.trim();renderQuestions();};
document.getElementById('filter').onchange=e=>{filter=e.target.value;renderQuestions();};
document.getElementById('recall').onclick=()=>{recall=!recall;hidden.clear();renderQuestions();};render();}
function updateProgress(){document.getElementById('totalProgress').textContent=`已背熟 ${Q.filter(q=>status(q)===2).length} / 200 题`;}
function render(){updateProgress();root.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-pressed',String(b.dataset.view===view));});
const days=document.getElementById('days');days.hidden=view!=='day';days.innerHTML=DAYS.map((d,i)=>`<button class="day-button ${i===selected?'active':''}" data-day="${i}" aria-pressed="${i===selected}"><span>第 ${i+1} 天 · ${date(i)}</span><strong>${i===9?'闭卷验收':dayQuestions(i).length+' 题'}</strong><small>${esc(d)}</small></button>`).join('');
days.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.day);recall=selected===9;hidden.clear();query='';filter='all';document.getElementById('search').value='';document.getElementById('filter').value='all';render();document.getElementById('dayIntro').scrollIntoView({block:'start',behavior:'smooth'});});
const box=document.getElementById('dayIntro');
if(view==='day'){
const prior=reviewDays();box.innerHTML=`<article class="intro"><span class="eyebrow">DAY ${String(selected+1).padStart(2,'0')} · ${date(selected)}</span><h2>${esc(FOCUS[selected])}</h2><p>${esc(DAYS[selected])} · 下方直接展示${selected===9?'全部 200 题':'当天 '+dayQuestions(selected).length+' 题'}完整正文</p><div class="session">${(selected===9?['20 分钟：抽查四部分框架','90 分钟：逐题闭卷复述','40 分钟：重背薄弱题','10 分钟：再次抽背']:['25 分钟：回忆旧题与框架','75 分钟：分两段学习新题','40 分钟：遮挡正文复述','10 分钟：记录并重背卡壳题']).map(t=>`<span>${t}</span>`).join('')}</div><p class="guidance">${selected===9?'先遮住正文，看到标题就口述；卡壳或漏关键句时标记“需加强”，然后显示正文重背。':'长题先按段理解，再连起来完整背诵。建议学 35—40 分钟休息 5 分钟；当天长题较多时可把总时间延长到 3 小时。'}</p>${prior.length?'<div class="review-links">今天复习：'+prior.map(d=>`<button data-review="${d}">${date(d)} · ${dayQuestions(d).length} 题</button>`).join('')+'</div>':'<p class="muted">第一天先花 25 分钟理解理论发展的顺序，再开始逐题背诵。</p>'}<details class="after"><summary>十天之后如何复习？每天 2—3 小时够吗？</summary><p>200 题的文字量和长题负担差异很大。每天 2—3 小时可作为首轮安排，能否熟背取决于你的基础和闭卷复述结果；完成阅读不等于背会。当天未通过的题保留在“待加强”。</p><p>默认计划在 10 月 6 日结束首轮。10 月 7—13 日每天用 45—60 分钟回忆待加强题和易混点；10 月 14—18 日每天做四部分混合抽背；10 月 19—20 日重点复习仍会卡壳的题、数字、时间和长题。考试日期为 10 月 21 日。</p></details></article>`;
box.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.review);recall=true;hidden.clear();render();});
}else box.innerHTML=`<article class="intro"><h2>${view==='all'?'完整电子知识库':'待加强的内容'}</h2><p>${view==='all'?'四部分 200 题，保留资料的题号与完整表述。':'这里包括未学习和已标记“需加强”的题目；背熟后可从本页移出。'}</p></article>`;
renderQuestions();}
const keywords=/两个先锋队|实现共产主义|实事求是|群众路线|独立自主|人民至上|自信自立|守正创新|问题导向|系统观念|胸怀天下|十个明确|十四个坚持|十三个方面成就|两个结合|两个确立|四个意识|四个自信|两个维护|五位一体|四个全面|中国式现代化|全心全意为人民服务|民主集中制|表决权|选举权|被选举权|预备期|党龄|首要任务|第一要务|第一生产力|第一资源|第一动力|根本保证|立德树人|为党育人|为国育才|复兴栋梁|强国先锋|[一二三四五六七八九十两〇0-9]+(?:年|月|日|项|种|个月|人以上)/g;
function fullText(q){const lines=q.text.replace(/（([一二三四五六七八九十]+)）/g,'\n（$1）').split('\n');return lines.map(line=>`<p>${esc(line).replace(keywords,m=>'<mark>'+m+'</mark>')}</p>`).join('');}
function renderQuestions(){let list=view==='all'?Q:view==='weak'?Q.filter(q=>status(q)!==2):dayQuestions(selected);
if(filter==='hot')list=list.filter(q=>q.important);if(filter==='weak')list=list.filter(q=>status(q)!==2);
if(query)list=list.filter(q=>(q.title+q.text+PARTS[q.part]+' '+q.number+' '+q.id).includes(query));
document.getElementById('recall').textContent=recall?'显示全部正文':'遮住全部正文自测';
document.getElementById('resultCount').textContent=`显示 ${list.length} 题 · ${list.filter(q=>status(q)===2).length} 题已背熟 · 正文完整保留，黄色标出记忆关键词`;
document.getElementById('questions').innerHTML=list.length?list.map(q=>{const hide=recall?!hidden.has(q.id):hidden.has(q.id);return `<article class="question ${status(q)===2?'mastered':''}" id="q-${q.id}"><div class="meta"><span>${PARTS[q.part]} · 第 ${q.number} 题</span>${q.important?'<span class="priority">建议重点</span>':''}<span>${q.text.length} 字</span></div><h3>${esc(q.title)}</h3><div class="answer" id="answer-${q.id}" ${hide?'hidden':''}>${fullText(q)}</div><p class="cover" ${hide?'':'hidden'}>先根据标题完整复述，再显示正文检查遗漏。</p><details class="hint"><summary>理解与记忆提示</summary><p>${esc(q.hint)}</p></details><div class="actions"><button data-toggle="${q.id}" aria-controls="answer-${q.id}" aria-expanded="${!hide}">${hide?'显示完整正文':'遮住正文'}</button><label>掌握程度 <select data-status="${q.id}" aria-label="${esc(q.title)}掌握程度"><option value="0" ${status(q)===0?'selected':''}>未学习</option><option value="1" ${status(q)===1?'selected':''}>需加强</option><option value="2" ${status(q)===2?'selected':''}>已背熟</option></select></label></div></article>`;}).join(''):'<div class="empty">这个范围没有匹配的题目。可以清空搜索或切换范围。</div>';
root.querySelectorAll('[data-toggle]').forEach(b=>b.onclick=()=>{const id=b.dataset.toggle;hidden.has(id)?hidden.delete(id):hidden.add(id);const ans=document.getElementById('answer-'+id);ans.hidden=!ans.hidden;ans.nextElementSibling.hidden=!ans.hidden;b.textContent=ans.hidden?'显示完整正文':'遮住正文';b.setAttribute('aria-expanded',String(!ans.hidden));});
root.querySelectorAll('[data-status]').forEach(el=>el.onchange=()=>{progress[el.dataset.status]=Number(el.value);save();updateProgress();el.closest('.question').classList.toggle('mastered',Number(el.value)===2);document.getElementById('resultCount').textContent=`显示 ${list.length} 题 · ${list.filter(q=>status(q)===2).length} 题已背熟`;if(view==='weak'||filter==='weak')renderQuestions();});}
shell();
})();
