export const EXAMS = [
  {
    key:'RRB_PRELIMS', name:'IBPS CRP RRBs XV — Officer Scale-I Prelims', shortName:'RRB Prelims', stage:'Prelims',
    date:'2026-11-21', window:'21–22 Nov 2026', marks:80, duration:'45 min',
    description:'Reasoning 40/40 in 25 min + Quant 40/40 in 20 min.',
    subjects:[
      {name:'Reasoning',marks:40,questions:40,duration:'25 min',topics:['Puzzles','Seating Arrangement','Syllogism','Blood Relations','Coding-Decoding','Direction Sense','Inequalities','Data Sufficiency','Input-Output']},
      {name:'Quantitative Aptitude',marks:40,questions:40,duration:'20 min',topics:['Simplification','Approximation','Number Series','Quadratic Equations','Data Interpretation','Profit & Loss','Time & Work','Time-Speed-Distance','Averages','Ratio & Proportion','SI & CI']}
    ],
    officialUrl:'https://www.ibps.in/index.php/rural-bank-xv/',
    application:{post:'Officer Scale-I',state:'Maharashtra',rrb:'Maharashtra Gramin Bank',medium:'English + Marathi'}
  },
  {
    key:'RRB_MAINS', name:'IBPS CRP RRBs XV — Officer Scale-I Mains', shortName:'RRB Mains', stage:'Mains',
    date:'2026-12-20', window:'20 Dec 2026', marks:200, duration:'120 min',
    description:'Reasoning, Computer Knowledge, General Awareness, English/Hindi and Quantitative Aptitude.',
    subjects:[
      {name:'Reasoning',marks:50,questions:40,duration:'30 min',topics:['Advanced Puzzles','Seating','Data Sufficiency','Input-Output','Logical Reasoning']},
      {name:'Computer Knowledge',marks:20,questions:40,duration:'15 min',topics:['Hardware/Software','MS Office','Internet','Networking','DBMS/OS basics','Banking computer terms']},
      {name:'General Awareness',marks:40,questions:40,duration:'15 min',topics:['Current Affairs','Banking/Financial Awareness','RBI','Government Schemes','Economy','Static GK']},
      {name:'English/Hindi',marks:40,questions:40,duration:'30 min',topics:['Reading Comprehension','Cloze Test','Error Spotting','Rearrangement','Fill in the Blanks','Vocabulary/Grammar']},
      {name:'Quantitative Aptitude',marks:50,questions:40,duration:'30 min',topics:['Advanced Arithmetic','Data Interpretation','Approximation','Quadratic','Number Series','Mixed Quant']}
    ],
    officialUrl:'https://www.ibps.in/index.php/rural-bank-xv/',
    application:{post:'Officer Scale-I',state:'Maharashtra',rrb:'Maharashtra Gramin Bank',medium:'English + Marathi'}
  },
  {
    key:'SSC_P1', name:'SSC Scientific Assistant in IMD — Paper-I', shortName:'SSC Paper-I', stage:'Paper-I',
    window:'Oct/Nov 2026', marks:200, duration:'2 hours',
    description:'General Intelligence & Reasoning 50 + General Awareness 50 + Part-D CS/IT 100.',
    subjects:[
      {name:'General Intelligence & Reasoning',marks:50,questions:50},
      {name:'General Awareness',marks:50,questions:50},
      {name:'Part-D Computer Science & IT',marks:100,questions:100}
    ], officialUrl:'https://ssc.gov.in/'
  },
  {
    key:'SSC_P2', name:'SSC Scientific Assistant in IMD — Paper-II', shortName:'SSC Paper-II', stage:'Paper-II',
    window:'December 2026', marks:300, duration:'2 hours',
    description:'Part-D Computer Science & Information Technology: 100 questions / 300 marks.',
    subjects:[], officialUrl:'https://ssc.gov.in/',
    application:{post:'Scientific Assistant in IMD',subject:'Part-D — Computer Science and Information Technology'}
  }
];

export const RESOURCES = [
 ['IBPS RRB XV — official page','https://www.ibps.in/index.php/rural-bank-xv/','IBPS','Official','RRB','General',true],
 ['IBPS RRB XV — official registration','https://ibpsreg.ibps.in/rrbxvaug26/','IBPS','Official','RRB','Application',true],
 ['SSC — official website','https://ssc.gov.in/','SSC','Official','SSC','General',true],
 ['GeeksforGeeks — UGC NET CS topic notes','https://www.geeksforgeeks.org/gfg-academy/ugc-net-cs-notes-according-to-syllabus-of-paper-iii-core-group/','GeeksforGeeks','Notes','SSC','CS/IT',false],
 ['GeeksforGeeks — GATE CS preparation','https://www.geeksforgeeks.org/gate/gate-corner-2-gq/','GeeksforGeeks','Notes','SSC','CS/IT',false],
 ['GeeksforGeeks — DSA guide','https://www.geeksforgeeks.org/dsa/data-structures-and-algorithms-dsa-guide-for-gate-cs-exam/','GeeksforGeeks','Guide','SSC','Algorithms',false],
 ['MDN JavaScript Guide','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide','MDN','Reference','RRB','Computer',false],
 ['NPTEL — Data Structures and Algorithms (IIT Delhi)','https://www.nptel.ac.in/courses/106102064','NPTEL','Course','SSC','Algorithms',false],
 ['NPTEL — Computer Networks','https://www.nptel.ac.in/courses/106105183','NPTEL','Course','SSC','Computer Networks',false],
 ['MIT OCW — Database Systems','https://ocw.mit.edu/courses/6-5830-database-systems-fall-2023/','MIT OpenCourseWare','Course','SSC','Databases',false],
 ['MIT OCW — Operating System Engineering','https://ocw.mit.edu/courses/6-1810-operating-system-engineering-fall-2023/','MIT OpenCourseWare','Course','SSC','Operating Systems',false],
 ['MIT OCW — Computer Algorithms','https://ocw.mit.edu/courses/1-204-computer-algorithms-in-systems-engineering-spring-2010/pages/readings/','MIT OpenCourseWare','Course','SSC','Algorithms',false]
].map(([title,url,provider,type,exam,subject,official])=>({title,url,provider,type,exam,subject,official}));

export const SYLLABUS = {
  RRB:[
   ['Prelims — Reasoning',['Puzzles','Seating Arrangement','Syllogism','Blood Relations','Coding-Decoding','Direction Sense','Inequalities','Data Sufficiency','Input-Output']],
   ['Prelims — Quantitative Aptitude',['Simplification','Approximation','Number Series','Quadratic Equations','Data Interpretation','Profit & Loss','Time & Work','Time-Speed-Distance','Averages','Ratio & Proportion','SI & CI']],
   ['Mains — Reasoning',['Advanced Puzzles','Seating','Data Sufficiency','Input-Output','Logical Reasoning']],
   ['Mains — Computer Knowledge',['Hardware & Software','MS Office','Internet','Networking','DBMS/OS basics','Banking computer terms']],
   ['Mains — General Awareness',['Current Affairs','Banking & Financial Awareness','RBI','Government Schemes','Economy','Static GK']],
   ['Mains — English/Hindi',['Reading Comprehension','Cloze Test','Error Spotting','Rearrangement','Fill in the Blanks','Vocabulary & Grammar']],
   ['Mains — Quantitative Aptitude',['Advanced Arithmetic','Data Interpretation','Approximation','Quadratic','Number Series','Mixed Quant']]
  ],
  SSC:[
   ['Engineering Mathematics',['Propositional & First-Order Logic','Sets, Relations, Functions','Partial Orders & Lattices','Monoids & Groups','Graphs, Matching, Colouring','Combinatorics, Recurrence, Generating Functions','Matrices & Determinants','Systems of Linear Equations','Eigenvalues/Eigenvectors','LU Decomposition','Limits, Continuity, Differentiability','Maxima/Minima','Integration','Random Variables','Distributions','Mean/Median/Mode/SD','Conditional Probability & Bayes']],
   ['Digital Logic',['Boolean Algebra','Combinational & Sequential Circuits','Minimization','Number Representation','Fixed/Floating Point Arithmetic']],
   ['Computer Organization & Architecture',['Machine Instructions','Addressing Modes','ALU','Datapath & Control Unit','Instruction Pipelining','Pipeline Hazards','Cache/Main/Secondary Storage','I/O Interface','Interrupts & DMA']],
   ['Programming & Data Structures',['C Programming','Recursion','Arrays','Stacks','Queues','Linked Lists','Trees','BST','Binary Heaps','Graphs']],
   ['Algorithms',['Searching','Sorting','Hashing','Asymptotic Time/Space Complexity','Greedy','Dynamic Programming','Divide & Conquer','Graph Traversals','Minimum Spanning Trees','Shortest Paths']],
   ['Theory of Computation',['Regular Expressions','Finite Automata','CFG & PDA','Regular Languages','Context-Free Languages','Pumping Lemma','Turing Machines','Undecidability']],
   ['Compiler Design',['Lexical Analysis','Parsing','Syntax-Directed Translation','Runtime Environments','Intermediate Code Generation','Local Optimization','Data Flow Analysis']],
   ['Operating Systems',['System Calls','Processes','Threads','IPC','Concurrency & Synchronization','Deadlock','CPU/I/O Scheduling','Memory Management','Virtual Memory','File Systems']],
   ['Databases',['ER Model','Relational Model','Relational Algebra','Tuple Calculus','SQL','Integrity Constraints','Normal Forms','File Organization','B/B+ Trees','Transactions','Concurrency Control']],
   ['Computer Networks',['OSI & TCP/IP','Packet/Circuit/Virtual Switching','Framing & Error Detection','MAC & Ethernet','Routing','IPv4 & CIDR','ARP/DHCP/ICMP','NAT','TCP/UDP','Sockets','DNS/SMTP/HTTP/FTP/Email']]
  ]
};

export const OFFICIAL_UPDATES = [
  {id:'rrb-prelims-date', exam:'RRB', type:'Date', title:'RRB Officer Scale-I prelims date finalized', date:'2026-11-21', summary:'IBPS has finalized the prelims exam date for the Officer Scale-I recruitment cycle.', link:'https://www.ibps.in/index.php/rural-bank-xv/', badge:'Official'},
  {id:'rrb-prelims-hallticket', exam:'RRB', type:'Hall Ticket', title:'RRB hall ticket window likely to open 2 weeks prior', date:'2026-11-05', summary:'Candidates should keep their application ID and registration details ready for admit card access.', link:'https://www.ibps.in/index.php/rural-bank-xv/', badge:'Admit Card'},
  {id:'ssc-imd-window', exam:'SSC', type:'Date', title:'SSC Scientific Assistant in IMD exam window finalized', date:'2026-10-15', summary:'The exam window has been confirmed and is mapped in the dashboard calendar for planning.', link:'https://ssc.gov.in/', badge:'Official'},
  {id:'ssc-imd-admit', exam:'SSC', type:'Hall Ticket', title:'SSC hall ticket issuance notice released', date:'2026-10-02', summary:'Admit cards are expected to be released as per the official SSC schedule; keep the login credentials ready.', link:'https://ssc.gov.in/', badge:'Admit Card'},
  {id:'rrb-mains-date', exam:'RRB', type:'Date', title:'RRB Mains date confirmed after prelims schedule', date:'2026-12-20', summary:'The mains slot has been fixed and included in your exam timeline.', link:'https://www.ibps.in/index.php/rural-bank-xv/', badge:'Official'},
  {id:'ssc-result', exam:'SSC', type:'Result', title:'SSC result timeline notice published', date:'2026-09-18', summary:'The recruitment body has released a result timeline notice for upcoming stages and review dates.', link:'https://ssc.gov.in/', badge:'Result'}
];

export function updates(){
  return [...OFFICIAL_UPDATES].sort((a,b)=>new Date(b.date)-new Date(a.date));
}

const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const rotations={
 Monday:{ssc:'C Programming + Arrays + Recursion',quant:'Averages + Ratio/Proportion + Simplification',reason:'Inequality + Syllogism',ga:'Banking basics + current affairs'},
 Tuesday:{ssc:'Data Structures: Linked List, Stack, Queue',quant:'Profit/Loss + SI/CI + Number Series',reason:'Coding-Decoding + Blood Relations',ga:'Current affairs'},
 Wednesday:{ssc:'Trees, BST, Heap, Graphs',quant:'Time-Speed-Distance + Time & Work',reason:'Direction + Ranking',ga:'Banking awareness + RBI'},
 Thursday:{ssc:'Algorithms: Searching, Sorting, Hashing',quant:'DI + Approximation',reason:'Input-Output + Data Sufficiency',ga:'Current affairs + schemes'},
 Friday:{ssc:'OS + Processes/Threads/Scheduling',quant:'Quadratic + Mixed Arithmetic',reason:'Puzzles',ga:'Banking + static GK'},
 Saturday:{ssc:'Rotate Digital Logic / COA / TOC / Compiler / Maths',quant:'Mixed Quant + weak-topic repair',reason:'Seating Arrangement',ga:'Weekly CA revision'},
 Sunday:{ssc:'Mock + analysis',quant:'Mock + analysis',reason:'Mock + analysis',ga:'Weekly revision'}
};

export function tasksForDate(date){
 const dow=dayNames[new Date(`${date}T12:00:00`).getDay()]; const r=rotations[dow];
 const base=[
  ['10:30','RRB timed Quant + Reasoning practice','RRB',`${r.quant}; ${r.reason}`,60,'Timed practice. Track accuracy and time lost.'],
  ['11:45','SSC revision + technical MCQs','SSC',r.ssc,75,'Review yesterday, then solve 20–30 technical questions.'],
  ['19:30','Reasoning warm-up','RRB',r.reason,30,'20–25 timed questions.'],
  ['20:15','SSC Part-D deep study','SSC',r.ssc,75,'Concept → examples → 20–40 MCQs/PYQs → recall sheet.'],
  ['21:45','RRB Quant timed drill','RRB',r.quant,60,'Timed arithmetic/DI/mixed set.'],
  ['23:00','GA + Banking + Computer','RRB',r.ga,45,'Current affairs, banking awareness and computer basics.'],
  ['00:00','Mistake notebook','Both','Error review',45,'Tag errors as Concept, Calculation, Misread, Time or Guess.']
 ];
 return base.map(([time,title,exam,topic,duration,description],i)=>({id:`${date}-${time}`,date,time,title,exam,topic,duration,description,block:time<'18:00'?'Morning Focus':'Night',completed:false,order:i}));
}
