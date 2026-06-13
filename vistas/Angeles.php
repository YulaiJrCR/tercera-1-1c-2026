<?php require_once __DIR__ . "/vista_superior.php"; ?>
        <div class="texto-principal">
            <h1>Angeles</h1>
            <p>En esta sección encontrarás una variedad de productos para satisfacer tus necesidades.</p>
        </div>
        <div class="variados">
            <button class="openModal" type="button" data-image="../img/angeles 1.jpeg" data-alt="producto angeles 1">
                <img src="../img/angeles 1.jpeg" alt="producto angeles 1">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 2.jpeg" data-alt="producto angeles 2">
                <img src="../img/angeles 2.jpeg" alt="producto angeles 2">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 3.jpeg" data-alt="producto angeles 3">
                <img src="../img/angeles 3.jpeg" alt="producto angeles 3">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 4.jpeg" data-alt="producto angeles 4">
                <img src="../img/angeles 4.jpeg" alt="producto angeles 4">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 5.jpeg" data-alt="producto angeles 5">
                <img src="../img/angeles 5.jpeg" alt="producto angeles 5">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 6.jpeg" data-alt="producto angeles 6">
                <img src="../img/angeles 6.jpeg" alt="producto angeles 6">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 7.jpeg" data-alt="producto angeles 7">
                <img src="../img/angeles 7.jpeg" alt="producto angeles 7">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 8.jpeg" data-alt="producto angeles 8">
                <img src="../img/angeles 8.jpeg" alt="producto angeles 8">
            </button>
            <button class="openModal" type="button" data-image="../img/angeles 9.jpeg" data-alt="producto angeles 9">
                <img src="../img/angeles 9.jpeg" alt="producto angeles 9">
            </button>
            <div class="modal" id="modal">
                <div class="modal-inner">
                    <img id="modalImage" src="../img/angeles 1.jpeg" alt="producto angeles 1">
                    <button class="closeModal">Cerrar</button>
                </div>
            </div>
        </div>

        <script src="<?php echo $pathPrefix; ?>/scripts/popUps.js"></script>

<?php require_once __DIR__ . "/vista_inferior.php"; ?>