<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure hashing
    $avatar = 'default_avatar.png'; // Default for now

    $sql = "INSERT INTO users (username, email, password, avatar) VALUES ('$username', '$email', '$password', '$avatar')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Account created! Please login.'); window.location.href='/login.html';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>