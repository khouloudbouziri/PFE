/*package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class resume implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_resume;
    private String urlCV;
    private String urlLinkedin;
    private Intern intern ;
    private String description;

    public resume() {
        super();
    }

    public resume(long id_resume, String urlCV, String urlLinkedin, Intern intern, String description) {
        super();
        this.id_resume = id_resume;
        this.urlCV = urlCV;
        this.urlLinkedin = urlLinkedin;
        this.intern = intern;
        this.description = description;
    }

    public long getId_resume() {
        return id_resume;
    }

    public void setId_resume(long id_resume) {
        this.id_resume = id_resume;
    }

    public String getUrlCV() {
        return urlCV;
    }

    public void setUrlCV(String urlCV) {
        this.urlCV = urlCV;
    }

    public String getUrlLinkedin() {
        return urlLinkedin;
    }

    public void setUrlLinkedin(String urlLinkedin) {
        this.urlLinkedin = urlLinkedin;
    }

    public Intern getIntern() {
        return intern;
    }

    public void setIntern(Intern intern) {
        this.intern = intern;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    
    
    
    
   
}
*/