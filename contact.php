<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "prachichhatrola009@gmail.com";
    $subject = "New Contact Form Submission";

    $mail = new PHPMailer(true);

    try {
        $mail->setFrom($email);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        http_response_code(200);
        echo "Message sent successfully!";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Failed to send message. Error: {$mail->ErrorInfo}";
    }
}
?>
