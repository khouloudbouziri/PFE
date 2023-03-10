package com.example.backend.entities;

import jakarta.persistence.Entity;


@Entity
public class Supervisor extends Company {



    public Supervisor() {
        super();
    }

    public Supervisor(long id, String firstname, String lastname, String adress, String phone_number, String email,
            String password, String photo_url, String company_name, String tax_registration_number, long size,
            String sector, String domain, String logo_url) {
        super(id, firstname, lastname, adress, phone_number, email, password, photo_url, company_name,
                tax_registration_number, size, sector, domain, logo_url);
       
    }

}
