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
