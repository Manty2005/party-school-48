/* Source editions are 45 and 47. The target exam is edition 48; its material is pending.
 * Raw source records and legacy progress IDs remain unchanged for traceability. */
(function(){
'use strict';
const base=window.PARTY48_EXAM||[],sup=window.PARTY47_SUPPLEMENT||[];
if(base.length!==200||sup.length!==49)return;
const refs=window.PARTY47_REFERENCES||{},notes=window.PARTY47_NOTES||{},extras=window.PARTY47_EXTRAS||{};
const raw=[...base,...sup],byId=new Map(raw.map(q=>[q.id,q]));
// Same complete knowledge point, with different citation introductions.
const merges={'1-43':['1-63'],'2-9':['3-39']};
const aliases=new Set(Object.values(merges).flat());
const topics=[
 ['theory',0,'理论脉络','行动指南、理论发展与新思想框架'],
 ['modern',0,'现代化与党的建设','现代化目标、总体布局与党的建设'],
 ['governance',0,'治国理政基础','人民民主、文化、教育、生态与安全'],
 ['development',0,'发展与时代专题','新质生产力、改革开放与相关讲话'],
 ['achievement',0,'正确政绩观','党性、为民造福与学习教育'],
 ['plenum',0,'二十届四中全会','十五五原则、目标与重点任务'],
 ['charter',1,'党章总纲','基本路线、经济社会发展与党的领导'],
 ['member',1,'党员义务与权利','入党条件、誓词、预备期与组织生活'],
 ['organization',1,'党的组织制度','民主集中制与各级组织'],
 ['discipline',1,'纪律与处分','六项纪律、处分原则与适用情形'],
 ['conduct',1,'作风与反腐败','三大作风、四风与三不腐'],
 ['revolution',2,'建党与新民主主义革命','重要会议、革命道路与新中国成立'],
 ['construction',2,'社会主义革命和建设','制度建立、建设探索与历史成就'],
 ['reform',2,'改革开放与新时代','重要会议、理论发展与百年奋斗'],
 ['spirit',2,'精神谱系','抗战、抗美援朝、科学家与教育家精神'],
 ['school-origin',3,'学校沿革','前身学校、创办与恢复办学'],
 ['school-tradition',3,'校训、校歌与校友','学校传统、校庆与代表人物'],
 ['school-mission',3,'办学使命与青年责任','贺信、考察讲话与育人要求']
].map(([id,part,title,description])=>({id,part,title,description}));
function topic(q){const n=q.number;
 if(q.part===0)return n<=18?'theory':n<=33||n===66||n===67?'modern':n<=58?'governance':n<=70?'development':n<=82?'achievement':'plenum';
 if(q.part===1){if(q.supplement)return n<=69?'discipline':'conduct';return n<=27?'charter':n<=39?'member':n<=49?'organization':n<=68?'discipline':'conduct';}
 if(q.part===2)return n<=14?'revolution':n<=21?'construction':n<=40?'reform':'spirit';
 if(q.supplement)return 'school-origin';return n<=11?'school-origin':n<=14||n>=20?'school-tradition':'school-mission';
}
const points=raw.filter(q=>!aliases.has(q.id)).map(q=>{
 const records=[q,...(merges[q.id]||[]).map(id=>byId.get(id))];
 const sources=records.flatMap(r=>r.supplement?[{...r.source,part:r.part}]:[{edition:45,part:r.part,number:r.number},...(refs[r.id]||[])]);
 const annotations=records.flatMap(r=>(notes[r.id]||[]).map(n=>({...n,edition:47})));
 let text=q.text;
 if(q.id==='4-9')text=extras[q.id][0].text;
 if(q.id==='4-10')text=extras[q.id][0].text+'\n'+q.text.slice(q.text.indexOf('1950年'));
 return {...q,text,topic:topic(q),sources,annotations,progressIds:records.map(r=>r.id),versions:records.map(r=>({edition:r.supplement?47:45,part:r.part,number:r.number,text:r.text})),expanded:Boolean(extras[q.id]),only47:!sources.some(s=>s.edition===45)};
}).sort((a,b)=>topics.findIndex(t=>t.id===a.topic)-topics.findIndex(t=>t.id===b.topic)||(a.sources.find(s=>s.edition===47).number-b.sources.find(s=>s.edition===47).number));
function makePlan(days=12){
 const count=Math.max(5,Math.min(30,Number(days)||12))-1;
 // Balance by reading volume, while keeping the topic order and every point intact.
 const weight=q=>Math.max(80,q.text.length),groups=Array.from({length:count},()=>[]);
 let remaining=points.reduce((s,q)=>s+weight(q),0),index=0;
 for(let d=0;d<count;d++){
  let used=0,target=remaining/(count-d);
  while(index<points.length){
   const q=points[index];
   if(groups[d].length&&d<count-1&&(used+weight(q)/2>target||points.length-index<=count-d-1))break;
   groups[d].push(q.id);used+=weight(q);index++;
  }
  remaining-=used;
 }
 if(index<points.length)groups[count-1].push(...points.slice(index).map(q=>q.id));
 return [...groups,points.map(q=>q.id)];
}
const rawStatus=(q,progress)=>Math.max(0,...q.progressIds.map(id=>[0,1,2].includes(progress[id])?progress[id]:0));
const expansionPending=(q,progress)=>q.expanded&&rawStatus(q,progress)===2&&progress[q.id+':47-expanded']!==2;
const getStatus=(q,progress)=>expansionPending(q,progress)?1:rawStatus(q,progress);
function markProgress(q,n,progress){q.progressIds.forEach(id=>progress[id]=n);if(q.expanded)progress[q.id+':47-expanded']=n;}
window.PARTY_KNOWLEDGE={sourceEditions:[45,47],targetEdition:48,targetMaterialAvailable:false,points,topics,makePlan,expansionPending,getStatus,markProgress};
})();
