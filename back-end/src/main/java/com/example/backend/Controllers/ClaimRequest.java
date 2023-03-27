package com.example.backend.Controllers;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClaimRequest {
    private String firstname;
    private String lastname;
    private String recipientEmail;
    private String subject;
    private String message;

}
