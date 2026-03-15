<?php
$host = getenv('TIDB_HOST');
$user = getenv('TIDB_USER');
$pass = getenv('TIDB_PASSWORD');
$db_name = getenv('TIDB_DATABASE');
$port = getenv('TIDB_PORT') ?: 4000;

$conn = mysqli_init();

// This line prepares the SSL connection
mysqli_ssl_set($conn, NULL, NULL, NULL, NULL, NULL);

// Added MYSQLI_CLIENT_SSL at the end to force secure transport
if (!mysqli_real_connect($conn, $host, $user, $pass, $db_name, $port, NULL, MYSQLI_CLIENT_SSL)) {
    die("Connection failed: " . mysqli_connect_error());
}
?>