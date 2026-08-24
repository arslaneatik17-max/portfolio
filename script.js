// Filtrage des catégories de vidéo
function filterCategory(category) {
    const cards = document.querySelectorAll('.video-card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Bloquer les dates inférieures à +5 jours
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const today = new Date();
    today.setDate(today.getDate() + 5);
    const minDate = today.toISOString().split('T')[0];
    dateInput.min = minDate;
});

// Gestion de la soumission du formulaire
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Réservation enregistrée ! Un email de confirmation va vous être envoyé.');
})