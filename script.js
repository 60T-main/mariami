/* ─────────────────────────────────────────────
   MARIAMI BIRTHDAY — script.js
───────────────────────────────────────────── */

(function () {
  'use strict';

  // Always start at the top on reload
  if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
  window.scrollTo(0, 0);

  // ─── OPENING ANIMATION ───
  var revealGroups = [
    { group: '1',  t: 500  }, // crown
    { group: '2',  t: 800  }, // top corner flowers
    { group: '3',  t: 1100 }, // unicorn + castle
    { group: '4',  t: 1400 }, // butterflies + vines
    { group: '5',  t: 1700 }, // wand + balloons
    { group: '6',  t: 2000 }, // flowers-br-bleed
    { group: '7',  t: 2300 }, // mariami photo
    { group: '8',  t: 2600 }, // candle
    { group: '9',  t: 2850 }, // name
    { group: '10', t: 3050 }, // invite text
    { group: '11', t: 3250 }, // kids dream logo
    { group: '12', t: 3450 }, // date + sparkles
  ];

  // Lock scroll immediately
  document.body.classList.add('intro-locked');

  // Reveal each group at its scheduled time
  revealGroups.forEach(function (item) {
    setTimeout(function () {
      document.querySelectorAll('[data-reveal="' + item.group + '"]').forEach(function (el) {
        el.classList.add('revealed');
      });
    }, item.t);
  });

  // Fade out balloon layer
  var balloonLayer = document.getElementById('balloon-layer');
  setTimeout(function () {
    if (balloonLayer) { balloonLayer.classList.add('fade-out'); }
  }, 3700);

  // Unlock scroll + remove balloon layer from layout
  setTimeout(function () {
    document.body.classList.remove('intro-locked');
    if (balloonLayer) { balloonLayer.style.display = 'none'; }
  }, 4500);

  // ─── SPARKLES ───
  var container = document.getElementById('sparkles');
  if (container) {
    var colors = [
      '#f9c4d4',
      '#f4a4be',
      '#e8789a',
      '#ffd6e7',
      '#d4a070',
      '#ffffff',
    ];

    for (var i = 0; i < 22; i++) {
      var el    = document.createElement('div');
      el.className = 'sparkle';
      var size  = (Math.random() * 10 + 7).toFixed(1);
      var x     = (Math.random() * 90 + 5).toFixed(1);
      var y     = (Math.random() * 86 + 4).toFixed(1);
      var color = colors[Math.floor(Math.random() * colors.length)];
      var dur   = (Math.random() * 2 + 1.6).toFixed(2);
      var delay = (Math.random() * 3).toFixed(2);
      el.style.cssText =
        'left:' + x + '%;top:' + y + '%;font-size:' + size + 'px;' +
        '--spark-color:' + color + ';--spark-dur:' + dur + 's;--spark-delay:' + delay + 's';
      container.appendChild(el);
    }
  }

  // ─── PROGRAM MODALS ───
  var modalData = {
    bubbles: {
      img:   'bubles.png',
      title: 'ბუშტების გუმბათი',
      body:  'შევა ბუშტებით სავსე გუმბათში და გაიმართება ჯადოსნური ბუშტების სამყაროში! ✨',
    },
    laser: {
      img:   'fairies.png',
      title: 'ლაზერ ფერია შოუ',
      body:  'ფერიები ცეკვავენ ლაზერების სხივებში — ჯადოსნური შოუ, რომელსაც ვერ დაივიწყებ! 🌟',
    },
    face: {
      img:   'paint.png',
      title: 'სახეზე ხატვა',
      body:  'გახდი პრინცესა ან ცხოველი! პროფესიონალი მხატვარი შენ გარეგნობას ჯადოვნებს. 🎨',
    },
    balloons: {
      img:   'baloons-left.png',
      title: 'ბუშტების შოუ',
      body:  'შეხედე, როგორ გარდაიქმნება ბუშტები ცხოველებად, ყვავილებად და სიურპრიზებად! 🎈',
    },
  };

  var overlay    = document.getElementById('modalOverlay');
  var modalImg   = document.getElementById('modalImg');
  var modalTitle = document.getElementById('modalTitle');
  var modalBody  = document.getElementById('modalBody');
  var closeBtn   = document.getElementById('modalClose');

  function openModal(key) {
    var data = modalData[key];
    if (!data) { return; }
    modalImg.src              = data.img;
    modalImg.alt              = data.title;
    modalTitle.textContent    = data.title;
    modalBody.textContent     = data.body;
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.prog-item[data-modal]').forEach(function (item) {
    item.addEventListener('click', function () { openModal(item.dataset.modal); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item.dataset.modal); }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) { closeModal(); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeModal(); } });

})();
