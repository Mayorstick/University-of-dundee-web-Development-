<?php
session_start();

include('connect.php'); 

$errors = []; // Initialize an empty array to store errors

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST["signUpClick"])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    // Validate input fields
    if (empty($firstName) || empty($lastName) || empty($email) || empty($password)) {
        $errors[] = "All fields are required.";
    }

    // Check if the email already exists
    if (empty($errors)) {
        $checkEmail = $conn->prepare("SELECT * FROM admin WHERE email = ?");
        $checkEmail->bind_param("s", $email);
        $checkEmail->execute();
        $result = $checkEmail->get_result();

        if ($result->num_rows > 0) {
            $errors[] = "User already exists.";
        } else {
            // Inserting the user details into the database
            $insertQuery = $conn->prepare("INSERT INTO admin (firstName, lastName, email, password) VALUES (?, ?, ?, ?)");
            $insertQuery->bind_param("ssss", $firstName, $lastName, $email, $password);

            if ($insertQuery->execute()) {
                $_SESSION['success'] = "Registration successful! Please login.";
                header("Location: LoginPage.php");
                exit();
            } else {
                $errors[] = "Error inserting data: " . $conn->error;
            }
        }

        $checkEmail->close();
    }

    // Store errors in session and redirect back to form
    if (!empty($errors)) {
        $_SESSION['errors'] = $errors;
        header("Location: index.php");
        exit();
    }
}

$conn->close();
?>
