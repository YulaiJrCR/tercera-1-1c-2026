<!DOCTYPE html>
<html lang="en">
    <head>
        <?php
        $isVistasPage = basename(dirname($_SERVER['SCRIPT_NAME'])) === 'vistas';
        $pathPrefix = $isVistasPage ? '..' : '.';
        ?>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="<?php echo $pathPrefix; ?>/style/main.css?v=<?php echo filemtime(__DIR__ . '/../style/main.css'); ?>">
        <title>Tercera 1</title>
    </head>
    <body>

        <div class="menu-superior">
            <div class="menu-links">
                <a href="<?php echo $pathPrefix; ?>/index.php">Inicio </a>
                <a href="<?php echo $pathPrefix; ?>/vistas/Productos_variados.php">Productos variados</a>
                <a href="<?php echo $pathPrefix; ?>/vistas/Animales.php">Animales</a>
                <a href="<?php echo $pathPrefix; ?>/vistas/Angeles.php">Angeles</a>
                <a href="<?php echo $pathPrefix; ?>/vistas/Candelas.php">Candelas</a>
            </div>

            <div class="menu-container">
                <div class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
        
        
        
