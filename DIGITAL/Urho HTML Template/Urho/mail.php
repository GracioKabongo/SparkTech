<?php

// Your email address
$recepient = "urho@contact.com";

$name = $_POST["name"];
$from = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$txt = "Email from: " . $name . "\r\n" . "Email address: " . $from . "\r\n" . "\r\n" . "Message: " . "\r\n" . $message . "\r\n" . "\r\n" . "--------" . "\r\n" . "This email was sent from your site's contact form.";

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

mail($recepient, $subject, $txt, $headers);

?>