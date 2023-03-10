package com.example.backend.authentication;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.internRegistration.InternRegisterRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @PostMapping("/internRegister")
  public ResponseEntity<AuthenticationResponse> internRegister(@RequestBody InternRegisterRequest request) {
    return ResponseEntity.ok(service.internRegister(request));
  }

  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest request) {
    return ResponseEntity.ok(service.authenticate(request));
  }

}
