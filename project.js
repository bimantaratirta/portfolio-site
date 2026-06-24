/* Project detail — image-led case study */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const P  = window.PROJECTS || [];

  const id = new URLSearchParams(location.search).get('id');
  const idx = P.findIndex(p => p.id === id);
  const p = P[idx];
  const main = $('#pmain');
  const yr = $('#year'); if(yr) yr.textContent = new Date().getFullYear();

  if(!p){
    main.innerHTML = `<div class="wrap" style="padding:60px 0">
      <a class="pback" href="index.html#work">← Back to work</a>
      <h1 class="phead__title">Project not found</h1>
      <p class="phead__outcome">Pick one from the work list instead.</p></div>`;
    return;
  }

  document.title = `${p.title} — the work`;
  const md = $('meta[name="description"]'); if(md) md.setAttribute('content', `${p.title}: ${p.outcome}`);

  const prev = P[(idx - 1 + P.length) % P.length];
  const next = P[(idx + 1) % P.length];
  const shipped = p.status === 'Shipped';

  main.innerHTML = `
  <div class="wrap">
    <a class="pback reveal" href="index.html#work">← Back to all work</a>
    <header class="phead">
      <p class="phead__ind reveal">${p.industry}</p>
      <h1 class="phead__title reveal">${p.title}</h1>
      <p class="phead__outcome reveal">${p.outcome}</p>
    </header>
    <div class="phero-img reveal"><img src="${p.images[0]}" alt="${p.title} preview"></div>

    <div class="pmeta reveal">
      <span class="pstatus"><span class="sd" style="${shipped?'background:var(--ink-mute)':''}"></span>${shipped?'Shipped':'In production'}</span>
      <div class="grp"><small>Delivered</small><div class="chips">${p.outputs.map(o => `<span>${o}</span>`).join('')}</div></div>
      <a class="btn btn--dark" style="margin-left:auto" href="index.html#contact">Start a project like this →</a>
    </div>

    <div class="pblocks">
      <div>
        <section class="pblock reveal"><h2>The challenge</h2><p>${p.problem}</p></section>
        <section class="pblock reveal"><h2>What I built</h2>
          <ul class="psol">${p.solution.map(s => `<li><span class="ck">✓</span><span>${s}</span></li>`).join('')}</ul>
        </section>
      </div>
      <div>
        <section class="pblock reveal"><h2>Highlights</h2>
          <div class="phi">${p.highlights.map(h => `<div class="phi__item">${h}</div>`).join('')}</div>
        </section>
        <section class="pblock reveal"><h2>Tech behind it</h2>
          <div class="ptech">${p.stack.map(t => `<span>${t}</span>`).join('')}</div>
        </section>
      </div>
    </div>

    ${p.images.length > 1 ? `<section class="pgallery reveal">
      <h2>More views</h2>
      <div class="pgallery__grid">
        ${p.images.slice(1).map(src => `<a href="${src}" target="_blank" rel="noopener"><img loading="lazy" src="${src}" alt="${p.title} view"></a>`).join('')}
      </div>
    </section>` : ''}

    <nav class="pnav reveal" aria-label="More projects">
      <a class="prev" href="project.html?id=${prev.id}"><small>← Previous</small><b>${prev.title}</b></a>
      <a class="next" href="project.html?id=${next.id}"><small>Next →</small><b>${next.title}</b></a>
    </nav>
  </div>

  <section class="section">
    <div class="wrap contact reveal">
      <!-- TODO: replace placeholders with your real email / WhatsApp / LinkedIn / GitHub -->
      <div class="contact__grid">
        <div class="contact__intro">
          <span class="contact__eyebrow">Let’s talk</span>
          <h2 class="contact__head">Have a project<br>like this?</h2>
          <p class="contact__say">Tell me what you’re working on — a whole product or one tricky piece. I’ll reply with how I’d approach it and what it would take.</p>
          <ol class="contact__steps">
            <li><span>1</span> You send a few lines about the project</li>
            <li><span>2</span> I reply within a day with how I’d approach it</li>
            <li><span>3</span> We scope it together — timeline and cost, no surprises</li>
          </ol>
        </div>
        <aside class="contact__card">
          <p class="contact__status"><span class="dot dot--light"></span> Available — booking new projects now</p>
          <a class="contact__primary" href="mailto:hello@example.com?subject=Project%20inquiry">
            <span>Email me directly</span>
            <b>hello@example.com</b>
          </a>
          <div class="contact__channels">
            <a href="#" aria-label="Chat on WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18.5 3 21l2.6-.9A8.5 8.5 0 1 0 4 18.5z"/><path d="M8.5 9c0 3 2.5 5.5 5.5 5.5"/></svg>
              WhatsApp
            </a>
            <a href="#" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 5.9V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>
              LinkedIn
            </a>
            <a href="#" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>
              GitHub
            </a>
          </div>
          <p class="contact__meta">Usually replies within a day · Remote · GMT+7</p>
        </aside>
      </div>
    </div>
  </section>`;

  // nav + progress
  const nav = $('#nav'), bar = $('#scrollProgress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 16);
    const h = document.documentElement.scrollHeight - innerHeight;
    if(bar) bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
  };
  addEventListener('scroll', onScroll, { passive:true }); onScroll();

  const o = new IntersectionObserver((es) => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); o.unobserve(e.target); } }), { threshold:.1, rootMargin:'0px 0px -6% 0px' });
  $$('.reveal').forEach(el => { o.observe(el); if(reduce) el.classList.add('in'); });
  requestAnimationFrame(() => $$('.phead .reveal, .pback, .phero-img').forEach((el,i) => { el.style.setProperty('--d', (i*70)+'ms'); el.classList.add('in'); }));
  scrollTo(0,0);
})();
