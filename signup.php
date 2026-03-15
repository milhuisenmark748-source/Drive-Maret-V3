<?php
// 1. ENABLE ERROR REPORTING (To find the cause of the 500 error)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start(); 
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['fullname']); 
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $user_nick = mysqli_real_escape_string($conn, $_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // 2. HANDLE IMAGE UPLOAD
    $avatar_name = "default-avatar.png"; 
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] == 0) {
        $target_dir = "uploads/";
        
        // Ensure folder exists
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        $file_ext = pathinfo($_FILES["avatar"]["name"], PATHINFO_EXTENSION);
        $avatar_name = time() . "_" . $user_nick . "." . $file_ext; 
        $target_file = $target_dir . $avatar_name;

        if (!move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file)) {
            // If upload fails, fallback to default
            $avatar_name = "default-avatar.png";
        }
    }

    // 3. DATABASE INSERT
    // Make sure 'username' and 'avatar' columns exist in your MySQL table
    $sql = "INSERT INTO users (name, email, username, password, avatar) 
            VALUES ('$name', '$email', '$user_nick', '$password', '$avatar_name')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['user_id'] = $conn->insert_id;
        $_SESSION['username'] = $user_nick;
        $_SESSION['avatar'] = $avatar_name;

        echo "<script>alert('Welcome to CARZ, $user_nick!'); window.location.href='index.html';</script>";
    } else {
        echo "Database Error: " . $conn->error;
    }
}
?>
