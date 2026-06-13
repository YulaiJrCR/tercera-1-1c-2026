<?php require_once __DIR__ . "/vista_superior.php"; ?>
        <div class="texto-principal">
            <h1>Productos variados</h1>
            <p>En esta sección encontrarás una variedad de productos para satisfacer tus necesidades.</p>
        </div>
        <div class="variados">
            <button class="openModal" type="button" data-image="../img/variados 1.jpeg" data-alt="producto variado 1">
                <img src="../img/variados 1.jpeg" alt="producto variado 1">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 2.jpeg" data-alt="producto variado 2">
                <img src="../img/variados 2.jpeg" alt="producto variado 2">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 3.jpeg" data-alt="producto variado 3">
                <img src="../img/variados 3.jpeg" alt="producto variado 3">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 4.jpeg" data-alt="producto variado 4">
                <img src="../img/variados 4.jpeg" alt="producto variado 4">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 5.jpeg" data-alt="producto variado 5">
                <img src="../img/variados 5.jpeg" alt="producto variado 5">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 6.jpeg" data-alt="producto variado 6">
                <img src="../img/variados 6.jpeg" alt="producto variado 6">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 7.jpeg" data-alt="producto variado 7">
                <img src="../img/variados 7.jpeg" alt="producto variado 7">
            </button>
            <button class="openModal" type="button" data-image="../img/variados 8.jpeg" data-alt="producto variado 8">
                <img src="../img/variados 8.jpeg" alt="producto variado 8">
            </button>
            <div class="modal" id="modal">
                <div class="modal-inner">
                    <img id="modalImage" src="../img/variados 1.jpeg" alt="producto variado 1">
                    <button class="closeModal">Cerrar</button>
                </div>
            </div>
        </div>

        <div class="card-list">
        </div>

        <script src="<?php echo $pathPrefix; ?>/scripts/popUps.js"></script>

<?php require_once __DIR__ . "/vista_inferior.php"; ?>
