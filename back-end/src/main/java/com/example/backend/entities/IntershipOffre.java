package com.example.backend.entities;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class IntershipOffre implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id_intership_offre;
    private String type;
    private String topic;
    private String address;
    private boolean working_from_home;
    private int duration;
    private String required_work;
    private String technical_environement;
    private String required_profile;
    private int interns_number;
    private Boolean renumerete;
    private String company;
    private Long supervisor;
    private int candidacy_number;
    private boolean saved;
    private Date creation_date;
   

    public IntershipOffre() {
        super();
    }

   

}
