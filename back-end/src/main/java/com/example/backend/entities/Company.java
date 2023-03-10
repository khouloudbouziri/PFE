package com.example.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Company extends Visitor {

    private String company_name;
    private String tax_registration_number;
    private long size;
    private String sector;
    private String domain;
    private String logo_url;

    public Company() {
        super();
    }

    public Company(long id, String firstname, String lastname, String adress, String phone_number, String email,
            String password, String photo_url, String company_name, String tax_registration_number, long size,
            String sector, String domain, String logo_url) {
        super(id, firstname, lastname, adress, phone_number, email, password, photo_url);
        this.company_name = company_name;
        this.tax_registration_number = tax_registration_number;
        this.size = size;
        this.sector = sector;
        this.domain = domain;
        this.logo_url = logo_url;
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

}
