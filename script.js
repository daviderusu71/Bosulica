function checkSkills() {
    const skills = document.querySelectorAll('.skill-level');
    const triggerPoint = window.innerHeight * 0.8; // când 80% din viewport

    skills.forEach(skill => {
      const skillTop = skill.getBoundingClientRect().top;

      if(skillTop < triggerPoint) {
        skill.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkSkills);
  window.addEventListener('load', checkSkills);

  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-list li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // dacă sidebar are clasa active (deci e deschis)
    if(sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

 const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // simplă validare (deja HTML required e activ)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Completează toate câmpurile, frate!";
      formMessage.style.color = "red";
      return;
    }

    // Aici poți conecta la EmailJS sau server, dar acum doar simulăm:
    formMessage.style.color = "green";
    formMessage.textContent = "Mesaj trimis cu succes! Mulțumesc!";

    form.reset();
  });

   const headerImage = document.querySelector('.header-image');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    headerImage.style.transform = `translateY(${scrollY * 0.3}px)`;
  });

  document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;

      const img = document.createElement('img');
      img.src = this.href;
      img.style.maxWidth = '90%';
      img.style.maxHeight = '90%';
      img.style.borderRadius = '12px';
      img.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)';

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => overlay.remove());
    });
  });

  function revealTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if(itemTop < windowHeight - 100) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealTimelineItems);
  window.addEventListener('load', revealTimelineItems);

  // Creează buton toggle dark mode în header sau nav
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙 Dark Mode';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.top = '10px';
  toggleBtn.style.right = '10px';
  toggleBtn.style.padding = '8px 12px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '6px';
  toggleBtn.style.backgroundColor = '#00B4D8';
  toggleBtn.style.color = 'white';
  toggleBtn.style.zIndex = 10000;

  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️ Light Mode';
      toggleBtn.style.backgroundColor = '#0abde3';
    } else {
      toggleBtn.textContent = '🌙 Dark Mode';
      toggleBtn.style.backgroundColor = '#00B4D8';
    }
  });

  const postsWrapper = document.querySelector('.blog-posts-wrapper');
  const posts = document.querySelectorAll('.blog-post');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  function updateSlider() {
    postsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? posts.length - 1 : currentIndex - 1;
    updateSlider();
  });

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === posts.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio .item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    portfolioItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
