<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];

$header = 'From: ' . $mail . "\r\n";
$header .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
$header .= 'Mime-version: 1.0' . "\r\n";
$header .= "Content-Type: text/plain";

$message = "Nuevo contacto a través del portal web de HolaSisu\n\n";
$message .= "Su nombre es: $name\nSu e-mail es: $mail\nSu numero de contacto es: $phone\nEnviado el: " . date('d/m/Y', time());

$para = 'seal3969@gmail.com';
$asunto = mb_convert_encoding('Contacto a través de portal web', "ISO-8859-1");

mail($para, $asunto, mb_convert_encoding($message, "ISO-8859-1"));

header('Location:index.html');
?>