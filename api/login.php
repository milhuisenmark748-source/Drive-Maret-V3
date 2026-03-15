<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    // Search for user by email
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verify the hashed password
        if (password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['avatar'] = $user['avatar']; 

            // Redirect to home page (Note the / for absolute path)
            header("Location: /index.html");
            exit();
        } else {
            echo "<script>alert('Invalid password.'); window.location.href='/login.html';</script>";
        }
    } else {
        echo "<script>alert('No account found.'); window.location.href='/login.html';</script>";
    }
}
?>