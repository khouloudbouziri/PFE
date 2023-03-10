package com.example.backend.entities;

import jakarta.persistence.Entity;

@Entity
public class Administrator extends Visitor {

    public Administrator() {
        super();
    }

    public Administrator(long id, String firstname, String lastname, String adress, String phone_number, String email,
            String password, String photo_url) {
        super(id, firstname, lastname, adress, phone_number, email, password, photo_url);
    }

}
