<?php
include 'db.php';
if ($conn) {
    echo  "Successfully connected to TiDB Cloud!";
    // This helps you see if the DB is actually there
    $res = mysqli_query($conn, "SELECT DATABASE();");
    $row = mysqli_fetch_array($res);
    echo "<br>Current Database: " . $row[0];
} else {
    echo " Connection failed.";
}
?>