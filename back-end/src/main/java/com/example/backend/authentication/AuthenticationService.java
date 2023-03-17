package com.example.backend.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.configuration.JwtService;
import com.example.backend.entities.Intern;
import com.example.backend.entities.Role;
import com.example.backend.entities.University;
import com.example.backend.entities.Visitor;
import com.example.backend.internRegistration.InternRegisterRequest;
import com.example.backend.internRegistration.InternRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  @Autowired
   VisitorRepository visitorRepository;
  @Autowired
  InternRepository internRepository;

  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;
  private final PasswordEncoder passwordEncoder;

  
  public Long testRegister(InternRegisterRequest request) {
    /* var intern = Intern.builder()
         .firstname(request.getFirstname())
         .lastname(request.getLastname())
         .email(request.getEmail())
         .password(passwordEncoder.encode(request.getPassword()))
         .role(Role.INTERN)
         .build();*/
 
 
 
       Intern i =new Intern();
       i.setTest("test");
       i.setFirstname("ok");
       i.setLastname("test");
       i.setUniversity(new University());
       i.setEmail(request.getEmail());
       i.setPassword(passwordEncoder.encode(request.getPassword()));
      i=  internRepository.save(i);
 
        Visitor v= new Visitor();
        v.setId(i.getId());
        v.setAdress("HHH");
        v=   visitorRepository.save(v);
        return v.getId();
 
          
 
 
 
 
 
 
   }

  public AuthenticationResponse internRegister(InternRegisterRequest request) {
   /* var intern = Intern.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.INTERN)
        .build();*/

Visitor v= new Visitor();
v.setFirstname("ffffff");
   v=visitorRepository.save(v);

      Intern i =new Intern();
      i.setId(v.getId());
      i.setTest("test");
      i.setFirstname("ok");
      i.setLastname("test");
      i.setUniversity(new University());
      i.setEmail(request.getEmail());
      i.setPassword(passwordEncoder.encode(request.getPassword()));
     i=  internRepository.save(i);

    
       

         




    var jwtToken = jwtService.generateToken(i);
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
