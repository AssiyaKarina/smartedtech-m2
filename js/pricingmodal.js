document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('pricingModal');
    const closeModal = document.querySelector('.modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const pricingOptions = document.querySelectorAll('.works-list-item');

    pricingOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const title = option.querySelector('.works-list-title').textContent;
            const description = option.querySelector('.works-list-type').textContent;

            // Set modal content
            modalTitle.textContent = `Contact Us for ${title}`;
            modalDescription.textContent = `You selected: ${description}`;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});