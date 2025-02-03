<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['firstName'];
    $name = $_POST['lastName'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    $to = "reymould.social@gmail.com";
    $subject = "Enquiry from LivonPaints website";
    $body = "Name: $name\nEmail: $email\nComment: $message \nNumber: $number";

    // Send email to both recipients
    mail("naresh.narnapati@reymould.com", $subject, $body);

    if (mail($to, $subject, $body)) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>