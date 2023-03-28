package com.example.backend.Services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.backend.Controllers.ClaimRequest;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class MailSenderService {

    // private final static Logger LOGGER =
    // LoggerFactory.getLogger(MailSenderService.class);

    // @Autowired
    // private JavaMailSender mailSender;

    // public void sendMail(ClaimRequest claim) {
    // try {
    // MimeMessage mimeMessage = mailSender.createMimeMessage();
    // MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
    // helper.setTo("sarrakhouloud2023@gmail.com");
    // helper.setFrom(claim.getRecipientEmail());
    // helper.setSubject(claim.getSubject());
    // helper.setText(claim.getMessage());
    // System.out.println("mail sended successfully");
    // } catch (MessagingException e) {
    // LOGGER.error("failed to send email", e);
    // throw new IllegalStateException("failed to send email");
    // }
    // }

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(ClaimRequest claim) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(claim.getRecipientEmail());
        msg.setTo("sarrakhouloud2023@gmail.com");
        msg.setText(claim.getMessage());
        msg.setSubject("le/la " + claim.getSubject() + " " + claim.getFirstname() + " " + claim.getLastname()
                + " vient de vous contacter");
        mailSender.send(msg);
        System.out.println("mail sended successfully");
    }
}