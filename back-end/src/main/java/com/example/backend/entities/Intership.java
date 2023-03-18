/*package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Intership implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_intership;
    private long duration;
    private Intern intern;
    private IntershipOffre intershipOffre;
    private String status;
    

    public Intership() {
        super();
    }

    public Intership(long id_intership, long duration, Intern intern, IntershipOffre intershipOffre, String status) {
        super();
        this.id_intership = id_intership;
        this.duration = duration;
        this.intern = intern;
        this.intershipOffre = intershipOffre;
        this.status = status;
    }

    public long getId_intership() {
        return id_intership;
    }

    public void setId_intership(long id_intership) {
        this.id_intership = id_intership;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public Intern getIntern() {
        return intern;
    }

    public void setIntern(Intern intern) {
        this.intern = intern;
    }

   public IntershipOffre getIntershipOffre() {
        return intershipOffre;
    }

    public void setIntershipOffre(IntershipOffre intershipOffre) {
        this.intershipOffre = intershipOffre;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    
}

*/