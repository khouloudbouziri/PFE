package com.example.backend.Registration;

import com.example.backend.entities.JobTitle;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CompanyRegisterRequest {
    private  String firstname;
    private  String lastname;
    private  String adress;
    private  String phone_number;
    private  String email;
    private  String password;
    //private  String photo_url;
    private String company_name;
    private String tax_registration_number;
    private long size;
    private String sector;
    private String domain;
   // private String logo_url;
   // private String companyDepartement;
    @Enumerated(EnumType.STRING)
    private JobTitle jobTitle;
    
}
