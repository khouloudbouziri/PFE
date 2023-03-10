package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UniversityDepartment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_university_department;
    private String wording;
    private University university;

    public UniversityDepartment() {
        super();
    }

    public UniversityDepartment(long id_university_department, String wording, University university) {
        this.id_university_department = id_university_department;
        this.wording = wording;
        this.university = university;
    }

    public long getId_university_department() {
        return id_university_department;
    }

    public void setId_university_department(long id_university_department) {
        this.id_university_department = id_university_department;
    }

    public String getWording() {
        return wording;
    }

    public void setWording(String wording) {
        this.wording = wording;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

}
