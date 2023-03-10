package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class University implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_university;
    private String university_name;
    private String university_adress;
    private String university_phone;
    private String university_fax;
    private String university_mail;

    public University() {
        super();
    }

    public University(long id_university, String university_name, String university_adress, String university_phone,
            String university_fax, String university_mail) {
        super();
        this.id_university = id_university;
        this.university_name = university_name;
        this.university_adress = university_adress;
        this.university_phone = university_phone;
        this.university_fax = university_fax;
        this.university_mail = university_mail;
    }

    public long getId_university() {
        return id_university;
    }

    public void setId_university(long id_university) {
        this.id_university = id_university;
    }

    public String getUniversity_name() {
        return university_name;
    }

    public void setUniversity_name(String university_name) {
        this.university_name = university_name;
    }

    public String getUniversity_adress() {
        return university_adress;
    }

    public void setUniversity_adress(String university_adress) {
        this.university_adress = university_adress;
    }

    public String getUniversity_phone() {
        return university_phone;
    }

    public void setUniversity_phone(String university_phone) {
        this.university_phone = university_phone;
    }

    public String getUniversity_fax() {
        return university_fax;
    }

    public void setUniversity_fax(String university_fax) {
        this.university_fax = university_fax;
    }

    public String getUniversity_mail() {
        return university_mail;
    }

    public void setUniversity_mail(String university_mail) {
        this.university_mail = university_mail;
    }

}
