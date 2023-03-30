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
  public void sendMail(@RequestBody ClaimRequest claim) {
    mailService.sendMail(claim);
  }
}