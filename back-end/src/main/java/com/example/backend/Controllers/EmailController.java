package com.example.backend.Controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody; // <-- add this import

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class EmailController {

  @Autowired
  private JavaMailSender emailSender;

  @PostMapping("/send-email")
  public void sendEmail(@RequestBody EmailData emailData) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(emailData.getRecipientEmail());
    message.setSubject(emailData.getSubject());
    message.setText(emailData.getMessage());
    emailSender.send(message);
  }

  private static class EmailData {
    private String recipientEmail;
    private String subject;
    private String message;

    public String getRecipientEmail() {
      return recipientEmail;
    }

    public void setRecipientEmail(String recipientEmail) {
      this.recipientEmail = recipientEmail;
    }

    public String getSubject() {
      return subject;
    }

    public void setSubject(String subject) {
      this.subject = subject;
    }

    public String getMessage() {
      return message;
    }

    public void setMessage(String message) {
      this.message = message;
    }
  }
}
