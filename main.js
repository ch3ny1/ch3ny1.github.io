(function () {
  'use strict';

  // ---- Smooth scroll for nav links ----
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Chinese name blur reveal ----
  var nameCn = document.getElementById('name-cn');
  if (nameCn) {
    nameCn.addEventListener('click', function () {
      this.classList.toggle('revealed');
    });
  }

  // ---- Photo carousel ----
  var carousel = document.querySelector('.photo-carousel');
  var dots = document.querySelectorAll('.dot');
  if (carousel && dots.length > 1) {
    var imgs = carousel.querySelectorAll('.carousel-img');
    var currentIndex = 0;
    var autoTimer = null;

    function showImage(index) {
      imgs.forEach(function (img) { img.classList.remove('active'); });
      dots.forEach(function (dot) { dot.classList.remove('active'); });
      imgs[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }

    function nextImage() {
      showImage((currentIndex + 1) % imgs.length);
    }

    // Auto-rotate every 4 seconds
    function startAuto() {
      autoTimer = setInterval(nextImage, 4000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showImage(parseInt(this.dataset.index, 10));
        resetAuto();
      });
    });

    startAuto();
  }

  // ---- Photo lightbox ----
  var lightbox = document.getElementById('photo-lightbox');
  if (lightbox && carousel) {
    var lightboxImg = lightbox.querySelector('.lightbox-img');
    var lightboxClose = lightbox.querySelector('.lightbox-close');

    function openLightbox() {
      var active = carousel.querySelector('.carousel-img.active');
      if (!active) return;
      lightboxImg.src = active.src;
      lightboxImg.alt = active.alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    carousel.addEventListener('click', function (e) {
      if (e.target.closest('.dot')) return;
      openLightbox();
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }

  // ---- Easter egg card flip ----
  var easterEgg = document.getElementById('easter-egg');
  if (easterEgg) {
    var front = easterEgg.querySelector('.egg-front');
    var closeBtn = easterEgg.querySelector('.egg-close');

    front.addEventListener('click', function () {
      easterEgg.classList.add('flipped');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        easterEgg.classList.remove('flipped');
      });
    }
  }

  // ---- Cite modal ----
  var citeOverlay = document.getElementById('cite-overlay');
  var citeContent = document.getElementById('cite-content');
  var citeClose = document.getElementById('cite-close');
  var citeCopy = document.getElementById('cite-copy');

  function openCite(bibtex) {
    citeContent.textContent = bibtex;
    citeCopy.textContent = 'Click to copy';
    citeCopy.classList.remove('copied');
    citeOverlay.classList.add('active');
  }

  function closeCite() {
    citeOverlay.classList.remove('active');
  }

  document.querySelectorAll('.paper-btn-cite').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openCite(this.dataset.bibtex);
    });
  });

  if (citeClose) {
    citeClose.addEventListener('click', closeCite);
  }

  if (citeOverlay) {
    citeOverlay.addEventListener('click', function (e) {
      if (e.target === citeOverlay) closeCite();
    });
  }

  if (citeCopy) {
    citeCopy.addEventListener('click', function () {
      navigator.clipboard.writeText(citeContent.textContent).then(function () {
        citeCopy.textContent = 'Copied!';
        citeCopy.classList.add('copied');
      });
    });
  }

  // ---- Nav background on scroll ----
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.04)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }
})();
