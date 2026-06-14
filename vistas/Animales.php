<?php require_once __DIR__ . "/vista_superior.php"; ?>
        <div class="texto-principal">
            <h1>Animales</h1>
            <p>En esta sección encontrarás una variedad de productos para satisfacer tus necesidades.</p>
        </div>
        <div class="variados">
            <button class="openModal" type="button" data-image="../img/animales 1.jpeg" data-alt=" animal 1">
                <img src="../img/animales 1.jpeg" alt=" animal 1">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 2.jpeg" data-alt=" animal 2">
                <img src="../img/animales 2.jpeg" alt=" animal 2">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 3.jpeg" data-alt=" animal 3">
                <img src="../img/animales 3.jpeg" alt=" animal 3">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 4.jpeg" data-alt=" animal 4">
                <img src="../img/animales 4.jpeg" alt=" animal 4">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 5.jpeg" data-alt=" animal 5">
                <img src="../img/animales 5.jpeg" alt=" animal 5">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 6.jpeg" data-alt=" animal 6">
                <img src="../img/animales 6.jpeg" alt=" animal 6">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 7.jpeg" data-alt=" animal 7">
                <img src="../img/animales 7.jpeg" alt=" animal 7">
            </button>
            <button class="openModal" type="button" data-image="../img/animales 8.jpeg" data-alt=" animal 8">
                <img src="../img/animales 8.jpeg" alt=" animal 8">
            </button>
            <div class="modal" id="modal">
                <div class="modal-inner">
                    <img id="modalImage" src="../img/animales 1.jpeg" alt=" animal 1">

                    <button class="closeModal">Cerrar</button>
                </div>
            </div>
        </div>

        <script src="<?php echo $pathPrefix; ?>/scripts/popUps.js"></script>

<?php require_once __DIR__ . "/vista_inferior.php"; ?>