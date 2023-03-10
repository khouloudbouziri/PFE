package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Claim implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_claim;
    private String firstname;
    private String lastname;
    private String user_type;
    private String email;
    private String message;

    public Claim() {
        super();
    }

    public Claim(long id_claim, String firstname, String lastname, String user_type, String email, String message) {
        this.id_claim = id_claim;
        this.firstname = firstname;
        this.lastname = lastname;
        this.user_type = user_type;
        this.email = email;
        this.message = message;
    }

    public long getId_claim() {
        return id_claim;
    }

    public void setId_claim(long id_claim) {
        this.id_claim = id_claim;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    
    
    
}
