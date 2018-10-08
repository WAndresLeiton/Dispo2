<?php
    $databaseHost = '127.0.0.1';
    $databaseName = 'pruebaionic';
    $databaseUsername = 'root';
    $databasePassword = '';

    $mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName);
    if (!$mysqli){
        die("problemas de conexion PHP");
    }

?>