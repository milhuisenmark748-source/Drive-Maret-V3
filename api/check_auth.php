<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['username'])) {
    echo json_encode([
        'loggedIn' => true,
        'username' => $_SESSION['username'],
        'avatar' => $_SESSION['avatar']
    ]);
} else {
    echo json_encode(['loggedIn' => false]);
}
?>
