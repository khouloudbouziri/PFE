package com.example.backend.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.Registration.CompanyRegisterRequest;
import com.example.backend.Registration.InternRegisterRequest;
import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.Token.JwtService;
import com.example.backend.entities.JobTitle;
import com.example.backend.entities.Role;
import com.example.backend.entities.Supervisor;
import com.example.backend.entities.Visitor;

import java.lang.RuntimeException;
import java.util.NoSuchElementException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  @Autowired
  VisitorRepository visitorRepository;
  @Autowired
  SupervisorRepo supervisorRepo;

  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  private final PasswordEncoder passwordEncoder;

  public AuthenticationResponse CompanyRegister(CompanyRegisterRequest request) {

    if (visitorRepository.findByEmail(request.getEmail()).isPresent()) {
      System.out.println("ok");
      throw new RuntimeException("User already exists");
    }

    var company = Visitor.builder()

        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.COMPANY)
        .adress(request.getAdress())
        .size(request.getSize())
        .company_name(request.getCompany_name())
        .domain(request.getDomain())
        .tax_registration_number(request.getTax_registration_number())
        .phone_number(request.getPhone_number())
        .sector(request.getSector())
        .jobTitle(JobTitle.RH)
        .build();

    visitorRepository.save(company);

    var jwtToken = jwtService.generateToken(company);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();

  }

  public AuthenticationResponse InternRegister(InternRegisterRequest request) {

    if (visitorRepository.findByEmail(request.getEmail()).isPresent()) {
      throw new RuntimeException("User already exists");
    }
    var intern = Visitor.builder()
        .university(request.getUniversity())
        .universityDept(request.getUniversityDepartement())
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.INTERN)
        .build();

    visitorRepository.save(intern);

    var jwtToken = jwtService.generateToken(intern);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();

  }

  public AuthenticationResponse SupervisorRegister(Supervisor request) {

    if (supervisorRepo.findByEmail(request.getEmail()).isPresent()) {
      throw new RuntimeException("User already exists");
    }

    var supervisor = Supervisor.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .phone_number(request.getPhone_number())
        .role(Role.SUPERVISOR)
        .build();

    supervisorRepo.save(supervisor);

    var jwtToken = jwtService.generateToken(supervisor);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();

  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    Visitor visitor;
    Supervisor supervisor;
    try {
      supervisor = supervisorRepo.findByEmail(request.getEmail())
          .orElseThrow();
    } catch (NoSuchElementException e) {
      visitor = visitorRepository.findByEmail(request.getEmail())
          .orElseThrow();

      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(
              request.getEmail(),
              request.getPassword()));
      var jwtToken = jwtService.generateToken(visitor);
      return AuthenticationResponse.builder()
          .token(jwtToken)
          .visitor(visitor)
          .build();
    }
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()));
    var jwtToken = jwtService.generateToken(supervisor);

    return AuthenticationResponse.builder()
        .token(jwtToken)
        .supervisor(supervisor)
        .build();
  }

}
