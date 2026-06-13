<?php require_once __DIR__ . "/vista_superior.php"; ?>
        <div class="texto-principal">
            <h1>Candelas</h1>
            <p>En esta sección encontrarás una variedad de productos para satisfacer tus necesidades.</p>
        </div>
        <div class="variados">
            <button class="openModal" type="button" data-image="../img/candelas 1.jpeg" data-alt="candelas  1">
                <img src="../img/candelas 1.jpeg" alt="candelas  1">
            </button>
            <button class="openModal" type="button" data-image="../img/candelas 2.jpeg" data-alt="candelas  2">
                <img src="../img/candelas 2.jpeg" alt="candelas  2">
            </button>
            <button class="openModal" type="button" data-image="../img/candelas 3.jpeg" data-alt="candelas  3">
                <img src="../img/candelas 3.jpeg" alt="candelas  3">
            </button>
            <button class="openModal" type="button" data-image="../img/candelas 4.jpeg" data-alt="candelas  4">
                <img src="../img/candelas 4.jpeg" alt="candelas  4">
            </button>
            <div class="modal" id="modal">
                <div class="modal-inner">
                    <img id="modalImage" src="../img/candelas 1.jpeg" alt="candelas  1">
                    <button class="closeModal">Cerrar</button>
                </div>
            </div>
        </div>

        <script src="<?php echo $pathPrefix; ?>/scripts/popUps.js"></script>

<?php require_once __DIR__ . "/vista_inferior.php"; ?>