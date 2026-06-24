/* Home page — marquee, featured case studies, bento gallery */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const P  = window.PROJECTS || [];
  const CATLABEL = { web:'Web app', mobile:'Mobile', ai:'AI', data:'Data', site:'Website' };
  const pad = n => String(n).padStart(2,'0');

  /* reveal */
  const obs = new IntersectionObserver((es) => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold:.12, rootMargin:'0px 0px -7% 0px' });
  const watch = el => obs.observe(el);

  /* hero marquee */
  function marquee(){
    const m = $('#marquee'); if(!m) return;
    const mcard = p => `<a class="mcard" href="project.html?id=${p.id}" tabindex="-1"><img loading="lazy" src="${p.cover}" alt="${p.title}"></a>`;
    const rowA = [...P, ...P].map(mcard).join('');
    const rev = [...P].reverse();
    const rowB = [...rev, ...rev].map(mcard).join('');
    m.innerHTML = `<div class="mrow mrow--a">${rowA}</div><div class="mrow mrow--b">${rowB}</div>`;
  }

  /* featured case studies */
  function featured(){
    const root = $('#featuredList'); if(!root) return;
    const list = P.filter(p => p.featured);
    root.innerHTML = list.map((p,i) => `
      <article class="case">
        <a class="case__media reveal" href="project.html?id=${p.id}" aria-label="${p.title}">
          <img loading="lazy" src="${p.cover}" alt="${p.title} preview">
        </a>
        <div class="case__body reveal">
          <span class="case__n">${pad(i+1)} / ${pad(list.length)}</span>
          <p class="case__ind">${p.industry}</p>
          <h3 class="case__title">${p.title}</h3>
          <p class="case__outcome">${p.outcome}</p>
          <ul class="case__hi">${p.highlights.slice(0,3).map(h => `<li>${h}</li>`).join('')}</ul>
          <a class="case__link" href="project.html?id=${p.id}">Read the case study <span aria-hidden="true">→</span></a>
        </div>
      </article>`).join('');
    $$('.case .reveal', root).forEach(watch);
  }

  /* bento gallery */
  const SIZES = ['s-wide','s-tall','s-sq','s-tall','s-sq','s-wide','s-tall','s-sq','s-wide'];
  function bento(){
    const grid = $('#grid'); if(!grid) return;
    grid.innerHTML = P.map((p,i) => `
      <a class="tile reveal ${SIZES[i % SIZES.length]}" href="project.html?id=${p.id}" data-cats="${p.cats.join(' ')}" style="--d:${(i%8)*45}ms" aria-label="${p.title} — ${p.industry}">
        <span class="tile__tag">${CATLABEL[p.cats[0]] || 'Project'}</span>
        <span class="tile__media"><img loading="lazy" src="${p.cover}" alt="${p.title} preview"></span>
        <span class="tile__meta"><b>${p.title}</b><i>${p.industry}</i></span>
      </a>`).join('');
    $$('.tile', grid).forEach(watch);
  }

  function filters(){
    const grid = $('#grid');
    $$('.chip').forEach(chip => chip.addEventListener('click', () => {
      $$('.chip').forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected','false'); });
      chip.classList.add('is-active'); chip.setAttribute('aria-selected','true');
      const f = chip.dataset.filter;
      $$('.tile', grid).forEach(t => {
        const ok = f === 'all' || t.dataset.cats.split(' ').includes(f);
        t.classList.toggle('is-hidden', !ok);
      });
    }));
  }

  /* nav + scroll progress + spy */
  function scroll(){
    const nav = $('#nav'), bar = $('#scrollProgress');
    const links = $$('.nav__links a');
    const secs = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
    const onScroll = () => {
      const y = scrollY;
      nav.classList.toggle('scrolled', y > 16);
      const h = document.documentElement.scrollHeight - innerHeight;
      if(bar) bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
      let cur = null;
      secs.forEach(s => { if(s.getBoundingClientRect().top <= 160) cur = s; });
      links.forEach(a => a.classList.toggle('active', cur && a.getAttribute('href') === '#' + cur.id));
    };
    addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  }

  /* AI section — busywork ticker */
  function aiTicker(){
    const row = $('#aiTicker'); if(!row) return;
    const tasks = ['Invoice & receipt data entry','Answering the same FAQs','Copy-pasting between tools',
      'Qualifying inbound leads','Writing weekly reports','Sorting & tagging emails','WhatsApp follow-ups',
      'Summarizing long documents','Moderating submissions','Scheduling & reminders','Updating spreadsheets','Routing support tickets'];
    const pill = t => `<span class="taskpill">${t}</span>`;
    row.innerHTML = [...tasks, ...tasks].map(pill).join('');
  }

  /* AI section — live automation demo (looping) */
  function aiDemo(){
    const body = $('#demoBody'); if(!body) return;
    const DOC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 13h6M10 17h5"/></svg>';
    const SCENES = [
      { cap:'Extract & file a document',
        in:`<div class="d-row d-doc">${DOC}<span>invoice_4821.pdf</span></div>`,
        out:`<div class="d-row d-out"><div class="d-out__t">Extracted in 1.2s</div><div class="d-kv"><div><span>Vendor</span><b>PT Sumber Jaya</b></div><div><span>Total</span><b>Rp 4.820.000</b></div><div><span>Due date</span><b>12 Jul 2026</b></div></div><div class="d-foot">Logged to your spreadsheet</div></div>` },
      { cap:'Answer from your own docs',
        in:`<div class="d-row d-msg">Do you ship to Bali, and how long does it take?</div>`,
        out:`<div class="d-row d-out"><div class="d-out__t">Replied in 2s</div><div class="d-reply">Yes — we ship to Bali in 2–3 days via JNE. Want me to start an order for you?</div><div class="d-foot">Answered from your knowledge base</div></div>` },
      { cap:'Run a workflow',
        in:`<div class="d-row d-msg">Remind the team to send the report tomorrow at 9am.</div>`,
        out:`<div class="d-row d-out"><div class="d-out__t">Done</div><div class="d-reply">Reminder scheduled for 9:00 and posted to your #ops channel.</div><div class="d-foot">Workflow triggered in n8n</div></div>` },
    ];
    const THINK = '<div class="d-row d-think"><span class="d-ava"></span><span class="d-dots"><i></i><i></i><i></i></span></div>';
    let i = 0; const timers = [];
    const set = (fn, ms) => timers.push(setTimeout(fn, ms));
    if(reduce){ body.innerHTML = `<div class="d-cap">${SCENES[0].cap}</div>` + SCENES[0].in + SCENES[0].out; return; }
    function play(){
      const s = SCENES[i];
      body.classList.remove('fade');
      body.innerHTML = `<div class="d-cap">${s.cap}</div>` + s.in;
      set(() => body.insertAdjacentHTML('beforeend', THINK), 720);
      set(() => { const t = body.querySelector('.d-think'); if(t) t.remove(); body.insertAdjacentHTML('beforeend', s.out); }, 1850);
      set(() => body.classList.add('fade'), 4500);
      set(() => { i = (i + 1) % SCENES.length; play(); }, 5000);
    }
    play();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const y = $('#year'); if(y) y.textContent = new Date().getFullYear();
    marquee();
    featured();
    bento();
    filters();
    aiTicker();
    aiDemo();
    scroll();
    $$('.reveal').forEach(watch);
    requestAnimationFrame(() => $$('.hero .reveal').forEach((el,i) => { el.style.setProperty('--d', (i*90)+'ms'); el.classList.add('in'); }));
  });
})();
