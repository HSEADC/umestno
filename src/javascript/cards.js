document.addEventListener('DOMContentLoaded', function() {
    const alcoCheckbox = document.getElementById('alco');
    const noneAlcoCheckbox = document.getElementById('none_alco');
    const cards = document.querySelectorAll('#S_ShortCardBlock .O_CardForLearningWithHastag:not(.M_BlockSeparator)');

    alcoCheckbox.addEventListener('click', function() {
        filterCards('alco');
    });

    noneAlcoCheckbox.addEventListener('click', function() {
        filterCards('non_alco');
    });

    function filterCards(tag) {
        cards.forEach(card => {
            const cardTag = card.getAttribute('data-tage');
            if ((tag === 'alco' && cardTag === 'alco') || (tag === 'non_alco' && cardTag === 'none_alco')) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    alcoCheckbox.addEventListener('change', function() {
        if (alcoCheckbox.checked && noneAlcoCheckbox.checked) {
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        } else if (!alcoCheckbox.checked && !noneAlcoCheckbox.checked) {
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        }
    });

    noneAlcoCheckbox.addEventListener('change', function() {
        if (noneAlcoCheckbox.checked && alcoCheckbox.checked) {
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        } else if (!noneAlcoCheckbox.checked && !alcoCheckbox.checked) {
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        }
    });
});