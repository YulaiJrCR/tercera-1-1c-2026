(async function () {
    function getJsonPath() {
        const fileName = window.location.pathname.split('/').pop() || 'index.php';
        const pageName = fileName.replace(/\.php$/i, '');
        return window.location.pathname.includes('/vistas/') ? `../json/${pageName}.json` : `json/${pageName}.json`;
    }

    function createModal(defaultImage, defaultAlt) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'modal';
        modal.innerHTML = `
            <div class="modal-inner">
                <img id="modalImage" src="${defaultImage}" alt="${defaultAlt}">
                <p class="modal-description">${defaultAlt}</p>
                <button class="closeModal">Cerrar</button>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }

    function initPopups() {
        const openBtns = document.querySelectorAll('.openModal');
        const closeBtn = document.querySelector('.closeModal');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');

        if (!openBtns.length || !closeBtn || !modal || !modalImage) {
            return;
        }

        openBtns.forEach((openBtn) => {
            openBtn.addEventListener('click', () => {
                modalImage.src = openBtn.dataset.image;
                modalImage.alt = openBtn.dataset.alt;
                const description = document.querySelector('.modal-description');
                if (description) {
                    description.textContent = openBtn.dataset.alt;
                }

                // descriptions are shown inside the modal only
                modal.classList.add('open');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }

    async function loadJsonAndRender() {
        const path = getJsonPath();
        console.log('popUps loading JSON from', path);
        try {
            const response = await fetch(path);
            if (!response.ok) {
                console.warn(`JSON not found: ${path}`);
                return;
            }

            const data = await response.json();
            console.log('popUps loaded JSON', data);
            if (!data || !Array.isArray(data.items) || !data.items.length) {
                return;
            }

            const variados = document.querySelector('.variados');
            const cardList = document.querySelector('.card-list');

            if (variados) {
                variados.innerHTML = '';

                data.items.forEach((item, index) => {
                    const itemWrapper = document.createElement('div');
                    itemWrapper.className = 'variados-item';

                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'openModal';
                    button.dataset.image = item.image;
                    button.dataset.alt = item.description || `Imagen ${index + 1}`;

                    const img = document.createElement('img');
                    img.src = item.image;
                    img.alt = item.description || `Imagen ${index + 1}`;
                    button.appendChild(img);

                    itemWrapper.appendChild(button);
                    variados.appendChild(itemWrapper);
                });

                if (!document.getElementById('modal')) {
                    const firstItem = data.items[0];
                    createModal(firstItem.image, firstItem.description || 'Imagen 1');
                }
            }

            if (cardList) {
                cardList.innerHTML = '';
                data.items.forEach((item, index) => {
                    const div = document.createElement('div');
                    div.className = 'card-item';
                    div.id = `card-number-${index}`;
                    div.innerHTML = `
                        <img src="${item.image}" alt="${item.description || `Imagen ${index + 1}`}" />
                        <div class="card-info">
                            <p class='card-title'>${item.description || `Imagen ${index + 1}`}</p>
                        </div>
                    `;
                    cardList.appendChild(div);
                });
            }
        } catch (error) {
            console.error('Error cargando JSON para popups:', error);
        }
    }

    await loadJsonAndRender();
    initPopups();
})();