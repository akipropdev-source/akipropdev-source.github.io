// ─── TYPING ANIMATION ────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = '9rs2PEDVJsKNEpGZm';   // ← paste here
const EMAILJS_SERVICE_ID  = 'service_e82qjts';   // ← paste here
const EMAILJS_TEMPLATE_ID = 'template_fijzl78';  // ← paste here

const typingText = document.querySelector('.typing-text');
const words = ['Web Developer', 'Graphic Designer', 'App Developer', 'Tech Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(type, speed);
}

type();


// ─── ACTIVE NAV ON SCROLL ────────────────────────────────────────────────────

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Keep link active when clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Auto-update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
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


// ─── SCROLL REVEAL ANIMATION ─────────────────────────────────────────────────

const revealElements = document.querySelectorAll(
    '.service-box, .skill, .edu-card, .exp-card, .home-content, .home-img'
);

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealOnScroll.unobserve(entry.target); // animate only once
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    el.classList.add('hidden');
    revealOnScroll.observe(el);
});


// ─── CONTACT FORM ────────────────────────────────────────────────────────────

const form = document.querySelector('.contact form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name     = form.querySelector('input[type="text"]').value.trim();
    const email    = form.querySelector('input[type="email"]').value.trim();
    const phone    = form.querySelector('input[type="number"]').value.trim();
    const subject  = form.querySelectorAll('input[type="text"]')[1].value.trim();
    const message  = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        showToast('Please fill in your name, email, and message.', 'error');
        return;
    }

    // Placeholder for real form submission (e.g. EmailJS or Formspree)
    showToast(`Thanks ${name}! Your message has been sent.`, 'success');
    form.reset();
});


// ─── TOAST NOTIFICATION ───────────────────────────────────────────────────────

function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '3rem',
        right: '3rem',
        background: type === 'success' ? '#00ffee' : '#ff4d4d',
        color: '#0d1117',
        padding: '1.4rem 2.4rem',
        borderRadius: '1rem',
        fontSize: '1.5rem',
        fontWeight: '600',
        zIndex: '9999',
        boxShadow: '0 0 20px rgba(0,0,0,0.4)',
        transition: 'opacity 0.4s ease',
        opacity: '1',
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}
