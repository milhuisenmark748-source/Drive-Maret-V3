<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    // 1. Fetch user data including the avatar
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // 2. Verify the password
        if (password_verify($password, $user['password'])) {
            
            // 3. SET THE SESSION DATA (Crucial for the icon to show)
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['avatar'] = $user['avatar']; // This tells index.html which photo to show

            header("Location: index.html");
            exit();
        } else {
            echo "<script>alert('Invalid password.'); window.location.href='login.html';</script>";
        }
    } else {
        echo "<script>alert('No account found with that email.'); window.location.href='login.html';</script>";
    }
}
?>
