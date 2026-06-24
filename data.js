/* Shared project data — used by index (listing) and project (detail) pages.
   Written in plain, client-facing language. Edit freely. */
window.PROJECTS = [
  {
    id:'damdex', title:'Damdex Platform', industry:'Building materials brand', shots:3, ext:'jpg',
    outcome:'A complete digital presence — website, content system, and a customer app.',
    status:'Active', cats:['web','mobile'], outputs:['Website','Content system','Backend','Mobile app'],
    problem:'The brand needed a modern way to show its products, help customers find the nearest store, and let the team manage everything without touching code.',
    solution:[
      'Bilingual company website (Indonesian & English)',
      'Product catalog with a map-based store locator',
      'A content system so the team updates everything themselves',
      'A customer mobile app for products and articles',
    ],
    highlights:[
      'Rebuilt across two generations onto a modern foundation',
      'Self-service content editor — no developer needed to publish',
      'Interactive map to find the nearest store',
    ],
    stack:['Next.js','NestJS','Flutter','MySQL','Object storage'],
  },
  {
    id:'bpr-ams', title:'Bank Attendance System', industry:'Banking · HR operations', shots:6, ext:'jpg',
    outcome:'Paper attendance replaced with an automated, audit-ready system.',
    status:'Active', cats:['web','mobile'], outputs:['Mobile app','Admin dashboard','Backend','Employee web'],
    problem:'A community bank tracked staff attendance by hand, with no reliable way to verify who showed up or to pull reports for management.',
    solution:[
      'Mobile check-in with a selfie and GPS location',
      'Leave requests and approvals',
      'Automatic discipline-point scoring',
      'One-click reports in Word, Excel, and PDF',
      'An admin dashboard for HR',
    ],
    highlights:[
      'Selfie + GPS check-in prevents buddy punching',
      'Reports generate automatically — no manual spreadsheets',
      'Live dashboard with maps and charts',
    ],
    stack:['Express','PostgreSQL','React','Flutter','Cloud storage'],
  },
  {
    id:'sib', title:'Street-Lighting Field Ops', industry:'Infrastructure · Field operations', shots:4, ext:'jpg',
    outcome:'Public street-lighting projects managed from the field, on a map.',
    status:'Active', cats:['web','mobile'], outputs:['Backend','Mobile app'],
    problem:'A contractor needed to coordinate crews, survey points, and construction progress across many sites — with proof of work from the field.',
    solution:[
      'Job orders and crew management',
      'GPS survey points plotted on a map',
      'Construction progress tracking from 0 to 100%',
      'Watermarked, geotagged field photos',
      'Reporting and push notifications',
    ],
    highlights:[
      'Everything happens on a live map',
      'Tamper-evident watermarked photos as proof',
      'Built to handle heavy, real-time field data',
    ],
    stack:['NestJS','PostgreSQL + maps','Message queue','Flutter'],
  },
  {
    id:'myistiqlal', title:'Mosque Super-App', industry:'Religious · Community', shots:3, ext:'jpg',
    outcome:'One trusted app for a national mosque’s community.',
    status:'Active', cats:['web','mobile'], outputs:['Backend','Content system','Mobile app','Landing'],
    problem:'The mosque wanted to bring prayer times, content, events, donations, and services together into a single app its community could trust.',
    solution:[
      'Prayer times and multimedia content',
      'Events and announcements',
      'Built-in online donations',
      'A digital library and a marketplace',
      'A 20+ section admin to manage it all',
    ],
    highlights:[
      'Accept donations directly in the app',
      'Location-aware prayer times',
      'Library and marketplace in one place',
    ],
    stack:['NestJS','PostgreSQL','Payment gateway','Next.js','Flutter'],
  },
  {
    id:'orbit-digilib', title:'Digital Library', industry:'Education · Digital library', shots:5, ext:'jpg',
    outcome:'Borrow, rent, buy, and read books — including offline.',
    status:'Active', cats:['web','mobile'], outputs:['Backend','Web dashboard','Mobile app','Desktop app'],
    problem:'A library service wanted to offer both physical and digital books, with lending, sales, and reading all in one product.',
    solution:[
      'A catalog for physical books and e-books',
      'Borrow, rent, and purchase flows',
      'Vouchers, promos, and reading points',
      'Offline reading with copy protection',
      'Apps for phones, plus Windows and macOS',
    ],
    highlights:[
      'Read e-books offline',
      'Screenshot and copy protection for publishers',
      'Runs on desktop as well as mobile',
    ],
    stack:['NestJS','PostgreSQL','Flutter','Object storage'],
  },
  {
    id:'marhaen', title:'Payments App', industry:'Fintech · Payments', shots:4, ext:'jpg',
    outcome:'A secure mobile wallet with real checkout.',
    status:'Active', cats:['mobile'], outputs:['Mobile app'],
    problem:'The product needed safe, role-based access and a real payment flow that people would trust on their phone.',
    solution:[
      'PIN and one-time-password login',
      'Encrypted data storage',
      'Role-based screens for different users',
      'Integrated card/wallet checkout',
    ],
    highlights:[
      'Bank-style PIN security',
      'A real payment gateway built in',
    ],
    stack:['Flutter','Payment gateway','Local database'],
  },
  {
    id:'sales', title:'Sales Analytics Dashboard', industry:'E-commerce · Analytics', shots:4, ext:'jpg',
    outcome:'Turn raw marketplace exports into a clear sales picture.',
    status:'Shipped', cats:['data','web'], outputs:['Backend','Web dashboard'],
    problem:'A seller had piles of raw Shopee CSV exports but no easy way to understand how the business was actually doing.',
    solution:[
      'Upload marketplace CSV exports per store',
      'Automatic cleanup and aggregation',
      'Charts and key numbers at a glance',
      'A map of sales by region',
    ],
    highlights:[
      'Drag-and-drop a CSV, get insight',
      'See where your sales come from on a map',
      'Works across multiple stores',
    ],
    stack:['NestJS','PostgreSQL','Next.js','Charts & maps'],
  },
  {
    id:'asha-int', title:'Media Intelligence Dashboard', industry:'Media · Social listening', shots:5, ext:'jpg',
    outcome:'See what the media and public are saying — at a glance.',
    status:'Shipped', cats:['data','web'], outputs:['Web dashboard','Shared library'],
    problem:'Tracking coverage and sentiment across many sources was overwhelming and impossible to do by hand.',
    solution:[
      'A dashboard for coverage and sentiment',
      'Network graphs showing who’s connected',
      'Sentiment maps and word clouds',
      'Filterable data tables',
    ],
    highlights:[
      'Sentiment and influence, visualized',
      'Interactive relationship graphs',
    ],
    stack:['Next.js','Data visualization','TypeScript'],
  },
  {
    id:'prim', title:'Sustainability (ESG) Dashboard', industry:'Sustainability · ESG', shots:4, ext:'jpg',
    outcome:'Turn sustainability spreadsheets into a clear, shareable report.',
    status:'Shipped', cats:['data','web'], outputs:['Web dashboard'],
    problem:'A corporate group needed to present environmental data — emissions, waste, water, energy, biodiversity — clearly to stakeholders.',
    solution:[
      'Dashboards for each environmental metric',
      'Comparisons across subsidiaries and years',
      'Data loaded directly from Excel',
      'Available in multiple languages',
    ],
    highlights:[
      'Spreadsheet in, polished report out',
      'Multilingual for international stakeholders',
    ],
    stack:['Next.js','Charts','Excel import','i18n'],
  },
  {
    id:'icbt', title:'Lockdown Exam App', industry:'Education · Secure exams', shots:4, ext:'jpg',
    outcome:'A lockdown exam app that keeps online tests fair.',
    status:'Shipped', cats:['mobile'], outputs:['Mobile app'],
    problem:'Online exams were easy to cheat on without a controlled, locked-down environment.',
    solution:[
      'Kiosk / lockdown mode during the exam',
      'Rich questions with audio, video, and images',
      'Answers saved in real time',
      'Device checks and forced updates',
    ],
    highlights:[
      'Locks the device to prevent cheating',
      'Multimedia questions',
      'No answers lost, even on a flaky connection',
    ],
    stack:['Flutter','Realtime database'],
  },
  {
    id:'asha-os', title:'Conversational Life OS', industry:'AI · Productivity', shots:5, ext:'jpg',
    outcome:'Manage your life by chatting in plain language.',
    status:'Active', cats:['ai','web'], outputs:['WhatsApp bot','Web dashboard'],
    problem:'Most productivity apps are fiddly — you fill in a form for every little thing, so people stop using them.',
    solution:[
      'Chat on WhatsApp or the web',
      'An AI reads your message and files it for you',
      'Tasks, money, health, and schedule in one place',
      'A clean dashboard that shows what matters',
    ],
    highlights:[
      'Just type naturally — the AI does the organizing',
      'Works right inside WhatsApp',
      'A built-in priority view',
    ],
    stack:['Next.js','Go','AI / LLM','Supabase'],
  },
  {
    id:'ai-photo', title:'AI Photo Editor', industry:'AI · Mobile', shots:3, ext:'jpg',
    outcome:'An AI photo app that’s real, paid, and store-ready.',
    status:'Active', cats:['ai','mobile'], outputs:['Mobile app','Backend'],
    problem:'There are plenty of AI demos, but very few are real, paid, App-Store-ready products.',
    solution:[
      'A mobile app that transforms photos with AI',
      'Genuine AI image generation behind the scenes',
      'In-app purchases with verified receipts',
      'Fast, secure delivery of finished images',
    ],
    highlights:[
      'Real AI inference, not a demo',
      'Working, verified in-app purchases',
      'Ready for the App Store and Play Store',
    ],
    stack:['Flutter','Go','AI image models','Cloud storage'],
  },
  {
    id:'ecomo', title:'Marketplace Research Crawler', industry:'Data · Market research', shots:5, ext:'jpg',
    outcome:'Automated competitor research from Shopee and Tokopedia.',
    status:'Active', cats:['data'], outputs:['Data pipeline'],
    problem:'Tracking competitor prices and products by hand across marketplaces is slow, tedious, and error-prone.',
    solution:[
      'An automated crawler for Shopee and Tokopedia',
      'Handles each marketplace’s anti-bot defenses',
      'Clean exports to spreadsheets',
      'Scheduled overnight runs',
    ],
    highlights:[
      'Two marketplaces, fully automated',
      'Keeps working despite anti-bot blocks',
      'Ready-to-use spreadsheet reports',
    ],
    stack:['Python','Automated browsing','Node.js'],
  },
];

/* attach images + mark featured case studies.
   ── To use REAL screenshots for a project (see IMAGE-GUIDE.md): ───────────────
   easy  : add  shots: 3   to that project, and drop  images/<id>-1.png, -2.png, -3.png
           (use  ext: 'jpg'  if your files are .jpg)
   full  : add  images: ['images/whatever-1.png', 'images/whatever-2.jpg', ...]
   Projects without either keep the generated SVG placeholders, so you can do them
   one at a time. The first image is the cover (used everywhere); the rest show in
   the project's "More views" gallery. */
const FEATURED = ['damdex','myistiqlal','bpr-ams','sib','asha-os'];
window.PROJECTS.forEach(p => {
  if(!p.images){
    const ext = p.ext || (p.shots ? 'png' : 'svg');
    const n = p.shots || 3;
    p.images = Array.from({ length:n }, (_, i) => `images/${p.id}-${i+1}.${ext}`);
  }
  p.cover = p.images[0];
  p.featured = FEATURED.includes(p.id);
});
