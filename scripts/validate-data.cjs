const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const scope={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../exam-data.js'),'utf8'),scope);
const q=scope.window.PARTY48_EXAM;assert.equal(q.length,200);assert.equal(new Set(q.map(x=>x.id)).size,200);
[66,74,39,21].forEach((count,p)=>{const sub=q.filter(x=>x.part===p);assert.equal(sub.length,count);sub.forEach((x,i)=>assert.equal(x.number,i+1));});
[22,22,22,25,25,24,20,24,16].forEach((count,d)=>assert.equal(q.filter(x=>x.day===d).length,count));
q.forEach(x=>{assert.ok(x.text.length>10&&x.title&&x.hint);assert.equal((x.text.match(/“/g)||[]).length,(x.text.match(/”/g)||[]).length);});
for(const [id,count] of [['1-14',10],['2-31',8],['2-32',8]])assert.equal((q.find(x=>x.id===id).text.match(/（[一二三四五六七八九十]+）/g)||[]).length,count);
assert.ok(q.find(x=>x.id==='4-18').text.endsWith('为推动构建人类命运共同体作出积极贡献。'));
console.log('200 entries, all section and day ranges, long lists and cross-page final paragraph validated.');
