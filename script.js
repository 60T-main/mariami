/* ─────────────────────────────────────────────
   MARIAMI BIRTHDAY — script.js
───────────────────────────────────────────── */

(function () {
  'use strict';

  // ─── SPARKLES ───
  const container = document.getElementById('sparkles');
  if (container) {
    const colors = [
      '#f9c4d4',
      '#f4a4be',
      '#e8789a',
      '#ffd6e7',
      '#d4a070',
      '#ffffff',
    ];

    for (let i = 0; i < 22; i++) {
      const el = document.createElement('div');
      el.className = 'sparkle';
      const size  = (Math.random() * 10 + 7).toFixed(1);
      const x     = (Math.random() * 90 + 5).toFixed(1);
      const y     = (Math.random() * 86 + 4).toFixed(1);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const dur   = (Math.random() * 2 + 1.6).toFixed(2);
      const delay = (Math.random() * 3).toFixed(2);
      el.style.cssText =
        `left:${x}%;top:${y}%;font-size:${size}px;` +
        `--spark-color:${color};--spark-dur:${dur}s;--spark-delay:${delay}s`;
      container.appendChild(el);
    }
  }

  // ─── PROGRAM MODALS ───
  const modalData = {
    bubbles: {
      img:   'bubles.png',
      title: 'ბუშტების გუმბათი',
      body:  'დახვედრა ბუშტებით სავსე გუმბათით! ✨',
    },
    laser: {
      img:   'fairies.png',
      title: 'ლაზერ ფერია შოუ',
      body:  'ფერიები ცეკვავენ ლაზერების სხივებში - ჯადოსნური შოუ, რომელსაც ვერ დაივიწყებ! 🌟',
    },
    face: {
      img:   'paint.png',
      title: 'სახეზე ხატვა',
      body:  'გახდი პრინცესა ან საყვარელი ცხოველი! პროფესიონალი მხატვარი შენ გარეგნობას მაგიურად შეცვლის. 🎨',
    },
    balloons: {
      img:   'baloons-left.png',
      title: 'ბუშტების შოუ',
      body:  'შეხედე, როგორ გარდაიქმნება ბუშტები ცხოველებად, ყვავილებად და სიურპრიზებად! 🎈',
    },
  };

  const overlay   = document.getElementById('modalOverlay');
  const modalImg  = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody  = document.getElementById('modalBody');
  const closeBtn   = document.getElementById('modalClose');

  function openModal(key) {
    const data = modalData[key];
    if (!data) return;
    modalImg.src       = data.img;
    modalImg.alt       = data.title;
    modalTitle.textContent = data.title;
    modalBody.textContent  = data.body;
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Click on program items
  document.querySelectorAll('.prog-item[data-modal]').forEach(function (item) {
    item.addEventListener('click', function () {
      openModal(item.dataset.modal);
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(item.dataset.modal);
      }
    });
  });

  // Close on button
  closeBtn.addEventListener('click', closeModal);

  // Close on overlay backdrop click
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

})();
