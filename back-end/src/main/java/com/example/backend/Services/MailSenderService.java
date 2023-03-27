package com.example.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(String firstName,String lastName, String recipientEmail,  String subject,String message){
     SimpleMailMessage msg  =new SimpleMailMessage();
     msg.setFrom(recipientEmail);
     msg.setTo("sarahmami2001@gmail.com");
     msg.setText(message);
     msg.setSubject("le/la "+subject+" "+firstName+" "+lastName+" vient de vous contacter" );
     mailSender.send(msg);
     System.out.println("mail sended successfully");
    }
}
