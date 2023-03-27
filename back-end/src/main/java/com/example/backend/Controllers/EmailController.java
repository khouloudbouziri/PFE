package com.example.backend.Controllers;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Services.MailSenderService;


import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class EmailController {

  private final MailSenderService mailService;

  @PostMapping("/send-email")
  public void sendMail(@RequestBody String firstName,@RequestBody String lastName,@RequestBody String recipientEmail,@RequestBody  String subject, @RequestBody String message){
    System.out.println("hello");
    mailService.sendMail(firstName,lastName,recipientEmail,subject,message);
  }
}