package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Candidacy implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id_candidacy;
    private Long id_intershipOffer;
    private Long idIntern;
    private String firstname;
    private String lastname;
    private String email;
    private String phone_number;
    private String address;
    private String address_code;
    private String university;
    private String mention;
    private String university_department;
    private String level;
    private String skills;
    private boolean did_intership;
    private byte[] resume;
    private String linkedIn_url;
}
