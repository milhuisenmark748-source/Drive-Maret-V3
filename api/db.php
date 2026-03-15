<?php
// We use the names of the variables you set in Vercel
$host = getenv('TIDB_HOST');
$user = getenv('TIDB_USER');
$pass = getenv('TIDB_PASSWORD');
$db_name = getenv('TIDB_DATABASE');
$port = getenv('TIDB_PORT') ?: 4000;

$conn = mysqli_init();

// Required for TiDB Cloud secure connection
mysqli_ssl_set($conn, NULL, NULL, NULL, NULL, NULL);

if (!mysqli_real_connect($conn, $host, $user, $pass, $db_name, $port)) {
    die("Connection failed: " . mysqli_connect_error());
}
?>