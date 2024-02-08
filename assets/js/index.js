// index.js
document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            // Handle card click event here
            console.log('Card clicked!');
        });
    });
});