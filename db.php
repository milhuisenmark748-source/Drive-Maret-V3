<?php
// Replace these with the details from your InfinityFree MySQL page
$host = "sqlXXX.epizy.com"; // Your MySQL Hostname
$user = "if0_XXXXXXX";      // Your MySQL Username
$pass = "YourFTPPassword";  // Usually the same as your FTP password
$db_name = "if0_XXXXXXX_carz_db"; // Your full Database Name

$conn = new mysqli($host, $user, $pass, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
