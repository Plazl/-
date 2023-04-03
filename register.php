<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Get data from form
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Validate user input
if (empty($email) || empty($username) || empty($password)) {
  die("Please fill in all fields.");
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  die("Invalid email address.");
}

// Connect to database
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert user data into database
$sql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "sss", $email, $username, $hashed_password);
mysqli_stmt_execute($stmt);

// Close the database connection
mysqli_stmt_close($stmt);
mysqli_close($conn);

// Redirect to login page
header('Location: login.php');
?>
