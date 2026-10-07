/* ==========================================================================
   ふくやま国際交流フェスティバル 2026 - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('ふくやま国際交流フェスティバル 2026 特設サイト loaded.');

    // Greeting card interactive sound / speech synthesis fallback
    const greetingCards = document.querySelectorAll('.greeting-card');
    greetingCards.forEach(card => {
        card.addEventListener('click', () => {
            const word = card.querySelector('.word').textContent;
            const reading = card.querySelector('.reading').textContent;
            
            // Subtle card pulse animation
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = '';
            }, 250);

            // Speech Synthesis if supported
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            }
        });
    });

    // Sticky Header Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 6px 24px rgba(13, 27, 42, 0.12)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
        }
    });
});

// Timeline Filter Logic
function filterTimeline(filterType) {
    const items = document.querySelectorAll('.timeline-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (filterType === 'all') {
            item.style.display = 'flex';
        } else if (filterType === 'am') {
            if (item.classList.contains('am')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        } else if (filterType === 'pm') {
            if (item.classList.contains('pm')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Modal Lightbox for Images
function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imgSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
