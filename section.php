<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html#contact");
    exit;
}

// Optional: reduce CSRF from other sites (require same-origin Referer when present)
$referer = $_SERVER["HTTP_REFERER"] ?? "";
$host = $_SERVER["HTTP_HOST"] ?? "";
$sameOrigin = ($referer === "") ||
    (strpos($referer, "https://" . $host) === 0) ||
    (strpos($referer, "http://" . $host) === 0);
if (!$sameOrigin && $host !== "") {
    header("Location: index.html?contact=error");
    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$subject = trim($_POST["subject"] ?? "");
$message = trim($_POST["message"] ?? "");

// Basic validation and limits (prevent abuse / header injection)
$name = preg_replace('/[\r\n]+/', ' ', $name);
$subject = preg_replace('/[\r\n]+/', ' ', $subject);
if (strlen($name) > 200 || strlen($email) > 254 || strlen($subject) > 200 || strlen($message) > 10000) {
    header("Location: index.html?contact=error");
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: index.html?contact=error");
    exit;
}

if (!$name || !$subject || !$message) {
    header("Location: index.html?contact=missing");
    exit;
}

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = getenv("SMTP_HOST") ?: "smtp.example.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) (getenv("SMTP_PORT") ?: 587);
    $mail->Username = getenv("SMTP_USER") ?: "you@example.com";
    $mail->Password = getenv("SMTP_PASS") ?: "password";

    // Send from your own address so providers accept it; reply-to is the visitor
    $fromEmail = getenv("MAIL_FROM") ?: "you@example.com";
    $fromName = getenv("MAIL_FROM_NAME") ?: "Portfolio";
    $mail->setFrom($fromEmail, $fromName);
    $mail->addReplyTo($email, $name);

    $toEmail = getenv("MAIL_TO") ?: "dave@example.com";
    $toName = getenv("MAIL_TO_NAME") ?: "Dave";
    $mail->addAddress($toEmail, $toName);

    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();
    header("Location: sent.html");
} catch (Exception $e) {
    header("Location: index.html?contact=error");
}
exit;
