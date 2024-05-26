<?php
session_start();

// Database connection details
$host = "localhost";
$user = "root";
$password = "";
$db = "login";

// Establishing the connection
$conn = new mysqli($host, $user, $password, $db);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST["signInClick"])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    if (empty($email) || empty($password)) {
        die("Email and Password are required.");
    }

    // Checking the user credentials
    $result = $conn->query($sql);

    
    if (!$result) {
        die("Error executing query: " . $conn->error);
    }

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['email'] = $row['email'];
        echo "Login successful. Redirecting...";
        header("Location: Home.php");
        exit();
    } else {
        echo "Incorrect email or password.";
    }
} else {
    echo "Form not submitted properly.";
}

$conn->close();
?>
