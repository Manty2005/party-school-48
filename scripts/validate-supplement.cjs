const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),scope={window:{}};
for(const f of ['exam-data.js','supplement-47.js'])vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),scope);
const {PARTY48_EXAM:base,PARTY47_SUPPLEMENT:sup,PARTY47_REFERENCES:refs,PARTY47_NOTES:notes,PARTY47_EXTRAS:extras}=scope.window;
const all=[...base,...sup],ids=new Set(all.map(q=>q.id));assert.equal(ids.size,249);assert.equal(sup.length,49);
[37,4,5,3].forEach((n,p)=>assert.equal(sup.filter(q=>q.part===p).length,n));
const coverage=new Set();
function checkRef(r,part){assert.equal(r.pdfPage,r.page+2);assert.ok(r.pdfPage>=3&&r.pdfPage<=26);coverage.add(`${part+1}-${r.number}`);}
base.forEach(q=>{assert.ok(refs[q.id]?.length);refs[q.id].forEach(r=>checkRef(r,q.part));});
sup.forEach(q=>{checkRef(q.source,q.part);assert.equal(q.day,null);assert.ok(q.text.length>20);assert.equal((q.text.match(/“/g)||[]).length,(q.text.match(/”/g)||[]).length);assert.ok(!/[\u4e00-\u9fff]\d+[\u4e00-\u9fff]/.test(q.text.replace(/\d+(年|月|日|周年)/g,'')));});
[103,78,44,25].forEach((n,p)=>{for(let i=1;i<=n;i++)assert.ok(coverage.has(`${p+1}-${i}`),`missing source ${p+1}-${i}`);});assert.equal(coverage.size,250);
for(const [id,ns] of Object.entries(notes)){assert.ok(ids.has(id));ns.forEach(n=>{assert.equal(n.pdfPage,n.page+2);assert.ok(n.pdfPage>=3&&n.pdfPage<=26);assert.ok(n.kind&&n.text);});}
assert.equal(Object.keys(extras).length,2);assert.equal(refs['2-65'][0].number,70);assert.equal(refs['2-70'][0].number,72);assert.equal(refs['4-17'][0].number,23);
assert.ok(notes['4-17'].some(n=>n.types.includes('多选')));assert.ok(!notes['4-21']);
for(const key of ['47-1-84','47-1-93','47-1-101'])assert.ok(!/重8要|生产9力|。10要/.test(sup.find(q=>q.id===key).text));
assert.ok(sup.find(q=>q.id==='47-3-44').text.endsWith('展现了中国特有的教育家精神。”'));
console.log('49 new cards, 2 expansions, 250 source items covered, 66 annotated cards, source page references and remapped annotations validated.');
