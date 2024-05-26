<?php 
// Database connection details
$host = "localhost";
$user = "root";
$password = "";
$db = "login";

// Attempt to connect to MySQL database
$conn = mysqli_connect($host, $user, $password, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
