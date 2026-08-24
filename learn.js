
(function(){
const LESSONS=[
{id:'dz1',cat:'党章',title:'党的性质、宗旨、行动指南与基本路线',hot:true,
explain:'先把“党是什么—为了谁—靠什么理论—当前怎样奋斗”连成一条线。党的性质说明政治属性和领导地位；宗旨回答为了谁；行动指南体现理论创新谱系；基本路线连接社会主义初级阶段的现实任务。',
standard:'党的性质要抓“两个先锋队—领导核心—三个代表”；最高理想和最终目标是实现共产主义；根本宗旨是全心全意为人民服务；行动指南按历史顺序准确复述；基本路线抓“一个中心、两个基本点”。',
pit:'不要把“最高理想和最终目标”与“中国式现代化”混为一谈；也不要漏掉行动指南中的“科学发展观”。',
test:'闭卷说出：党的性质四个关键词组、行动指南完整顺序、根本宗旨、基本路线主干。'},
{id:'dz2',cat:'党章',title:'申请入党、党员定位、预备期与党龄',hot:true,
explain:'入党不是获得一个称号，而是进入一个有共同理想、组织纪律和义务要求的政治组织。年龄只是门槛，政治标准和组织条件才是核心。',
standard:'申请入党：年满十八岁 + 身份范围 + 承认纲领章程 + 参加党的一个组织并积极工作 + 执行党的决议 + 按期交纳党费。两名正式党员作介绍人；预备期一年；党龄从预备期满转为正式党员之日算起。',
pit:'预备党员已经是党员；其义务与正式党员相同，只是没有表决权、选举权和被选举权。党龄不是从递交申请书或接收为预备党员之日计算。',
test:'说明“预备党员与正式党员的权利差别”以及“党龄从哪一天开始算”。'},
{id:'dz3',cat:'党章',title:'党员八项义务与八项权利',hot:true,
explain:'义务体现先进性要求，可按“学习政治—利益纪律—组织党性—群众道德”理解；权利保证党内民主，可按“参与—讨论—建议—监督—选举—申辩—保留意见—申诉控告”理解。',
standard:'八项义务和八项权利都应逐条熟悉。权利与纪律并不矛盾：对决议有不同意见，可以在坚决执行的前提下声明保留并向上级反映。',
pit:'最常见混淆：执行决定、服从组织分配属于义务；参加会议、表决选举、申辩、保留意见属于权利。',
test:'不看材料，先按功能各说出八项义务和八项权利，再去“原文背诵”逐条核对。'},
{id:'dz4',cat:'党章',title:'民主集中制、组织体系、干部与纪律',hot:true,
explain:'民主集中制不是民主和集中各占一半，而是在充分讨论基础上形成统一意志，并由组织共同执行。它既防止个人专断，也防止议而不决、各行其是。',
standard:'根本组织原则是民主集中制。基层单位凡有正式党员三人以上，一般应按规定成立党的基层组织。党纪处分五种：警告、严重警告、撤销党内职务、留党察看、开除党籍。',
pit:'少数服从多数只是民主集中制原则的一部分；“党组”不是“基层党委”的另一种叫法；开除党籍是党内最高处分。',
test:'用一个支部讨论活动方案的例子解释民主环节和集中环节，并按轻到重排列五种处分。'},
{id:'ds1',cat:'党史',title:'百年党史四个历史时期',hot:false,
explain:'不要背“年份孤岛”。先问每个时期解决什么历史任务：新民主主义革命争取民族独立、人民解放；社会主义革命和建设奠定根本政治前提和制度基础；改革开放和社会主义现代化建设推进富起来；新时代推进强国建设和民族复兴。',
standard:'四个历史时期：新民主主义革命时期；社会主义革命和建设时期；改革开放和社会主义现代化建设新时期；中国特色社会主义新时代。',
pit:'“进入新时代”不意味着我国已经改变社会主义初级阶段基本国情。',
test:'给每个历史时期分别写一句“主要解决什么问题”。'},
{id:'xs1',cat:'新思想',title:'科学体系：十个明确、十四个坚持、十三方面成就',hot:true,
explain:'这三组不是三个孤立清单。“十个明确”偏理论判断，“十四个坚持”偏实践方略，“十三个方面成就”偏实践成果与原创性理念；“六个必须坚持”则提炼世界观和方法论。',
standard:'先记数字骨架：十个明确 + 十四个坚持 + 十三个方面成就 + 六个必须坚持。再分别掌握完整顺序。',
pit:'两套“十四个坚持”最容易串台：出现生态文明、国家安全、一国两制、人类命运共同体，多半是基本方略；出现党性、组织体系、干部、作风、纪律、三不腐，多半是党建思想。',
test:'用一句话说明“十个明确”和“十四个坚持”的功能差别。'},
{id:'xs2',cat:'方法论',title:'六个必须坚持与两个结合',hot:true,
explain:'六个必须坚持构成从价值立场、主体精神、发展方式、实践入口、思维方法到世界视野的整体链条：人民至上—自信自立—守正创新—问题导向—系统观念—胸怀天下。',
standard:'两个结合回答马克思主义中国化时代化如何扎根中国：同中国具体实际相结合、同中华优秀传统文化相结合。',
pit:'“自信自立”不等于封闭；“守正创新”不是守旧；“人民至上”不是迎合所有个别短期偏好。',
test:'任选一个校园治理问题，用六个必须坚持逐项分析。'},
{id:'xdh1',cat:'中国式现代化',title:'五个中国特色与九项本质要求',hot:true,
explain:'中国式现代化首先定性为中国共产党领导的社会主义现代化；五个中国特色说明“长什么样”，九项本质要求说明“要达到什么价值与制度方向”。',
standard:'五个中国特色：人口规模巨大、全体人民共同富裕、物质文明和精神文明相协调、人与自然和谐共生、走和平发展道路。',
pit:'共同富裕不是同步同等富裕；和平发展不是放弃维护国家主权、安全、发展利益。',
test:'完整复述五个中国特色，再说出九项本质要求中的至少六项。'},
{id:'dj1',cat:'党建思想',title:'习近平党建思想：定位与重大时代课题',hot:true,
explain:'这不是只讲基层党建或党务工作，而是围绕长期执政条件下“建设什么样的长期执政的马克思主义政党、怎样建设长期执政的马克思主义政党”形成的系统理论。',
standard:'习近平党建思想是习近平新时代中国特色社会主义思想的重要组成部分，是加强新时代党的建设的根本遵循。',
pit:'不要把“习近平党建思想十四个坚持”与新时代治国理政基本方略的十四个坚持混为一套。',
test:'准确复述重大时代课题、理论定位和实践定位。'},
{id:'dj2',cat:'党建思想',title:'党建思想十四个坚持：四组结构',hot:true,
explain:'建议按四组记：1—4领导与全面从严治党；5—7政治建设、理论武装、党性；8—10组织体系、干部、作风；11—14纪律、反腐、制度、责任。',
standard:'十四条必须按原顺序掌握，尤其“上下贯通、执行有力”“堪当民族复兴重任”“不敢腐、不能腐、不想腐”“制度治党、依规治党”等完整定语。',
pit:'题干出现生态文明、一国两制、总体国家安全观时，不是这套党建思想十四个坚持。',
test:'闭卷按四组写出十四条，再与原文库核对顺序。'},
{id:'sz1',cat:'四中全会',title:'二十届四中全会与“十五五”：定位、六原则、七目标',hot:true,
explain:'六项原则回答“谁领导、为谁发展、怎样发展、靠什么动力、如何配置资源、怎样守住安全”；七项目标从经济、科技、改革、文明、民生、生态、安全构成整体目标体系。',
standard:'全会于2025年10月20日至23日举行，审议通过“十五五”规划建议；“十五五”是基本实现社会主义现代化夯实基础、全面发力的关键时期，具有承前启后的重要地位。',
pit:'六原则、七目标属于“十五五”阶段安排，不要与2035远景目标或二十大“两步走”混淆。',
test:'不看资料写出六原则、七目标，并给每项标注它主要解决的治理问题。'},
{id:'qy1',cat:'七一讲话',title:'2026年七一讲话：五个概括、六个优秀特质、五个必须',hot:true,
explain:'学习时不要只背数字。五个历史性概括总结党的百余年奋斗意义；六个优秀特质解释中国共产党为什么能；五个必须落到继续奋斗的实践要求。',
standard:'六个优秀特质可配对记忆：真理—方向；人民—根基；使命—主动；潮流—前列；斗争—信心；自身—活力。',
pit:'七一讲话“五个必须”与党的二十大“六个必须坚持”不是同一套内容。',
test:'随机抽一个“优秀特质”的前半句，说出后半句；再完整复述三个务必。'},
{id:'ruc1',cat:'人大校史',title:'人大红色校史：六节点与使命演进',hot:true,
explain:'校史不要只背年份，要把每次变化放进国家任务变化中：抗战培养革命先锋—新中国培养建国干部—改革开放培养国民表率和社会栋梁—新时代培养复兴栋梁、强国先锋。',
standard:'时间轴：1937陕北公学 → 1939华北联合大学 → 1948华北大学 → 1949.12.16决定组建人大 → 1950.10.3开学典礼 → 2022.4.25总书记考察人大。',
pit:'1939年7月7日是华北联合大学正式成立节点；1948年华北联大与北方大学合并成立华北大学。',
test:'不看资料画六节点时间轴，并给每个时期写出对应的人才使命关键词。'},
{id:'ruc2',cat:'人大校史',title:'2022年4月25日考察人大讲话',hot:true,
explain:'核心不是单独背一句口号，而是理解办什么样的大学、培养什么样的人、怎样扎根中国办高水平大学。教育根本问题的“三问”是整段内容的总入口。',
standard:'教育根本问题：为谁培养人、培养什么人、怎样培养人。办学方向六关键词：党的领导、马克思主义指导地位、为党和人民事业服务、立德树人、传承红色基因、扎根中国大地办大学。',
pit:'不要只会背“复兴栋梁、强国先锋”，还要能说明它与人大红色基因和新时代使命的关系。',
test:'完整复述教育根本问题、六个办学关键词和人大精神品格。'},
{id:'gn1',cat:'高频概念',title:'两个确立、两个维护、四个意识、四个自信',hot:true,
explain:'“两个确立”偏政治成果和政治判断；“两个维护”偏行动要求。四个意识强调政治意识、大局意识、核心意识、看齐意识；四个自信是道路自信、理论自信、制度自信、文化自信。',
standard:'答题时要区分“确立什么”与“维护什么”，不要只写两个数字词。',
pit:'“两个维护”不是一般性口号，而是具体指向核心地位和党中央权威、集中统一领导。',
test:'用两句话分别解释“两个确立”和“两个维护”。'}
];

const MEMORY=[
{cat:'党章',title:'党的性质',level:'逐字背',text:'中国共产党是中国工人阶级的先锋队，同时是中国人民和中华民族的先锋队，是中国特色社会主义事业的领导核心，代表中国先进生产力的发展要求，代表中国先进文化的前进方向，代表中国最广大人民的根本利益。',note:'两个先锋队 → 领导核心 → 三个代表'},
{cat:'党章',title:'最高理想和最终目标',level:'逐字背',text:'党的最高理想和最终目标是实现共产主义。'},
{cat:'党章',title:'行动指南',level:'逐字背',text:'中国共产党以马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、习近平新时代中国特色社会主义思想作为自己的行动指南。',note:'按历史顺序背，不能漏“科学发展观”'},
{cat:'党章',title:'社会主义初级阶段基本路线',level:'整段熟背',text:'领导和团结全国各族人民，以经济建设为中心，坚持四项基本原则，坚持改革开放，自力更生，艰苦创业，为把我国建设成为富强民主文明和谐美丽的社会主义现代化强国而奋斗。'},
{cat:'党章',title:'申请入党的基本条件',level:'整段熟背',text:'年满十八岁的中国工人、农民、军人、知识分子和其他社会阶层的先进分子，承认党的纲领和章程，愿意参加党的一个组织并在其中积极工作、执行党的决议和按期交纳党费的，可以申请加入中国共产党。'},
{cat:'党章',title:'党员基本定位与利益观',level:'逐字背',text:'中国共产党党员是中国工人阶级的有共产主义觉悟的先锋战士。\n\n中国共产党党员必须全心全意为人民服务，不惜牺牲个人的一切，为实现共产主义奋斗终身。'},
{cat:'党章',title:'党员八项义务',level:'原文主干',text:'1. 认真学习马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、习近平新时代中国特色社会主义思想，学习党的路线、方针、政策和决议，学习党的基本知识和党的历史，学习科学、文化、法律和业务知识，努力提高为人民服务的本领。\n2. 增强“四个意识”、坚定“四个自信”、做到“两个维护”，贯彻执行党的基本路线和各项方针、政策，带头参加改革开放和社会主义现代化建设，带动群众为经济发展和社会进步艰苦奋斗，在生产、工作、学习和社会生活中起先锋模范作用。\n3. 坚持党和人民的利益高于一切，个人利益服从党和人民的利益，吃苦在前，享受在后，克己奉公，多做贡献。\n4. 自觉遵守党的纪律，首先是党的政治纪律和政治规矩，模范遵守国家的法律法规，严格保守党和国家的秘密，执行党的决定，服从组织分配，积极完成党的任务。\n5. 维护党的团结和统一，对党忠诚老实，言行一致，坚决反对一切派别组织和小集团活动，反对阳奉阴违的两面派行为和一切阴谋诡计。\n6. 切实开展批评和自我批评，勇于揭露和纠正违反党的原则的言行和工作中的缺点、错误，坚决同消极腐败现象作斗争。\n7. 密切联系群众，向群众宣传党的主张，遇事同群众商量，及时向党反映群众的意见和要求，维护群众的正当利益。\n8. 发扬社会主义新风尚，带头实践社会主义核心价值观和社会主义荣辱观，提倡共产主义道德，弘扬中华民族传统美德，为了保护国家和人民的利益，在一切困难和危险的时刻挺身而出，英勇斗争，不怕牺牲。',note:'先按四组理解，再逐条背'},
{cat:'党章',title:'党员八项权利',level:'原文主干',text:'1. 参加党的有关会议，阅读党的有关文件，接受党的教育和培训。\n2. 在党的会议上和党报党刊上，参加关于党的政策问题的讨论。\n3. 对党的工作提出建议和倡议。\n4. 在党的会议上有根据地批评党的任何组织和任何党员，向党负责地揭发、检举党的任何组织和任何党员违法乱纪的事实，要求处分违法乱纪的党员，要求罢免或撤换不称职的干部。\n5. 行使表决权、选举权，有被选举权。\n6. 在党组织讨论决定对党员的党纪处分或作出鉴定时，本人有权参加和进行申辩，其他党员可以为他作证和辩护。\n7. 对党的决议和政策如有不同意见，在坚决执行的前提下，可以声明保留，并且可以把自己的意见向党的上级组织直至中央提出。\n8. 向党的上级组织直至中央提出请求、申诉和控告，并要求有关组织给以负责的答复。\n\n党的任何一级组织直至中央都无权剥夺党员的上述权利。'},
{cat:'党章',title:'入党誓词',level:'逐字背',text:'我志愿加入中国共产党，拥护党的纲领，遵守党的章程，履行党员义务，执行党的决定，严守党的纪律，保守党的秘密，对党忠诚，积极工作，为共产主义奋斗终身，随时准备为党和人民牺牲一切，永不叛党。',note:'典型默写题，建议每天默写一次'},
{cat:'党章',title:'预备党员与党龄',level:'逐字背',text:'预备党员的义务同正式党员一样。预备党员的权利，除了没有表决权、选举权和被选举权以外，也同正式党员一样。\n\n预备党员的预备期为一年。\n\n党员的党龄，从预备期满转为正式党员之日算起。'},
{cat:'党章',title:'民主集中制定位与六项原则',level:'整段熟背',text:'民主集中制是民主基础上的集中和集中指导下的民主相结合。它既是党的根本组织原则，也是群众路线在党的生活中的运用。\n\n1. 党员个人服从党的组织，少数服从多数，下级组织服从上级组织，全党各个组织和全体党员服从党的全国代表大会和中央委员会。\n2. 党的各级领导机关，除它们派出的代表机关和在非党组织中的党组外，都由选举产生。\n3. 党的最高领导机关，是党的全国代表大会和它所产生的中央委员会。党的地方各级领导机关，是党的地方各级代表大会和它们所产生的委员会。党的各级委员会向同级的代表大会负责并报告工作。\n4. 党的上级组织要经常听取下级组织和党员群众的意见，及时解决他们提出的问题。党的下级组织既要向上级组织请示和报告工作，又要独立负责地解决自己职责范围内的问题。上下级组织之间要互通情报、互相支持和互相监督。党的各级组织要按规定实行党务公开，使党员对党内事务有更多的了解和参与。\n5. 党的各级委员会实行集体领导和个人分工负责相结合的制度。凡属重大问题都要按照集体领导、民主集中、个别酝酿、会议决定的原则，由党的委员会集体讨论，作出决定；委员会成员要根据集体的决定和分工，切实履行自己的职责。\n6. 党禁止任何形式的个人崇拜。要保证党的领导人的活动处于党和人民的监督之下，同时维护一切代表党和人民利益的领导人的威信。'},
{cat:'党章',title:'纪律、党徽党旗',level:'逐字背',text:'对党员的纪律处分有五种：警告、严重警告、撤销党内职务、留党察看、开除党籍。\n\n开除党籍是党内的最高处分。\n\n中国共产党党徽为镰刀和锤头组成的图案。\n\n中国共产党党旗为旗面缀有金黄色党徽图案的红旗。'},
{cat:'新思想',title:'新时代新征程党的中心任务',level:'整段熟背',text:'从现在起，中国共产党的中心任务就是团结带领全国各族人民全面建成社会主义现代化强国、实现第二个百年奋斗目标，以中国式现代化全面推进中华民族伟大复兴。'},
{cat:'新思想',title:'十个明确（原文主干）',level:'原文主干',text:'1. 明确中国特色社会主义最本质的特征是中国共产党领导，中国特色社会主义制度的最大优势是中国共产党领导，中国共产党是最高政治领导力量。\n2. 明确坚持和发展中国特色社会主义，总任务是实现社会主义现代化和中华民族伟大复兴。\n3. 明确新时代我国社会主要矛盾是人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。\n4. 明确中国特色社会主义事业总体布局是“五位一体”、战略布局是“四个全面”。\n5. 明确全面深化改革总目标是完善和发展中国特色社会主义制度、推进国家治理体系和治理能力现代化。\n6. 明确全面推进依法治国总目标是建设中国特色社会主义法治体系、建设社会主义法治国家。\n7. 明确必须坚持和完善社会主义基本经济制度，贯彻新发展理念，构建新发展格局，推动高质量发展，统筹发展和安全。\n8. 明确党在新时代的强军目标是建设一支听党指挥、能打胜仗、作风优良的人民军队，把人民军队建设成为世界一流军队。\n9. 明确中国特色大国外交要服务民族复兴、促进人类进步，推动建设新型国际关系，推动构建人类命运共同体。\n10. 明确全面从严治党的战略方针，提出新时代党的建设总要求，以伟大自我革命引领伟大社会革命。'},
{cat:'新思想',title:'十四个坚持（基本方略）',level:'整段熟背',text:'坚持党对一切工作的领导；坚持以人民为中心；坚持全面深化改革；坚持新发展理念；坚持人民当家作主；坚持全面依法治国；坚持社会主义核心价值体系；坚持在发展中保障和改善民生；坚持人与自然和谐共生；坚持总体国家安全观；坚持党对人民军队的绝对领导；坚持“一国两制”和推进祖国统一；坚持推动构建人类命运共同体；坚持全面从严治党。',note:'必须与党建思想十四个坚持分开背'},
{cat:'新思想',title:'十三个方面成就',level:'整段熟背',text:'在坚持党的全面领导上；在全面从严治党上；在经济建设上；在全面深化改革开放上；在政治建设上；在全面依法治国上；在文化建设上；在社会建设上；在生态文明建设上；在国防和军队建设上；在维护国家安全上；在坚持“一国两制”和推进祖国统一上；在外交工作上。'},
{cat:'方法论',title:'六个必须坚持与两个结合',level:'逐字背',text:'必须坚持人民至上；必须坚持自信自立；必须坚持守正创新；必须坚持问题导向；必须坚持系统观念；必须坚持胸怀天下。\n\n把马克思主义基本原理同中国具体实际相结合、同中华优秀传统文化相结合。'},
{cat:'中国式现代化',title:'五个中国特色',level:'整段熟背',text:'人口规模巨大的现代化；全体人民共同富裕的现代化；物质文明和精神文明相协调的现代化；人与自然和谐共生的现代化；走和平发展道路的现代化。'},
{cat:'中国式现代化',title:'九项本质要求',level:'整段熟背',text:'坚持中国共产党领导；坚持中国特色社会主义；实现高质量发展；发展全过程人民民主；丰富人民精神世界；实现全体人民共同富裕；促进人与自然和谐共生；推动构建人类命运共同体；创造人类文明新形态。'},
{cat:'党建思想',title:'习近平党建思想十四个坚持',level:'整段熟背',text:'1. 坚持党的领导是中国特色社会主义最本质的特征\n2. 坚持党中央集中统一领导\n3. 坚持全面从严治党\n4. 坚持不忘初心、牢记使命\n5. 坚持以党的政治建设为统领\n6. 坚持用党的创新理论凝心铸魂\n7. 坚持锤炼坚强党性\n8. 坚持健全上下贯通、执行有力的组织体系\n9. 坚持建设堪当民族复兴重任的高素质干部队伍\n10. 坚持推进作风建设常态化长效化\n11. 坚持用严明的纪律管全党治全党\n12. 坚持一体推进不敢腐、不能腐、不想腐\n13. 坚持制度治党、依规治党\n14. 坚持落实管党治党政治责任'},
{cat:'七一讲话',title:'五个历史性概括',level:'整段熟背',text:'1. 从根本上改变中国人民的前途命运\n2. 开辟实现中华民族伟大复兴的正确道路\n3. 展示马克思主义的强大生命力\n4. 深刻影响世界历史进程\n5. 锻造强大的中国共产党'},
{cat:'七一讲话',title:'六个优秀特质',level:'整段熟背',text:'1. 矢志追求真理，始终把准前进方向\n2. 深深植根人民，始终拥有坚实根基\n3. 勇担历史使命，始终掌握战略主动\n4. 顺应发展潮流，始终走在时代前列\n5. 敢于善于斗争，始终保持必胜信心\n6. 注重强健自身，始终充满生机活力'},
{cat:'七一讲话',title:'五个必须与三个务必',level:'整段熟背',text:'五个必须：\n1. 坚持党的基本理论、基本路线、基本方略\n2. 紧紧依靠人民创造历史伟业\n3. 积极应对前进道路上的风险挑战\n4. 持续推动构建人类命运共同体\n5. 持之以恒推进全面从严治党\n\n三个务必：\n务必不忘初心、牢记使命；务必谦虚谨慎、艰苦奋斗；务必敢于斗争、善于斗争。'},
{cat:'四中全会',title:'“十五五”六项原则',level:'整段熟背',text:'1. 坚持党的全面领导\n2. 坚持人民至上\n3. 坚持高质量发展\n4. 坚持全面深化改革\n5. 坚持有效市场和有为政府相结合\n6. 坚持统筹发展和安全'},
{cat:'四中全会',title:'“十五五”七项目标',level:'整段熟背',text:'1. 高质量发展取得显著成效\n2. 科技自立自强水平大幅提高\n3. 进一步全面深化改革取得新突破\n4. 社会文明程度明显提升\n5. 人民生活品质不断提高\n6. 美丽中国建设取得新的重大进展\n7. 国家安全屏障更加巩固'},
{cat:'人大校史',title:'六个时间节点',level:'整段熟背',text:'1937 陕北公学 → 1939 华北联合大学 → 1948 华北大学 → 1949年12月16日决定组建中国人民大学 → 1950年10月3日举行开学典礼 → 2022年4月25日习近平总书记考察中国人民大学。'},
{cat:'人大校史',title:'教育根本问题、办学方向与精神品格',level:'逐字背',text:'教育根本问题：为谁培养人、培养什么人、怎样培养人。\n\n办学方向六关键词：坚持党的领导；坚持马克思主义指导地位；坚持为党和人民事业服务；落实立德树人根本任务；传承红色基因；扎根中国大地办大学。\n\n人大精神品格：党办的大学让党放心，人民的大学不负人民。'}
];

const state={cat:'全部',mode:'lessons',done:new Set(JSON.parse(localStorage.getItem('party48_lesson_done')||'[]')),query:''};
const esc2=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function lines(s){return esc2(s).replace(/\n/g,'<br>')}
function saveDone(){localStorage.setItem('party48_lesson_done',JSON.stringify([...state.done]))}
function cats(){return ['全部',...new Set([...LESSONS.map(x=>x.cat),...MEMORY.map(x=>x.cat)])]}
function ensureUI(){
 const nav=document.querySelector('.nav'); if(!nav||document.getElementById('learnNavBtn')) return;
 const b=document.createElement('button');b.id='learnNavBtn';b.textContent='系统学习';b.className='primary';b.onclick=()=>{tab('learn');renderStudy()};nav.prepend(b);
 const sec=document.createElement('section');sec.id='learn';sec.className='panel page hidden';
 sec.innerHTML='<div class="study-subnav"><button id="lessonModeBtn" class="active">系统学习</button><button id="memoryModeBtn">原文背诵</button></div><div id="learnRoot"></div>';
 const quiz=document.getElementById('quiz'); quiz?.parentNode?.insertBefore(sec,quiz);
 document.getElementById('lessonModeBtn').onclick=()=>{state.mode='lessons';renderStudy()};
 document.getElementById('memoryModeBtn').onclick=()=>{state.mode='memory';renderStudy()};
 if(!location.hash){tab('learn');renderStudy()}
}
function renderStudy(){
 const root=document.getElementById('learnRoot');if(!root)return;
 document.getElementById('lessonModeBtn')?.classList.toggle('active',state.mode==='lessons');
 document.getElementById('memoryModeBtn')?.classList.toggle('active',state.mode==='memory');
 root.innerHTML='<div class="learn-shell"><aside class="learn-side"><h3>学习目录</h3><div class="learn-filter">'+cats().map(c=>'<button data-cat="'+esc2(c)+'" class="'+(c===state.cat?'active':'')+'">'+esc2(c)+'</button>').join('')+'</div></aside><div class="learn-main"><div id="learnContent"></div></div></div>';
 root.querySelectorAll('[data-cat]').forEach(x=>x.onclick=()=>{state.cat=x.dataset.cat;renderStudy()});
 if(state.mode==='lessons')renderLessons();else renderMemory();
}
function renderLessons(){
 const all=LESSONS.filter(x=>state.cat==='全部'||x.cat===state.cat),done=all.filter(x=>state.done.has(x.id)).length;
 const pct=all.length?Math.round(done/all.length*100):0;
 const box=document.getElementById('learnContent');
 box.innerHTML='<div class="learn-hero"><h2>V4 系统学习</h2><div class="small">先理解，再按规范表述，最后去原文背诵。当前模块：'+esc2(state.cat)+'</div><div class="learn-progress"><i style="width:'+pct+'%"></i></div><div class="small">已学 '+done+' / '+all.length+' · '+pct+'%</div></div>'+
 (all.length?all.map(x=>'<article class="learn-card"><div class="learn-meta"><span class="learn-tag">'+esc2(x.cat)+'</span>'+(x.hot?'<span class="learn-tag hot">重点</span>':'')+'</div><h3>'+esc2(x.title)+'</h3><div class="learn-block learn-understand"><b>先讲懂</b>'+esc2(x.explain)+'</div><div class="learn-block learn-standard"><b>规范表述</b>'+esc2(x.standard)+'</div><div class="learn-block learn-pitfall"><b>易错辨析</b>'+esc2(x.pit)+'</div><div class="learn-block learn-test"><b>自测</b>'+esc2(x.test)+'</div><div class="learn-actions"><button data-done="'+x.id+'" class="'+(state.done.has(x.id)?'done':'')+'">'+(state.done.has(x.id)?'✓ 已学会':'标记已学')+'</button><button data-memory="'+esc2(x.cat)+'">去背原文</button><button data-quiz="'+esc2(x.cat)+'">刷本专题题目</button></div></article>').join(''):'<div class="study-empty">暂无内容</div>');
 box.querySelectorAll('[data-done]').forEach(btn=>btn.onclick=()=>{const id=btn.dataset.done;state.done.has(id)?state.done.delete(id):state.done.add(id);saveDone();renderLessons()});
 box.querySelectorAll('[data-memory]').forEach(btn=>btn.onclick=()=>{state.cat=btn.dataset.memory;state.mode='memory';renderStudy()});
 box.querySelectorAll('[data-quiz]').forEach(btn=>btn.onclick=()=>{const c=btn.dataset.quiz;const sel=document.getElementById('cat');if(sel&&[...sel.options].some(o=>o.value===c)){sel.value=c;newQuiz()}tab('quiz')});
}
function renderMemory(){
 const box=document.getElementById('learnContent'), all=MEMORY.filter(x=>(state.cat==='全部'||x.cat===state.cat)&&(!state.query||x.title.includes(state.query)||x.text.includes(state.query)));
 box.innerHTML='<div class="learn-hero"><h2>原文背诵库</h2><div class="small">默认遮住原文：先口述或默写，再点“显示原文”逐字核对。背诵等级沿用 V4：逐字背 / 整段熟背 / 原文主干。</div><div class="memory-toolbar"><input id="memorySearch" class="learn-search" placeholder="搜索原文，如：入党誓词、十四个坚持、七项目标" value="'+esc2(state.query)+'"><button id="showAllMem">全部显示</button><button id="hideAllMem">全部遮住</button></div></div>'+
 '<div class="memory-grid">'+(all.length?all.map((x,i)=>'<article class="memory-card"><div class="memory-head"><div><div class="learn-tag">'+esc2(x.cat)+'</div><h3>'+esc2(x.title)+'</h3></div><span class="memory-level">'+esc2(x.level)+'</span></div><div class="memory-text masked" id="memText'+i+'">'+lines(x.text)+'</div>'+(x.note?'<div class="memory-note">记忆提示：'+esc2(x.note)+'</div>':'')+'<div class="learn-actions"><button data-reveal="'+i+'">显示原文</button></div></article>').join(''):'<div class="study-empty">没有匹配的原文块。</div>')+'</div>';
 const search=document.getElementById('memorySearch');if(search){search.oninput=()=>{state.query=search.value.trim();clearTimeout(search._t);search._t=setTimeout(renderMemory,250)}}
 box.querySelectorAll('[data-reveal]').forEach(btn=>btn.onclick=()=>{const t=document.getElementById('memText'+btn.dataset.reveal);const m=t.classList.toggle('masked');btn.textContent=m?'显示原文':'遮住原文'});
 const show=document.getElementById('showAllMem'),hide=document.getElementById('hideAllMem');
 if(show)show.onclick=()=>{box.querySelectorAll('.memory-text').forEach(x=>x.classList.remove('masked'));box.querySelectorAll('[data-reveal]').forEach(x=>x.textContent='遮住原文')};
 if(hide)hide.onclick=()=>{box.querySelectorAll('.memory-text').forEach(x=>x.classList.add('masked'));box.querySelectorAll('[data-reveal]').forEach(x=>x.textContent='显示原文')};
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensureUI);else ensureUI();
setTimeout(ensureUI,300);setTimeout(ensureUI,1000);
})();
