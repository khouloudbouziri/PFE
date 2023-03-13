package com.example.backend.internRegistration;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InternRegisterRequest {
    private String firstname;
    private String lastname;
    private String university;
    private String universityDepartement;
    private String email;
    private String password;
}
