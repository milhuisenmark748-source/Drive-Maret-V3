<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    
    // Default avatar if no upload logic is set up yet
    $avatar = 'img/default-avatar.png'; 

    // Using prepared statements is safer for Vercel/TiDB
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, avatar) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $email, $password, $avatar);

    if ($stmt->execute()) {
        echo "<script>alert('Account created! Please login.'); window.location.href='/login.html';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
?>