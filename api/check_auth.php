<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'loggedIn' => true,
        'username' => $_SESSION['username'],
        // Ensure this path points to where your avatars are stored
        'avatar' => $_SESSION['avatar'] ?: 'img/default-avatar.png'
    ]);
} else {
    echo json_encode(['loggedIn' => false]);
}
?>