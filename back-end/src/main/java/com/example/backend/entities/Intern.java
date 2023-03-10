package com.example.backend.entities;

import jakarta.persistence.Entity;

@Entity
public class Intern extends Visitor {

    private University university;
    private String cv_url;
    private String linkedin_url;

    public Intern() {
        super();
    }

    public Intern(long id, String firstname, String lastname, String adress, String phone_number, String email,
            String password, String photo_url, University university, String cv_url, String linkedin_url) {
        super(id, firstname, lastname, adress, phone_number, email, password, photo_url);
        this.university = university;
        this.cv_url = cv_url;
        this.linkedin_url = linkedin_url;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public String getCv_url() {
        return cv_url;
    }

    public void setCv_url(String cv_url) {
        this.cv_url = cv_url;
    }

    public String getLinkedin_url() {
        return linkedin_url;
    }

    public void setLinkedin_url(String linkedin_url) {
        this.linkedin_url = linkedin_url;
    }

}
