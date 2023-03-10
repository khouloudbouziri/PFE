package com.example.backend.entities;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class IntershipOffre implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_intership_offre;
    private String type;
    private String description;
    private String location;
    private Date date_beging;
    private Date date_end;
    private String required_work;
    private String technical_environement;
    private String required_profile;
    private int interns_number ;
    private Boolean renumerete;
    private Company company;
    private Supervisor supervisor;


    public IntershipOffre() {
        super();
    }

   
    public IntershipOffre(long id_intership_offre, String type, String description, String location, Date date_beging,
            Date date_end, String required_work, String technical_environement, String required_profile,
            int interns_number, Boolean renumerete, Company company, Supervisor supervisor) {
        super();
        this.id_intership_offre = id_intership_offre;
        this.type = type;
        this.description = description;
        this.location = location;
        this.date_beging = date_beging;
        this.date_end = date_end;
        this.required_work = required_work;
        this.technical_environement = technical_environement;
        this.required_profile = required_profile;
        this.interns_number = interns_number;
        this.renumerete = renumerete;
        this.company = company;
        this.supervisor = supervisor;
    }


    public long getId_intership_offre() {
        return id_intership_offre;
    }

    public void setId_intership_offre(long id_intership_offre) {
        this.id_intership_offre = id_intership_offre;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate_beging() {
        return date_beging;
    }

    public void setDate_beging(Date date_beging) {
        this.date_beging = date_beging;
    }

    public Date getDate_end() {
        return date_end;
    }

    public void setDate_end(Date date_end) {
        this.date_end = date_end;
    }

    public String getRequired_work() {
        return required_work;
    }

    public void setRequired_work(String required_work) {
        this.required_work = required_work;
    }

    public String getTechnical_environement() {
        return technical_environement;
    }

    public void setTechnical_environement(String technical_environement) {
        this.technical_environement = technical_environement;
    }

    public String getRequired_profile() {
        return required_profile;
    }

    public void setRequired_profile(String required_profile) {
        this.required_profile = required_profile;
    }

    public int getInterns_number() {
        return interns_number;
    }

    public void setInterns_number(int interns_number) {
        this.interns_number = interns_number;
    }

    public Boolean getRenumerete() {
        return renumerete;
    }

    public void setRenumerete(Boolean renumerete) {
        this.renumerete = renumerete;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Supervisor getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Supervisor supervisor) {
        this.supervisor = supervisor;
    }

    
}
