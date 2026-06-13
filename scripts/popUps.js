const openBtns = document.querySelectorAll('.openModal');
const closeBtn = document.querySelector('.closeModal');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

if (openBtns.length && closeBtn && modal && modalImage) {
    openBtns.forEach((openBtn) => {
        openBtn.addEventListener('click', () => {
            modalImage.src = openBtn.dataset.image;
            modalImage.alt = openBtn.dataset.alt;
            modal.classList.add('open');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });
}