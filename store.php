<?php
        if (isset($_POST['submit'])) {
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "site";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $sql = "INSERT INTO name (name,email,phone,message)
VALUES ('$name','$email','$phone','$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<div class='alert alert-success' role='alert'>
        This is a success alert—check it out!
      </div>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>