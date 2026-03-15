<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        'loggedIn' => true,
        'username' => $_SESSION['username'],
        // We ensure the path is consistent here
       'avatar' => isset($_SESSION['avatar']) ? $_SESSION['avatar'] : 'default-avatar.png'
    ]);
} else {
    echo json_encode(['loggedIn' => false]);
}
?>