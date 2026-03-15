<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['fullname']); 
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $user_nick = mysqli_real_escape_string($conn, $_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Handle Image Upload
    $avatar_name = "default-avatar.png"; // Default if they don't upload anything
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] == 0) {
        $target_dir = "uploads/";
        
        // Create folder if it doesn't exist
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        $file_ext = pathinfo($_FILES["avatar"]["name"], PATHINFO_EXTENSION);
        $avatar_name = time() . "_" . $user_nick . "." . $file_ext; // Unique filename
        $target_file = $target_dir . $avatar_name;

        move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file);
    }

    $sql = "INSERT INTO users (name, email, username, password, avatar) 
            VALUES ('$name', '$email', '$user_nick', '$password', '$avatar_name')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Registration Successful! Welcome to the Garage.'); window.location.href='login.html';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
