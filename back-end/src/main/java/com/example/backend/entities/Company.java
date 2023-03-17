package com.example.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import lombok.AllArgsConstructor;

@Entity
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Company extends Visitor {

    private String company_name;
    private String tax_registration_number;
    private long size;
    private String sector;
    private String domain;
    private String logo_url;
    private String companyDepartement;

    public Company() {
        super();
    }

    

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public String getTax_registration_number() {
        return tax_registration_number;
    }

    public void setTax_registration_number(String tax_registration_number) {
        this.tax_registration_number = tax_registration_number;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getLogo_url() {
        return logo_url;
    }

    public void setLogo_url(String logo_url) {
        this.logo_url = logo_url;
    }



    public String getCompanyDepartement() {
        return companyDepartement;
    }



    public void setCompanyDepartement(String companyDepartement) {
        this.companyDepartement = companyDepartement;
    }

}
