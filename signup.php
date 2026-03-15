<?php
session_start(); // Start the session at the very top
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['fullname']); 
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $user_nick = mysqli_real_escape_string($conn, $_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Handle Image Upload
    $avatar_name = "default-avatar.png"; 
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] == 0) {
        $target_dir = "uploads/";
        if (!file_exists($target_dir)) { mkdir($target_dir, 0777, true); }

        $file_ext = pathinfo($_FILES["avatar"]["name"], PATHINFO_EXTENSION);
        $avatar_name = time() . "_" . $user_nick . "." . $file_ext; 
        move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_dir . $avatar_name);
    }

    $sql = "INSERT INTO users (name, email, username, password, avatar) 
            VALUES ('$name', '$email', '$user_nick', '$password', '$avatar_name')";

    if ($conn->query($sql) === TRUE) {
        // --- AUTO LOGIN LOGIC ---
        $_SESSION['user_id'] = $conn->insert_id;
        $_SESSION['username'] = $user_nick;
        $_SESSION['avatar'] = $avatar_name;

        echo "<script>alert('Welcome to the Club, $user_nick!'); window.location.href='index.php';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
