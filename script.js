/**
 * Elektro Pižeta — Dual Responsive Video Playlist (PC Panoramic 16:9 & Mobile Vertical 9:16),
 * Native Hardware-Accelerated Double-Buffer Preloader, Ambient Bokeh & Cookie/Legal Modal Controller
 */

// 7 najboljih HORIZONTALNIH (panoramskih 16:9) videa za PC i široke ekrane (svi <= 6.5s)
const PC_VIDEO_PLAYLIST = [
  {
    src: 'assets/videos/pc-1.mp4',
    title: 'Poslovne zgrade',
    poster: 'assets/images/poster-pc-1.jpg'
  },
  {
    src: 'assets/videos/pc-2.mp4',
    title: 'Poslovna pročelja',
    poster: 'assets/images/poster-pc-2.jpg'
  },
  {
    src: 'assets/videos/pc-3.mp4',
    title: 'Dekoracija fasada',
    poster: 'assets/images/poster-pc-3.jpg'
  },
  {
    src: 'assets/videos/pc-4.mp4',
    title: 'Poslovni kompleksi',
    poster: 'assets/images/poster-pc-4.jpg'
  },
  {
    src: 'assets/videos/pc-5.mp4',
    title: 'Moderne vile',
    poster: 'assets/images/poster-pc-5.jpg'
  },
  {
    src: 'assets/videos/pc-6.mp4',
    title: 'Obiteljske rezidencije',
    poster: 'assets/images/poster-pc-6.jpg'
  },
  {
    src: 'assets/videos/pc-7.mp4',
    title: 'Kuće i okućnice',
    poster: 'assets/images/poster-pc-7.jpg'
  }
];

// 7 najboljih VERTIKALNIH (9:16) videa snimanih mobitelom za mobilnu verziju (svi <= 6.8s)
// Redoslijed: 01 Zlatna pročelja prvi, a Svečane dvorane pri kraju (06)
const MOBILE_VIDEO_PLAYLIST = [
  {
    src: 'assets/videos/mob-6.mp4',
    title: 'Zlatna pročelja',
    poster: 'assets/images/poster-mob-6.jpg'
  },
  {
    src: 'assets/videos/mob-2.mp4',
    title: 'Poslovni objekti',
    poster: 'assets/images/poster-mob-2.jpg'
  },
  {
    src: 'assets/videos/mob-3.mp4',
    title: 'Trgovački centri',
    poster: 'assets/images/poster-mob-3.jpg'
  },
  {
    src: 'assets/videos/mob-4.mp4',
    title: 'Visoke fasade',
    poster: 'assets/images/poster-mob-4.jpg'
  },
  {
    src: 'assets/videos/mob-5.mp4',
    title: 'Svjetlosni tuneli',
    poster: 'assets/images/poster-mob-5.jpg'
  },
  {
    src: 'assets/videos/mob-1.mp4',
    title: 'Svečane dvorane',
    poster: 'assets/images/poster-mob-1.jpg'
  },
  {
    src: 'assets/videos/mob-7.mp4',
    title: '3D dekoracije',
    poster: 'assets/images/poster-mob-7.jpg'
  }
];

function isMobileOrPortraitViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return w <= 768 || (h > w && w <= 1024);
}

document.addEventListener('DOMContentLoaded', () => {
  initVideoSequentialPlayer();
  initAmbientBokehCanvas();
  initInquiryForm();
  initCookieAndLegalModal();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/**
 * Hardverski ubrzan dvostruki video player (Double-Buffered) bez gušenja mobilne mreže
 */
function initVideoSequentialPlayer() {
  const videoA = document.getElementById('hero-video-primary');
  const videoB = document.getElementById('hero-video-secondary');
  const stage = document.getElementById('video-stage');
  const pillsContainer = document.getElementById('video-playlist-pills');
  const prevBtn = document.getElementById('prev-video-btn');
  const nextBtn = document.getElementById('next-video-btn');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const pauseIcon = document.getElementById('pause-icon');
  const playIcon = document.getElementById('play-icon');

  if (!videoA || !videoB) return;

  let currentMode = isMobileOrPortraitViewport() ? 'mobile' : 'pc';
  let activePlaylist = currentMode === 'mobile' ? MOBILE_VIDEO_PLAYLIST : PC_VIDEO_PLAYLIST;
  let currentIndex = 0;
  let activeVideo = videoA;
  let standbyVideo = videoB;
  let isPaused = false;
  let switchToken = 0;
  let fadeOutTimer = null;
  let preloadTimer = null;
  let advanceLock = false;

  // Tiho pripremi SAMO idući video u standby elementu (ne guši 4G/5G vezu na mobitelu)
  function scheduleStandbyPreload() {
    if (preloadTimer) clearTimeout(preloadTimer);
    preloadTimer = setTimeout(() => {
      const nextIdx = (currentIndex + 1) % activePlaylist.length;
      const nextItem = activePlaylist[nextIdx];
      if (!nextItem || !standbyVideo) return;
      if (standbyVideo.getAttribute('data-raw-src') !== nextItem.src) {
        standbyVideo.pause();
        standbyVideo.setAttribute('data-raw-src', nextItem.src);
        if (nextItem.poster) standbyVideo.poster = nextItem.poster;
        standbyVideo.muted = true;
        standbyVideo.preload = 'auto';
        standbyVideo.src = nextItem.src;
        standbyVideo.load();
      }
    }, 550);
  }

  function renderPills() {
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';
    activePlaylist.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `video-pill ${idx === currentIndex ? 'active' : ''}`;
      btn.dataset.index = idx;
      btn.innerHTML = `
        <div class="video-pill-header">
          <span class="video-pill-title">${item.title}</span>
          <span class="video-pill-index">0${idx + 1}</span>
        </div>
        <div class="video-pill-progress" id="pill-progress-${idx}"></div>
      `;
      btn.addEventListener('click', () => {
        if (idx !== currentIndex) {
          switchToVideo(idx);
        } else {
          activeVideo.currentTime = 0;
          isPaused = false;
          updatePlayPauseIcons();
          activeVideo.play().catch(() => {});
        }
      });
      pillsContainer.appendChild(btn);
    });
  }

  function updatePillStates() {
    if (!pillsContainer) return;
    const pills = pillsContainer.querySelectorAll('.video-pill');
    pills.forEach((pill, idx) => {
      const isAct = idx === currentIndex;
      pill.classList.toggle('active', isAct);
      const bar = pill.querySelector('.video-pill-progress');
      if (bar && !isAct) {
        bar.style.width = '0%';
      }
      if (isAct && window.innerWidth <= 900) {
        pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  function updateProgressLoop() {
    if (activeVideo && activeVideo.duration && !isNaN(activeVideo.duration) && activeVideo.duration > 0) {
      const cur = activeVideo.currentTime;
      const dur = activeVideo.duration;
      const pct = Math.min(100, (cur / dur) * 100);
      const bar = document.getElementById(`pill-progress-${currentIndex}`);
      if (bar) bar.style.width = `${pct}%`;

      if (!isPaused && !advanceLock && cur >= dur - 0.08) {
        advanceLock = true;
        switchToVideo(currentIndex + 1);
      }

      if (!isPaused && activeVideo.paused && activeVideo.readyState >= 2 && cur < dur - 0.15 && !document.hidden) {
        activeVideo.play().catch(() => {});
      }
    }
    requestAnimationFrame(updateProgressLoop);
  }

  function switchToVideo(nextIndex) {
    const total = activePlaylist.length;
    const targetIndex = ((nextIndex % total) + total) % total;
    const myToken = ++switchToken;

    if (fadeOutTimer) {
      clearTimeout(fadeOutTimer);
      fadeOutTimer = null;
    }
    if (preloadTimer) {
      clearTimeout(preloadTimer);
      preloadTimer = null;
    }

    currentIndex = targetIndex;
    updatePillStates();

    const item = activePlaylist[currentIndex];
    const incoming = standbyVideo;
    const outgoing = activeVideo;

    activeVideo = incoming;
    standbyVideo = outgoing;

    if (item.poster) incoming.poster = item.poster;
    incoming.muted = true;

    if (incoming.getAttribute('data-raw-src') !== item.src) {
      incoming.setAttribute('data-raw-src', item.src);
      incoming.src = item.src;
      incoming.load();
    } else {
      try {
        incoming.currentTime = 0;
      } catch (_) {}
    }

    let revealed = false;
    function commitReveal() {
      if (revealed || myToken !== switchToken) return;
      revealed = true;
      advanceLock = false;

      incoming.classList.add('active');
      outgoing.classList.remove('active');

      const playPromise = incoming.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (myToken === switchToken) {
              isPaused = false;
              updatePlayPauseIcons();
              scheduleStandbyPreload();
            }
          })
          .catch(() => {});
      }

      fadeOutTimer = setTimeout(() => {
        if (outgoing !== activeVideo) {
          outgoing.pause();
        }
      }, 460);
    }

    if (incoming.readyState >= 3) {
      commitReveal();
    } else {
      const onReady = () => {
        incoming.removeEventListener('canplay', onReady);
        incoming.removeEventListener('loadeddata', onReady);
        commitReveal();
      };
      incoming.addEventListener('canplay', onReady, { once: true });
      incoming.addEventListener('loadeddata', onReady, { once: true });
      setTimeout(commitReveal, 220);
    }
  }

  function updatePlayPauseIcons() {
    if (!pauseIcon || !playIcon) return;
    pauseIcon.style.display = isPaused ? 'none' : 'block';
    playIcon.style.display = isPaused ? 'block' : 'none';
  }

  [videoA, videoB].forEach((vid) => {
    vid.addEventListener('ended', () => {
      if (vid === activeVideo && !advanceLock) {
        advanceLock = true;
        switchToVideo(currentIndex + 1);
      }
    });

    vid.addEventListener('stalled', () => {
      if (vid === activeVideo && !isPaused) {
        vid.play().catch(() => {});
      }
    });

    vid.addEventListener('error', () => {
      if (vid === activeVideo && activePlaylist.length > 1) {
        setTimeout(() => switchToVideo(currentIndex + 1), 600);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => switchToVideo(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => switchToVideo(currentIndex + 1));
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (activeVideo.paused) {
        isPaused = false;
        activeVideo.play().catch(() => {});
      } else {
        isPaused = true;
        activeVideo.pause();
      }
      updatePlayPauseIcons();
    });
  }

  window.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    const modal = document.getElementById('legal-modal');
    if (modal && !modal.hidden) return;
    if (e.key === 'ArrowRight') switchToVideo(currentIndex + 1);
    if (e.key === 'ArrowLeft') switchToVideo(currentIndex - 1);
  });

  if (stage) {
    let touchStartX = 0;
    let touchStartY = 0;
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          if (dx < 0) {
            switchToVideo(currentIndex + 1);
          } else {
            switchToVideo(currentIndex - 1);
          }
        }
      }
    }, { passive: true });
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const nextMode = isMobileOrPortraitViewport() ? 'mobile' : 'pc';
      if (nextMode !== currentMode) {
        currentMode = nextMode;
        activePlaylist = currentMode === 'mobile' ? MOBILE_VIDEO_PLAYLIST : PC_VIDEO_PLAYLIST;
        currentIndex = 0;
        renderPills();
        switchToVideo(0);
      }
    }, 220);
  });

  // Inicijaliziraj prvi video i nakon početka tiho pripremi samo sljedeći video
  renderPills();
  const first = activePlaylist[0];
  activeVideo.setAttribute('data-raw-src', first.src);
  activeVideo.src = first.src;
  if (first.poster) activeVideo.poster = first.poster;
  activeVideo.muted = true;
  activeVideo.play().then(() => {
    scheduleStandbyPreload();
  }).catch(() => {
    scheduleStandbyPreload();
  });
  requestAnimationFrame(updateProgressLoop);
}

/**
 * Suptilna Cookie obavijest i Modal za Pravila privatnosti / Politiku kolačića / Uvjete
 */
function initCookieAndLegalModal() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const modal = document.getElementById('legal-modal');
  const closeBtn = document.getElementById('legal-modal-close');
  const tabs = document.querySelectorAll('[data-legal-tab]');
  const panes = {
    privacy: document.getElementById('legal-pane-privacy'),
    cookies: document.getElementById('legal-pane-cookies'),
    terms: document.getElementById('legal-pane-terms')
  };

  try {
    if (cookieBanner && !localStorage.getItem('ep_cookies_accepted_v1')) {
      setTimeout(() => {
        cookieBanner.hidden = false;
      }, 900);
    }
  } catch (_) {
    if (cookieBanner) cookieBanner.hidden = false;
  }

  if (acceptBtn && cookieBanner) {
    acceptBtn.addEventListener('click', () => {
      cookieBanner.hidden = true;
      try {
        localStorage.setItem('ep_cookies_accepted_v1', 'true');
      } catch (_) {}
    });
  }

  function openLegalModal(tabName) {
    if (!modal) return;
    modal.hidden = false;
    switchLegalTab(tabName || 'privacy');
  }

  function closeLegalModal() {
    if (!modal) return;
    modal.hidden = true;
  }

  function switchLegalTab(tabName) {
    tabs.forEach((t) => {
      t.classList.toggle('active', t.getAttribute('data-legal-tab') === tabName);
    });
    Object.keys(panes).forEach((key) => {
      if (panes[key]) {
        panes[key].hidden = key !== tabName;
        panes[key].classList.toggle('active', key === tabName);
      }
    });
  }

  document.querySelectorAll('[data-open-legal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openLegalModal(btn.getAttribute('data-open-legal'));
    });
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      switchLegalTab(tab.getAttribute('data-legal-tab'));
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLegalModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLegalModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closeLegalModal();
    }
  });
}

/**
 * Suptilne tople svjetlosne čestice (Warm Bokeh) u pozadini (optimizirano za mobilne ekrane)
 */
function initAmbientBokehCanvas() {
  const canvas = document.getElementById('ambient-lights-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const isMob = window.innerWidth <= 768;
  const ORB_COUNT = isMob ? 10 : 24;
  const orbs = Array.from({ length: ORB_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 1.5 + Math.random() * 4.0,
    vx: (Math.random() - 0.5) * 0.14,
    vy: -0.06 - Math.random() * 0.18,
    alpha: 0.12 + Math.random() * 0.38,
    phase: Math.random() * Math.PI * 2,
    speed: 0.008 + Math.random() * 0.014
  }));

  let frameSkip = 0;
  function draw() {
    frameSkip++;
    // Na mobitelu osvježavaj bokeh čestice na 30fps radi maksimalno glatkog 60fps videa
    if (!isMob || frameSkip % 2 === 0) {
      ctx.clearRect(0, 0, width, height);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.phase += orb.speed;

        if (orb.y < -20) orb.y = height + 20;
        if (orb.x < -20) orb.x = width + 20;
        if (orb.x > width + 20) orb.x = -20;

        const currentAlpha = orb.alpha * (0.65 + 0.35 * Math.sin(orb.phase));
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r * 5);
        grad.addColorStop(0, `rgba(255, 240, 195, ${currentAlpha})`);
        grad.addColorStop(0.4, `rgba(245, 193, 99, ${currentAlpha * 0.45})`);
        grad.addColorStop(1, 'rgba(245, 193, 99, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/**
 * Forma za upit
 */
function initInquiryForm() {
  const chipsContainer = document.getElementById('topic-chips');
  const hiddenTopic = document.getElementById('selected-topic');
  const form = document.getElementById('inquiry-form');
  const feedback = document.getElementById('form-feedback');

  if (chipsContainer && hiddenTopic) {
    chipsContainer.querySelectorAll('.topic-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        chipsContainer.querySelectorAll('.topic-chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        hiddenTopic.value = chip.dataset.topic || '';
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ime = document.getElementById('ime')?.value.trim() || '';
      const telefon = document.getElementById('telefon')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const poruka = document.getElementById('poruka')?.value.trim() || '';
      const kategorija = hiddenTopic?.value || 'Opći upit';

      const targetEmail = 'info@elektro-pizeta.hr';

      const subject = encodeURIComponent(`Web upit: ${kategorija} — ${ime}`);
      const bodyLines = [
        `Kategorija: ${kategorija}`,
        `Ime / Tvrtka: ${ime}`,
        `E-mail: ${email}`
      ];
      if (telefon) bodyLines.push(`Telefon: ${telefon}`);
      if (poruka) {
        bodyLines.push('', 'Poruka:', poruka);
      }
      const body = encodeURIComponent(bodyLines.join('\n'));

      if (feedback) {
        feedback.textContent = 'Otvaram slanje upita... Hvala vam na javljanju!';
      }

      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    });
  }
}
