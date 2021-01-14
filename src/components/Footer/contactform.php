<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'insidethebacklot@gmail.com';

    $email_subject = "Contact Form Submission";

    $email_body = "User Name: $name.\n". 
                    "User Email: $visitor_email.\n". 
                        "User Message: $message.\n";

    $to = "insidethebacklot@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_emial \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: footer.jsx");
?>