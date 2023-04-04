package com.example.backend.authenticationAndRegistration;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.example.backend.entities.Supervisor;
import com.example.backend.entities.Visitor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private Visitor visitor;
    private Supervisor supervisor;
}
