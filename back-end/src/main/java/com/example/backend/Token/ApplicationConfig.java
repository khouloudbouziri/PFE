package com.example.backend.Token;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.backend.Repositories.SupervisorRepo;
import com.example.backend.Repositories.VisitorRepository;
import com.example.backend.entities.Supervisor;
import com.example.backend.entities.Visitor;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    private final VisitorRepository repository;
    private final SupervisorRepo supervisorRepo;

    // @Bean
    // public UserDetailsService userDetailsService() {
    // return visitorEmail -> repository.findByEmail(visitorEmail)
    // .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    // }

    @Bean
    public UserDetailsService userDetailsService() {
        return visitorEmail -> {
            Optional<Visitor> visitor = repository.findByEmail(visitorEmail);
            if (visitor.isPresent()) {
                return new User(visitor.get().getEmail(), visitor.get().getPassword(), new ArrayList<>());
            }
            Optional<Supervisor> supervisor = supervisorRepo.findByEmail(visitorEmail);
            if (supervisor.isPresent()) {
                return new User(supervisor.get().getEmail(), supervisor.get().getPassword(), new ArrayList<>());
            }
            throw new UsernameNotFoundException("User not found");
        };
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
