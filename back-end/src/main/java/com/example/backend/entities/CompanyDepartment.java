package com.example.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class CompanyDepartment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_company_department;
    private String wording;
    private Company company;

    public CompanyDepartment() {
        super();
    }

    public CompanyDepartment(long id_company_department, String wording, Company company) {
        super();
        this.id_company_department = id_company_department;
        this.wording = wording;
        this.company = company;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public long getId_company_department() {
        return id_company_department;
    }

    public void setId_company_department(long id_company_department) {
        this.id_company_department = id_company_department;
    }

    public String getWording() {
        return wording;
    }

    public void setWording(String wording) {
        this.wording = wording;
    }

}
