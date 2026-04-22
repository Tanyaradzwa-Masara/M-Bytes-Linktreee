// ── Ripple effect on link clicks ──────────────────────────────
    document.querySelectorAll('.link').forEach(link => {
      link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top  = (e.clientY - rect.top)  + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
 
    // ── Back to top button ────────────────────────────────────────
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
 
    // ── Staggered entrance animation for sidebar links ────────────
    document.querySelectorAll('.link').forEach((el, i) => {
      el.style.animationDelay = `${i * 80}ms`;
      el.classList.add('slide-in');
    });
 
    // ── Remove shimmer once TikTok embed loads ────────────────────
    // TikTok's script resizes iframes; we just fade shimmer after delay
    setTimeout(() => {
      document.querySelectorAll('.card-shimmer').forEach(s => s.style.opacity = '0');
    }, 2500);