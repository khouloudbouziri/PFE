package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FollowUp implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_follow_up;
    private Intership intership;
    private Supervisor supervisor;
    private String note;

    public FollowUp() {
        super();
    }

    public FollowUp(long id_follow_up, Intership intership, Supervisor supervisor, String note) {
        this.id_follow_up = id_follow_up;
        this.intership = intership;
        this.supervisor = supervisor;
        this.note = note;
    }

    public long getId_follow_up() {
        return id_follow_up;
    }

    public void setId_follow_up(long id_follow_up) {
        this.id_follow_up = id_follow_up;
    }

    public Intership getIntership() {
        return intership;
    }

    public void setIntership(Intership intership) {
        this.intership = intership;
    }

    public Supervisor getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Supervisor supervisor) {
        this.supervisor = supervisor;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    



    

    

}
