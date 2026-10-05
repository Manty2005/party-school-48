const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const scope={window:{}},root=path.join(__dirname,'..');
for(const f of ['exam-data.js','supplement-47.js','knowledge.js'])vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),scope);
const K=scope.window.PARTY_KNOWLEDGE,Q=K.points,base=scope.window.PARTY48_EXAM,sup=scope.window.PARTY47_SUPPLEMENT;
assert.equal(Q.length,247);assert.equal(K.targetEdition,48);assert.equal(K.targetMaterialAvailable,false);assert.equal(K.sourceEditions.join(','),'45,47');assert.equal(K.topics.length,18);
const covered=new Set(Q.flatMap(q=>q.progressIds));for(const q of [...base,...sup])assert.ok(covered.has(q.id),q.id);assert.equal(covered.size,249);
const sources=new Set(Q.flatMap(q=>q.sources.map(s=>`${s.edition}-${s.part}-${s.number}`)));
[66,74,39,21].forEach((count,part)=>{for(let n=1;n<=count;n++)assert.ok(sources.has(`45-${part}-${n}`));});
[103,78,44,25].forEach((count,part)=>{for(let n=1;n<=count;n++)assert.ok(sources.has(`47-${part}-${n}`));});
for(let n=5;n<=30;n++){
 const plan=K.makePlan(n),first=plan.slice(0,-1).flat();assert.equal(plan.length,n);assert.ok(plan.every(x=>x.length));assert.equal(first.length,247);assert.equal(new Set(first).size,247);assert.equal(plan.at(-1).length,247);
 assert.equal(first.join(','),Q.map(q=>q.id).join(','));
}
for(const q of Q){assert.ok(K.topics.some(t=>t.id===q.topic));assert.ok(q.sources.every(s=>s.edition===45||s.edition===47));assert.ok(q.text&&q.title);}
assert.equal(Q.filter(q=>q.only47).length,49);assert.equal(Q.filter(q=>q.expanded).length,2);
assert.ok(Q.find(q=>q.id==='1-43').progressIds.includes('1-63'));assert.ok(Q.find(q=>q.id==='2-9').progressIds.includes('3-39'));
assert.ok(Q.find(q=>q.id==='4-9').text.includes('1949年4月'));assert.ok(Q.find(q=>q.id==='4-10').text.includes('苏联经验与中国情况相结合'));assert.ok(Q.find(q=>q.id==='4-10').text.includes('吴玉章'));
assert.ok(!Q.some(q=>q.id==='1-63'||q.id==='3-39'));assert.equal(Q.filter(q=>q.annotations.length).length,66);
const progress={'1-63':2,'4-9':2,'3-39':1,'unrelated-legacy-record':2};
assert.equal(K.getStatus(Q.find(q=>q.id==='1-43'),progress),2);
assert.equal(K.getStatus(Q.find(q=>q.id==='2-9'),progress),1);
const expanded=Q.find(q=>q.id==='4-9');assert.equal(K.getStatus(expanded,progress),1);assert.ok(K.expansionPending(expanded,progress));
K.markProgress(expanded,2,progress);assert.equal(K.getStatus(expanded,progress),2);assert.equal(progress['4-9:47-expanded'],2);
K.markProgress(Q.find(q=>q.id==='1-43'),1,progress);assert.equal(progress['1-43'],1);assert.equal(progress['1-63'],1);assert.equal(progress['unrelated-legacy-record'],2);
console.log('247 knowledge points, 18 topics, all 450 source records preserved, 49 added points included in every 5–30 day plan, and two expansions validated.');
