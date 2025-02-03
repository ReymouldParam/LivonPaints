<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];

    $to = "reymould.social@gmail.com";
    $subject = "New Subscription from LivonPaints";
    $body = "Email: $email\nSubscribed to newsletter.";

    // Send email
    $emailSent = mail($to, $subject, $body);

    if ($emailSent) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>