package com.example.backend.entities;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Meeting implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_meeting;
    private Date date;
    private String type;
    private String Description; 
    private Supervisor supervisor;
    private Intern intern ;

    public Meeting() {
        super();
    }

    public Meeting(long id_meeting, Date date, String type, String description, Supervisor supervisor, Intern intern) {
        this.id_meeting = id_meeting;
        this.date = date;
        this.type = type;
        Description = description;
        this.supervisor = supervisor;
        this.intern = intern;
    }

    public long getId_meeting() {
        return id_meeting;
    }

    public void setId_meeting(long id_meeting) {
        this.id_meeting = id_meeting;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Supervisor getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Supervisor supervisor) {
        this.supervisor = supervisor;
    }

    public Intern getIntern() {
        return intern;
    }

    public void setIntern(Intern intern) {
        this.intern = intern;
    }

    
}
