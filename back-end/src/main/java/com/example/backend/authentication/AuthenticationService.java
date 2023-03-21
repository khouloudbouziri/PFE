package com.example.backend.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.configuration.JwtService;
import com.example.backend.entities.JobTitle;
import com.example.backend.entities.Role;
//import com.example.backend.entities.University;
import com.example.backend.entities.Visitor;
import com.example.backend.internRegistration.CompanyRegisterRequest;
import com.example.backend.internRegistration.InternRegisterRequest;
import java.lang.RuntimeException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  @Autowired
  VisitorRepository visitorRepository;
  @Autowired
  // InternRepository internRepository;

  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  private final PasswordEncoder passwordEncoder;

  public AuthenticationResponse CompanyRegister(CompanyRegisterRequest request) {
    System.out.println("User already exists");
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
        .companyDepartement(request.getCompanyDepartement())
        .company_name(request.getCompanyDepartement())
        .domain(request.getDomain())
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

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()));
    var Visitor = visitorRepository.findByEmail(request.getEmail())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(Visitor);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

}
