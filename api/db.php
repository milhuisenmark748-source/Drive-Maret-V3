<?php
$host = getenv('gateway01.ap-southeast-1.prod.aws.tidbcloud.com');
$user = getenv('3mB7SANGyard1KH.root');
$pass = getenv('js1dbojtBQs36KsL');
$db_name = getenv('test');
$port = getenv('4000') ?: 4000;

$conn = mysqli_init();

// TiDB Cloud requires SSL for a secure connection
mysqli_ssl_set($conn, NULL, NULL, NULL, NULL, NULL);

if (!mysqli_real_connect($conn, $host, $user, $pass, $db_name, $port)) {
    die("Connection failed: " . mysqli_connect_error());
}
?>