<?php
session_start();

$admin_username = "admin";
$admin_password = "securepassword123"; // Change this later

if ($_POST['username'] === $admin_username && $_POST['password'] === $admin_password) {
    $_SESSION['admin'] = true;
    header("Location: admin-dashboard.php");
} else {
    echo "Invalid login";
}
?>
