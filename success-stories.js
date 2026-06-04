/* ==============================================
   PREPZEE SUCCESS STORIES — JAVASCRIPT
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderReferenceSections();
  initCarousels();
  initScrollReveal();
  initVideoModal();
});

/* -----------------------------------------------
   REFERENCE PAGE SECTIONS
   ----------------------------------------------- */
function renderReferenceSections() {
  renderCareerTransitions();
  renderProgramReviews();
  updateVideoSectionCopy();
}

function renderCareerTransitions() {
  const section = document.getElementById('alumni-stories');
  if (!section) return;

  const transitions = [
    {
      id: 'kishan',
      name: 'Kishan Yadav',
      avatar: 'assets/alumni_kishan.png',
      before: 'Data Analyst',
      after: 'Data Engineer<br>@ Microsoft',
      salaryBefore: '&#8377;4.5 LPA',
      salaryAfter: '&#8377;12 LPA',
      growth: '+167% Salary Growth',
      company: microsoftLogo()
    },
    {
      id: 'aditya',
      name: 'Aditya Sharma',
      avatar: 'assets/alumni_aditya.png',
      before: 'SQL Developer',
      after: 'Data Engineer<br>@ Databricks',
      salaryBefore: '&#8377;6 LPA',
      salaryAfter: '&#8377;14 LPA',
      growth: '+133% Salary Growth',
      company: databricksLogo()
    },
    {
      id: 'rahul',
      name: 'Rahul Verma',
      avatar: 'assets/alumni_rahul.png',
      before: 'Support Engineer',
      after: 'Data Engineer<br>@ AWS',
      salaryBefore: '&#8377;5 LPA',
      salaryAfter: '&#8377;11.5 LPA',
      growth: '+130% Salary Growth',
      company: awsLogo()
    },
    {
      id: 'sarthak',
      name: 'Sarthak Pandey',
      avatar: 'assets/alumni_sarthak.png',
      before: 'ETL Developer',
      after: 'Data Engineer<br>@ Cognizant',
      salaryBefore: '&#8377;5.2 LPA',
      salaryAfter: '&#8377;13 LPA',
      growth: '+150% Salary Growth',
      company: cognizantLogo()
    },
    {
      id: 'tanya',
      name: 'Tanya Goel',
      avatar: 'assets/alumni_tanya.png',
      before: 'Systems Engineer',
      after: 'Data Engineer<br>@ Accenture',
      salaryBefore: '&#8377;5.8 LPA',
      salaryAfter: '&#8377;13.5 LPA',
      growth: '+133% Salary Growth',
      company: accentureLogo()
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header compact-reference-header">
        <div class="section-header-left">
          <h2 class="section-title">Career Transitions That Speak for Themselves</h2>
          <p class="section-subtitle">Real learners. Real salary growth. Real Data Engineering roles.</p>
        </div>
        <a href="#" class="section-link reference-purple-link">
          View all success stories
          ${arrowSvg()}
        </a>
      </div>

      <div class="carousel-wrapper reference-carousel-wrapper">
        <button class="carousel-arrow arrow-left" data-carousel="stories-track" data-dir="-1" aria-label="Scroll left">
          ${chevronLeftSvg()}
        </button>
        <div class="carousel-track career-track" id="stories-track">
          ${transitions.map(transitionCard).join('')}
        </div>
        <button class="carousel-arrow arrow-right" data-carousel="stories-track" data-dir="1" aria-label="Scroll right">
          ${chevronRightSvg()}
        </button>
      </div>
    </div>
  `;
}

function transitionCard(item) {
  return `
    <article class="career-card" id="career-${item.id}">
      <div class="career-card-top">
        <div class="career-avatar">
          <img src="${item.avatar}" alt="${item.name}">
        </div>
        <div class="career-company">
          ${item.company}
          <span class="career-role-badge">Data Engineer</span>
          <h3>${item.name}</h3>
        </div>
        <span class="career-linkedin">${linkedinSvg()}</span>
      </div>

      <div class="career-path">
        <div>
          <span class="career-label before">BEFORE</span>
          <p>${item.before}</p>
        </div>
        <span class="career-path-arrow">${arrowSvg()}</span>
        <div>
          <span class="career-label after">AFTER</span>
          <p>${item.after}</p>
        </div>
      </div>

      <div class="salary-block">
        <span class="salary-title">SALARY GROWTH</span>
        <div class="salary-row">
          <strong>${item.salaryBefore}</strong>
          <span>&rarr;</span>
          <strong>${item.salaryAfter}</strong>
        </div>
        <div class="growth-pill">
          <span>&#8599;</span> ${item.growth}
        </div>
      </div>

      <a href="#" class="profile-link">View LinkedIn Profile ${arrowSvg()}</a>
    </article>
  `;
}

function renderProgramReviews() {
  const trustpilotSection = document.getElementById('trustpilot-section');
  if (!trustpilotSection || document.getElementById('program-reviews')) return;

  const reviews = [
    {
      name: 'Sarthak Pandey',
      role: 'Data Engineer @ Cognizant',
      avatar: 'assets/alumni_sarthak.png',
      text: 'The curriculum is top-notch and the mentors are highly supportive. The projects helped me gain confidence and transition into Data Engineering.'
    },
    {
      name: 'Kriti Sharma',
      role: 'Data Engineer @ TCS',
      avatar: 'assets/alumni_tanya.png',
      text: 'Great learning experience! The hands-on projects and real-world examples made complex topics easy to understand.'
    },
    {
      name: 'Vikas Kumar',
      role: 'ETL Developer @ Infosys',
      avatar: 'assets/alumni_rahul.png',
      text: "Prepzee's program is well structured and industry aligned. The interview preparation and mock sessions were extremely helpful."
    },
    {
      name: 'Pooja Mehta',
      role: 'Data Engineer @ Deloitte',
      avatar: 'assets/alumni_tanya.png',
      text: 'I loved the practical approach of the course. The mentors guided me at every step and helped me achieve my career goals.'
    },
    {
      name: 'Arjun N.',
      role: 'Data Engineer @ Microsoft',
      avatar: 'assets/alumni_kishan.png',
      text: 'The mentorship, assignments, and mock interviews gave me a clear path from learning to landing a data engineering role.'
    }
  ];

  const programSection = document.createElement('section');
  programSection.className = 'program-reviews-section reveal';
  programSection.id = 'program-reviews';
  programSection.innerHTML = `
    <div class="container">
      <div class="section-header compact-reference-header numbered-header">
        <div class="section-header-left numbered-header-left">
          <span class="section-index-badge">06</span>
          <div>
            <h2 class="section-title">Program Reviews</h2>
            <p class="section-subtitle">Said by learners. Backed by real experiences.</p>
          </div>
        </div>
        <a href="#" class="section-link reference-purple-link">
          View More Reviews
          ${arrowSvg()}
        </a>
      </div>

      <div class="carousel-wrapper reference-carousel-wrapper">
        <button class="carousel-arrow arrow-left" data-carousel="program-reviews-track" data-dir="-1" aria-label="Scroll left">
          ${chevronLeftSvg()}
        </button>
        <div class="carousel-track program-reviews-track" id="program-reviews-track">
          ${reviews.map(programReviewCard).join('')}
        </div>
        <button class="carousel-arrow arrow-right" data-carousel="program-reviews-track" data-dir="1" aria-label="Scroll right">
          ${chevronRightSvg()}
        </button>
      </div>
    </div>
  `;

  trustpilotSection.before(programSection);
}

function programReviewCard(review) {
  return `
    <article class="program-review-card">
      <div class="program-review-head">
        <img src="${review.avatar}" alt="${review.name}">
        <div>
          <h3>${review.name}</h3>
          <p>${review.role}</p>
        </div>
        <span class="program-linkedin">${linkedinSvg()}</span>
      </div>
      <div class="review-stars" aria-label="5 star rating">
        ${starSvg().repeat(5)}
      </div>
      <p class="program-review-text">${review.text}</p>
    </article>
  `;
}

function updateVideoSectionCopy() {
  const section = document.getElementById('video-testimonials');
  if (!section) return;

  const title = section.querySelector('.section-title');
  const subtitle = section.querySelector('.section-subtitle');
  const link = section.querySelector('.section-link');

  if (title) title.innerHTML = 'Voices Of Our Learners';
  if (subtitle) subtitle.textContent = 'Hear directly from our learners about their journey with Prepzee.';
  if (link) link.innerHTML = `View all videos ${arrowSvg()}`;
}

function arrowSvg() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  `;
}

function chevronLeftSvg() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  `;
}

function chevronRightSvg() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  `;
}

function linkedinSvg() {
  return `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  `;
}

function starSvg() {
  return `
    <span>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.8l2.72 5.52 6.08.88-4.4 4.28 1.04 6.05L12 16.67 6.56 19.53l1.04-6.05L3.2 9.2l6.08-.88L12 2.8z" />
      </svg>
    </span>
  `;
}

function microsoftLogo() {
  return `
    <div class="career-logo microsoft">
      <svg viewBox="0 0 21 21" aria-hidden="true">
        <rect x="1" y="1" width="9" height="9" fill="#F25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
        <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
        <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
      </svg>
      <span>Microsoft</span>
    </div>
  `;
}

function databricksLogo() {
  return `
    <div class="career-logo databricks">
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF3621" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3 3.5 7.6 12 12.2l8.5-4.6L12 3z" />
        <path d="M3.5 11.2 12 15.8l8.5-4.6" />
        <path d="M3.5 14.8 12 19.4l8.5-4.6" />
      </svg>
      <span>databricks</span>
    </div>
  `;
}

function awsLogo() {
  return `
    <div class="career-logo aws">
      <span>aws</span>
      <svg viewBox="0 0 80 26" aria-hidden="true">
        <path d="M18 19.5c11 5.4 28.2 5.6 41 0" fill="none" stroke="#FF9900" stroke-width="3" stroke-linecap="round" />
        <path d="M55 17.2l7.6.9-4.4 5.9" fill="none" stroke="#FF9900" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  `;
}

function cognizantLogo() {
  return `
    <div class="career-logo cognizant">
      <span>cognizant</span>
    </div>
  `;
}

function accentureLogo() {
  return `
    <div class="career-logo accenture">
      <span>accenture</span><b>&gt;</b>
    </div>
  `;
}

/* -----------------------------------------------
   CAROUSEL / SCROLL ARROWS
   ----------------------------------------------- */
function initCarousels() {
  const arrows = document.querySelectorAll('.carousel-arrow');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const trackId = arrow.getAttribute('data-carousel');
      const direction = parseInt(arrow.getAttribute('data-dir'), 10);
      const track = document.getElementById(trackId);

      if (!track) return;

      // Determine scroll amount based on first card width + gap
      const firstCard = track.querySelector(':scope > *');
      if (!firstCard) return;

      const cardStyle = getComputedStyle(track);
      const gap = parseInt(cardStyle.gap, 10) || 20;
      const scrollAmount = (firstCard.offsetWidth + gap) * direction;

      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
}

/* -----------------------------------------------
   SCROLL REVEAL ANIMATION
   ----------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) return;

  // Use IntersectionObserver for performant scroll detection
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* -----------------------------------------------
   VIDEO MODAL FUNCTIONALITY (ADDED)
   ----------------------------------------------- */
function initVideoModal() {
  const videoCards = document.querySelectorAll('.video-card');
  const modal = document.getElementById('video-modal');
  const overlay = document.getElementById('video-modal-overlay');
  const closeBtn = document.getElementById('video-modal-close');
  const iframe = document.getElementById('video-modal-iframe');

  if (!modal || !iframe) return;

  // Map of card IDs to YouTube Video URLs
  const videoUrls = {
    'video-sneha': 'https://www.youtube.com/embed/PjES0Zf1Fuk', // Microsoft Data Engineer career path
    'video-rohit': 'https://www.youtube.com/embed/1vRzT1pZ_yY', // Databricks/Spark video
    'video-ankit': 'https://www.youtube.com/embed/jZ_y0d7FwF0', // AWS Data Engineering path
    'video-pranav': 'https://www.youtube.com/embed/v935K7j0_w0', // Snowflake Data Engineering path
    'video-tanya': 'https://www.youtube.com/embed/PjES0Zf1Fuk', // Accenture Data Engineering path
    'video-amit': 'https://www.youtube.com/embed/v935K7j0_w0', // Snowflake Data Engineering path
    'video-kishan': 'https://www.youtube.com/embed/PjES0Zf1Fuk', // Microsoft Data Engineering path
    'video-aditya': 'https://www.youtube.com/embed/1vRzT1pZ_yY', // Databricks Data Engineering path
    'video-sarthak': 'https://www.youtube.com/embed/jZ_y0d7FwF0' // Cognizant Data Engineering path
  };

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const cardId = card.id;
      const embedUrl = videoUrls[cardId] || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      iframe.src = embedUrl + '?autoplay=1&rel=0';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  const closeModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = '';
    document.body.style.overflow = '';
  };

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
}

