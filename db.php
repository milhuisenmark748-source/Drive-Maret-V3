<?php
$host = "sql203.infinityfree.com"; // From MySQL Host Name
$user = "if0_41394406";           // From 'MySQL User Name
$pass = "YOUR_VPANEL_PASSWORD";   // FTP password
$db_name = "if0_41394406_bifuuserdatabase"; // From 'MySQL DB Name'

$conn = new mysqli($host, $user, $pass, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
