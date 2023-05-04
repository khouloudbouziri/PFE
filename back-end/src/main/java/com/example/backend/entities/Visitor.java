package com.example.backend.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@Entity
// @Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Visitor implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String firstname;
    private String lastname;
    private String adress;
    private String phone_number;
    private String email;
    private String password;
    private String photo_url;
    private String university;
    private String universityDept;
    private ToDoList toDoList;
    private String company_name;
    private String tax_registration_number;
    private long size;
    private String sector;
    private String domain;
    private String logo_url;
    private String companyDepartement;
    @Enumerated(EnumType.STRING)
    private JobTitle jobTitle;
    @Enumerated(EnumType.STRING)
    private Role role;
    List<Long> favoriteOffers;

    public Visitor() {
        favoriteOffers = new ArrayList<>();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getPassword() {

        return password;
    }

    public Visitor(byte[] compressBytes) {
    }
}
