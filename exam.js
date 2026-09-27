(function(){
const DAYS=[
['09-27','理论 1—22 题','第 1—3 页','党的性质、最高理想、行动指南、马克思主义基本观点；“两个结合”“十个明确”“十四个坚持”“十三个方面成就”','先背党的性质和指导思想，再把新思想的三组数字框架分开。'],
['09-28','理论 23—44 题','第 3—5 页','党的中心任务、中国式现代化、四个意识/四个自信/两个维护、五位一体/四个全面、党和人民关系','中国式现代化按“五个中国特色—本质要求”成组回忆；相近概念做对照。'],
['09-29','理论 45—66 题','第 5—7 页','民主、教育科技人才、核心价值观、生态文明、一国两制、国家安全、五个必由之路、新质生产力、改革开放','记清“首要任务”“第一生产力/第一资源/第一动力”等易混表述。'],
['09-30','党章党纪 1—25 题','第 7—9 页','党的建设成果与历史任务、基本路线、四项基本原则、改革开放、发展理念与新发展格局','按“是什么—为什么—怎么做”把党章总纲类句子串成逻辑。'],
['10-01','党章党纪 26—50 题','第 9—11 页','党员条件、义务权利、入党程序、预备期、党龄、组织生活、民主集中制、基层组织','党员八项义务和权利按顺序背；预备党员权利差别、党龄起算日要精确。'],
['10-02','党章党纪 51—74 题','第 11—13 页','党的纪律、纪律处分、留党察看、纪委职责、党组、党徽党旗、纪律处分原则、“四风”与反腐败','五种处分按轻重顺序背；留党察看期间权利和最长年限要成组记。'],
['10-03','党史 1—20 题','第 13—15 页','建党初心、党的一大/二大、南昌起义、八七会议、井冈山、遵义会议、七七事变、七大、新中国成立','用“年份—事件—历史意义”三列复述，优先记红圈年份和转折点。'],
['10-04','党史 21—39 题＋校史 1—5 题','第 15—18 页','改革开放、十一届三中全会、历次党代会、两个一百年、百年奋斗重大成就；人大校史起点与陕北公学','党史按时期串联；人大校史先建立 1937→1939→1948→1949→1950→2022 主时间轴。'],
['10-05','人大校史 6—21 题','第 18—20 页','陕北公学传统、华北联合大学/华北大学、人大建校、校训校歌、校庆日、习近平考察人大讲话与青年要求','重点背“为谁培养人、培养什么人、怎样培养人”、办学方向、人才培养使命演进。'],
['10-06','四部分闭卷验收','抽查第 1—20 页','200 题按四部分快速口述；只精背卡壳和漏词题；完成一次错题回炉','每题先说关键词，再复述原句。标出完全会、模糊、不会三档；模糊/不会的题进入后续复习。']
];
const PARTS=[
['党的理论学习',66,'1—66 题','1—7 页',1,7],
['中国共产党章程、党纪党风',74,'1—74 题','7—13 页',7,13],
['中国共产党历史',39,'1—39 题','13—18 页',13,18],
['中国人民大学校史',21,'1—21 题','18—20 页',18,20]
];
const KEY=[
['党的性质、宗旨与行动指南','两个先锋队、领导核心、三个代表；最高理想；六项指导思想完整顺序。','第 1 页｜理论 1—3',1],
['马克思主义基本观点与“两个结合”','唯物史观、辩证唯物主义世界观和方法论；同中国具体实际相结合、同中华优秀传统文化相结合。','第 1—3 页｜理论 7—18',2],
['新思想三组数字框架','十个明确（理论判断）、十四个坚持（实践方略）、十三个方面成就（实践成果），不要互相串项。','第 2—3 页｜理论 14—16',2],
['六个必须坚持','人民至上、自信自立、守正创新、问题导向、系统观念、胸怀天下，顺序完整。','第 3 页｜理论 17',3],
['两个确立、四个意识、四个自信、两个维护','两个确立说核心地位和指导地位；四个意识、四个自信逐项说全；两个维护对应核心和党中央权威、集中统一领导。','第 3—4 页｜理论 19、26—28',4],
['中国式现代化','五个中国特色、本质要求及其中国共产党领导；全体人民共同富裕不是少数人富裕。','第 4—5 页｜理论 24—25',4],
['“五位一体”“四个全面”与四种危险/四大考验','五位一体五项建设；四个全面战略布局；四种危险和四大考验各自完整列举。','第 4 页｜理论 29—31',4],
['党员八项义务、八项权利与入党誓词','逐条按原顺序背；权利第七项的“坚决执行前提下声明保留”；誓词逐字复述。','第 10 页｜党章 31—34',10],
['入党程序、预备期和党龄','两名正式党员介绍、支部大会通过、上级党组织批准；预备期一年；党龄从转正之日算起。','第 10—11 页｜党章 33—37',10],
['民主集中制与基层组织','六项原则；集体领导和个人分工负责；正式党员三人以上基层组织的设立要求。','第 11 页｜党章 40—49',11],
['党纪处分与党风廉政','五种处分、留党察看最长二年、四风、三大优良作风、四种形态、三不腐。','第 12—13 页｜党章 52—74',12],
['党史重大转折点','1921 建党、1927 南昌起义/八七会议/井冈山、1935 遵义会议、1945 七大、1949 新中国成立、1978 十一届三中全会。','第 14—16 页｜党史',14],
['人大红色校史时间轴','1937 陕北公学→1939 华北联合大学→1948 华北大学→1949 决定组建→1950 开学典礼→2022 考察人大。','第 18 页｜校史 1—11',18],
['人大办学使命与青年要求','“为谁培养人、培养什么人、怎样培养人”；党的领导、红色基因、扎根中国大地；“复兴栋梁、强国先锋”。','第 19—20 页｜校史 16—19',19]
];
let page=1;
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(_){return d}};
let start=read('party48_plan_start','2026-09-27'),done=new Set(read('party48_plan_done',[]));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function dayNo(){return Math.floor((new Date().setHours(0,0,0,0)-new Date(start+'T00:00:00'))/86400000)+1}
function setup(){const nav=document.querySelector('.nav');if(!nav||document.getElementById('mustMemorizeBtn'))return;
const b=document.createElement('button');b.id='mustMemorizeBtn';b.textContent='考前必背';b.className='primary';b.onclick=()=>tab('mustmemorize');nav.prepend(b);
const sec=document.createElement('section');sec.id='mustmemorize';sec.className='panel page hidden';sec.innerHTML='<div id="examRoot"></div>';const quiz=document.getElementById('quiz');quiz?.parentNode?.insertBefore(sec,quiz);render()}
function render(){const root=document.getElementById('examRoot');if(!root)return;
const pct=Math.round(done.size/10*100);
root.innerHTML='<div class="exam-hero"><span class="exam-pill">考试日期 · 10 月 21 日</span><h2>48 期校党校必背资料</h2><p>根据你上传的《中国人民大学党校（行政学校、社会主义学校）发展对象培训班结业考试知识范围》整理。原资料共 200 题：理论 66、党章党纪党风 74、党史 39、人大校史 21。每题以原页为准；原件红圈红线保留，作为你标出的重点。</p><div class="exam-progress"><i style="width:'+pct+'%"></i></div><span class="exam-muted">十天计划完成 '+done.size+' / 10 天</span></div><div class="exam-tabs"><button class="active" data-view="plan">十天背诵计划</button><button data-view="focus">重点内容</button><button data-view="source">原始资料逐页看</button></div><div id="examView"></div>';
root.querySelectorAll('[data-view]').forEach(x=>x.onclick=()=>{root.querySelectorAll('[data-view]').forEach(y=>y.classList.toggle('active',y===x));if(x.dataset.view==='plan')renderPlan();if(x.dataset.view==='focus')renderFocus();if(x.dataset.view==='source')renderSource()});
renderPlan()}
function renderPlan(){const box=document.getElementById('examView');if(!box)return;const current=dayNo();
box.innerHTML='<div class="exam-plan-intro"><b>每天约 2 小时 15 分钟</b><span>20–25 分钟复习旧题 + 60–70 分钟新背 + 30–35 分钟遮挡复述 + 15 分钟错题。先回忆，再翻页核对；通读不算背会。</span><label>计划开始日期 <input id="planStart" type="date" value="'+esc(start)+'"></label></div><div class="exam-days">'+DAYS.map((d,i)=>'<article class="exam-day '+(i+1===current?'today':'')+' '+(done.has(String(i+1))?'complete':'')+'"><div class="exam-day-head"><span>第 '+(i+1)+' 天 · '+esc(d[0])+'</span><label><input type="checkbox" data-done="'+(i+1)+'" '+(done.has(String(i+1))?'checked':'')+'> 完成</label></div><h3>'+esc(d[1])+'</h3><div class="exam-muted">'+esc(d[2])+' · '+esc(d[3])+'</div><p>'+esc(d[4])+'</p><div class="exam-minutes"><span>复习旧题 25 分</span><span>新背理解 65 分</span><span>遮页复述 35 分</span><span>错题回看 15 分</span></div></article>').join('')+'</div><div class="exam-after">10 天后到考试前还有约两周：每天 30–45 分钟回忆错题，隔天做一次四部分混合抽背；考前两天只看易混点和时间线。若首轮发现复述不完整，优先用这段时间补漏。</div>';
box.querySelectorAll('[data-done]').forEach(x=>x.onchange=()=>{x.checked?done.add(x.dataset.done):done.delete(x.dataset.done);localStorage.setItem('party48_plan_done',JSON.stringify([...done]));renderPlan()});
document.getElementById('planStart').onchange=e=>{start=e.target.value||start;localStorage.setItem('party48_plan_start',JSON.stringify(start));renderPlan()}}
function renderFocus(){const box=document.getElementById('examView');if(!box)return;
box.innerHTML='<div class="exam-focus-intro"><b>你标注的红圈、红线是第一优先级。</b>再把易混、需要准确复述的成组知识列在这里。先闭卷说完整，再到对应页核对原句。</div><div class="exam-focus-grid">'+KEY.map((x,i)=>'<article class="exam-key"><span>重点 '+String(i+1).padStart(2,'0')+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p><small>'+esc(x[2])+'</small><button data-gopage="'+x[3]+'">去原资料核对</button></article>').join('')+'</div>';
box.querySelectorAll('[data-gopage]').forEach(x=>x.onclick=()=>{page=Number(x.dataset.gopage);document.querySelector('[data-view="source"]').click()})}
function renderSource(){const box=document.getElementById('examView');if(!box)return;const part=PARTS.find(x=>page>=x[4]&&page<=x[5]);
box.innerHTML='<div class="exam-source"><div class="exam-source-controls"><button id="prevPage" '+(page===1?'disabled':'')+'>上一页</button><label>第 <select id="pageSelect">'+Array.from({length:20},(_,i)=>'<option value="'+(i+1)+'" '+(page===i+1?'selected':'')+'>'+(i+1)+'</option>').join('')+'</select> / 20 页</label><button id="nextPage" '+(page===20?'disabled':'')+'>下一页</button></div><p>'+esc(part[0])+' · '+esc(part[3])+' · 原件红色标注保留</p><img class="exam-scan" src="./materials/page-'+String(page).padStart(2,'0')+'.jpg" alt="必背资料第 '+page+' 页"><div class="exam-source-controls"><button id="prevPage2" '+(page===1?'disabled':'')+'>上一页</button><button id="nextPage2" '+(page===20?'disabled':'')+'>下一页</button></div></div>';
document.getElementById('pageSelect').onchange=e=>{page=Number(e.target.value);renderSource()};
['prevPage','prevPage2'].forEach(id=>document.getElementById(id)?.addEventListener('click',()=>{if(page>1){page--;renderSource()}}));
['nextPage','nextPage2'].forEach(id=>document.getElementById(id)?.addEventListener('click',()=>{if(page<20){page++;renderSource()}}))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();setTimeout(setup,400);setTimeout(setup,1200)
})();
