package com.example.backend.authentication;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.configuration.JwtService;
import com.example.backend.entities.Intern;
import com.example.backend.entities.Role;
import com.example.backend.entities.Visitor;
import com.example.backend.internRegistration.InternRegisterRequest;
import com.example.backend.token.Token;
import com.example.backend.token.TokenRepository;
import com.example.backend.token.TokenType;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final VisitorRepository repository;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationResponse internRegister(InternRegisterRequest request) {
        var Visitor = Intern.builder()
            .firstname(request.getFirstname())
            .lastname(request.getLastname())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.INTERN)
            .build();

        var savedVisitor = repository.save(Visitor);
        var jwtToken = jwtService.generateToken(Visitor);
        saveVisitorToken(savedVisitor, jwtToken);

        return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
      }
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));
        var Visitor = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(Visitor);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    private void saveVisitorToken(Visitor visitor, String jwtToken) {
        var token = Token.builder()
            .visitor(visitor)
            .token(jwtToken)
            .tokenType(TokenType.BEARER)
            .expired(false)
            .revoked(false)
            .build();
        tokenRepository.save(token);
      }

      private void revokeAllVisitorTokens(Visitor visitor) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(visitor.getId());
        if (validUserTokens.isEmpty())
          return;
        validUserTokens.forEach(token -> {
          token.setExpired(true);
          token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
      }


}
