/**
 * BHAVY'S PORTFOLIO - MAIN INTERACTIVE LOGIC
 * High-performance Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initProjects();
  initSkills();
  initStatsCounter();
  initContactForm();
  initScrollSpyAndNav();
  initCursorSpotlight();
  initBackToTop();
  initResumeDownload();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('bhavy_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'dark'); // default rich dark mode
  setTheme(initialTheme, false);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme, true);
    });
  }

  // Keyboard shortcut 'T' to toggle theme
  window.addEventListener('keydown', (e) => {
    // Only if not focused in input/textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.key === 't' || e.key === 'T') {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    }
  });
}

function setTheme(theme, showToastFeedback = false) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bhavy_portfolio_theme', theme);
  
  if (showToastFeedback) {
    showToast(
      theme === 'dark' ? '🌙 Dark theme enabled' : '☀️ Light theme enabled',
      'info'
    );
  }
}

/* ==========================================================================
   2. Dynamic Typing Role Cycler
   ========================================================================== */
function initTypingEffect() {
  const typedTarget = document.getElementById('typedTarget');
  if (!typedTarget) return;

  const roles = [
    'Full-Stack Developer',
    'Cloud & Systems Architect',
    'UI/UX Craftsman',
    'Open-Source Enthusiast'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typedTarget.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      typedTarget.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. Projects Showcase & Dynamic Filtering & Modal
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projectsContainer');
  const filterBtns = document.querySelectorAll('.project-filter-btn');

  if (!container || typeof projectsData === 'undefined') return;

  function renderProjects(filter = 'all') {
    container.innerHTML = '';

    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    filtered.forEach((project, index) => {
      const card = document.createElement('article');
      card.className = 'project-card hover-lift reveal-on-scroll is-revealed';
      card.style.animationDelay = `${index * 80}ms`;

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${project.image}" alt="${project.title} Preview" class="project-thumbnail-img" loading="lazy">
          <span class="project-category-badge">${project.categoryLabel}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDescription}</p>
          
          <div class="project-metrics-row">
            ${project.metrics.map(m => `
              <div class="project-metric-item">
                <div class="metric-val">${m.value}</div>
                <div class="metric-lbl">${m.label}</div>
              </div>
            `).join('')}
          </div>

          <div class="project-tech-tags">
            ${project.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-card-actions">
            <button class="btn btn-secondary btn-sm btn-details" data-id="${project.id}">
              <span>View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="external-action-btn" title="View Source Code" aria-label="GitHub Repository">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="external-action-btn" title="Live Preview" aria-label="Live Demo Link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      `;

      // Trigger modal click
      const detailBtn = card.querySelector('.btn-details');
      detailBtn.addEventListener('click', () => openProjectModal(project));

      container.appendChild(card);
    });
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('all');
  initModalListeners();
}

/* Modal Logic */
function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('projectModalBody');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-hero-image-wrapper">
      <img src="${project.image}" alt="${project.title} Full Showcase">
    </div>
    
    <div class="modal-meta-row">
      <span class="project-category-badge" style="position:static;">${project.categoryLabel}</span>
      <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan);">Released: ${project.year}</span>
      <span style="font-size: 0.85rem; color: var(--text-muted); margin-left:auto;">${project.role}</span>
    </div>

    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-subtitle">${project.fullDescription}</p>

    <h4 style="margin-bottom: 14px; font-size: 1.1rem;">Verified Benchmark Metrics</h4>
    <div class="modal-metrics-grid">
      ${project.metrics.map(m => `
        <div class="modal-metric-card">
          <div style="font-size: 1.6rem; font-weight:800; color: var(--accent-emerald); font-family:var(--font-mono);">${m.value}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${m.label}</div>
        </div>
      `).join('')}
    </div>

    <h4 style="margin-bottom: 14px; font-size: 1.1rem;">Architectural Highlights & Engineering</h4>
    <div class="modal-features-list">
      ${project.features.map(f => `
        <div class="modal-feature-item">
          <svg class="feature-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${f}</span>
        </div>
      `).join('')}
    </div>

    <h4 style="margin-bottom: 14px; font-size: 1.1rem;">Tech Stack & Tooling</h4>
    <div class="project-tech-tags" style="margin-bottom: 30px;">
      ${project.tags.map(t => `<span class="tech-tag" style="padding: 6px 14px; font-size:0.85rem;">${t}</span>`).join('')}
    </div>

    <div class="modal-footer-actions">
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <span>Open Live App</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <span>GitHub Repository</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModalListeners() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   4. Skills Grid & Animated Level Bars
   ========================================================================== */
const skillsData = [
  // Frontend
  { name: "JavaScript (ES6+)", category: "frontend", level: 95, icon: "⚡", tags: ["Async/Await", "DOM", "Canvas"] },
  { name: "HTML5 & Semantic SEO", category: "frontend", level: 98, icon: "🌐", tags: ["Accessibility", "ARIA", "Microdata"] },
  { name: "CSS3 & Modern Layouts", category: "frontend", level: 94, icon: "🎨", tags: ["Flexbox", "Grid", "Animations"] },
  { name: "React & Next.js", category: "frontend", level: 90, icon: "⚛️", tags: ["Hooks", "SSR", "State Mgmt"] },
  { name: "TypeScript", category: "frontend", level: 88, icon: "🔷", tags: ["Generics", "Type Safety", "Interfaces"] },
  // Backend
  { name: "Node.js & Express", category: "backend", level: 92, icon: "🟢", tags: ["REST APIs", "Microservices", "Auth"] },
  { name: "Python", category: "backend", level: 86, icon: "🐍", tags: ["FastAPI", "AsyncIO", "Data Handling"] },
  { name: "PostgreSQL & SQL", category: "backend", level: 89, icon: "🐘", tags: ["Indexing", "Migrations", "Optimization"] },
  { name: "Redis Caching", category: "backend", level: 85, icon: "🔴", tags: ["Pub/Sub", "Rate Limiting", "Sessions"] },
  // Cloud & DevOps
  { name: "Docker & Containers", category: "cloud", level: 88, icon: "🐳", tags: ["Multi-stage", "Compose", "Registry"] },
  { name: "CI/CD & GitHub Actions", category: "cloud", level: 90, icon: "🚀", tags: ["Automation", "Testing", "Linting"] },
  { name: "AWS & Cloud Services", category: "cloud", level: 84, icon: "☁️", tags: ["S3", "EC2", "Lambda", "CloudFront"] },
  // Tools & Testing
  { name: "Git & Version Control", category: "tools", level: 96, icon: "🌿", tags: ["Rebase", "GitFlow", "Hooks"] },
  { name: "WebSockets & Real-time", category: "tools", level: 90, icon: "🔌", tags: ["Socket.io", "Streams", "Latency"] },
  { name: "Jest & Unit Testing", category: "tools", level: 85, icon: "🧪", tags: ["TDD", "Integration", "Mocking"] },
  { name: "Linux & Bash Scripting", category: "tools", level: 88, icon: "🐧", tags: ["Shell", "Cron", "SSH"] }
];

function initSkills() {
  const container = document.getElementById('skillsGridContainer');
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  if (!container) return;

  function renderSkills(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all'
      ? skillsData
      : skillsData.filter(s => s.category === filter);

    filtered.forEach((skill, index) => {
      const card = document.createElement('div');
      card.className = 'skill-card hover-lift';
      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-info">
            <div class="skill-icon-wrapper" style="font-size: 1.3rem;">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
          </div>
          <span class="skill-level-pct">${skill.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-level="${skill.level}" style="width: 0%;"></div>
        </div>
        <div class="skill-tags">
          ${skill.tags.map(t => `<span class="skill-tag-pill">${t}</span>`).join('')}
        </div>
      `;
      container.appendChild(card);
    });

    // Animate bars
    setTimeout(() => {
      container.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = `${bar.getAttribute('data-level')}%`;
      });
    }, 80);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.getAttribute('data-filter'));
    });
  });

  // Render all initially
  renderSkills('all');
}

/* ==========================================================================
   5. Stats Counter Animation on Viewport Entry
   ========================================================================== */
function initStatsCounter() {
  const statsElements = document.querySelectorAll('.stat-number');
  if (!statsElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statsElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 1600;
          const steps = 40;
          const increment = target / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   6. Contact Form & Clipboard Copy
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('contactEmailText');

  // One-click Copy Email
  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', async () => {
      const email = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        showToast('📋 Email copied to clipboard!', 'success');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('📋 Email copied to clipboard!', 'success');
      }
    });
  }

  // Form submission simulation
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');

      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        showToast('⚠️ Please fill in all required fields.', 'info');
        return;
      }

      // Button loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spinInfinite 1s linear infinite; width:18px; height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Sending Message...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        const feedbackMsg = document.getElementById('formFeedback');
        if (feedbackMsg) {
          feedbackMsg.classList.add('show');
          setTimeout(() => feedbackMsg.classList.remove('show'), 6000);
        }

        showToast('🎉 Message sent successfully! I will reply shortly.', 'success');
      }, 900);
    });
  }
}

/* ==========================================================================
   7. Scroll Spy, Navbar Scrolled State & Mobile Drawer
   ========================================================================== */
function initScrollSpyAndNav() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  // Sticky blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll spy
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   8. Interactive Mouse Spotlight
   ========================================================================== */
function initCursorSpotlight() {
  const spotlight = document.querySelector('.cursor-spotlight');
  if (!spotlight) return;

  // Only enable on desktop devices with fine pointer
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let spotX = 0, spotY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function renderSpotlight() {
      // Smooth lerp
      spotX += (mouseX - spotX) * 0.15;
      spotY += (mouseY - spotY) * 0.15;
      spotlight.style.transform = `translate(${spotX - 300}px, ${spotY - 300}px)`;
      requestAnimationFrame(renderSpotlight);
    }
    renderSpotlight();
  }
}

/* ==========================================================================
   9. Back To Top Floating Action
   ========================================================================== */
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   10. Simulated Resume / CV Download
   ========================================================================== */
function initResumeDownload() {
  const resumeBtns = document.querySelectorAll('.btn-download-resume');
  resumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📄 Downloading Bhavy_Resume_2026.pdf...', 'info');

      // Create dummy file blob download
      setTimeout(() => {
        const dummyPdfContent = `Bhavy Patel - Full-Stack Developer & Software Engineer\n\nExperience:\n- Senior Full-Stack Engineer (Nexus AI, 2024 - Present)\n- Systems & Frontend Engineer (Velocity Labs, 2022 - 2024)\n\nSkills: JavaScript, HTML5, CSS3, React, Node.js, Python, PostgreSQL, Docker, Kubernetes, CI/CD.\n\nContact: bhavy.dev@example.com | https://github.com/bhavy`;
        const blob = new Blob([dummyPdfContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Bhavy_Patel_Developer_CV.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('✅ Resume download started!', 'success');
      }, 600);
    });
  });
}

/* ==========================================================================
   11. Unified Toast Notification System
   ========================================================================== */
function showToast(message, type = 'info', duration = 3200) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.25s forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 260);
  }, duration);
}
