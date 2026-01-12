<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "laravel";

$conexion = mysqli_connect($host, $user, $pass, $db);

$sql_query = "SELECT * FROM productos  ";


$conexion->query($sql_query);

?>