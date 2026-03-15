<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'loggedIn' => true,
        'username' => $_SESSION['username'],
        'avatar' => $_SESSION['avatar'] // Just the name: 'default_avatar.png'
    ]);
} else {
    echo json_encode(['loggedIn' => false]);
}
?>