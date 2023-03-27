package com.example.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.backend.Controllers.ClaimRequest;

@Service
public class MailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(ClaimRequest claim) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(claim.getRecipientEmail());
        msg.setTo("sarahmami2001@gmail.com");
        msg.setText(claim.getMessage());
        msg.setSubject("le/la " + claim.getSubject() + " " + claim.getFirstname() + " " + claim.getLastname()
                + " vient de vous contacter");
        mailSender.send(msg);
        System.out.println("mail sended successfully");
    }
}
