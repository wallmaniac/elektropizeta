/**
 * Elektro Pižeta — Video Showcase (60fps Mobile / 1.0x Normal Speed),
 * Hamburger Menu, Light/Dark Mode & HR/EN Language Switcher
 */

const PC_VIDEO_PLAYLIST = [
  {
    src: 'assets/videos/pc-3.mp4',
    title_hr: 'Dekoracija fasada',
    title_en: 'Facade Lighting',
    poster: 'assets/images/poster-pc-3.jpg'
  },
  {
    src: 'assets/videos/pc-2.mp4',
    title_hr: 'Poslovna pročelja',
    title_en: 'Commercial Facades',
    poster: 'assets/images/poster-pc-2.jpg'
  },
  {
    src: 'assets/videos/pc-4.mp4',
    title_hr: 'Poslovni kompleksi',
    title_en: 'Business Complexes',
    poster: 'assets/images/poster-pc-4.jpg'
  },
  {
    src: 'assets/videos/pc-5.mp4',
    title_hr: 'Moderne vile',
    title_en: 'Modern Villas',
    poster: 'assets/images/poster-pc-5.jpg'
  },
  {
    src: 'assets/videos/pc-6.mp4',
    title_hr: 'Obiteljske rezidencije',
    title_en: 'Private Residences',
    poster: 'assets/images/poster-pc-6.jpg'
  },
  {
    src: 'assets/videos/pc-7.mp4',
    title_hr: 'Kuće i okućnice',
    title_en: 'Homes & Gardens',
    poster: 'assets/images/poster-pc-7.jpg'
  },
  {
    src: 'assets/videos/pc-1.mp4',
    title_hr: 'Poslovne zgrade',
    title_en: 'Office Buildings',
    poster: 'assets/images/poster-pc-1.jpg'
  }
];

// Redoslijed: 01 Zlatna pročelja prvi, a Svečane dvorane pri kraju (06)
const MOBILE_VIDEO_PLAYLIST = [
  {
    src: 'assets/videos/mob-6.mp4',
    title_hr: 'Zlatna pročelja',
    title_en: 'Golden Facades',
    poster: 'assets/images/poster-mob-6.jpg'
  },
  {
    src: 'assets/videos/mob-2.mp4',
    title_hr: 'Poslovni objekti',
    title_en: 'Commercial Buildings',
    poster: 'assets/images/poster-mob-2.jpg'
  },
  {
    src: 'assets/videos/mob-3.mp4',
    title_hr: 'Trgovački centri',
    title_en: 'Shopping Centers',
    poster: 'assets/images/poster-mob-3.jpg'
  },
  {
    src: 'assets/videos/mob-4.mp4',
    title_hr: 'Visoke fasade',
    title_en: 'High-Rise Facades',
    poster: 'assets/images/poster-mob-4.jpg'
  },
  {
    src: 'assets/videos/mob-5.mp4',
    title_hr: 'Svjetlosni tuneli',
    title_en: 'Light Canopies',
    poster: 'assets/images/poster-mob-5.jpg'
  },
  {
    src: 'assets/videos/mob-1.mp4',
    title_hr: 'Svečane dvorane',
    title_en: 'Concert Halls',
    poster: 'assets/images/poster-mob-1.jpg'
  },
  {
    src: 'assets/videos/mob-7.mp4',
    title_hr: '3D dekoracije',
    title_en: '3D Installations',
    poster: 'assets/images/poster-mob-7.jpg'
  }
];

const I18N = {
  hr: {
    'nav.home': 'Početna',
    'nav.services': 'Usluge',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Pošalji upit',
    'drawer.theme': 'Tema',
    'drawer.dark': 'Tamni',
    'drawer.light': 'Svijetli',
    'drawer.lang': 'Jezik',
    'drawer.sections': 'Sekcije',
    'hero.badge': 'Dekorativna rasvjeta • Cjelogodišnje dekoracije • Elektroinstalacije • Solari',
    'hero.title': 'Svjetlost koja stvara <span class="gold-gradient-text">ambijent.</span>',
    'hero.cta': 'Zatražite ponudu',
    'services.eyebrow': 'Naše usluge',
    'services.heading': 'Stručna izvedba za <span class="gold-gradient-text">svaki prostor</span>',
    'services.subtitle': 'Od idejnog koncepta dekorativne rasvjete i aranžmana do vrhunskih elektroinstalacija i solarnih sustava.',
    'services.cardCta': 'Pogledaj slike i videe',
    'usluge.backHome': 'Povratak na početnu',
    'usluge.heroTitle': 'Galerija <span class="gold-gradient-text">izvedenih projekata</span>',
    'usluge.heroSubtitle': 'Odaberite kategoriju usluge i pregledajte odabrane videozapise i fotografije naših radova.',
    'usluge.quoteBtn': 'Zatražite ponudu',
    'usluge.videosHeading': 'Video prikaz projekata',
    'usluge.videoHint': 'Kliknite na video za pokretanje',
    'usluge.photosHeading': 'Galerija fotografija',
    'usluge.photoHint': 'Kliknite na sliku za uvećani prikaz',
    's1.tag': 'Eksterijeri & Zgrade',
    's1.title': 'Dekorativna rasvjeta prostora',
    's1.desc': 'Osvjetljenje poslovnih zgrada, hotela, fasada, gradova i reprezentativnih objekata.',
    's2.tag': 'Prigodne dekoracije',
    's2.title': 'Blagdanski i svečani ugođaj',
    's2.desc': 'Unikatne svjetlosne kulise, 3D figure i dekoracije za gradove, centre i evente.',
    's3.tag': 'All Season & Eventi',
    's3.title': 'Cjelogodišnje dekoracije',
    's3.desc': 'Ambijentalno uređenje terasa, svečanih dvorana, vjenčanja, šatora i interijera kroz cijelu godinu.',
    's4.tag': 'Izvedba & Održavanje',
    's4.title': 'Elektroinstalacije',
    's4.desc': 'Pouzdano izvođenje, razvodni ormari, arhitektonska LED rasvjeta i održavanje za tvrtke i domove.',
    's5.tag': 'Energetska rješenja',
    's5.title': 'Solarni sustavi',
    's5.desc': 'Projektiranje i ugradnja solarnih elektrana po principu ključ u ruke za energetsku neovisnost.',
    'contact.eyebrow': 'Kontakt',
    'contact.heading': 'Javite se za <span class="gold-gradient-text">ponudu ili savjet</span>',
    'contact.lead': 'Dostupni smo za sve upite, izlazak na teren i izradu neobvezujuće ponude prilagođene vašem objektu.',
    'contact.phoneLabel': 'Telefon • Nazovite nas',
    'contact.emailLabel': 'E-mail adresa',
    'contact.addressLabel': 'Sjedište • Otvori kartu',
    'social.badge': 'Društvene mreže',
    'social.caption': 'Pratite naše najnovije dekoracije i projekte',
    'form.eyebrow': 'Brzi upit',
    'form.title': 'Pošaljite nam upit',
    'form.subtitle': 'Odaberite uslugu i ostavite kontakt — povratno vam se javljamo u najkraćem roku.',
    'form.topicLabel': 'Što vas zanima?',
    'chip.s1': 'Dekorativna rasvjeta',
    'chip.s2': 'Blagdanski ugođaj',
    'chip.s3': 'Cjelogodišnje dekoracije',
    'chip.s4': 'Elektroinstalacije',
    'chip.s5': 'Solarni sustavi',
    'form.nameLabel': 'Ime i prezime / Tvrtka *',
    'form.namePlaceholder': 'Vaše ime ili naziv tvrtke',
    'form.phoneLabel': 'Broj telefona',
    'form.phonePlaceholder': '+385 9x xxx xxxx (opcionalno)',
    'form.emailLabel': 'E-mail adresa *',
    'form.emailPlaceholder': 'vasa.adresa@email.hr',
    'form.msgLabel': 'Vaša poruka ili opis prostora',
    'form.msgPlaceholder': 'Ukratko opišite vaš projekt ili prostor (opcionalno)...',
    'form.submit': 'Pošalji upit na info@elektro-pizeta.hr',
    'form.feedback': 'Otvaram slanje upita... Hvala vam na javljanju!',
    'legal.privacy': 'Pravila privatnosti',
    'legal.cookies': 'Politika kolačića (EU)',
    'legal.terms': 'Uvjeti korištenja',
    'footer.rights': 'Sva prava pridržana.',
    'cookie.text': 'Koristimo nužne kolačiće za ispravan rad stranice.',
    'cookie.accept': 'Prihvati'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.cta': 'Send Inquiry',
    'drawer.theme': 'Theme',
    'drawer.dark': 'Dark',
    'drawer.light': 'Light',
    'drawer.lang': 'Language',
    'drawer.sections': 'Sections',
    'hero.badge': 'Decorative Lighting • Year-Round Decor • Electrical Installations • Solar',
    'hero.title': 'Light that creates <span class="gold-gradient-text">ambiance.</span>',
    'hero.cta': 'Request a Quote',
    'services.eyebrow': 'Our Services',
    'services.heading': 'Expert execution for <span class="gold-gradient-text">every space</span>',
    'services.subtitle': 'From bespoke decorative lighting concepts and floral arrangements to electrical installations and solar power systems.',
    'services.cardCta': 'View photos & videos',
    'usluge.backHome': 'Back to Home',
    'usluge.heroTitle': 'Gallery of <span class="gold-gradient-text">Completed Projects</span>',
    'usluge.heroSubtitle': 'Select a service category to explore curated videos and photographs of our work.',
    'usluge.quoteBtn': 'Request a Quote',
    'usluge.videosHeading': 'Project Videos',
    'usluge.videoHint': 'Click a video to play',
    'usluge.photosHeading': 'Photo Gallery',
    'usluge.photoHint': 'Click any photo to enlarge',
    's1.tag': 'Exteriors & Buildings',
    's1.title': 'Architectural & Space Lighting',
    's1.desc': 'Custom lighting for office buildings, hotels, facades, cities, and landmark properties.',
    's2.tag': 'Seasonal & Event Decor',
    's2.title': 'Festive & Holiday Ambiance',
    's2.desc': 'Bespoke light displays, 3D sculptures, and festive decorations for cities, malls, and events.',
    's3.tag': 'All Season & Events',
    's3.title': 'Year-Round Decorations',
    's3.desc': 'Ambient lighting and decorations for venues, weddings, terraces, marquees, and interiors all year round.',
    's4.tag': 'Engineering & Maintenance',
    's4.title': 'Electrical Installations',
    's4.desc': 'Reliable execution, distribution cabinets, architectural LED lighting, and maintenance for businesses and homes.',
    's5.tag': 'Energy Solutions',
    's5.title': 'Solar Power Systems',
    's5.desc': 'Turnkey design and installation of solar power plants for long-term energy independence.',
    'contact.eyebrow': 'Contact',
    'contact.heading': 'Get in touch for a <span class="gold-gradient-text">quote or consultation</span>',
    'contact.lead': 'We are available for all inquiries, on-site assessments, and tailored non-binding quotes for your property.',
    'contact.phoneLabel': 'Phone • Call Us',
    'contact.emailLabel': 'E-mail Address',
    'contact.addressLabel': 'Headquarters • Open Map',
    'social.badge': 'Social Media',
    'social.caption': 'Follow our latest decorations and lighting projects',
    'form.eyebrow': 'Quick Inquiry',
    'form.title': 'Send Us an Inquiry',
    'form.subtitle': 'Select a service and leave your contact details — we will get back to you promptly.',
    'form.topicLabel': 'What are you interested in?',
    'chip.s1': 'Decorative Lighting',
    'chip.s2': 'Festive Ambiance',
    'chip.s3': 'Year-Round Decor',
    'chip.s4': 'Electrical Installations',
    'chip.s5': 'Solar Systems',
    'form.nameLabel': 'Full Name / Company *',
    'form.namePlaceholder': 'Your name or company name',
    'form.phoneLabel': 'Phone Number',
    'form.phonePlaceholder': '+385 9x xxx xxxx (optional)',
    'form.emailLabel': 'E-mail Address *',
    'form.emailPlaceholder': 'your.address@email.com',
    'form.msgLabel': 'Your Message or Space Description',
    'form.msgPlaceholder': 'Briefly describe your project or space (optional)...',
    'form.submit': 'Send Inquiry to info@elektro-pizeta.hr',
    'form.feedback': 'Opening your email client... Thank you for reaching out!',
    'legal.privacy': 'Privacy Policy',
    'legal.cookies': 'Cookie Policy (EU)',
    'legal.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved.',
    'cookie.text': 'We use essential cookies to ensure proper website operation.',
    'cookie.accept': 'Accept'
  }
};

let currentLang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'hr';
let refreshVideoPillsLanguage = null;

function isMobileOrPortraitViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return w <= 768 || (h > w && w <= 1024);
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndLanguage();
  initNavigationDrawer();
  initVideoSequentialPlayer();
  initAmbientBokehCanvas();
  initInquiryForm();
  initUslugeSubpage();
  initCookieAndLegalModal();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/**
 * Svijetli / Tamni mod i Jezik (HR / EN) u Hamburger izborniku
 */
function initThemeAndLanguage() {
  const root = document.documentElement;
  const drawerThemeSwitch = document.getElementById('drawer-theme-switch');
  const drawerLangSwitch = document.getElementById('drawer-lang-switch');

  function applyTheme(theme) {
    const validTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', validTheme);
    try {
      localStorage.setItem('ep_theme', validTheme);
    } catch (_) {}
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'hr';
    root.setAttribute('lang', currentLang);
    try {
      localStorage.setItem('ep_lang', currentLang);
    } catch (_) {}

    if (drawerLangSwitch) {
      drawerLangSwitch.querySelectorAll('[data-lang-btn]').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === currentLang);
      });
    }

    const dict = I18N[currentLang] || I18N.hr;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    if (typeof refreshVideoPillsLanguage === 'function') {
      refreshVideoPillsLanguage();
    }
  }

  applyTheme(root.getAttribute('data-theme') || 'dark');
  applyLanguage(currentLang);

  if (drawerThemeSwitch) {
    drawerThemeSwitch.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-mode]');
      if (btn) {
        applyTheme(btn.getAttribute('data-mode'));
      }
    });
  }

  if (drawerLangSwitch) {
    drawerLangSwitch.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-lang-btn]');
      if (btn) {
        applyLanguage(btn.getAttribute('data-lang-btn'));
      }
    });
  }
}

/**
 * Hamburger Meni Drawer
 */
function initNavigationDrawer() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('nav-drawer');
  const backdrop = document.getElementById('nav-drawer-backdrop');
  const closeBtn = document.getElementById('nav-drawer-close');

  if (!hamburgerBtn || !drawer || !backdrop) return;

  function openDrawer() {
    backdrop.hidden = false;
    void backdrop.offsetWidth;
    backdrop.classList.add('is-visible');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    hamburgerBtn.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    backdrop.classList.remove('is-visible');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburgerBtn.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      if (!drawer.classList.contains('is-open')) {
        backdrop.hidden = true;
      }
    }, 280);
  }

  hamburgerBtn.addEventListener('click', () => {
    if (drawer.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('[data-close-drawer]').forEach((el) => {
    el.addEventListener('click', () => {
      closeDrawer();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/**
 * Video Player:
 * - Na mobitelu koristi 1 hardverski dekoder (videoA) + HTTP cache prefetch kako drugi <video> dekoder ne bi uzrokovao trzanje
 * - Naslov videa koji se trenutno reproducira (active pill) je UVIJEK centriran i 100% vidljiv u cijelosti
 */
function initVideoSequentialPlayer() {
  const heroSection = document.getElementById('hero-section');
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
  let isUserPaused = false;
  let isHeroInView = true;
  let switchToken = 0;
  let fadeOutTimer = null;
  let advanceLock = false;
  const warmedUrls = new Set();

  function getItemTitle(item) {
    return currentLang === 'en' ? item.title_en : item.title_hr;
  }

  // Zagrij predmemoriju preglednika za idući video bez pokretanja drugog hardverskog dekodera na mobitelu
  function warmNextVideoFile() {
    const nextIdx = (currentIndex + 1) % activePlaylist.length;
    const nextItem = activePlaylist[nextIdx];
    if (!nextItem) return;

    if (!warmedUrls.has(nextItem.src)) {
      warmedUrls.add(nextItem.src);
      fetch(nextItem.src).catch(() => {});
    }

    // Samo na PC-u pripremi drugi <video> element unaprijed (na mobitelu 1 dekoder daje 100% glatkih 60fps)
    if (currentMode === 'pc' && standbyVideo) {
      if (standbyVideo.getAttribute('data-raw-src') !== nextItem.src) {
        standbyVideo.pause();
        standbyVideo.setAttribute('data-raw-src', nextItem.src);
        if (nextItem.poster) standbyVideo.poster = nextItem.poster;
        standbyVideo.muted = true;
        standbyVideo.preload = 'auto';
        standbyVideo.src = nextItem.src;
        standbyVideo.load();
      }
    }
  }

  // Točno centriraj aktivni naslov videa koji se trenutno reproducira unutar trake
  function centerActivePillInBar(smooth = true) {
    if (!pillsContainer || !isHeroInView) return;
    const activePill = pillsContainer.querySelector('.video-pill.active');
    if (!activePill) return;

    // Budući da .video-playlist-pills ima position: relative, offsetLeft je točna udaljenost unutar trake
    const containerWidth = pillsContainer.clientWidth;
    const pillLeft = activePill.offsetLeft;
    const pillWidth = activePill.offsetWidth;

    const targetScrollLeft = Math.max(0, pillLeft - (containerWidth - pillWidth) / 2);
    pillsContainer.scrollTo({
      left: targetScrollLeft,
      behavior: smooth ? 'smooth' : 'auto'
    });
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
          <span class="video-pill-index">0${idx + 1}</span>
          <span class="video-pill-title">${getItemTitle(item)}</span>
        </div>
        <div class="video-pill-progress" id="pill-progress-${idx}"></div>
      `;
      btn.addEventListener('click', () => {
        if (idx !== currentIndex) {
          switchToVideo(idx);
        } else {
          activeVideo.currentTime = 0;
          isUserPaused = false;
          updatePlayPauseIcons();
          activeVideo.play().catch(() => {});
        }
      });
      pillsContainer.appendChild(btn);
    });

    requestAnimationFrame(() => {
      centerActivePillInBar(false);
    });
  }

  refreshVideoPillsLanguage = () => {
    if (!pillsContainer) return;
    const pills = pillsContainer.querySelectorAll('.video-pill');
    pills.forEach((pill, idx) => {
      const titleEl = pill.querySelector('.video-pill-title');
      if (titleEl && activePlaylist[idx]) {
        titleEl.textContent = getItemTitle(activePlaylist[idx]);
      }
    });
    requestAnimationFrame(() => {
      centerActivePillInBar(false);
    });
  };

  function updatePillStates() {
    if (!pillsContainer) return;
    const pills = pillsContainer.querySelectorAll('.video-pill');
    pills.forEach((pill, idx) => {
      const isAct = idx === currentIndex;
      pill.classList.toggle('active', isAct);
      const bar = pill.querySelector('.video-pill-progress');
      if (bar && !isAct) {
        bar.style.transform = 'scaleX(0)';
      }
    });

    requestAnimationFrame(() => {
      centerActivePillInBar(true);
    });
  }

  // GPU-ubrzani napredak pomoću transform: scaleX() (bez Layout/Paint proračuna)
  setInterval(() => {
    if (!isHeroInView || document.hidden) return;
    if (activeVideo && activeVideo.duration && !isNaN(activeVideo.duration) && activeVideo.duration > 0) {
      const cur = activeVideo.currentTime;
      const dur = activeVideo.duration;
      const ratio = Math.min(1, Math.max(0, cur / dur));
      const bar = document.getElementById(`pill-progress-${currentIndex}`);
      if (bar) bar.style.transform = `scaleX(${ratio.toFixed(3)})`;

      if (!isUserPaused && !advanceLock && cur >= dur - 0.08) {
        advanceLock = true;
        switchToVideo(currentIndex + 1);
      }

      if (!isUserPaused && activeVideo.paused && activeVideo.readyState >= 2 && cur < dur - 0.15) {
        activeVideo.play().catch(() => {});
      }
    }
  }, 180);

  function switchToVideo(nextIndex) {
    const total = activePlaylist.length;
    const targetIndex = ((nextIndex % total) + total) % total;
    const myToken = ++switchToken;

    if (fadeOutTimer) {
      clearTimeout(fadeOutTimer);
      fadeOutTimer = null;
    }

    currentIndex = targetIndex;
    updatePillStates();

    const item = activePlaylist[currentIndex];

    // Na mobitelu koristimo isključivo 1 <video> element (videoA) kako nikad ne bi radila 2 dekodera istovremeno
    if (currentMode === 'mobile') {
      standbyVideo.pause();
      standbyVideo.removeAttribute('src');
      standbyVideo.classList.remove('active');
      activeVideo = videoA;
      activeVideo.classList.add('active');

      if (item.poster) activeVideo.poster = item.poster;
      activeVideo.muted = true;
      activeVideo.playbackRate = 1.0;
      activeVideo.setAttribute('data-raw-src', item.src);
      activeVideo.src = item.src;
      activeVideo.load();

      advanceLock = false;
      if (isHeroInView && !isUserPaused) {
        activeVideo.play().then(() => {
          if (myToken === switchToken) {
            updatePlayPauseIcons();
            warmNextVideoFile();
          }
        }).catch(() => {
          warmNextVideoFile();
        });
      }
      return;
    }

    // Na PC-u glatki crossfade između dva video elementa
    const incoming = standbyVideo;
    const outgoing = activeVideo;

    activeVideo = incoming;
    standbyVideo = outgoing;

    if (item.poster) incoming.poster = item.poster;
    incoming.muted = true;
    incoming.playbackRate = 1.0;

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

      if (isHeroInView && !isUserPaused) {
        const playPromise = incoming.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (myToken === switchToken) {
                updatePlayPauseIcons();
                warmNextVideoFile();
              }
            })
            .catch(() => {
              warmNextVideoFile();
            });
        }
      }

      fadeOutTimer = setTimeout(() => {
        if (outgoing !== activeVideo) {
          outgoing.pause();
        }
      }, 420);
    }

    if (incoming.readyState >= 2) {
      commitReveal();
    } else {
      const onReady = () => {
        incoming.removeEventListener('canplay', onReady);
        incoming.removeEventListener('loadeddata', onReady);
        commitReveal();
      };
      incoming.addEventListener('canplay', onReady, { once: true });
      incoming.addEventListener('loadeddata', onReady, { once: true });
      setTimeout(commitReveal, 800);
    }
  }

  function updatePlayPauseIcons() {
    if (!pauseIcon || !playIcon) return;
    pauseIcon.style.display = isUserPaused ? 'none' : 'block';
    playIcon.style.display = isUserPaused ? 'block' : 'none';
  }

  [videoA, videoB].forEach((vid) => {
    vid.addEventListener('ended', () => {
      if (vid === activeVideo && !advanceLock) {
        advanceLock = true;
        switchToVideo(currentIndex + 1);
      }
    });

    vid.addEventListener('error', () => {
      if (vid === activeVideo && activePlaylist.length > 1) {
        setTimeout(() => switchToVideo(currentIndex + 1), 500);
      }
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', () => switchToVideo(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => switchToVideo(currentIndex + 1));

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (activeVideo.paused) {
        isUserPaused = false;
        activeVideo.play().catch(() => {});
      } else {
        isUserPaused = true;
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
          if (dx < 0) switchToVideo(currentIndex + 1);
          else switchToVideo(currentIndex - 1);
        }
      }
    }, { passive: true });
  }

  if (heroSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroInView = entry.isIntersecting;
          if (!isHeroInView) {
            activeVideo.pause();
          } else if (!isUserPaused) {
            activeVideo.play().catch(() => {});
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(heroSection);
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
      } else {
        centerActivePillInBar(false);
      }
    }, 220);
  });

  renderPills();
  const first = activePlaylist[0];
  activeVideo.setAttribute('data-raw-src', first.src);
  if (first.poster) activeVideo.poster = first.poster;
  activeVideo.muted = true;
  activeVideo.playbackRate = 1.0;
  activeVideo.src = first.src;
  warmedUrls.add(first.src);

  activeVideo.play().then(() => {
    warmNextVideoFile();
  }).catch(() => {
    warmNextVideoFile();
  });
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
 * Suptilne tople svjetlosne čestice (Warm Bokeh) — uključeno samo na PC-u u Dark Modu
 */
function initAmbientBokehCanvas() {
  if (window.innerWidth <= 768) return;
  const canvas = document.getElementById('ambient-lights-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const ORB_COUNT = 18;
  const orbs = Array.from({ length: ORB_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 1.5 + Math.random() * 4.0,
    vx: (Math.random() - 0.5) * 0.14,
    vy: -0.06 - Math.random() * 0.18,
    alpha: 0.12 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
    speed: 0.008 + Math.random() * 0.014
  }));

  function draw() {
    if (document.documentElement.getAttribute('data-theme') !== 'light') {
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
 * Forma za upit + interaktivno klikanje na kartice usluga
 */
function initInquiryForm() {
  const chipsContainer = document.getElementById('topic-chips');
  const hiddenTopic = document.getElementById('selected-topic');
  const form = document.getElementById('inquiry-form');
  const feedback = document.getElementById('form-feedback');
  const upitPanel = document.getElementById('upit');

  function selectTopicByName(topicName) {
    if (!chipsContainer || !hiddenTopic || !topicName) return;
    chipsContainer.querySelectorAll('.topic-chip').forEach((c) => {
      const isMatch = c.dataset.topic === topicName;
      c.classList.toggle('active', isMatch);
    });
    hiddenTopic.value = topicName;
  }

  if (chipsContainer && hiddenTopic) {
    chipsContainer.querySelectorAll('.topic-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        selectTopicByName(chip.dataset.topic || '');
      });
    });

    // Ako korisnik dolazi s podstranice Usluge (?usluga=...)
    try {
      const params = new URLSearchParams(window.location.search);
      const uslugaParam = params.get('usluga');
      const mapParamToTopic = {
        dekorativna: 'Dekorativna rasvjeta prostora',
        cjelogodisnje: 'Cjelogodišnje dekoracije',
        elektroinstalacije: 'Elektroinstalacije',
        solari: 'Solarni sustavi'
      };
      if (uslugaParam && mapParamToTopic[uslugaParam]) {
        selectTopicByName(mapParamToTopic[uslugaParam]);
      }
    } catch (_) {}
  }

  document.querySelectorAll('[data-select-topic]').forEach((el) => {
    el.addEventListener('click', () => {
      const topic = el.getAttribute('data-select-topic');
      if (topic) selectTopicByName(topic);
      if (upitPanel) {
        setTimeout(() => {
          upitPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      }
    });
  });

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

      const dict = I18N[currentLang] || I18N.hr;
      if (feedback) {
        feedback.textContent = dict['form.feedback'];
      }

      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    });
  }
}

/**
 * Podstranica Usluge (usluge.html):
 * - Interaktivni video player po kartici (samo 1 video istovremeno radi 100% glatke reprodukcije)
 * - Lightbox preglednik fotografija u punoj rezoluciji (strelica lijevo/desno, tipkovnica, swipe)
 * - Automatsko označavanje aktivne kategorije u sticky navigacijskoj traci
 */
function initUslugeSubpage() {
  const videoCards = document.querySelectorAll('[data-video-card]');
  const photoBtns = document.querySelectorAll('[data-lightbox-src]');
  const catSections = document.querySelectorAll('[data-category-section]');
  const catTabs = document.querySelectorAll('[data-cat-tab]');

  // 1. Video kartice
  if (videoCards.length > 0) {
    function pauseAllExcept(currentVideo) {
      videoCards.forEach((card) => {
        const vid = card.querySelector('video');
        const playSvg = card.querySelector('.icon-play');
        const pauseSvg = card.querySelector('.icon-pause');
        if (vid && vid !== currentVideo) {
          vid.pause();
          card.classList.remove('is-playing');
          if (playSvg) playSvg.style.display = '';
          if (pauseSvg) pauseSvg.style.display = 'none';
        }
      });
    }

    videoCards.forEach((card) => {
      const vid = card.querySelector('video');
      const playSvg = card.querySelector('.icon-play');
      const pauseSvg = card.querySelector('.icon-pause');
      if (!vid) return;

      card.addEventListener('click', () => {
        if (vid.paused) {
          pauseAllExcept(vid);
          vid.muted = true;
          vid.playbackRate = 1.0;
          vid.play().then(() => {
            card.classList.add('is-playing');
            if (playSvg) playSvg.style.display = 'none';
            if (pauseSvg) pauseSvg.style.display = '';
          }).catch(() => {});
        } else {
          vid.pause();
          card.classList.remove('is-playing');
          if (playSvg) playSvg.style.display = '';
          if (pauseSvg) pauseSvg.style.display = 'none';
        }
      });
    });
  }

  // 2. Lightbox za fotografije
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (lightbox && lightboxImg && photoBtns.length > 0) {
    let activeGroup = [];
    let activeIndex = 0;

    function showLightboxImage(idx) {
      if (!activeGroup.length) return;
      activeIndex = (idx + activeGroup.length) % activeGroup.length;
      const item = activeGroup[activeIndex];
      lightboxImg.src = item.getAttribute('data-lightbox-src') || '';
      if (lightboxCounter) {
        lightboxCounter.textContent = `${activeIndex + 1} / ${activeGroup.length}`;
      }
    }

    function openLightbox(groupName, index) {
      activeGroup = Array.from(document.querySelectorAll(`[data-lightbox-group="${groupName}"]`));
      lightbox.hidden = false;
      showLightboxImage(index);
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = '';
    }

    photoBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const grp = btn.getAttribute('data-lightbox-group') || '';
        const idx = parseInt(btn.getAttribute('data-lightbox-index') || '0', 10);
        openLightbox(grp, idx);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => showLightboxImage(activeIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showLightboxImage(activeIndex + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) {
        closeLightbox();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightboxImage(activeIndex - 1);
      if (e.key === 'ArrowRight') showLightboxImage(activeIndex + 1);
    });

    // Touch swipe lijevo/desno na mobitelima i tabletima
    let touchStartX = 0;
    let touchStartY = 0;
    lightbox.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          showLightboxImage(activeIndex + 1);
        } else {
          showLightboxImage(activeIndex - 1);
        }
      }
    }, { passive: true });
  }

  // 3. Sticky traka kategorija — automatsko praćenje sekcije pri skrolanju + početni hash
  if (catSections.length > 0 && catTabs.length > 0) {
    function activateCatTab(id, smoothScroll = true) {
      catTabs.forEach((tab) => {
        const isMatch = tab.getAttribute('data-cat-tab') === id;
        tab.classList.toggle('active', isMatch);
        if (isMatch && tab.parentElement) {
          const parent = tab.parentElement;
          const left = tab.offsetLeft - parent.clientWidth / 2 + tab.offsetWidth / 2;
          parent.scrollTo({ left: Math.max(0, left), behavior: smoothScroll ? 'smooth' : 'auto' });
        }
      });
    }

    const initialHash = (window.location.hash || '').replace('#', '');
    if (initialHash) {
      setTimeout(() => activateCatTab(initialHash, false), 60);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-category-section');
            if (id) activateCatTab(id, true);
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    catSections.forEach((sec) => obs.observe(sec));
  }
}
