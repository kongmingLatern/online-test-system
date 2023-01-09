import { useMatch } from '@/stores/match.store';
import { setActivePinia, createPinia } from 'pinia';
import match from './match.json';

describe('Subject Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  // NOTE: 测试接口 'match/getMatchPasswordPage' 的数据'
  it.skip('should return 1 record', async () => {
    const store = useMatch();
    await expect(store.getMatchsByPage(1, 1)).resolves.toMatchInlineSnapshot(`
      [
        [
          {
            "classNo": "0922201",
            "matchId": "1597184056519331841",
            "status": "考试中",
            "studentName": "沈金晶",
            "studentNo": "092218114",
            "subjectName": "高数A",
            "taskPassword": "3474",
            "taskStartToEnd": "2022年11月26日 08:00-10:00",
          },
        ],
        17,
      ]
    `);
  });
  // NOTE: 测试接口 'match/addClassMatch' 的数据'
  it.skip('should return 添加成功', async () => {
    const store = useMatch();
    const classIdList = ['1595242005816958978'];
    const taskId = '1596427549662015490';
    await expect(
      store.addClassMatch(classIdList, taskId)
    ).resolves.toMatchInlineSnapshot('"添加成功"');
  });
  // NOTE: 测试接口 'match/startMatch'
  it.skip('shoule return 100 question', async () => {
    const store = useMatch();
    await expect(store.startMatch('1599281038998163459', '123456')).resolves
      .toMatchInlineSnapshot(`
      [
        [
          {
            "questionAnswerList": [
              "周转时间成正比，周转次数成正比",
              "周转时间成反比，周转次数成正比",
              "周转时间成正比，周转次数成反比",
              "周转时间成反比，周转次数成反比",
            ],
            "questionId": "1595984141935997116",
            "questionList": "资本周转速度与：（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "要高度肯定他们带领人民群众推动历史发展的伟大功绩",
              "要坚持阶级分析方法",
              "要忽略他们在认识和行动上的所存在的历史局限性",
              "要坚持历史分析法",
            ],
            "questionId": "1595984141935996977",
            "questionList": "关于评价无产阶级领袖人物，以下说法错误的是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "理论创新无止境",
              "先有理论创新，后有实践创新",
              "要通过理论创新推动制度创新、科技创新、文化创新以及其他多方面的创新",
              "理论创新是社会发展和变革的决定因素",
            ],
            "questionId": "1595984141868888189",
            "questionList": "理论创新是社会发展和变革的先导。这说明（ ）",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "直接动力",
              "重要动力",
              "根本动力之一",
              "根本动力",
            ],
            "questionId": "1595984141935996933",
            "questionList": "社会基本矛盾是社会发展的（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "不一致",
              "部分相同",
              "有差别",
              "完全一致",
            ],
            "questionId": "1595984141998911547",
            "questionList": "无产阶级的解放和全人类的解放是（）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "经济基础",
              "社会生产力",
              "社会生产关系",
              "生产力和生产关系统一的生产方式",
            ],
            "questionId": "1595984141801779225",
            "questionList": "马克思主义政治经济学研究对象是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "共产主义社会",
              "资本主义社会",
              "奴隶社会",
              "封建社会",
            ],
            "questionId": "1595984141998911539",
            "questionList": "没有剥削和压迫的社会形态是（）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "坚持唯物主义与唯心主义的统一、辩证法与形而上学的统一",
              "坚持一切从实际出发，理论联系实际，实事求是，在实践中检验真理和发展真理",
              "坚持人民的利益高于一切，实现以劳动人民为主体的最广大人民根本利益",
              "坚持一切为了人民、一切依靠人民群众，从群众中来，到群众中去的原则",
            ],
            "questionId": "1595984141801779233",
            "questionList": "马克思主义最重要的理论品质是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "金融寡头在经济上进行统治的结果",
              "垄断组织在经济生活中起决定作用的结果",
              "资本主义基本矛盾的不断发展和深化",
              "资本主义生产关系的进一步调整",
            ],
            "questionId": "1595984141935996988",
            "questionList": "国家垄断资本主义产生和发展的原因是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "与社会生产状况相适应的人口",
              "数量多、密度大、增长快",
              "数量少、密度小、增长慢",
              "数量少、密度大、增长适度",
            ],
            "questionId": "1595984141868888197",
            "questionList": "最有利于促进社会发展的人口因素是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "美好生活需要  不平衡不充分的发展",
              "物质文化需求  落后的社会生产",
              "美好生活需要  落后的社会生产",
              "物质文化需求  不平衡不充分的发展",
            ],
            "questionId": "1595984141801779305",
            "questionList": "我国社会主要矛盾已经转化为人民日益增长的（ ）和（ ）之间的矛盾。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "不变资本",
              "剩余价值",
              "可变资本",
              "资本积累",
            ],
            "questionId": "1595984141935997122",
            "questionList": "资本主义扩大再生产的源泉是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "相对性",
              "客观性",
              "有限性",
              "一维性",
            ],
            "questionId": "1595984141801779280",
            "questionList": "最近，由多国科学家组成的团队利用一台粒子加速器，让两束原子在一个圆环轨道上做高速运动，发现这些原子自身的时间确实比外界时间慢了。这项实验进一步证明了作为物质运动存在形式的时间具有（   ）",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "必然与偶然",
              "原因与结果",
              "现实与可能",
              "内容与形式",
            ],
            "questionId": "1595984141801779315",
            "questionList": "从构成要素和表现形式上反映事物的一对基本范畴是（  ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "历史思维能力",
              "创新思维能力",
              "辩证思维能力",
              "战略思维能力",
            ],
            "questionId": "1595984141868888082",
            "questionList": "科学思维能力的根本要求和集中体现是（  ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "是否运动发展",
              "是否有共同的规律",
              "是否有一个共同的本原",
              "是否普遍联系",
            ],
            "questionId": "1595984141801779261",
            "questionList": "世界的统一性问题说的是，世界万物（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "法郎吉",
              "人民公社",
              "乌托邦",
              "新和谐公社",
            ],
            "questionId": "1595984141935997079",
            "questionList": "欧文在美洲的印第安纳建立了（），实行财产共有，成年人享有平等的权利。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "不起作用",
              "起消极作用",
              "有的起积极作用，有的起消极作用",
              "起积极作用",
            ],
            "questionId": "1595984141868888125",
            "questionList": "非理性因素对人的认识活动和认识能力（  ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "唯心主义",
              "辩证唯物主义",
              "形而上学唯心主义",
              "古代朴素唯物主义",
            ],
            "questionId": "1595984141801779256",
            "questionList": "（    ）把物质等同于具体的物质形态。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "十七世纪英国唯物主义哲学",
              "十八世纪法国唯物主义哲学",
              "古希腊素朴唯物主义哲学",
              "十九世纪初德国古典哲学",
            ],
            "questionId": "1595984141801779224",
            "questionList": "马克思主义哲学的直接理论来源是（　　）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "按劳分配",
              "旧式分工消失",
              "按需分配",
              "消灭私有制",
            ],
            "questionId": "1595984141998911531",
            "questionList": "体脑对立的消失是因为（）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "奴隶社会",
              "资本主义社会",
              "封建社会",
              "共产主义社会",
            ],
            "questionId": "1595984141998911530",
            "questionList": "国家消亡的社会阶段是（）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "资本论",
              "国家与革命",
              "共产党宣言",
              "反杜林论",
            ],
            "questionId": "1595984141734670343",
            "questionList": "被誉为“工人阶级的圣经”的马克思主义经典著作是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "工人的剩余劳动",
              "劳动力的价值",
              "不等价交换",
              "工人工资的扣除",
            ],
            "questionId": "1595984141998911494",
            "questionList": "剩余价值来源于(   )",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "剩余价值率转化为利润率的过程",
              "价值转化为生产价格的过程",
              "剩余价值转化为利润的过程",
              "各部门资本家重新瓜分剩余价值的过程",
            ],
            "questionId": "1595984141935997133",
            "questionList": "利润率向平均利润率转化的过程同时就是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "唯心主义的错误观点",
              "形而上学唯物主义的错误观点",
              "辨证唯物主义才承认的观点",
              "一切唯物主义都承认的观点",
            ],
            "questionId": "1595984141868888104",
            "questionList": "认识是主体对客体的反映，这是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "人的认识随着社会实践的变化而变化",
              "人的认识是一个反复曲折的过程",
              "事物之间是普遍联系的",
              "人在确定事物的标准上起主导作用",
            ],
            "questionId": "1595984141868888101",
            "questionList": "最初人们把文盲定义为“不识字的人”;后来又把文盲确定为“看不懂现代信息符号、图表的人。”;而现在联合国把文盲确定为“不能用计算机交流的人。”从哲学上看（  ）",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "工业资本",
              "产业资本",
              "银行资本",
              "金融资本",
            ],
            "questionId": "1595984141935997025",
            "questionList": "在垄断资本主义阶段，占统治地位的资本是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "人类学",
              "马克思主义哲学",
              "政治经济学",
              "科学社会主义",
            ],
            "questionId": "1595984141801779241",
            "questionList": "在马克思主义的组成部分中，构成整个马克思主义的基础部分的是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "主客体之间的依赖关系",
              "价值主体的主观需要",
              "价值客体的结构和功能",
              "主客体之间的价值关系",
            ],
            "questionId": "1595984141868888173",
            "questionList": "价值评价的认识对象是（  ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "创新是辩证的否定观的要求，要敢于否定一切",
              "创新要不断解放思想、实事求是、与时俱进",
              "创新是民族进步的灵魂，是一个国家兴旺发达的不竭动力",
              "在实践基础上的理论创新是社会发展和变革的先导",
            ],
            "questionId": "1595984141868888188",
            "questionList": "下列关于“创新”的理解不正确的是（  ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "深入实际，调查研究",
              "制定方案，付诸实践",
              "科学抽象，形成理论",
              "汇总材料，去伪存真",
            ],
            "questionId": "1595984141868888129",
            "questionList": "下列选项中，属于认识的第二次飞跃的是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "以苏联模式迈进共产主义",
              "以马恩原著原文的指示迈进",
              "以具有自身特点的方式逐步向共产主义方向迈进",
              "以中国模式提供范本",
            ],
            "questionId": "1595984141998911554",
            "questionList": "由于各个民族国家的历史传统和现实国情不同，建设社会主义的具体道路也会有所不同，进入社会主义时期的国家应该（）",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "主观唯心主义的错误",
              "形而上学的错误",
              "唯理论的错误",
              "经验论的错误",
            ],
            "questionId": "1595984141868888120",
            "questionList": "有人把个别的、局部的经验当作普遍真理，到处搬用，否认科学理论的指导意义。这在认识论上犯了类似于（　　）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "《资本论》",
              "《共产党宣言》",
              "《共产主义原理》",
              "《德意志意识形态",
            ],
            "questionId": "1595984141935997034",
            "questionList": "科学社会主义问世的标志性著作是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "购买软件的货币",
              "软件的有用性",
              "软件磁盘本身",
              "应用软件的计算机",
            ],
            "questionId": "1595984141935997091",
            "questionList": "作为商品的计算机软件，其价值的物质承担者是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "英雄人物是社会历史的主人，是历史的创造者",
              "每个人都是社会历史的主人，都是历史的创造者",
              "人民群众和英雄人物都是社会历史的主人，他们共同创造了历史",
              "人民群众是社会历史的主体，是历史的创造者",
            ],
            "questionId": "1595984141935996965",
            "questionList": "在历史创造者问题上，马克思主义的基本观点是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "个性共性的关系",
              "原因结果的关系",
              "特殊一般的关系",
              "对立统一的关系",
            ],
            "questionId": "1595984141868888118",
            "questionList": "辩证唯物主义认为感性认识与理性认识之间的关系是（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "垄断企业先进的技术设备",
              "垄断组织的垄断地位",
              "垄断资本家制定的垄断价格",
              "工人及其他劳动人民创造的剩余价值",
            ],
            "questionId": "1595984141935997007",
            "questionList": "垄断利润归根到底来源于（    ）。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "全人类理想与全体中国人民理想",
              "理想与现实",
              "最高纲领与最低纲领",
              "最终理想与阶段性理想",
            ],
            "questionId": "1595984141998911558",
            "questionList": "从层次上看，远大理想与共同理想的关系是()的关系。",
            "questionType": 1,
          },
          {
            "questionAnswerList": [
              "创造离不开反映，创造存在于反映之中",
              "是不可分割的",
              "是人类认识的两种不同的本质",
              "是同一本质的两种不同的功能，是一个硬币的两面",
              "反映也离不开创造，反映是在创造过程中实现的",
            ],
            "questionId": "1595984142456090712",
            "questionList": "在人的认识活动中，反映特性与能动的创造特性的关系是（   ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "是一种临时性政策",
              "是社会主义国家的最好政策",
              "对于保卫新生的苏维埃政权起了重要作用",
              "不符合当时俄国的的国情",
              "是为了拯救国家，拯救军队，拯救工农政权",
            ],
            "questionId": "1595984142456090932",
            "questionList": "战时共产主义政策（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "只有诗人才需要想像",
              "顿然醒悟，一下子抓住了问题的症结",
              "意志决定一切",
              "幻想是极可贵的品质",
              "在科学道路上，只有不畏劳苦坚持攀登的人，才有希望达到光辉的顶点",
            ],
            "questionId": "1595984142456090722",
            "questionList": "以下论断正确反映非理性因素在认识中作用的有(  )。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "是我们展望未来理想社会的基本依据",
              "立足于揭示未来社会的一般特点，努力作详尽的细节描写",
              "在剖析资本主义社会旧世界中阐发未来新世界的具体情况",
              "立足于揭示未来社会的一般特点，而不作详尽的细节描写",
              "也应结合社会主义国家特别是中国发展的历史经验，运用和发展这些科学的方法论",
            ],
            "questionId": "1595984142523199569",
            "questionList": "马克思主义经典作家站在科学的立场上，提出并自觉运用的预见未来社会的的科学方法。其意义是（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "人民群众通过物质生产实践为创造精神财富提供了必要的物质条件和设施",
              "人民群众还直接参加了社会精神财富的创造",
              "人民群众的生活、实践活动是一切精神财富、精神产品形成和发展的源泉",
              "知识分子创造精神财富，知识分子属于人民群众",
              "一部分人民群众创造物质财富，另一部分人民群众创造精神财富",
            ],
            "questionId": "1595984142456090845",
            "questionList": "人民群众是社会精神财富的创造者，这主要表现在（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "从商品交换的较长时间看，价格与价值是趋于一致的",
              "各种商品交换以交换价值为基础实行等价交换",
              "商品交换都是按照价格与价值相一致的原则进行的",
              "从商品交换的总体看，价格总额与价值总额是相等的",
              "各种商品价格的波动，是以各自的价值为基础的",
            ],
            "questionId": "1595984142523199534",
            "questionList": "商品价格受市场供求的影响，围绕价值上下波动，不是对价值规律作用的否定，而是价值规律作用的表现形式，这是因为（）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "奴隶社会",
              "资本主义社会",
              "共产主义社会",
              "封建社会",
              "原始社会",
            ],
            "questionId": "1595984142523199577",
            "questionList": "有剥削和压迫的社会阶段是（）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "生产资料属于不同的所有者",
              "商品生产和商品交换",
              "社会分工",
              "自然分工",
              "生产资料私有制",
            ],
            "questionId": "1595984142523199513",
            "questionList": "决定私人劳动和社会劳动矛盾的经济条件是（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "有金钱",
              "有本领",
              "有担当",
              "有理想",
              "有宗教信仰",
            ],
            "questionId": "1595984142523199602",
            "questionList": "青年一代有（），国家就有前途，民族就有希望。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "自发地调节劳动力在社会各生产部门之间的分配比例",
              "自发地调节生产资料在社会各生产部门之间的分配比例",
              "自发地提高劳动者的工资水平",
              "自发地调节社会收入的分配",
              "自发地刺激社会生产力的发展",
            ],
            "questionId": "1595984142523199556",
            "questionList": "价值规律的作用表现在（）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "到群众中去",
              "一切为了群众",
              "从群众中来",
              "密切联系群众",
              "一切依靠群众",
            ],
            "questionId": "1595984142456090849",
            "questionList": "无产阶级政党在工作中的群众路线主要内容是（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "价值是交换价值的表现形式",
              "交换价值是价值的表现形式",
              "交换价值和价值寓于使用价值之中",
              "使用价值是交换价值和价值的物质承担者",
              "价值是交换价值的基础和内容",
            ],
            "questionId": "1595984142523199549",
            "questionList": "使用价值、交换价值、价值三者之间的关系是（   ）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "也从社会历史发展的偶然性入手来考察和说明谁是历史的创造者",
              "立足于整体的社会历史过程来探究历史创造者问题",
              "立足于现实的人及其本质来把握历史的创造者",
              "从人与历史关系的不同层次上考察谁是历史的创造者",
              "从社会历史发展的必然性入手来考察和说明谁是历史的创造者",
            ],
            "questionId": "1595984142456090837",
            "questionList": "唯物史观在考察历史创造者问题上坚持了以下（    ）的原则。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "罗伯特·欧文",
              "沙尔·傅立叶",
              "昂利·圣西门",
              "托马斯·康帕内拉",
              "托马斯·莫尔",
            ],
            "questionId": "1595984142388981764",
            "questionList": "19世纪空想社会主义的主要代表是（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "可变资本的实质就是购买劳动力的资本",
              "可变资本不能带来剩余价值",
              "可变资本和流动资本是一回事",
              "可变资本和不变资本共同带来剩余价值",
              "可变资本是剩余价值的唯一来源",
            ],
            "questionId": "1595984142523199528",
            "questionList": "下面关于可变资本说法正确的是（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "越是尊重客观规律就越能发挥主观能动性",
              "客观规律不能违背，所以限制了主观能动性的发挥",
              "越是强调客观规律就越不能发挥主观能动性",
              "正确发挥主观能动性必须遵循客观规律",
              "只有充分发挥主观能动性，才能正确认识和利用客观规律",
            ],
            "questionId": "1595984142456090642",
            "questionList": "客观规律性和主观能动性的关系是（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "在垄断资本主义阶段，生产力的增长与生产社会化的发展进一步推动了资本社会化的发展，使私人垄断资本主义成长为国家垄断资本主义。",
              "国家垄断资本主义就是国家政权与私人垄断资本相结合而形成的一种垄断资本主义，其实质是垄断资本利用国家政权的力量，以维护其垄断统治并保证获得稳定的高额垄断利润。",
              "国家垄断资本主义产生和发展的根本原因，就在于资本主义基本矛盾的运动。",
              "金融资本体现在大银行可通过购买工业企业股票等方式参与和控制工业企业，把它们控制在自己手中。",
              "垄断资本的竞争双方都是实力雄厚、势均力敌的垄断组织，这便使得竞争特别激烈，更具有持久性，竞争造成的破坏也更加严重。",
            ],
            "questionId": "1595984142456090890",
            "questionList": "下列关于国家垄断资本主义说法正确的是（    ）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "人们阅读的书籍",
              "人尚未观察到的星球",
              "人认识到的自然界",
              "作家创造的文学作品",
              "社会现实中的事件",
            ],
            "questionId": "1595984142456090699",
            "questionList": "下列选项中，属于实践客体的有（  ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "经济剥削",
              "思想控制",
              "发展生产",
              "社会革命",
              "政治统治",
            ],
            "questionId": "1595984142456090821",
            "questionList": "剥削阶级实现阶级统治的基本途径有（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "空想社会",
              "科学理论指导下的现实的运动",
              "一种未来的社会形态",
              "一种未来的社会制度",
              "一种科学的理论",
            ],
            "questionId": "1595984142523199565",
            "questionList": "共产主义是（）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "理想理想，有钱就想。信念信念，有利就念",
              "心中有信仰，脚下才会有力量",
              "当代大学生要坚定理想信念，自觉做中国特色社会主义共同理想的坚定信仰者、忠诚实践者",
              "理想信念动摇是最危险的动摇，理想信念滑坡是最危险的滑坡",
              "理想信念是精神上的“钙”，是人的精神支柱和精神脊梁，是鼓舞人们前进和奋斗的强大精神动力",
            ],
            "questionId": "1595984142523199604",
            "questionList": "关于理想信念的论述，正确的是（）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "领导和组织社会主义建设",
              "防止国外敌人的侵略和颠覆",
              "变革生产资料私有制，建立和发展公有制",
              "镇压阶级敌人的反抗和破坏活动",
              "支持世界人民的革命斗争",
            ],
            "questionId": "1595984142456090939",
            "questionList": "无产阶级专政担负的历史任务有（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "无产阶级偏爱暴力革命",
              "优于非暴力革命",
              "是因为反动统治阶级的暴力镇压",
              "是无产阶级革命的一般形式",
              "是无产阶级革命的唯一形式",
            ],
            "questionId": "1595984142523199492",
            "questionList": "关于暴力革命说法正确的有",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "归纳方法不是万能的 ",
              "感性认识具有局限性",
              "事物的必然性与感性、经验性有关",
              "事物的必然性与感性、经验性毫无关系",
              "感性认识有待于上升为理性认识",
            ],
            "questionId": "1595984142456090715",
            "questionList": "“单凭观察所得的经验，是决不能充分证明必然性的。这是如此正确，以至于不能从太阳总是在早晨升起来判断它明天会再升起。”恩格斯这段话的含义是（）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "客观条件",
              "改良基础",
              "政治条件",
              "经济条件",
              "主观条件",
            ],
            "questionId": "1595984142456090826",
            "questionList": "社会革命的爆发需要具备（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "生产资料个人私有制和生产社会化之间的矛盾决定的",
              "劳动量只有采取价值量这一物的形式才能进行计算和比较",
              "私有制商品经济条件下劳动产品只有采取商品的形式才能进行交换",
              "人类劳动的等同性只有采取同质的价值形式才能在交换中体现出来",
              "生产者的劳动关系的社会性质只有采取商品之间即物与物之间相交换的形式才能间接地表现出来",
            ],
            "questionId": "1595984142523199555",
            "questionList": "私有制商品经济条件下商品世界的拜物教性质的产生具有必然性，是因为（）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "只能解决前提与结论的关系是不是符合逻辑的问题",
              "已被逻辑证明了的东西，不必再经过实践的检验",
              "并不能取代实践检验认识真理性的标准",
              "在一定意义上成为对实践标准的一个重要的补充",
              "必须服从实践检验的最后结果",
            ],
            "questionId": "1595984142456090748",
            "questionList": "逻辑证明在实践检验真理的过程中的作用有（  ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "经济全球化是生产社会化及经济国际化高度发展在时间和空间上的多维度拓展，因而反映了科学技术进步和人类社会生产力发展的客观要求；",
              "经济全球化是当代世界上所有国家共同国家积极推动起来的。",
              "经济全球化意味着各种经济行为主体的竞争、冲突和合作是平等的；",
              "经济全球化是指各种经济行为主体在全球范围的发展趋势，是一个描述世界变化的广度与深度的概念；",
              "经济全球化是当代资本主义主导下进行的，是由美国为首的发达资本主义国家积极推动起来的。",
            ],
            "questionId": "1595984142456090895",
            "questionList": "下列关于经济全球化说法正确的是（    ）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "改革的直接对象是束缚经济社会发展的旧体制和旧观念等",
              "改革开放是决定当代中国命运的关键抉择",
              "改革开放是发展中国特色社会主义、实现民族复兴的必由之路",
              "改革的目的是解放生产力，发展生产力，促进社会全面进步",
              "改革是社会主义制度的自我完善、自我发展",
            ],
            "questionId": "1595984142456090829",
            "questionList": "关于我国改革的说法，以下正确的有（    ）。",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "使人们摆脱了封建专制主义条件下的分封割据状态、等级压迫制度和人身依附关系",
              "使人民群众享有了比在封建专制主义条件下更多的社会政治自由",
              "历史性地促进了人的发展，促进了人类的进步",
              "保护、促进和完善资本主义生产方式方，推动社会生产力大幅度发展",
              "积累了丰富的政治统治和社会管理的经验，推动社会进步",
            ],
            "questionId": "1595984142523199559",
            "questionList": "资本主义政治制度的形成和发展在人类社会历史的发展进程中曾经起过重要的进步作用，这种进步作用表现在（）",
            "questionType": 2,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516004",
            "questionList": "劳动力成为商品是货币转化为资本的前提，也是剩余价值产生的最重要的、具有决定意义的前提条件。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984143026516053",
            "questionList": "马克思和恩格斯展望未来社会的方法是科学的。（  ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516006",
            "questionList": "剩余价值是雇佣工人所创造的并被资本家无偿占有的超过劳动力价值的那部分价值，它是雇佣工人剩余劳动的凝结，体现了资本家与雇佣工人之间剥削与被剥削的关系。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516011",
            "questionList": "缩短必要劳动时间是通过全社会劳动生产率的提高实现的。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142900686860",
            "questionList": "把真理的相对性等同于主观随意性，就会走向主观真理论，陷入了不可知论和诡辩论。",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516134",
            "questionList": "资本主义作为一个社会形态，其走向灭亡是一个长期的历史过程。（）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984143026515982",
            "questionList": "在以私有制为基础的商品经济条件下，复杂劳动转化为简单劳动是在商品交换过程中自发实现的。",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142963601571",
            "questionList": "经济全球化就是全球资本主义化。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142963601722",
            "questionList": "相对剩余价值是各个资本家追逐超额剩余价值的结果。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142963601573",
            "questionList": "经济全球化是生产社会化及经济国际化高度发展在时间和空间上的多维度拓展，因而反映了科学技术进步和人类社会生产力发展的客观要求。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142963601628",
            "questionList": "资本主义生产关系的建立，适应于生产力发展的需要。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142837772377",
            "questionList": "实践是使自然界与人类社会统一起来的现实基础。（   ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516044",
            "questionList": "社会总产品在价值形态上又叫社会总价值。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142963601727",
            "questionList": "商品总是和交换分不开的。如果不是用来交换，即使是劳动产品，也不能叫商品。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142837772398",
            "questionList": "马克思主义认识论是能动的革命的反映论。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142837772512",
            "questionList": "在认识论上“跟着感觉走”、“脚踩西瓜皮，滑到哪里算哪里。”是否认理论对实践的指导作用 。(       )",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142963601580",
            "questionList": "科学技术革命和生产力的发展，是资本主义变化的根本推动力量。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984143026516105",
            "questionList": "我们完全可以根据历史规律和历史趋势不断加深对共产主义理想的轮廓和基本特征的认识。（）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516100",
            "questionList": "人类社会从低级到高级的发展，是一个社会形态发展和交替的过程。（）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142963601653",
            "questionList": "新经济政策的实行表明列宁的社会主义建设思想发生了重大转变。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142963601510",
            "questionList": "人们要从一定的社会关系中包括阶级关系中去认识和把握一定群体和个人的本质和作用。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984143026516119",
            "questionList": "实现共产主义理想是广大人民群众的共同愿望。（）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142963601531",
            "questionList": "阶级分析方法要求把历史人物置于一定的阶级关系中，同他所属的阶级联系起来加以考察和评价。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142837772447",
            "questionList": "质变和量变的区别在于是否出现部分质变。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142837772310",
            "questionList": "马克思主义的革命性是建立在科学性基础上的，是与科学性高度统一的。",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142837772436",
            "questionList": "和谐是矛盾的一种特殊表现形式，意味着矛盾的绝对同一。（   ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142837772392",
            "questionList": "“不怕做不到，就怕想不到”正确说明了意识的能动性。（     ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142837772417",
            "questionList": "当形式与内容不适合时，对内容的发展起消极的阻碍作用。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "对",
              "错",
            ],
            "questionId": "1595984142963601504",
            "questionList": "科学技术革命是推动经济和社会发展的强大杠杆。（    ）",
            "questionType": 3,
          },
          {
            "questionAnswerList": [
              "错",
              "对",
            ],
            "questionId": "1595984142963601706",
            "questionList": "十月革命开辟了人类历史的新纪元，建立了世界上第一个人民当家做主的社会主义国家。",
            "questionType": 3,
          },
        ],
        {
          "questionCount": {
            "judge": 30,
            "radio": 40,
            "selected": 30,
          },
        },
      ]
    `);
    // await expect(
    //   store.startMatch('1597184056519331852', '123456')
    // ).resolves.toMatchInlineSnapshot(`
    //   [
    //     {
    //       "questionAnswerList": [
    //         "19世纪中期",
    //         "18世纪中叶",
    //         "19世纪末20世纪初",
    //         "第二次世界大战后",
    //       ],
    //       "questionId": "1595984141935997026",
    //       "questionList": "在世界发展史上，垄断代替自由竞争并占据统治地位，垄断资本主义得以形成的阶段是（    ）。",
    //       "questionType": 1,
    //       "questionCorrectList": ["19世纪中期"],
    //     },
    //     {
    //       "questionAnswerList": [
    //         "特指剥削阶级和被剥削阶级之间的斗争",
    //         "特指无产阶级反对资产阶级的斗争",
    //         "指阶级利益根本冲突的对抗阶级之间的对立和斗争",
    //         "泛指社会各阶级之间的对抗和冲突",
    //       ],
    //       "questionId": "1595984141935996944",
    //       "questionList": "阶级斗争作为一个哲学范畴，（    ）。",
    //       "questionType": 1,
    //       "questionCorrectList": ["指阶级利益根本冲突的对抗阶级之间的对立和斗争"],
    //     },
    //     {
    //       "questionAnswerList": [
    //         "真理的客观性",
    //         "真理的主观性",
    //         "真理的相对性",
    //         "真理的多样性",
    //       ],
    //       "questionId": "1595984141868888141",
    //       "questionList": "真理的一元性是由（  ）决定的。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "奋斗精神",
    //         "学者和革命家的品质",
    //         "崇高的理想",
    //         "高尚的人格",
    //       ],
    //       "questionId": "1595984141801779205",
    //       "questionList": "马克思和恩格斯的（    ），是他们创立马克思主义的重要条件。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "20%",
    //         "130%",
    //         "80%",
    //         "150%",
    //       ],
    //       "questionId": "1595984141935997134",
    //       "questionList": "某企业家投入100万元资本，资本有机构成8:2，所生产商品的价值130万元，该企业的剩余价值率为（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "剩余价值学说",
    //         "生产价格理论",
    //         "劳动力商品理论",
    //         "劳动二重性学说",
    //       ],
    //       "questionId": "1595984141935997087",
    //       "questionList": "理解马克思主义政治经济学的枢纽是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "恩格斯",
    //         "马克思",
    //         "考茨基",
    //         "伯恩施坦",
    //       ],
    //       "questionId": "1595984141935997057",
    //       "questionList": "提出要利用资产阶级民主和普选权的是（）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "人民群众的需要",
    //         "人民群众的生活和实践活动",
    //         "客观的物质世界",
    //         "思想家们的创造性思维",
    //       ],
    //       "questionId": "1595984141935996968",
    //       "questionList": "一切精神财富、精神产品形成和发展的源泉是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "两次劳动",
    //         "两种劳动",
    //         "两个过程的劳动",
    //         "同一劳动过程的两种规定",
    //       ],
    //       "questionId": "1595984141998911493",
    //       "questionList": "具体劳动和抽象劳动是(  )",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "真理具有客观性",
    //         "真理具有相对性",
    //         "真理具有全面性",
    //         "真理具有绝对性",
    //       ],
    //       "questionId": "1595984141868888145",
    //       "questionList": "任何科学理论都不能穷尽真理，而只能在实践中不断开拓认识真理的道路。这说明（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "人能够改造世界",
    //         "人具有阶级性",
    //         "人是一切社会关系的总和",
    //         "人能够制造生产工具",
    //       ],
    //       "questionId": "1595984141935996964",
    //       "questionList": "现实的人的本质在于（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "资本输出",
    //         "生产集中",
    //         "垄断",
    //         "金融资本",
    //       ],
    //       "questionId": "1595984141935997010",
    //       "questionList": "垄断资本主义的经济实质是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "圣人史观",
    //         "神学史观",
    //         "唯物史观",
    //         "唯心史观",
    //       ],
    //       "questionId": "1595984141868888192",
    //       "questionList": "在马克思主义产生之前，（    ）一直占统治地位。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "看重商品的价值",
    //         "看中商品经久耐用的自然属性",
    //         "既看重商品的使用价值也看重商品的价值",
    //         "看重商品的交换价值",
    //       ],
    //       "questionId": "1595984141935997111",
    //       "questionList": "人们购买商品时希望“物美价廉”，这反映了人们：（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "恩格斯",
    //         "斯大林",
    //         "列宁",
    //         "马克思",
    //       ],
    //       "questionId": "1595984141935997078",
    //       "questionList": "在（）的领导下，第二国际诞生。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "生产的社会化与资本主义私人占有制之间的矛盾",
    //         "无产阶级与资产阶级斗争尖锐化",
    //         "现代无产阶级的日益壮大",
    //         "个别企业有组织的生产与整个社会生产无政府状态之间的矛盾",
    //       ],
    //       "questionId": "1595984141935997039",
    //       "questionList": "社会主义必然代取资本主义的主要依据是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "相对性",
    //         "有限性",
    //         "客观性",
    //         "一维性",
    //       ],
    //       "questionId": "1595984141801779280",
    //       "questionList": "最近，由多国科学家组成的团队利用一台粒子加速器，让两束原子在一个圆环轨道上做高速运动，发现这些原子自身的时间确实比外界时间慢了。这项实验进一步证明了作为物质运动存在形式的时间具有（   ）",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "十月革命",
    //         "中国共产成立",
    //         "辛亥革命",
    //         "五四运动",
    //       ],
    //       "questionId": "1595984141734670346",
    //       "questionList": "促成马克思列宁主义在中国传播的重大历史事件是（　　）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "不同的人对同一事物可以有不同的反映",
    //         "只有正确的认识才是对客观事物的反映",
    //         "要使主观符合客观，就必须从实际出发",
    //         "正确反映客观事物的意识才能推动事物的发展",
    //       ],
    //       "questionId": "1595984141801779298",
    //       "questionList": "“桑条无叶土生烟，箫管迎龙水庙前。朱门几处看歌舞，犹恐春阴咽管弦。”这首唐诗蕴涵的哲学道理是（    ）",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "国家调节市场、市场引导企业",
    //         "自由市场经济制度",
    //         "国民经济计划化",
    //         "经济政策引导",
    //       ],
    //       "questionId": "1595984141935996993",
    //       "questionList": "国家垄断资本主义管理和调控经济的主要机制是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "利用和被利用的关系",
    //         "改造和被改造的关系",
    //         "需要和满足的关系",
    //         "反映和被反映的关系",
    //       ],
    //       "questionId": "1595984141868888088",
    //       "questionList": "认识的主体和客体的关系首先是（  ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "真理问题上的唯物论",
    //         "真理问题上的辩证法",
    //         "真理问题上的二元论",
    //         "真理问题上的一元论",
    //       ],
    //       "questionId": "1595984141868888142",
    //       "questionList": "坚持真理的绝对性和相对性辨证统一的观点是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "产业资本、商业资本、借贷资本",
    //         "货币资本、生产资本、商品资本",
    //         "不变资本、可变资本、流通资本",
    //         "固定资本、流动资本、生产资本",
    //       ],
    //       "questionId": "1595984141935997163",
    //       "questionList": "资本循环的三种职能形式是（）",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "历史继承性",
    //         "主观性",
    //         "社会历史性",
    //         "阶级性",
    //       ],
    //       "questionId": "1595984141868888210",
    //       "questionList": "以下属于社会意识相对独立性表现的是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "数量少、密度小、增长慢",
    //         "数量少、密度大、增长适度",
    //         "与社会生产状况相适应的人口",
    //         "数量多、密度大、增长快",
    //       ],
    //       "questionId": "1595984141868888197",
    //       "questionList": "最有利于促进社会发展的人口因素是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "不变性、永恒性",
    //         "确定性、无限性",
    //         "唯一性、不变性",
    //         "根本性、无限性",
    //       ],
    //       "questionId": "1595984141868888143",
    //       "questionList": "真理的绝对性是指真理主客观统一和发展的（ ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "生产价格理论",
    //         "剩余价值学说",
    //         "劳动力商品理论",
    //         "劳动二重性学说",
    //       ],
    //       "questionId": "1595984141801779202",
    //       "questionList": "理解马克思主义政治经济学的枢纽是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "第一国际的诞生",
    //         "第二国际的诞生",
    //         "共产国际的诞生",
    //         "法国共产党的诞生",
    //       ],
    //       "questionId": "1595984141935997081",
    //       "questionList": "1889年7月，在恩格斯的指导下，国际社会主义者在巴黎举行大会，标志着（）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "无产阶级专政",
    //         "实现共产主义",
    //         "实现社会主义",
    //         "无产阶级革命",
    //       ],
    //       "questionId": "1595984141998911544",
    //       "questionList": "人类最伟大的事业是（）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "在价值增值过程中的作用不同",
    //         "在循环中的职能不同",
    //         "价值周转方式的不同",
    //         "存在的物质形态不同",
    //       ],
    //       "questionId": "1595984141935997151",
    //       "questionList": "产业资本划分为货币资本、生产资本、商品资本的依据是资本各个部分（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "矛盾同一的相对性",
    //         "矛盾斗争的绝对性",
    //         "矛盾存在于一切事物中，存在于一切事物发展过程的始终。",
    //         "每一事物内部矛盾都有其特点",
    //       ],
    //       "questionId": "1595984141801779323",
    //       "questionList": "矛盾的普遍性是指（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "知识分子",
    //         "科学技术",
    //         "杰出人物",
    //         "人民群众",
    //       ],
    //       "questionId": "1595984141935996969",
    //       "questionList": "生产关系的变革、社会制度的更替，最终取决于生产力的发展，但却不会随着生产力的发展自发地实现和完成，而必须借助（    ）的力量。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "从抽象到具体再到抽象的上升运动",
    //         "实践——认识——实践的无限循环",
    //         "认识－实践－再认识的无限循环",
    //         "从间接经验到直接经验的转化",
    //       ],
    //       "questionId": "1595984141868888133",
    //       "questionList": "马克思主义认识论认为，认识的辩证过程是(    )。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "物质是自然界中具体的物质形态",
    //         "物质范畴是从各种物的总和中抽象出来的",
    //         "物质是各种实物的总和",
    //         "物质的唯一特性是它可以被感知",
    //       ],
    //       "questionId": "1595984141801779262",
    //       "questionList": "马克思主义关于物质范畴的正确理解是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "垄断和竞争并存",
    //         "垄断消除了竞争",
    //         "垄断缓和了竞争",
    //         "垄断保护了竞争",
    //       ],
    //       "questionId": "1595984141935997003",
    //       "questionList": "垄断和竞争的关系是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "意识是主体的自由创造",
    //         "意识的内容是主观的",
    //         "意识受主体状况的影响",
    //         "意识不受客体影响",
    //       ],
    //       "questionId": "1595984141801779291",
    //       "questionList": "对于同一事物，不同的人有不同的反映，这说明（     )。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "具有客观可能性的",
    //         "人类不断追求的目标",
    //         "揭示了社会发展的一般规律和资本主义发展的特殊规律",
    //         "人类向往的美好境界",
    //       ],
    //       "questionId": "1595984141998911515",
    //       "questionList": "共产主义之所以是能够被科学展望，是因为它是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "变动性和稳定性",
    //         "绝对性和相对性",
    //         "斗争性和同一性",
    //         "普遍性和特殊性",
    //       ],
    //       "questionId": "1595984141801779319",
    //       "questionList": "矛盾的两种基本属性是（    ）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "巴黎公社",
    //         "十月革命",
    //         "48年革命",
    //         "中国革命",
    //       ],
    //       "questionId": "1595984141935997056",
    //       "questionList": "无产阶级第一次夺取政权的尝试是（）。",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "监狱",
    //         "军队",
    //         "一定的社会机构",
    //         "警察",
    //       ],
    //       "questionId": "1595984141998911525",
    //       "questionList": "以下在共产主义社会还存在的有（）",
    //       "questionType": 1,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "重复性",
    //         "偶然性",
    //         "客观性",
    //         "稳定性",
    //         "普遍性",
    //       ],
    //       "questionId": "1595984142456090659",
    //       "questionList": "规律的特点有（  　　）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "它创造性地运用和发展了唯物史观关于人民群众创造历史的基本原理",
    //         "它说明了人民群众创造历史的作用是无限的",
    //         "它鲜明地体现了马克思主义政党的政治立场和执政理念，体现了共产党人的价值取向和工作导向",
    //         "它体现了马克思主义对英雄人物历史作用的否定",
    //         "它站在时代和历史的高度，总结和概括了人民群众在中国特色社会主义实践中的伟大创造作用和主体地位",
    //       ],
    //       "questionId": "1595984142456090847",
    //       "questionList": "关于坚持以人民为中心的思想，以下说法正确的有（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "剥削阶级与被剥削阶级的对立",
    //         "人民的内部的意见分歧",
    //         "同学之间对某一问题认识上的差异",
    //         "各地区之间经济发展的不平衡",
    //         "先进思想与落后思想的冲突",
    //       ],
    //       "questionId": "1595984142456090666",
    //       "questionList": "下列选项中，属于矛盾斗争性的表现的有（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "主要通过价格、利率、税率、汇率等经济手段实施调控",
    //         "国家计划以市场为基础，总体上是指导性的",
    //         "法律规范、信息指导成为调控的重要手段",
    //         "行政手段不再成为调节手段",
    //         "对企业生产经营活动不再直接干预",
    //       ],
    //       "questionId": "1595984142456090866",
    //       "questionList": "国家对社会经济活动实行间接调控，其特征有（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "资本主义　",
    //         "共产主义",
    //         "社会主义",
    //         "共产主义以前的社会",
    //         "文明社会",
    //       ],
    //       "questionId": "1595984142523199584",
    //       "questionList": "必然王国和自由王国是两种不同的社会状态，这两种社会状态是（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "人能改变客观规律",
    //         "人能消灭客观规律",
    //         "人能认识客观规律　",
    //         "人能创造客观规律",
    //         "人能利用客观规律",
    //       ],
    //       "questionId": "1595984142456090643",
    //       "questionList": "下列选项中，正确说明人的活动与客观规律的关系的有(　　　 )。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "不具有社会性",
    //         "不具有政治性和阶级性",
    //         "不反映特定社会集团的利益和要求",
    //         "不服务于特定经济政治制度和特定阶级",
    //         "不具有社会经济形态和政治制度的性质",
    //       ],
    //       "questionId": "1595984142456090783",
    //       "questionList": "自然科学和语言学、形式逻辑等一部分社会科学属于非意识形态，原因在于（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "阶级之间物质利益的根本对立",
    //         "社会经济关系的冲突",
    //         "阶级之间意识形态的根本对立",
    //         "阶级之间社会分工的根本对立",
    //         "阶级之间政治态度的根本对立",
    //       ],
    //       "questionId": "1595984142456090820",
    //       "questionList": "阶级斗争根源于（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "供求关系的变化",
    //         "商品价值的变化",
    //         "货币价值的变化",
    //         "平均利润率的变化",
    //         "劳动力价值的变化",
    //       ],
    //       "questionId": "1595984142523199536",
    //       "questionList": "影响市场上商品价格变化的规律有（）",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "感性认识和理性认识的辩证统一",
    //         "认识的主体和客体的辩证统一",
    //         "真理的绝对性和相对性的辩证统一",
    //         "实践和认识的辩证统一",
    //         "认识运动的不断反复和无限发展",
    //       ],
    //       "questionId": "1595984142456090728",
    //       "questionList": "把加强顶层设计和摸着石头过河相结合，体现了认识论上的（  ）原理。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "两点论和重点论的统一",
    //         "一点论和均衡论的统-",
    //         "一点论和重点论的统-",
    //         "两点论和均衡论的统一",
    //         "既要全面，又要抓重点",
    //       ],
    //       "questionId": "1595984142456090687",
    //       "questionList": "看问题、办事情都要坚持（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "第三国际",
    //         "第一国际",
    //         "共产主义者同盟",
    //         "正义者同盟",
    //         "第二国际",
    //       ],
    //       "questionId": "1595984142388981765",
    //       "questionList": "从19世纪40年代后半期起马克思与恩格斯一起先后改组和创建了共产主义组织（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "社会主义的发展充满暴力革命",
    //         "推进社会主义实践发展必须有开拓奋进的精神状态",
    //         "社会主义是亿万人民的伟大实践",
    //         "实践探索中出现某种曲折并不改变社会主义的前进趋势",
    //         "社会主义实践是一个不断探索的过程",
    //       ],
    //       "questionId": "1595984142456090942",
    //       "questionList": "习近平指出：“社会主义从来都是在开拓中前进的。”这说明",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "二者的作用都要受到一定历史条件和社会发展客观规律的制约",
    //         "前者可以改变历史发展规律，后者不能改变历史发展规律",
    //         "前者是创造历史过程中的决定力量，后者是非决定力量",
    //         "二者在历史上的作用是等同的",
    //         "二者共同创造历史",
    //       ],
    //       "questionId": "1595984142456090839",
    //       "questionList": "在关于人民群众和杰出人物的历史作用问题上，历史唯物主义认为（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "时间、空间既是有限的又是无限的",
    //         "时间、空间既是相对的又是绝对的　",
    //         "时间、空间与物质运动不可分割　  　",
    //         "时间、空间是物质运动的存在形式",
    //         "时间、空间是整理感觉材料的工具",
    //       ],
    //       "questionId": "1595984142456090629",
    //       "questionList": "唯物主义的时空观认为（　　）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "黑格尔",
    //         "恩格斯",
    //         "马克思",
    //         "费尔巴哈",
    //         "列宁",
    //       ],
    //       "questionId": "1595984142388981772",
    //       "questionList": "马克思主义的创始人是（　　）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "马克思主义是一种世界观",
    //         "马克思主义只是政治战略策略原则",
    //         "马克思主义是一种理论体系",
    //         "马克思主义是一种意识形态",
    //         "马克思主义只是经验科学方法",
    //       ],
    //       "questionId": "1595984142388981784",
    //       "questionList": "下列说法哪些是错误的（   ）",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "山重水复疑无路，柳暗花明又一村",
    //         "人生自古谁无死，留取丹心照汗青",
    //         "沉舟侧畔千帆过，病树前头万木春",
    //         "黄河之水天上来，奔流到海不复回",
    //         "芳林新叶摧陈叶，流水前波让后波",
    //       ],
    //       "questionId": "1595984142456090685",
    //       "questionList": "下列选项中，比喻新事物必然战胜旧事物的有(          )。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "是反映并服务于社会的经济基础的观念上层建筑",
    //         "包括政治法律思想、道德、艺术、宗教、哲学和科学等社会意识形式",
    //         "包括社会心理",
    //         "是成为一定的社会形态的精神标志的社会意识形态",
    //         "是社会存在的反映",
    //       ],
    //       "questionId": "1595984142456090779",
    //       "questionList": "社会意识作为社会生活的精神方面，（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "战争",
    //         "社会组织",
    //         "国家",
    //         "阶级",
    //         "剥削",
    //       ],
    //       "questionId": "1595984142523199578",
    //       "questionList": "在共产主义社会不存在（）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "我国社会的主要矛盾是人民日益增长的物质文化需要同落后的社会生产之间的矛盾",
    //         "我国已是世界最大的发达国家",
    //         "我国社会主要矛盾已经转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾",
    //         "我国仍处于并将长期处于社会主义初级阶段的基本国情没有变",
    //         "我国是世界最大的发展中国家的国际地位没有变",
    //       ],
    //       "questionId": "1595984142456090771",
    //       "questionList": "一切从实际出发，就是一切要从中国特色社会主义进入了新时代这个我国发展新的历史方位出发，新的历史方位具体为（  ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "联系当代世界的深刻变化 ",
    //         "联系我国社会主义初级阶段的基本国情",
    //         "用马列主义指导实践",
    //         "分析解决面临的实际问题",
    //         "用什么学什么，学什么就立即用什么",
    //       ],
    //       "questionId": "1595984142456090767",
    //       "questionList": "理论联系实际就要（   ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "价值原则",
    //         "效率原则",
    //         "真理原则",
    //         "正义原则",
    //         "公平原则",
    //       ],
    //       "questionId": "1595984142456090752",
    //       "questionList": "从哲学上讲，人类活动的两个基本原则是（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "证实了列宁关于社会主义革命有可能在一国或几个国家首先取得胜利的科学论断",
    //         "暴力革命的伟大历史作用",
    //         "暴力是无产阶级革命的唯一形式",
    //         "自由资本主义已经发展到了垄断资本主义",
    //         "向世界表明，经济文化相对落后的国家也可以率先建立起先进的社会制度",
    //       ],
    //       "questionId": "1595984142456090927",
    //       "questionList": "十月革命的胜利说明（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "为实现共产主义而奋斗的党",
    //         "科学社会主义与工人运动相结合的产物",
    //         "无产阶级先锋队",
    //         "按照民主集中制原则组织起来的党",
    //         "为人民群众谋利益的党",
    //       ],
    //       "questionId": "1595984142456090914",
    //       "questionList": "无产阶级政党是（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "时间和空间是物质的惟一特性",
    //         "时间和空间是物质运动的存在形式　　　",
    //         "时间和空间与物质运动不可分割",
    //         "时间和空间既是绝对的，又是相对的",
    //         "时间和空间是有限性和无限性的统一　　",
    //       ],
    //       "questionId": "1595984142456090631",
    //       "questionList": "下列各项中属于辩证唯物主义时空观内容的有（　　　）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "物质决定意识，意识是人脑的机能",
    //         "物质第一性，意识第二性",
    //         "物质决定意识，意识反作用于物质",
    //         "物质是意识的根源，意识是对物质的反映",
    //         "意识第一性，物质第二性",
    //       ],
    //       "questionId": "1595984142456090638",
    //       "questionList": "马克思主义关于物质和意识关系的全面看法是（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "人民代表大会制度",
    //         "语言学",
    //         "政党",
    //         "法院",
    //         "哲学",
    //       ],
    //       "questionId": "1595984142456090798",
    //       "questionList": "下列属于上层建筑的是（    ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "在科学道路上，只有不畏劳苦坚持攀登的人，才有希望达到光辉的顶点",
    //         "幻想是极可贵的品质",
    //         "意志决定一切",
    //         "只有诗人才需要想像",
    //         "顿然醒悟，一下子抓住了问题的症结",
    //       ],
    //       "questionId": "1595984142456090722",
    //       "questionList": "以下论断正确反映非理性因素在认识中作用的有(  )。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "矛盾分析法是最根本的认识方法",
    //         "对立统一规律是贯穿于辩证法其它规律和范畴的中心线索",
    //         "是否承认矛盾是事物发展的动力，是辩证法和形而上学的根本分歧",
    //         "对立统一规律揭示了变化发展的内在动力",
    //         "对立统一规律揭示了普遍联系的根本内容",
    //       ],
    //       "questionId": "1595984142456090661",
    //       "questionList": "对立统一规律是唯物辩证法的实质和核心，这是因为（      ）。",
    //       "questionType": 2,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142963601477",
    //       "questionList": "社会形态更替的过程是一个合规律性的过程，与人们的目的、意识、激情无关。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772498",
    //       "questionList": "马克思主义把反映论引入认识论，从而科学揭示出认识的本质。（   ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142963601447",
    //       "questionList": "哲学社会科学的发展水平和繁荣程度，是一个民族综合素质和国家文化软实力的重要体现和突出标志。",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772402",
    //       "questionList": "整个世界的真正统一性在于它的物质性。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142837772323",
    //       "questionList": "马克思主义自诞生以来，在世界上产生了巨大的影响，改变了世界的尤其是中国的历史进程。时代在变化，社会在发展，马克思主义基本原理科学性真理性在消失。",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984143026516171",
    //       "questionList": "当代中国青年要投身新时代中国特色社会主义事业，投身党和人民在中国特色社会主义新时代的伟大奋斗。（）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142963601450",
    //       "questionList": "一切自然物质都是现实的劳动对象。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142963601572",
    //       "questionList": "经济全球化是当代资本主义主导下进行的，是由美国为首的发达资本主义国家积极推动起来的。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772457",
    //       "questionList": "唯物辩证法不是客观辩证法与主观辩证法的统一。（   ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984143026516128",
    //       "questionList": "共产主义的实现是一个十分漫长而且充满艰难曲折的历史过程。（）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984143026515988",
    //       "questionList": "私人劳动和社会劳动的矛盾决定着商品经济的本质及发展过程.（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142963601509",
    //       "questionList": "现实的人是基于自身需要和社会需要而从事一定实践活动的、处于一定社会关系中的、具有能动性的人。",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142837772515",
    //       "questionList": "认识辩证运动发展的基本过程，也是认识运动的总规律。（   ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142963601596",
    //       "questionList": "生产的高度集中，在一定程度上造成了竞争的困难，从而导致垄断的趋势。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142963601667",
    //       "questionList": "“武力”与“和平演变”是资本主义对社会主义进攻的常用方式。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772509",
    //       "questionList": "概念是对同类事物的共同的一般特性和本质属性的概括和反映，是思维的细胞，也是最基本的思维形式。（   ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984143026516164",
    //       "questionList": "实现中华民族伟大复兴的中国梦，夺取新时代中国特色社会主义的伟大胜利，将全国各族人民的共同理想变为现实，需要一代又一代有志青年接续奋斗。（）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772474",
    //       "questionList": "有人学习了《愚公移山》的故事后，认为愚公真“愚”，为什么移山不用炸药炸，用挖土机挖，用汽车运呢？这种观点主要错在否认了实践的历史性。",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984143026516153",
    //       "questionList": "在社会主义历史时期，民族国家仍然存在。（）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772307",
    //       "questionList": "理论与实践的统一是马克思主义最基本的原则，所以，大学生必须把马克思主义作为行动的指南。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984143026516092",
    //       "questionList": "在共产主义社会，人的发展是自由而全面的发展，是建立在个体高度自由自觉基础上的全面发展。（）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984143026516037",
    //       "questionList": "生产剩余价值，是资本主义生产方式的绝对规律。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142837772458",
    //       "questionList": "在马克思主义的世界观和方法论中，唯物辩证法是其核心内容。（  ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772294",
    //       "questionList": "从马克思主义的阶级属性讲，它是无产阶级争取自身解放和整个人类解放的科学理论，是关于无产阶级斗争的性质、目的和解放条件的学说。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142963601715",
    //       "questionList": "资本积累的一般规律是社会财富的占有呈现两极分化的趋势。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142837772508",
    //       "questionList": "理性认识是指人们借助抽象思维，在概括整理大量感性材料的基础上，达到关于事物的本质、全体、内部联系和事物自身规律性的认识（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "错",
    //         "对",
    //       ],
    //       "questionId": "1595984142963601603",
    //       "questionList": "世界市场的扩大、交通工具的完善使国与国之间联系的日益紧密，使得当下经济危机可以消除。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984143026516014",
    //       "questionList": "资本积累的本质，就是资本家不断地利用无偿占有的工人创造的剩余价值来扩大自己的资本规模，进一步扩大和加强对工人的剥削和统治。（    ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142837772389",
    //       "questionList": "凡是亲眼所见，亲耳所听都是直接经验，是对客观事物本质的真实反映。（     ）",
    //       "questionType": 3,
    //     },
    //     {
    //       "questionAnswerList": [
    //         "对",
    //         "错",
    //       ],
    //       "questionId": "1595984142900686889",
    //       "questionList": "主观和客观的矛盾是人类认识和实践活动中的基本矛盾，也是人类认识世界和改造世界的根本动力。（  ）",
    //       "questionType": 3,
    //     },
    //   ]
    // `)
  });
  // NOTE: 测试接口 'match/saveMatch'
  it.skip('shoule save match', async () => {
    const store = useMatch();

    // NOTE: 保存试卷
    // await expect(
    //   store.saveMatch('1597184056519331852', res)
    // ).resolves.toMatchInlineSnapshot('"保存成功"')

    // NOTE: 提交试卷
    await expect(
      store.submit('1597184056519331852', match)
    ).resolves.toMatchInlineSnapshot('1');
  });
});
