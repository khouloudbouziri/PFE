package com.example.backend.authentication;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Registration.CompanyRegisterRequest;
import com.example.backend.Registration.InternRegisterRequest;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @PostMapping("/internRegister")
  public ResponseEntity<AuthenticationResponse> InternRegister(@RequestBody InternRegisterRequest request) {
    return ResponseEntity.ok(service.InternRegister(request));
  }

  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest request) {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @PostMapping("/companyRegister")
  public ResponseEntity<AuthenticationResponse> CompanyRegister(@RequestBody CompanyRegisterRequest request) {
    return ResponseEntity.ok(service.CompanyRegister(request));
  }
  
  
  
  

}
