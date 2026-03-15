<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM users WHERE id = '$user_id'";
$result = $conn->query($query);
$user = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Member Profile - CARZ</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"/>
</head>
<body>
    <section id="form-details" style="text-align: center; padding: 100px 0;">
        <div style="background: #fff; padding: 40px; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.15); display: inline-block; width: 350px;">
            <img src="uploads/<?php echo $user['avatar']; ?>" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ff0000; object-fit: cover;">
            <h2 style="margin-top: 15px;"><?php echo $user['name']; ?></h2>
            <p style="color: #ed1c24; font-weight: 600;">@<?php echo $user['username']; ?></p>
            
            <div style="text-align: left; margin-top: 30px; line-height: 2;">
                <p><i class="fas fa-envelope"></i> <strong>Email:</strong> <?php echo $user['email']; ?></p>
                <p><i class="fas fa-calendar-alt"></i> <strong>Joined:</strong> <?php echo date('F Y', strtotime($user['created_at'])); ?></p>
            </div>
            
            <a href="logout.php" style="display: block; margin-top: 30px; background: #ed1c24; color: #fff; padding: 12px; text-decoration: none; border-radius: 5px; font-weight: bold;">Logout from Garage</a>
            <br>
            <a href="index.html" style="color: #555; text-decoration: none; font-size: 14px;">Back to Home</a>
        </div>
    </section>
</body>
</html>
