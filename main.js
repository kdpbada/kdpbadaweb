// KDP BADA GLOBAL PUBLISHING BRAND - INTERACTIVE SCRIPT

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBooksFilter();
  initJournalFilter();
  initGlobalMarketSelector();
  initModals();
  initNewsletterForm();
});

// 1. NAVIGATION & MOBILE TOGGLE
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Smooth scroll and active status
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 2. BOOKS COLLECTION FILTER
function initBooksFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const bookCards = document.querySelectorAll('.book-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      bookCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 3. BADA JOURNAL FILTER
function initJournalFilter() {
  const jBtns = document.querySelectorAll('.j-btn');
  const jCards = document.querySelectorAll('.journal-card');

  jBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      jBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-jfilter');

      jCards.forEach(card => {
        const category = card.getAttribute('data-jcat');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. GLOBAL MARKET SELECTOR
const marketData = {
  USA: {
    title: "United States (Amazon.com)",
    desc: "Primary launchpad market for KDP BADA Senior Nostalgia Coloring & Activity collections. Paperback & Hardcover distribution with Prime 1-day delivery."
  },
  UK: {
    title: "United Kingdom (Amazon.co.uk)",
    desc: "Core European English publishing hub. Strong reader demand for retro 1950s/60s nostalgia, memory activity books, and premium journals."
  },
  Canada: {
    title: "Canada (Amazon.ca)",
    desc: "Key North American market with high demand for large-print senior coloring series and brain puzzle companions."
  },
  Europe: {
    title: "Europe (Germany, France, Spain, Italy)",
    desc: "Multi-market distribution across EU marketplaces with tailored localized titles and visual-first coloring experiences."
  },
  Japan: {
    title: "Japan (Amazon.co.jp)",
    desc: "Growing market for creative art therapy, intricate linework, and English language activity titles."
  },
  Australia: {
    title: "Australia (Amazon.com.au)",
    desc: "Southern Hemisphere reach connecting Australian seniors and gift buyers with KDP BADA titles."
  },
  Global: {
    title: "Global Ecosystem (Amazon Expanded Distribution)",
    desc: "Every KDP BADA title is architected to travel beyond borders, reaching bookstores, libraries, and international online readers."
  }
};

function initGlobalMarketSelector() {
  const pills = document.querySelectorAll('.market-pill');
  const titleEl = document.getElementById('market-title');
  const descEl = document.getElementById('market-desc');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const marketKey = pill.getAttribute('data-market');
      if (marketData[marketKey] && titleEl && descEl) {
        titleEl.textContent = marketData[marketKey].title;
        descEl.textContent = marketData[marketKey].desc;
      }
    });
  });
}

// 5. BOOK & JOURNAL MODALS
const booksData = {
  'book-1950s': {
    title: "1950s Everyday Memories",
    subtitle: "A Bold & Easy Large-Print Nostalgia Coloring Book for Seniors Featuring Familiar Objects, Home Life, Classic Cars, Diners & Small-Town America",
    category: "COLORING BOOKS",
    img: "./images/flagship_1950s.png",
    status: "Available Worldwide",
    specs: {
      "Target Demographic": "Seniors, Adults, Gift Buyers, Art Therapy",
      "Trim Size": "8.5 x 11 inches (Large Print)",
      "Page Count": "108 Pages (50+ Unique Single-Sided Designs)",
      "Binding": "KDP Premium Matte Softcover",
      "ISBN / ASIN": "B0D1950BADA"
    },
    description: "Transport yourself back to the golden era of the 1950s! Designed with crisp, bold lines and high-contrast artwork, this nostalgia coloring book features classic American diners, vintage jukeboxes, retro automobiles, cozy kitchens, and charming small-town streets. Specially formatted for seniors and individuals seeking a relaxing, low-stress coloring experience.",
    features: [
      "Extra-thick lines to minimize eye strain and enhance coloring ease",
      "Single-sided printing with dark backings to prevent bleed-through",
      "Carefully researched authentic 1950s historical items & scenes",
      "Ideal gift for parents, grandparents, and nostalgia lovers"
    ]
  },
  'book-journal': {
    title: "Daily Horizons Journal",
    subtitle: "A Guided Space for Reflection, Creative Habits, and Intentional Daily Thoughts",
    category: "JOURNALS",
    img: "./images/journal_cover.png",
    status: "Available Worldwide",
    specs: {
      "Target Demographic": "Writers, Creatives, Daily Reflection",
      "Trim Size": "6 x 9 inches",
      "Page Count": "160 Pages",
      "Binding": "Flexi Matte Cover / KDP Hardcover Option",
      "ISBN / ASIN": "B0DJRNLBADA"
    },
    description: "Daily Horizons Journal offers a structured yet spacious canvas to document your daily insights, creative projects, and personal growth. Styled with clean minimalist typography and calming visual cues.",
    features: [
      "Morning intention & evening reflection prompts",
      "Undated 90-day progress format",
      "High quality cream interior paper",
      "Architected for long-term habit building"
    ]
  },
  'book-activity': {
    title: "Word & Brain Quest",
    subtitle: "Ultimate Crosswords & Word Searches for Adult Mental Sharpness",
    category: "PUZZLE & BRAIN GAMES",
    img: "./images/activity_cover.png",
    status: "Available Worldwide",
    specs: {
      "Target Demographic": "Puzzle Enthusiasts, Adults & Seniors",
      "Trim Size": "8.5 x 11 inches",
      "Page Count": "120 Pages with Full Answer Keys",
      "Binding": "KDP Softcover",
      "ISBN / ASIN": "B0DACTBADA"
    },
    description: "Engage your mind with thematic crosswords, word search challenges, and visual brain teasers designed to entertain while enhancing memory retention and cognitive focus.",
    features: [
      "Large-print 18pt font puzzles for effortless reading",
      "Diverse themes from history, geography, music, and cinema",
      "Complete step-by-step solution keys included at the back",
      "Durable print quality suitable for ink or pencil work"
    ]
  }
};

function initModals() {
  const modal = document.getElementById('book-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  const openModalBtns = document.querySelectorAll('.btn-view-book, #btn-open-flagship-modal, #btn-preview-inside');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const bookId = btn.getAttribute('data-id') || 'book-1950s';
      renderBookModal(bookId);
      modal.classList.add('active');
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modalOverlay.addEventListener('click', () => modal.classList.remove('active'));
  }

  // Article Read More Buttons
  const articleBtns = document.querySelectorAll('.read-more-btn');
  articleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const artId = btn.getAttribute('data-article');
      renderArticleModal(artId);
      modal.classList.add('active');
    });
  });
}

function renderBookModal(id) {
  const data = booksData[id] || booksData['book-1950s'];
  const modalBody = document.getElementById('modal-body');

  let specsHtml = '';
  for (const [key, val] of Object.entries(data.specs)) {
    specsHtml += `
      <div style="margin-bottom: 8px;">
        <strong style="color: var(--primary-cyan);">${key}:</strong> <span style="color: var(--text-muted);">${val}</span>
      </div>
    `;
  }

  let featuresHtml = '';
  data.features.forEach(f => {
    featuresHtml += `<li style="margin-bottom: 6px;"><i class="fa-solid fa-circle-check" style="color: var(--primary-cyan); margin-right: 8px;"></i> ${f}</li>`;
  });

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 32px; align-items: start;">
      <div>
        <img src="${data.img}" alt="${data.title}" style="width:100%; border-radius:12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);" />
      </div>
      <div>
        <span style="color: var(--primary-cyan); font-weight: 800; font-size: 0.8rem; letter-spacing:0.1em;">${data.category}</span>
        <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; margin: 8px 0 12px; color:#fff;">${data.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">${data.subtitle}</p>
        
        <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-color); padding: 16px; border-radius: 12px; margin-bottom: 20px; font-size: 0.85rem;">
          ${specsHtml}
        </div>

        <h4 style="font-family: var(--font-heading); margin-bottom: 8px;">About This Title</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">${data.description}</p>

        <h4 style="font-family: var(--font-heading); margin-bottom: 8px;">Key Highlights</h4>
        <ul style="list-style:none; font-size: 0.9rem; margin-bottom: 24px;">
          ${featuresHtml}
        </ul>

        <div style="display:flex; gap:12px;">
          <a href="https://amazon.com" target="_blank" class="btn btn-amazon" style="flex:1;">
            <i class="fa-brands fa-amazon"></i> BUY ON AMAZON
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderArticleModal(artId) {
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div style="padding: 10px;">
      <span style="color: var(--primary-cyan); font-weight:800; font-size:0.8rem; letter-spacing:0.1em;">BADA JOURNAL · FEATURE STORY</span>
      <h2 style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; margin: 12px 0 16px; color:#fff;">Inside the 1950s Everyday Memories Project</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px;">Published by KDP BADA Research Team · 5 Min Read</p>

      <div style="line-height: 1.8; color: var(--text-main); font-size: 1rem;">
        <p style="margin-bottom: 16px;">
          When building a global KDP brand targeting the senior nostalgia market, visual clarity and emotional resonance are non-negotiable. Our team spent weeks examining archival imagery from 1950s small-town America—from soda fountains and classic diners to tailfin convertibles and vintage kitchenware.
        </p>

        <h3 style="font-family: var(--font-heading); color: var(--primary-cyan); margin: 24px 0 12px;">1. Line Weight & Contrast Engineering</h3>
        <p style="margin-bottom: 16px;">
          Standard coloring books often feature thin, intricate linework that causes eye strain for elderly readers. For <strong>1950s Everyday Memories</strong>, we instituted a strict 3pt to 5pt line boundary rule, ensuring high contrast without losing retro detail.
        </p>

        <h3 style="font-family: var(--font-heading); color: var(--primary-cyan); margin: 24px 0 12px;">2. Single-Sided Protection</h3>
        <p style="margin-bottom: 16px;">
          Many coloring enthusiasts prefer markers or gel pens over colored pencils. By rendering single-sided designs backed by dark protective shading, every artwork page remains pristine.
        </p>

        <h3 style="font-family: var(--font-heading); color: var(--primary-cyan); margin: 24px 0 12px;">3. The Global Publishing Advantage</h3>
        <p style="margin-bottom: 16px;">
          Because nostalgia transcends national boundaries, this series is launched simultaneously across North America, Europe, and Asia via Amazon's print-on-demand ecosystem.
        </p>
      </div>
    </div>
  `;
}

// 6. NEWSLETTER FORM
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you! <strong>${email}</strong> has been added to the KDP BADA global release list.`;
      form.reset();
    });
  }
}
