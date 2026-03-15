<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // These names MUST match the "name" attribute in your HTML
    $name = mysqli_real_escape_string($conn, $_POST['fullname']); 
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Registration Successful!'); window.location.href='login.html';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
