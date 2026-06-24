/* Generates abstract SVG mockups (browser / phone / map / chat) per project.
   Swap these out for real screenshots later — keep the same filenames in images/. */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'images');
fs.mkdirSync(OUT, { recursive: true });

const HUES = {
  indigo:['#5B4BE8','#8E7BFF'], blue:['#2E7CF6','#67ABFF'], teal:['#0FB5BA','#56D6CE'],
  emerald:['#0FA968','#54E39B'], violet:['#7C4BE8','#B07BFF'], amber:['#EF9D2A','#FFC56B'],
  rose:['#EC5C7D','#FF8FA8'], slate:['#5A6B86','#90A4C2'], cyan:['#1AA6C9','#5FD6E6'],
};

const r = (x,y,w,h,rad,fill,o=1,extra='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${fill}"${o!==1?` opacity="${o}"`:''}${extra?' '+extra:''}/>`;
const c = (cx,cy,rr,fill,o=1) => `<circle cx="${cx}" cy="${cy}" r="${rr}" fill="${fill}"${o!==1?` opacity="${o}"`:''}/>`;
const ln = (a,b,d,e,col,w=2,o=1) => `<line x1="${a}" y1="${b}" x2="${d}" y2="${e}" stroke="${col}" stroke-width="${w}"${o!==1?` opacity="${o}"`:''} stroke-linecap="round"/>`;

const INK='#1A1B22', SUB='#C7CCD6', SUB2='#E2E6EE', PANEL='#FFFFFF', PAGE='#EEF1F6';

function chrome(x,y,w){ // window top bar
  return c(x+24,y+23,6,'#FF5F57')+c(x+44,y+23,6,'#FEBC2E')+c(x+64,y+23,6,'#28C840')
    + r(x+90,y+15,w-200,16,8,'#EEF1F6')
    + r(x+w-90,y+15,70,16,8,'#EEF1F6');
}

/* ---------- templates ---------- */
function dashboard([h0,h1]){
  const X=70,Y=60,W=1060,H=630;
  let s = r(X,Y,W,H,22,PANEL,1,'filter="url(#sh)"');
  s += chrome(X,Y,W);
  s += ln(X,Y+46,X+W,Y+46,SUB2,1);
  // sidebar
  const sx=X+18, sy=Y+64;
  s += r(sx,sy,180,H-82,16,'#F6F8FC');
  s += r(sx+16,sy+18,120,12,6,INK,.85);
  for(let i=0;i<6;i++){ const yy=sy+58+i*46; if(i===1){ s+=r(sx+12,yy-10,156,34,10,`url(#g)`); s+=r(sx+26,yy,90,8,4,'#fff'); s+=c(sx+18+2,yy+4,0,'#fff'); } else { s+=c(sx+24,yy+4,7,SUB); s+=r(sx+40,yy,96,8,4,SUB);} }
  // main
  const mx=sx+200, mw=W-200-54;
  s += r(mx,sy,mw*0.42,14,7,INK,.85);
  s += r(X+W-150,sy-4,110,30,15,'url(#g)');
  s += r(X+W-128,sy+6,66,8,4,'#fff');
  // stat cards
  const cw=(mw-32)/3;
  for(let i=0;i<3;i++){ const cx=mx+i*(cw+16), cy=sy+44;
    s += r(cx,cy,cw,108,14,'#fff',1,'stroke="#EAEEF5"');
    s += c(cx+24,cy+28,12,i===0?h0:SUB2,i===0?1:1); if(i!==0) s+=c(cx+24,cy+28,12,SUB2);
    s += r(cx+18,cy+52,cw*0.5,16,7,INK,.8);
    s += r(cx+18,cy+78,cw*0.7,8,4,SUB);
  }
  // chart
  const chx=mx, chy=sy+172, chw=mw*0.62, chh=200;
  s += r(chx,chy,chw,chh,14,'#fff',1,'stroke="#EAEEF5"');
  s += r(chx+20,chy+18,120,10,5,INK,.7);
  const bars=[.45,.7,.55,.85,.6,.95,.75,.5];
  const bw=(chw-60)/bars.length;
  bars.forEach((v,i)=>{ const bh=(chh-70)*v, bx=chx+30+i*bw, by=chy+chh-26-bh; s+=r(bx,by,bw*0.55,bh,5,i%2? h1:`url(#g)`); });
  // list panel
  const lx=mx+chw+16, lw=mw-chw-16;
  s += r(lx,chy,lw,chh,14,'#fff',1,'stroke="#EAEEF5"');
  s += r(lx+18,chy+18,90,10,5,INK,.7);
  for(let i=0;i<4;i++){ const yy=chy+48+i*38; s+=c(lx+30,yy+6,11,i===0?h0:SUB2); s+=r(lx+50,yy,lw*0.42,8,4,INK,.7); s+=r(lx+50,yy+14,lw*0.3,6,3,SUB); }
  return s;
}

function phone([h0,h1], accentCards=true){
  const PW=330,PH=652,PX=(1200-PW)/2,PY=(750-PH)/2;
  let s='';
  if(accentCards){ s+=r(PX-250,170,210,150,18,'#fff',.9,'filter="url(#sh)"'); s+=r(PX-228,196,150,12,6,INK,.5); s+=r(PX-228,220,120,8,4,SUB); for(let i=0;i<3;i++)s+=r(PX-228,246+i*22,170-i*30,10,5,i===0?h0:SUB2,i===0?.9:1);
    s+=r(PX+PW+40,210,210,210,18,'#fff',.9,'filter="url(#sh)"'); s+=c(PX+PW+145,300,46,`url(#g)`); s+=r(PX+PW+66,360,158,10,5,INK,.5); s+=r(PX+PW+66,382,120,8,4,SUB); }
  // frame
  s += r(PX,PY,PW,PH,46,'#0E1016',1,'filter="url(#sh)"');
  s += r(PX+8,PY+8,PW-16,PH-16,40,PANEL);
  // notch
  s += r(PX+PW/2-46,PY+18,92,20,10,'#0E1016');
  // hero header
  s += `<clipPath id="ph"><rect x="${PX+8}" y="${PY+8}" width="${PW-16}" height="200" rx="40"/></clipPath>`;
  s += `<g clip-path="url(#ph)">`+r(PX+8,PY+8,PW-16,200,0,'url(#g)')+c(PX+PW-60,PY+40,90,'#fff',.12)+c(PX+40,PY+150,70,'#fff',.1)+`</g>`;
  s += r(PX+30,PY+70,140,14,7,'#fff',.95);
  s += r(PX+30,PY+96,90,9,4,'#fff',.7);
  s += r(PX+PW-86,PY+62,56,56,16,'#fff',.22);
  // list cards
  for(let i=0;i<4;i++){ const yy=PY+236+i*86; s+=r(PX+26,yy,PW-52,72,16,'#F6F8FC');
    s+=c(PX+58,yy+36,20,i===0?h0:SUB2); s+=r(PX+92,yy+20,PW*0.42,10,5,INK,.75); s+=r(PX+92,yy+40,PW*0.3,8,4,SUB); s+=r(PX+PW-66,yy+28,16,16,5,i===0?h1:SUB2); }
  // bottom nav
  s += r(PX+8,PY+PH-66,PW-16,58,0,'#fff',1);
  s += ln(PX+8,PY+PH-66,PX+PW-8,PY+PH-66,SUB2,1);
  for(let i=0;i<4;i++){ const cx=PX+58+i*((PW-110)/3); s+=r(cx-9,PY+PH-44,18,18,5,i===0?`url(#g)`:SUB2); }
  return s;
}

function website([h0,h1]){
  const X=70,Y=60,W=1060,H=630;
  let s = r(X,Y,W,H,22,PANEL,1,'filter="url(#sh)"');
  s += chrome(X,Y,W);
  s += ln(X,Y+46,X+W,Y+46,SUB2,1);
  // navbar
  const ny=Y+74;
  s += c(X+44,ny+8,10,h0); s += r(X+62,ny+2,70,12,6,INK,.8);
  for(let i=0;i<3;i++) s+=r(X+W-360+i*90,ny+2,60,10,5,SUB);
  s += r(X+W-90,ny-6,70,30,15,'url(#g)');
  // hero
  const hy=ny+70;
  s += r(X+50,hy,W*0.42,26,8,INK,.85);
  s += r(X+50,hy+44,W*0.34,26,8,INK,.85);
  s += r(X+50,hy+92,W*0.3,10,5,SUB);
  s += r(X+50,hy+108,W*0.24,10,5,SUB);
  s += r(X+50,hy+140,140,38,19,'url(#g)');
  s += r(X+200,hy+140,120,38,19,'#fff',1,'stroke="#E3E8F0"');
  // hero image block
  s += r(X+W*0.55,hy-10,W*0.4,250,18,'#F2F5FA');
  s += r(X+W*0.55,hy-10,W*0.4,250,18,'url(#gsoft)');
  s += c(X+W*0.75,hy+110,54,'#fff',.55); s += r(X+W*0.62,hy+180,W*0.26,12,6,'#fff',.6);
  // feature row
  const fy=hy+290, fw=(W-120)/3;
  for(let i=0;i<3;i++){ const fx=X+50+i*(fw+10); s+=r(fx,fy,fw,150,16,'#fff',1,'stroke="#EAEEF5"'); s+=r(fx+22,fy+24,40,40,12,i===0?`url(#g)`:SUB2); s+=r(fx+22,fy+80,fw*0.6,10,5,INK,.75); s+=r(fx+22,fy+100,fw*0.8,8,4,SUB); s+=r(fx+22,fy+116,fw*0.5,8,4,SUB);}
  return s;
}

function mapview([h0,h1]){
  const X=70,Y=60,W=1060,H=630;
  let s = r(X,Y,W,H,22,PANEL,1,'filter="url(#sh)"');
  s += chrome(X,Y,W);
  s += ln(X,Y+46,X+W,Y+46,SUB2,1);
  const mx=X+18,my=Y+64,mw=W*0.62,mh=H-82;
  s += r(mx,my,mw,mh,16,'#EAF0F8');
  // abstract land
  s += `<clipPath id="mp"><rect x="${mx}" y="${my}" width="${mw}" height="${mh}" rx="16"/></clipPath>`;
  s += `<g clip-path="url(#mp)">`;
  s += `<path d="M${mx+60},${my+120} q120,-80 260,-20 q140,60 60,180 q-80,120 -240,80 q-180,-40 -80,-220 z" fill="${h1}" opacity=".18"/>`;
  s += `<path d="M${mx+mw-260},${my+260} q120,-60 200,40 q60,120 -80,180 q-160,40 -180,-80 q-12,-90 60,-140 z" fill="${h0}" opacity=".16"/>`;
  for(let i=0;i<6;i++) s+=ln(mx,my+50*i,mx+mw,my+50*i,'#fff',1,.5);
  for(let i=0;i<8;i++) s+=ln(mx+70*i,my,mx+70*i,my+mh,'#fff',1,.4);
  // pins
  const pins=[[.3,.35],[.5,.55],[.42,.7],[.66,.4],[.58,.72],[.34,.55]];
  pins.forEach((p,i)=>{ const px=mx+mw*p[0],py=my+mh*p[1]; s+=`<path d="M${px},${py} c-14,-18 -22,-30 -22,-44 a22,22 0 1 1 44,0 c0,14 -8,26 -22,44 z" fill="${i===0?h0:h1}"/>`+c(px,py-44,7,'#fff'); });
  s += `</g>`;
  // side panel
  const px=mx+mw+18, pw=W-mw-54;
  s += r(px,my,pw,14,7,INK,.8);
  s += r(px,my+34,pw,120,14,'#fff',1,'stroke="#EAEEF5"');
  const bars=[.5,.8,.6,.9,.7]; const bw=(pw-50)/bars.length;
  bars.forEach((v,i)=>{ const bh=70*v; s+=r(px+24+i*bw,my+34+96-bh,bw*0.5,bh,4,i%2?h1:`url(#g)`); });
  for(let i=0;i<5;i++){ const yy=my+182+i*52; s+=r(px,yy,pw,42,12,'#fff',1,'stroke="#EAEEF5"'); s+=c(px+24,yy+21,11,i===0?h0:SUB2); s+=r(px+44,yy+12,pw*0.5,8,4,INK,.7); s+=r(px+44,yy+26,pw*0.32,6,3,SUB);}
  return s;
}

function chat([h0,h1]){
  const PW=360,PH=660,PX=(1200-PW)/2,PY=(750-PH)/2;
  let s='';
  s+=r(PX-250,200,210,120,18,'#fff',.85,'filter="url(#sh)"'); s+=r(PX-228,224,140,10,5,INK,.5); s+=r(PX-228,246,110,8,4,SUB); s+=r(PX-228,278,90,22,11,'url(#g)');
  s+=r(PX+PW+40,250,210,150,18,'#fff',.85,'filter="url(#sh)"'); s+=r(PX+PW+62,276,160,10,5,INK,.5); for(let i=0;i<3;i++)s+=r(PX+PW+62,300+i*22,150-i*24,8,4,SUB2);
  s += r(PX,PY,PW,PH,46,'#0E1016',1,'filter="url(#sh)"');
  s += r(PX+8,PY+8,PW-16,PH-16,40,'#EFF2F7');
  // header
  s += `<clipPath id="ch"><rect x="${PX+8}" y="${PY+8}" width="${PW-16}" height="92" rx="40"/></clipPath>`;
  s += `<g clip-path="url(#ch)">`+r(PX+8,PY+8,PW-16,92,0,'url(#g)')+`</g>`;
  s += c(PX+44,PY+58,18,'#fff',.9); s+=r(PX+74,PY+44,120,12,6,'#fff',.95); s+=r(PX+74,PY+66,70,8,4,'#fff',.7);
  // bubbles
  const B=[[0,.55],[1,.4],[0,.7],[1,.6],[0,.35]];
  let yy=PY+128;
  B.forEach(([side,wpct])=>{ const bw=(PW-80)*wpct, bh=44; if(side===0){ s+=r(PX+28,yy,bw,bh,16,'#fff',1,'stroke="#E5E9F0"'); s+=r(PX+44,yy+13,bw*0.6,8,4,INK,.6); s+=r(PX+44,yy+27,bw*0.4,7,3,SUB);} else { const bx=PX+PW-28-bw; s+=r(bx,yy,bw,bh,16,'url(#g)'); s+=r(bx+16,yy+13,bw*0.6,8,4,'#fff',.95); s+=r(bx+16,yy+27,bw*0.4,7,3,'#fff',.7);} yy+=bh+22; });
  // input
  s += r(PX+24,PY+PH-72,PW-48,46,23,'#fff',1,'stroke="#E5E9F0"');
  s += r(PX+44,PY+PH-54,PW*0.5,10,5,SUB);
  s += c(PX+PW-50,PY+PH-49,18,`url(#g)`);
  return s;
}

const TPL = { dashboard, phone, website, map:mapview, chat };

function svg(inner,[h0,h1]){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${h0}"/><stop offset="1" stop-color="${h1}"/></linearGradient>
<linearGradient id="gsoft" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${h0}" stop-opacity=".5"/><stop offset="1" stop-color="${h1}" stop-opacity=".5"/></linearGradient>
<radialGradient id="bgblob" cx="80%" cy="0%" r="90%"><stop offset="0" stop-color="${h1}" stop-opacity=".26"/><stop offset="1" stop-color="${h1}" stop-opacity="0"/></radialGradient>
<filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="34" flood-color="#1A1B22" flood-opacity="0.16"/></filter>
</defs>
<rect width="1200" height="750" fill="${PAGE}"/>
<rect width="1200" height="750" fill="url(#bgblob)"/>
${inner}
</svg>`;
}

// project -> [coverTpl, hue, altTpls]
const MAP = {
  'damdex':['website','indigo',['dashboard','phone']],
  'bpr-ams':['dashboard','blue',['phone','map']],
  'bpr-pms':['phone','teal',['map','dashboard']],
  'sib':['map','emerald',['phone','dashboard']],
  'myistiqlal':['phone','violet',['website','dashboard']],
  'orbit-cbt':['dashboard','blue',['website','phone']],
  'orbit-digilib':['phone','amber',['dashboard','website']],
  'pii':['website','slate',['dashboard','phone']],
  'marhaen':['phone','emerald',['chat','dashboard']],
  'sales':['dashboard','blue',['map','phone']],
  'asha-int':['dashboard','violet',['map','phone']],
  'orbit-mon':['dashboard','teal',['map','website']],
  'prim':['dashboard','emerald',['map','website']],
  'icbt':['phone','rose',['dashboard','chat']],
  'asha-os':['chat','indigo',['phone','dashboard']],
  'ai-photo':['phone','rose',['chat','dashboard']],
  'ecomo':['dashboard','slate',['map','website']],
  'anggreani':['website','amber',['dashboard','phone']],
};

let n=0;
for(const [id,[cover,hueName,alts]] of Object.entries(MAP)){
  const hue = HUES[hueName];
  const tpls = [cover, alts[0], alts[1]];
  tpls.forEach((t,i)=>{
    const fn = TPL[t] || dashboard;
    fs.writeFileSync(path.join(OUT,`${id}-${i+1}.svg`), svg(fn(hue), hue));
    n++;
  });
}
console.log(`generated ${n} images in images/`);
